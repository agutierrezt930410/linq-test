import HandleAlert from "@/dto/alerts/handleAlert.dto";
import AccountDto from "@/dto/account.dto";

export default class SubAccountDataUsageDto extends HandleAlert {
  protected _companies: AccountDto[];
  private _dataUsageLimit: number;

  constructor(
    expirationDate: Date,
    companies: AccountDto[],
    dataUsageLimit: number,
    relevant = true,
    resolvedByUser = false
  ) {
    super(expirationDate, relevant, resolvedByUser);
    this._companies = companies;
    this._dataUsageLimit = dataUsageLimit;
  }

  public set dataUsageLimit(value: number) {
    this._dataUsageLimit = value;
  }

  public get dataUsageLimit(): number {
    return this._dataUsageLimit;
  }

  public set companies(value: AccountDto[]) {
    this._companies = value;
  }

  public get companies(): AccountDto[] {
    return this._companies;
  }
}
