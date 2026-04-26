const Database = require('better-sqlite3');
const path = require('path');

const DB_PATH = path.join(__dirname, 'chuks_kitchen.db');

const db = new Database(DB_PATH);

db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    name          TEXT,
    email         TEXT NOT NULL UNIQUE COLLATE NOCASE,
    phone         TEXT,
    password_hash TEXT NOT NULL,
    created_at    TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS addresses (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id    INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    label      TEXT NOT NULL DEFAULT 'Home',
    street     TEXT NOT NULL,
    city       TEXT NOT NULL DEFAULT 'Lagos',
    state      TEXT NOT NULL DEFAULT 'Lagos',
    is_default INTEGER NOT NULL DEFAULT 0
  );

  CREATE TABLE IF NOT EXISTS orders (
    id                   INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id              INTEGER REFERENCES users(id) ON DELETE SET NULL,
    status               TEXT NOT NULL DEFAULT 'pending',
    subtotal             INTEGER NOT NULL,
    delivery_fee         INTEGER NOT NULL DEFAULT 0,
    service_fee          INTEGER NOT NULL DEFAULT 200,
    total                INTEGER NOT NULL,
    fulfillment_type     TEXT NOT NULL DEFAULT 'delivery',
    special_instructions TEXT,
    payment_method       TEXT NOT NULL DEFAULT 'card',
    delivery_address     TEXT,
    contact_phone        TEXT,
    created_at           TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS order_items (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id      INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    food_item_id  INTEGER NOT NULL,
    food_name     TEXT NOT NULL,
    price         INTEGER NOT NULL,
    quantity      INTEGER NOT NULL DEFAULT 1,
    options       TEXT
  );
`);

module.exports = db;
