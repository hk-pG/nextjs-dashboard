import { db, sql } from '@vercel/postgres';
import type { Revenue } from '../lib/definitions';

const client = await db.connect();

/**
 * fetches the list of invoices
 * @returns  {Promise<Array<{amount: number, name: string}>>} - list of invoices
 */
async function listInvoices() {
  const data = await client.sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;

  return data.rows;
}

async function listRevenue() {
  try {
    const data = await sql<Revenue>`SELECT * FROM revenue;`;
    return data.rows;
  } catch (error) {
    console.trace(error);
    return {};
  }
}

export async function GET() {
  try {
    return Response.json(await listRevenue());
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
