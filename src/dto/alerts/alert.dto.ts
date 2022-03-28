import WirelessNumber from "@/dto/wirelessNumber.dto";
import { DateTime } from "luxon";
import DateForamt from "@/enum/dateFormat.enum";
import AccountDto from "@/dto/account.dto";
export default abstract class Alert {
  private _expirationDate: Date;
  private _relevant: boolean;
  protected abstract _companies: AccountDto[] | WirelessNumber[];

  constructor(expirationDate: Date, relevant: boolean) {
    this._expirationDate = expirationDate;
    this._relevant = relevant;
  }

  public set expirationDate(value: Date) {
    this._expirationDate = value;
  }

  public get expirationDate(): Date {
    return this._expirationDate;
  }

  public get relevant(): boolean {
    return this._relevant;
  }

  public set relevant(value: boolean) {
    this._relevant = value;
  }

  public formatDate(format: DateForamt): string {
    return DateTime.fromJSDate(this._expirationDate).toFormat(format);
  }
}
