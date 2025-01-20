import { dataSource } from "../dataSource";
import { IdentityNumber } from "../entities/identityNumber.entity";
export class IdRepository {
  public dataBase = dataSource.getRepository(IdentityNumber);
  async findAll(): Promise<IdentityNumber[]> {
    try {
      return await this.dataBase.find();
    } catch (error) {
      throw new Error(error);
    }
  }
  async create(identityNumber:IdentityNumber): Promise<IdentityNumber> {
    try {
      await this.dataBase.create(identityNumber);
       
      return await this.dataBase.save(identityNumber);;
    } catch (error) {
      throw new Error(error);
    }
  }
}
