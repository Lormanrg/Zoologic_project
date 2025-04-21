import { ENV_RABBITMQ } from "./global.constants";
import { Module } from "../enums/module.enum";


export function toObject(data: Array<string>) {
  return data.map((value,) => ({
    [value]: value
  }))
}

export const rabbitQueues = toObject(ENV_RABBITMQ.RABBIT_MQ_QUEUES)

export const RabbitQueue = (
  server: typeof rabbitQueues,
  module: Module,
): string => {
  return `${server}_${module}_QUEUE`;
};
