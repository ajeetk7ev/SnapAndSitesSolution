import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import contactRoutes from './routes/contactRoutes.js';


dotenv.config();

// Connect to Database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);

app.get('/health', (req, res) => {
    res.json({
        success: true,
        message: 'Server is running',
        status: 'ok'
    });
});




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
