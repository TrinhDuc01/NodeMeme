import jwt from 'jsonwebtoken'
import db from '../models';

const tokenService = {
    generateToken: (payload, secretKey, exp) => {
        return jwt.sign(payload, secretKey, {
            expiresIn: exp
        });
    },
    verifyToken: (token, secretKey) => {
        try {
            let decoded = jwt.verify(token, secretKey);
            return decoded;
        } catch (error) {
            return false;
        }
    },
    checkIssetToken: async (refreshToken) => {
        return await db.RefreshToken.findOne({ where: { token: refreshToken || '' } });
    },
    updateRefeshToken: async (newRefreshToken, userId) => {
        const oldRefreshToken = await db.RefreshToken.findOne({ where: { UserId: userId } });
        oldRefreshToken.token = newRefreshToken;
        await oldRefreshToken.save();
    }
    ,
    saveRefreshToken: async (refreshToken, userId) => {
        try {
            const saveRefreshToken = await db.RefreshToken.create({ token: refreshToken, UserId: userId })
            saveRefreshToken.save();
        } catch (error) {
            console.log(error)
        }
    }
}

export default tokenService