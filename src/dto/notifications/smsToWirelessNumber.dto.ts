import SmsNotification from "@/dto/notifications/smsNotification.dto";
import Alert from "@/dto/alerts/alert.dto";

export default class SmsToWirelessNumberDto extends SmsNotification {
  private _alert: Alert;
  constructor(
    alert: Alert,
    phoneNumber: string,
    expirationDate: Date,
    maxNumberOfRetries: number,
    retry = 0,
    successfulSend = false
  ) {
    super(
      phoneNumber,
      expirationDate,
      maxNumberOfRetries,
      retry,
      successfulSend
    );
  }

  public set alert(value: Alert) {
    this.alert = value;
  }

  public get alert(): Alert {
    return this._alert;
  }
}
