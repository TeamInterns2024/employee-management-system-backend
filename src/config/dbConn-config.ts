import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const connectDB = async () => {
    const uri: string = process.env.CONNECTION_URI || 'Null';
    console.log('[Database]: Connecting to MongoDB with URI:', uri);  

    if (!uri.startsWith('mongodb://') && !uri.startsWith('mongodb+srv://')) {
        console.error('[Database]: Invalid connection string:', uri);
        return;
    }

    mongoose.connect(uri)
        .then(() => console.log('[Database]: Connected To Database'))
        .catch(error => console.error('[Database]: Error connecting to MongoDB:', error.message));
};


export default connectDB;
