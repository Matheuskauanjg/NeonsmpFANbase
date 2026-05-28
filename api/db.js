import Database from 'better-sqlite3';
import { join } from 'path';

// No Vercel, o diretório /tmp é o único gravável em tempo de execução
// Mas para persistência real no Vercel, o ideal é usar Vercel Postgres ou KV.
// Como o usuário pediu SQLite, usaremos um arquivo local para dev e /tmp para Vercel.
const dbPath = process.env.NODE_ENV === 'production' 
  ? '/tmp/neon_bets.db' 
  : join(process.cwd(), 'neon_bets.db');

const db = new Database(dbPath);

// Inicializar tabelas
db.exec(`
  CREATE TABLE IF NOT EXISTS bets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nickname TEXT NOT NULL,
    bet_date TEXT NOT NULL,
    points INTEGER NOT NULL,
    items TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS settings (
    key TEXT PRIMARY KEY,
    value TEXT
  );
`);

export default db;
