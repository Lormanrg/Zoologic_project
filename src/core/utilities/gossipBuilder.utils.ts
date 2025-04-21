import { HttpStatus } from '@nestjs/common';

import { Module } from '../enums/module.enum';
import { GlobalEventEnum, IInfo } from '../interfaces';

interface GossipPayload {
  event: GlobalEventEnum;
  status: HttpStatus;
  module: Module;
  activityId: string;
  newData: any;
  oldData: any;
  info: IInfo;
  meta: any;
  user: any;
}

export function GossipBuilder({
  event,
  info,
  module,
  activityId,
  newData,
  oldData,
  status,
  meta,
  user,
}: GossipPayload): any {
  return {
    activityId,
    module: module,
    description: info?.message,
    event,
    severity: LevelGossip(status),
    status: StatusGossip(status),
    metadata: meta,
    user,
    newData,
    oldData,
  };
}
enum GossipSeverity {
  CRITIC = 'CRITIC',
  MODERATE = 'MODERATE',
  INFORMATIVE = 'INFORMATIVE',
}

export function LevelGossip(status: HttpStatus): GossipSeverity {
  if (status >= 200 && status < 400) return GossipSeverity.INFORMATIVE;
  if (status >= 400 && status < 500) return GossipSeverity.CRITIC;
  if (status >= 500) return GossipSeverity.CRITIC;

  return GossipSeverity.MODERATE;
}
export function StatusGossip(status: HttpStatus): HttpStatus {
  return status >= 200 && status <= 300
    ? HttpStatus.OK
    : HttpStatus.BAD_REQUEST;
}
