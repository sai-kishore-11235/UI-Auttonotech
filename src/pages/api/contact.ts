import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../lib/mongodb';
import Contact from '../../models/Contact';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await connectDB();

    const { name, email, company, phone, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Required fields are missing' });
    }

    // Create new contact submission
    const contact = await Contact.create({
      name,
      email,
      company,
      phone,
      message,
    });

    return res.status(201).json({ success: true, data: contact });
  } catch (error) {
    console.error('Error in contact API:', error);
    return res.status(500).json({ message: 'Error submitting form', error: error });
  }
} 