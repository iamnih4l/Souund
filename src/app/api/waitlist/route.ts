import { NextResponse } from 'next/server';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

let db: any = null;

async function getDB() {
  if (!db) {
    db = await open({
      filename: path.join(process.cwd(), 'waitlist.db'),
      driver: sqlite3.Database
    });
    await db.exec(`
      CREATE TABLE IF NOT EXISTS waitlist_emails (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
  }
  return db;
}

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const database = await getDB();

    try {
      await database.run('INSERT INTO waitlist_emails (email) VALUES (?)', [email]);
      return NextResponse.json({ success: true, message: 'Joined waitlist successfully!' }, { status: 200 });
    } catch (dbError: any) {
      if (dbError.message.includes('UNIQUE constraint failed')) {
        return NextResponse.json({ success: true, message: 'Already on the waitlist!' }, { status: 200 });
      }
      throw dbError;
    }
  } catch (error) {
    console.error('Waitlist API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
