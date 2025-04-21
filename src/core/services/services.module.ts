import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { ENV_RABBITMQ, stackENV } from '../constants/global.constants';

@Module({
  imports: [

    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: {
          host: stackENV.mailer.EMAIL_HOST,
          secure: stackENV.mailer.EMAIL_SECURE,
          port: +stackENV.mailer.EMAIL_PORT,
          auth: {
            pass: stackENV.mailer.EMAIL_PASS,
            user: stackENV.mailer.EMAIL_USER,
          },
        },
        defaults: {
          from: stackENV.mailer.EMAIL_USER,
        },
        options: {},
        template: {
          dir: process.cwd() + '/public/templates/',
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    }),
  ],
  providers: [
    // HashService,
    // StorageService,
    // CommonService,
    // CypherIVService,
    // PrismaService,
    // SenderService,
    // UserRepository,
  ],
  exports: [
    // HashService,
    // CommonService,
    // StorageService,
    // CypherIVService,
    // PrismaService,
    // SenderService,
    // UserRepository,
  ],
})
export class ServicesModule { }
