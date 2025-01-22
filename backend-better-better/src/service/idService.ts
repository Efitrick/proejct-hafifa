import { IdRepository } from "../Repository/idRepository";
import { IdentityNumber } from "../entities/identityNumber.entity";

export class IdService {
  private idRepository: IdRepository = new IdRepository();

  async createService(identityDocument: string): Promise<IdentityNumber> {
    try {
      let sum: number = 0;
      let multiplayer: number = 2;
      let num: number = parseInt(identityDocument);

      if (isNaN(num)) {
        throw new Error();
      }

      while (num != 0) {
        const digit: number = num % 10;

        sum += (digit * multiplayer % 10) + Math.floor(digit * multiplayer / 10);

        multiplayer = multiplayer === 1 ? multiplayer = 2 : multiplayer = 1;
        num = Math.floor(num / 10);
      }

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
