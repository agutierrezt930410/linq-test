export default abstract class Notification {
  private _successfulSend: boolean;
  private _maxNumberOfRetries: number;
  private _retry: number;
  private _expirationDate: Date;

  constructor(
    expirationDate: Date,
    maxNumberOfRetries: number,
    retry = 0,
    successfulSend = false
  ) {
    this._maxNumberOfRetries = maxNumberOfRetries;
    this._retry = retry;
    this._successfulSend = successfulSend;
    this._expirationDate = expirationDate;
  }

  public set maxNumberOfRetries(value: number) {
    this._maxNumberOfRetries = value;
  }

  public get maxNumberOfRetries(): number {
    return this._maxNumberOfRetries;
  }

  public set retry(value: number) {
    this._retry = value;
  }

  public get retry(): number {
    return this._retry;
  }

  public set successfulSend(value: boolean) {
    this._successfulSend = value;
  }

  public get successfulSend(): boolean {
    return this._successfulSend;
  }

  public set expirationDate(value: Date) {
    this._expirationDate = value;
  }

  public get expirationDate(): Date {
    return this._expirationDate;
  }
}
