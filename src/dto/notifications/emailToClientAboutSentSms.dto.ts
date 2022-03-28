import EmailNotification from "@/dto/notifications/emailNotification.dto";
import Notification from "@/dto/notifications/notification.dto";
export default class EmailToClientAboutSentSms extends EmailNotification {
  private _attachFileUrl: string;
  private _notifications: Notification[];

  constructor(
    expirationDate: Date,
    notifications: Notification[],
    emails: string[],
    maxNumberOfRetries: number,
    retry = 0,
    successfulSend = false
  ) {
    super(emails, expirationDate, maxNumberOfRetries, retry, successfulSend);
    this._notifications = notifications;
  }

  public set attachFileUrl(value: string) {
    this._attachFileUrl = value;
  }

  public get attachFileUrl(): string {
    return this._attachFileUrl;
  }

  public set notifications(value: Notification[]) {
    this._notifications = value;
  }

  public get notifications(): Notification[] {
    return this._notifications;
  }
}
