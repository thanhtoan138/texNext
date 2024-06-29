'use server'
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { file, fileName } = req.body;
        const filePath = path.join(process.cwd(), 'uploads', fileName);

        const buffer = Buffer.from(file, 'base64');

        fs.writeFile(filePath, buffer, (err) => {
            if (err) {
                res.status(500).json({ error: 'Failed to save file' });
            } else {
                res.status(200).json({ message: 'File uploaded successfully' });
            }
        });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}