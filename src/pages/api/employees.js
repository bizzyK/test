import { connectToDatabase } from '../../lib/db';

export default async function handler(req, res) {
    const client = await connectToDatabase();
    const query = `
    CREATE TABLE IF NOT EXISTS employees (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255),
      role VARCHAR(255),
      email VARCHAR(255)
    );
  `;
    await client.query(query);

    if (req.method === 'GET') {
        const { rows } = await client.query('SELECT * FROM employees');
        res.status(200).json(rows);
    } else if (req.method === 'POST') {
        const { name, role, email } = req.body;
        const result = await client.query(
            'INSERT INTO employees (name, role, email) VALUES ($1, $2, $3) RETURNING *',
            [name, role, email]
        );
        res.status(201).json(result.rows[0]);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }

    client.release();
}