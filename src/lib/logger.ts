// TODO: implement chalk so that we can have colored logs
// TODO: swap out console.log with pino: https://discordjs.guide/miscellaneous/useful-packages.html#pino

export class Logger {
  private shardId: number[] | undefined;

  constructor(shardId: number[] | undefined) {
    this.shardId = shardId;
  }

  log(message: string): void {
    console.log(`[LOG][${this.shardId}] ${message}`);
  }

  info(message: string): void {
    console.log(`[INFO][${this.shardId}] ${message}`);
  }

  warn(message: string): void {
    console.warn(`[WARN][${this.shardId}] ${message}`);
  }

  error(message: string): void {
    console.error(`[ERROR][${this.shardId}] ${message}`);
  }
}
