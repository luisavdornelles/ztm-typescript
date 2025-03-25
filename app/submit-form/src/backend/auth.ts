// The following ESLint rules are disabled intentionally to align with the tutorial's approach.
// Note: Some best practices may not be followed as this code is designed for educational purposes.
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import bcrypt from "bcrypt";

const saltRounds = 10;

export class HashedPassword {
    constructor(readonly hashed: string) { }
}

export async function hashPassword(plainPassword: string): Promise<HashedPassword> {
    return await new Promise((resolve, reject) => {
        bcrypt.hash(plainPassword, saltRounds, (err, hashed) => {
            if (err !== undefined) {
                reject(err);
            } else {
                resolve(new HashedPassword(hashed));
            }
        });
    });
}

export async function comparePassword(plainPassword: string, storedHash: HashedPassword): Promise<boolean> {
    return await bcrypt.compare(plainPassword, storedHash.hashed);
}
