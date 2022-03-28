import Notification from "@/dto/notifications/notification.dto";

export default abstract class SmsNotification extends Notification {
  private _phoneNumber: string;
  constructor(
    phoneNumber: string,
    expirationDate: Date,
    maxNumberOfRetries: number,
    retry = 0,
    successfulSend = false
  ) {
    super(expirationDate, maxNumberOfRetries, retry, successfulSend);
    this._phoneNumber = phoneNumber;
  }

  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }

  public get phoneNumber(): string {
    return this._phoneNumber;
  }
}
