import { sign } from 'jsonwebtoken';
import { config } from '../config';

export const generateToken = (data: any) => {
    const option = { expiresIn: '1h' };
    return sign({ id: data._id }, config.jwtSecret as string, option);
}
