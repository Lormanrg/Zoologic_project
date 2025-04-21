export interface ILogger {
    warn(message: string): void
    error(message: string): void
    debug(message: string): void
    verbose(message: string): void
    info(message: string): void
}
