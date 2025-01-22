import { IdRepository } from "../Repository/idRepository";
import { IdentityNumber } from "../entities/identityNumber.entity";

export class IdService {
  private idRepository: IdRepository = new IdRepository();

  async findAllService(): Promise<IdentityNumber[]> {
    try {
      return await this.idRepository.findAll();
    } catch (error) {
      throw new Error(error);
    }
  }
  async createService(identityDocument: string): Promise<IdentityNumber> {
    try {      
      
      let sum: number = 0;
      let turn: boolean = false;
      let num: number = parseInt(identityDocument);

      if(isNaN(num)) {
        throw new Error();
      }

      while (num != 0) {
        let digit: number = num % 10;

        if (turn) {
          sum += digit;
        } else {
          digit *= 2;

          if (digit >= 10) {
            sum += (digit % 10) + Math.floor(digit / 10); // if the digit is bigger then 10 calc the sum of digits
          } else {
            sum += digit;
          }
        }
        turn = !turn; // switching from one to two multiplayer
        num = Math.floor(num / 10);
      }
      const missingNumber:string = sum % 10 ? String(10 - sum % 10) : '0';  // if the last digit is 0 then the result is also 0

      const identityNumber: IdentityNumber = {
        identityDocument: identityDocument,
        missingNumber: missingNumber, 
      };

      return await this.idRepository.create(identityNumber);
    } catch (error) {      
       throw new Error(error);
    }
  }
}

export const idService = new IdService();
