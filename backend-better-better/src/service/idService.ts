import { IdRepository } from "../Repository/idRepository";
import { IdentityNumber } from "../entities/identityNumber.entity";

export class IdService {
  private idRepository: IdRepository = new IdRepository();

  async createService(identityDocument: string): Promise<IdentityNumber> {
    try {
      let multiplayer: number = 2;
      const array: string[] = identityDocument.split('');
      
      const sum:number = array.reduce( (currentValue,digit) =>{
      multiplayer = multiplayer === 1 ? multiplayer = 2 : multiplayer = 1;
      return currentValue + ( parseInt(digit) * multiplayer % 10) + Math.floor(parseInt(digit) * multiplayer / 10)}
      ,0);

      const identityNumber: IdentityNumber = {
        identityDocument,
        missingNumber : sum % 10 ? String(10 - (sum % 10)) : "0",
      };

      return this.idRepository.create(identityNumber);
    } catch (error) {
      throw new Error(error);
    }
  }
}

export const idService = new IdService();
