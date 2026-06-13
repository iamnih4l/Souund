import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    try {
      await sql`
        CREATE TABLE IF NOT EXISTS waitlist_emails (
          id SERIAL PRIMARY KEY,
          email VARCHAR(255) UNIQUE NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
      `;

      await sql`INSERT INTO waitlist_emails (email) VALUES (${email})`;
      return NextResponse.json({ success: true, message: 'Joined waitlist successfully!' }, { status: 200 });
    } catch (dbError: any) {
      if (dbError.message.includes('unique constraint')) {
        return NextResponse.json({ success: true, message: 'Already on the waitlist!' }, { status: 200 });
      }
      throw dbError;
    }
  } catch (error) {
    console.error('Waitlist API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
