import 'dotenv/config';
import { EnviromentType } from '../types/enviroment.type';
import { Methods } from '../types/methods.type';
import { from, logger } from 'env-var';
export const env = from(
  process.env,
  {},
  process.env.NODE_ENV === 'dev' ? logger : undefined,
);
interface IMailerConfig {
  EMAIL_USER: string;
  EMAIL_PASS: string;
  EMAIL_PORT: number;
  EMAIL_HOST: string;
  EMAIL_SECURE: boolean;
}
interface IStorageConfig {
  storageBucket: string;
  projectId: string;
  privateKey: string;
  clientEmail: string;
}
interface IGlobalEnviroment {
  PORT: number;

  whitelist: string[];
  methods: string | string[];
  //mailer: IMailerConfig;
  jwt: any;
  SELF_URL: string;
}
const methods: Methods[] = ['GET', 'OPTIONS', 'POST', 'PUT', 'PATCH', 'DELETE'];
export const enviromentsAlloweds: EnviromentType[] = [
  EnviromentType.DEV,
  EnviromentType.PROD,
  EnviromentType.DEMO,
];

interface CommonEnv {
  PORT: number;

  enviroment: EnviromentType;
  SELF_URL_RESOURCES: string;
}
export const ENV_COMMON: CommonEnv = {
  PORT: env.get('PORT').default(3000).asPortNumber(),
  enviroment: env.get('ENV').asEnum(enviromentsAlloweds) as EnviromentType,
  SELF_URL_RESOURCES: env.get('SELF_URL_RESOURCES').required().asString(),

};

export const ENV_STORAGE = {
  // storageBucket: env.get('GCLOUD_STORAGE_BUCKET').required().asString(),
  // projectId: env.get('GCLOUD_PROJECT_ID').required().asString(),
  // privateKey: env
  //   .get('GCLOUD_PRIVATE_KEY')
  //   .required()
  //   .asString()
  //   .split(String.raw`\n`)
  //   .join('\n'),
  // clientEmail: env.get('GCLOUD_CLIENT_EMAIL').required().asString(),
};

// export const ENV_RABBITMQ = {
//   RABBIT_MQ_URI: env.get('RABBIT_MQ_URI').required().asString(),
//   RABBIT_MQ_QUEUES: env.get('RABBIT_MQ_QUEUES').required().asArray(),
//   RABBIT_MQ_QUEUE: env.get('RABBIT_MQ_QUEUE').required().asString()
// }

export const ENV_JWT = {
  // JWT_SECRET_KEY: env.get('JWT_SECRET').required().asString(),
  // JWT_REFRESH_SECRET: env.get('JWT_REFRESH_SECRET').required().asString(),
  //JWT_EXPIRES_IN: env.get('JWT_EXP_H').required().asString(),
  //JWT_REFRESH_EXPIRES_IN: env.get('JWT_REFRESH_EXP_H').required().asString(),
};

// export const ENV_MAILER = {
//   // EMAIL_USER: env.get('EMAIL_USER').required().asString(),
//   // EMAIL_PASS: env.get('EMAIL_PASS').required().asString(),
//   // EMAIL_PORT: env.get('EMAIL_PORT').default(465).asPortNumber(),
//   // EMAIL_SECURE: env.get('EMAIL_SECURE').default('true').asBool(),
//   // EMAIL_HOST: env.get('EMAIL_HOST').required().asString(),
// };

export const GlobalConfig: Record<EnviromentType, IGlobalEnviroment> = {
  [EnviromentType.DEMO]: {
    methods: [] as string[],
    whitelist: [
      'https://financial-web-dev-01-184957500295.us-central1.run.app',
    ],
    PORT: ENV_COMMON.PORT,

    //mailer: ENV_MAILER,

    jwt: ENV_JWT,
    SELF_URL: ENV_COMMON.SELF_URL_RESOURCES,

  },
  [EnviromentType.DEV]: {
    methods: methods as string[],
    PORT: ENV_COMMON.PORT,
    whitelist: ['http://localhost:3000'],
    //mailer: ENV_MAILER,

    jwt: ENV_JWT,
    SELF_URL: ENV_COMMON.SELF_URL_RESOURCES,
  },
  [EnviromentType.PROD]: {
    methods: [] as string[],
    PORT: ENV_COMMON.PORT,
    whitelist: [],
    //mailer: ENV_MAILER,

    jwt: ENV_JWT,
    SELF_URL: ENV_COMMON.SELF_URL_RESOURCES

  },
};
export const stackENV = GlobalConfig[EnviromentType[ENV_COMMON.enviroment]];
