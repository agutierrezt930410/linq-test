import Notification from "@/dto/notifications/notification.dto";

export default abstract class EmailNotification extends Notification {
  private _emails: string[];
  constructor(
    emails: string[],
    expirationDate: Date,
    maxNumberOfRetries: number,
    retry = 0,
    successfulSend = false
  ) {
    super(expirationDate, maxNumberOfRetries, retry, successfulSend);
    this._emails = emails;
  }

  public set emails(value: string[]) {
    this._emails = value;
  }

  public get eamils(): string[] {
    return this._emails;
  }
}
