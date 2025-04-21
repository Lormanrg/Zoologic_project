import { Injectable } from '@nestjs/common'
import * as argon2 from 'argon2'

@Injectable()
export class HashService {
    constructor() {}

    async hash(password: string): Promise<string> {
        return (await argon2.hash(password, {
            type: argon2.argon2id, // Use argon2id algorithm
            memoryCost: 2 ** 16, // Memory cost in KB
            timeCost: 4, // Number of iterations
            parallelism: 2, // Degree of parallelism
            hashLength: 32, // Length of the hash
        })) as string
    }

    async compare(password: string, hash: string): Promise<boolean> {
        try {
            return await argon2.verify(hash, password)
        } catch (error) {
            throw error
        }
    }
}
