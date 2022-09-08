import { sign } from 'jsonwebtoken';
import { Types } from 'mongoose';
import { config } from '../config';

export const generateToken = (id: Types.ObjectId) => {
    const option = { expiresIn: '1h' };
    return sign({ id }, config.jwtSecret as string, option);
}
