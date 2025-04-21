/* eslint-disable @typescript-eslint/no-unused-vars */

import { Logger } from '@nestjs/common'
import { ILogger } from 'src/core/interfaces'

export class LoggerService implements ILogger {
    private logger: Logger
    constructor(name) {
        this.logger = new Logger(name)
    }
    info(message: string, context?: string): void {
        this.logger.log(message, context)
    }
    warn(message: string, context?: string): void {
        this.logger.warn(message, context)
    }
    error(message: string, context?: string, path?: any): void {
        this.logger.error(message, context)
    }
    debug(message: string, context?: string): void {
        this.logger.debug(message, context)
    }
    verbose(message: string, context?: string): void {
        this.logger.verbose(message, context)
    }
}
