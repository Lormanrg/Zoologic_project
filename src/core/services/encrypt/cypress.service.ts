import { Injectable } from '@nestjs/common'
import * as crypto from 'crypto'

@Injectable()
export class CypherIVService {
    encrypt(text: number, password: string, iv: string) {
        const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(password, 'hex'), Buffer.from(iv, 'hex'))

        let encrypted = cipher.update(String(text))

        encrypted = Buffer.concat([encrypted, cipher.final()])

        return encrypted.toString('hex')
    }

    decrypt(encryptData: string, password: string, iv: string) {
        const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(password, 'hex'), Buffer.from(iv, 'hex'))

        let decryptedData = decipher.update(encryptData, 'hex', 'utf8')
        decryptedData += decipher.final('utf8')

        return decryptedData
    }
}
