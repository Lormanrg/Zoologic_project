import { MailerService } from '@nestjs-modules/mailer'
import { Injectable } from '@nestjs/common'

import { IMail } from 'src/core/interfaces/IMailer'
import { stackENV } from 'src/core/constants/global.constants'
import { BaseResponse } from 'src/core/interfaces/baseResponse'

@Injectable()
export class SenderService {
    constructor(private mailer: MailerService) { }

    async sendMail<T>(mail: IMail<T>): Promise<boolean | BaseResponse<boolean>> {
        try {
            const sended = await this.mailer
                .sendMail({
                    to: mail.to, // list of receivers
                    from: stackENV.mailer.EMAIL_USER, // sender address
                    subject: mail.subject, // Subject line
                    template: mail.template,
                    context: mail.context as { [name: string]: any },
                })
                .then(() => true)
                .catch((error) => {
                    throw Error(error)
                })

            return sended
        } catch (error) {
            throw error
        }
    }
}
