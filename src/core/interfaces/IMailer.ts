import { AttachmentLikeObject } from '@nestjs-modules/mailer/dist/interfaces/send-mail-options.interface'
import DKIM from 'nodemailer/lib/dkim'
import { Address, Attachment, TextEncoding } from 'nodemailer/lib/mailer'

export interface IMail<T> {
    to?: string | Address | Array<string | Address>
    cc?: string | Address | Array<string | Address>
    bcc?: string | Address | Array<string | Address>
    replyTo?: string | Address | Array<string | Address>
    inReplyTo?: string | Address
    from?: string | Address
    subject?: string
    text?: string | Buffer | AttachmentLikeObject
    html?: string | Buffer
    sender?: string | Address
    raw?: string | Buffer
    textEncoding?: TextEncoding
    references?: string | string[]
    encoding?: string
    date?: Date | string
    headers?: Headers
    context?: T | T[]
    transporterName?: string
    template?: string
    attachments?: Attachment[]
    dkim?: DKIM.Options
}
