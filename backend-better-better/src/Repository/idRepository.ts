import { dataSource } from "../dataSource";
import { IdentityNumber } from "../entities/identityNumber.entity";
export class IdRepository {
  public dataBase = dataSource.getRepository(IdentityNumber);

  async create(identityNumber:IdentityNumber): Promise<IdentityNumber> {
    try {
      await this.dataBase.create(identityNumber);
       
      return this.dataBase.save(identityNumber);;
    } catch (error) {
      throw new Error(error);
    }
  }
}
