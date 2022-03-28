import DateForamt from "@/enum/dateFormat.enum";
import { DateTime } from "luxon";

export default class AccountDto {
  private _id: string;
  private _name: string;
  private _targetTimestap: Date;

  constructor(id: string, name: string, targetTimestap: Date) {
    this._id = id;
    this._name = name;
    this._targetTimestap = targetTimestap;
  }

  public set id(value: string) {
    this.id = value;
  }

  public get value(): string {
    return this._id;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get name(): string {
    return this._name;
  }

  public set targetTimestap(value: Date) {
    this._targetTimestap = value;
  }

  public get targetTimestap(): Date {
    return this._targetTimestap;
  }

  public formatDate(format: DateForamt): string {
    return DateTime.fromJSDate(this._targetTimestap).toFormat(format);
  }
}
