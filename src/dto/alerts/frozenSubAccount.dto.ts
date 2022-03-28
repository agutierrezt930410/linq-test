import HandleAlert from "@/dto/alerts/handleAlert.dto";
import AccountDto from "@/dto/account.dto";

export default class FrozenSubAccountDto extends HandleAlert {
  protected _companies: AccountDto[];

  constructor(
    expirationDate: Date,
    companies: AccountDto[],
    relevant = true,
    resolvedByUser = false
  ) {
    super(expirationDate, relevant, resolvedByUser);
    this._companies = companies;
  }

  public set companies(value: AccountDto[]) {
    this._companies = value;
  }

  public get companies(): AccountDto[] {
    return this._companies;
  }
}
