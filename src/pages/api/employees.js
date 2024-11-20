import { connectToDatabase } from '../../lib/db';

export default async function handler(req, res) {
    const { method } = req;
    const db = await connectToDatabase(); // Use the database connection

    switch (method) {
        case 'GET':
            const employees = await db.collection('employees').find().toArray();
            return res.status(200).json(employees);

        case 'POST':
            const { name, position } = req.body;
            await db.collection('employees').insertOne({ name, position });
            return res.status(201).json({ message: 'Employee added successfully' });

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            return res.status(405).end(`Method ${method} Not Allowed`);
    }
}
