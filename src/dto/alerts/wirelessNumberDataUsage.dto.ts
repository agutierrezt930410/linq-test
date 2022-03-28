import Alert from "@/dto/alerts/alert.dto";
import WirelessNumberDto from "@/dto/wirelessNumber.dto";

export default class WirelessNumberDataUsageDto extends Alert {
  protected _companies: WirelessNumberDto[];
  private _threshold: number;

  constructor(
    expirationDate: Date,
    companies: WirelessNumberDto[],
    threshold: number,
    relevant = true
  ) {
    super(expirationDate, relevant);
    this._companies = companies;
    this._threshold = threshold;
  }

  public set threshold(value: number) {
    this._threshold = value;
  }

  public get threshold(): number {
    return this._threshold;
  }

  public set companies(value: WirelessNumberDto[]) {
    this._companies = value;
  }

  public get companies(): WirelessNumberDto[] {
    return this._companies;
  }
}
