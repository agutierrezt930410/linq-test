import HandleAlert from "@/dto/alerts/handleAlert.dto";
import EmailNotification from "@/dto/notifications/emailNotification.dto";

export default class EmailToAnalystAboutSubAccount extends EmailNotification {
  private _alerts: HandleAlert[];

  constructor(
    expirationDate: Date,
    alerts: HandleAlert[],
    emails: string[],
    maxNumberOfRetries: number,
    retry = 0,
    successfulSend = false
  ) {
    super(emails, expirationDate, maxNumberOfRetries, retry, successfulSend);
    this._alerts = alerts;
  }

  public set alerts(value: HandleAlert[]) {
    this._alerts = value;
  }

  public get alerts(): HandleAlert[] {
    return this._alerts;
  }
}
