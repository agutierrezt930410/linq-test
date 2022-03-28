import Alert from "@/dto/alerts/alert.dto";
export default abstract class HandleAlert extends Alert {
  private _resolvedByUser: boolean;
  constructor(expirationDate: Date, relevant = true, resolvedByUser = false) {
    super(expirationDate, relevant);
    this._resolvedByUser = resolvedByUser;
  }

  public set resolvedByUser(value: boolean) {
    this._resolvedByUser = value;
  }

  public get resolvedByUser(): boolean {
    return this._resolvedByUser;
  }
}
