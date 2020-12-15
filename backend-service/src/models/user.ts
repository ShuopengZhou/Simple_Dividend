import { User } from '../interface';
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            lowercase: true,
            unique: true,
            required: [true, 'Please enter a valid email.'],
            index: true,
        },

        accountType: {
            type: String,
            lowercase: true,
            default: 'free',
            index: true,
        }
    },
    { timestamps: true },
  );
  
  export default mongoose.model<User & mongoose.Document>('User', UserSchema);