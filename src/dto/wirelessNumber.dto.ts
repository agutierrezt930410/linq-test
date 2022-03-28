import DateForamt from "@/enum/dateFormat.enum";
import { DateTime } from "luxon";

export default class WirelessNumber {
  private _number: string;
  private _model: string;
  private _createdAt: Date;
  private _accountId: string;

  constructor(
    number: string,
    model: string,
    accountId: string,
    createdAt: Date
  ) {
    this._number = number;
    this._model = model;
    this._createdAt = createdAt;
    this._accountId = accountId;
  }

  public set number(value: string) {
    this._number = value;
  }

  public get number(): string {
    return this._number;
  }

  public set model(value: string) {
    this._model = value;
  }

  public get model(): string {
    return this._model;
  }

  public get accountId(): string {
    return this._accountId;
  }

  public set accountId(value: string) {
    this._accountId = value;
  }

  public set createdAt(value: Date) {
    this._createdAt = value;
  }

  public get createdAt(): Date {
    return this._createdAt;
  }

  public formatDate(format: DateForamt): string {
    return DateTime.fromJSDate(this._createdAt).toFormat(format);
  }
}
