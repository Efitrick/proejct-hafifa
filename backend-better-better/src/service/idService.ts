import { identityNumber } from "./../../../backend/src/idModel";
import { IdRepository } from "../Repository/idRepository";
import { IdentityNumber } from "../entities/identityNumber.entity";
import { log } from "node:console";

export class IdService {
  private idRepository: IdRepository = new IdRepository();

  async findAllService(): Promise<IdentityNumber[]> {
    try {
      return await this.idRepository.findAll();
    } catch (error) {
      throw new Error(error);
    }
  }
  async createService(identityDocument: number): Promise<IdentityNumber> {
    try {
      let sum: number = 0;
      let turn: boolean = false;
      let num: number = identityDocument;

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

      const identityNumber: IdentityNumber = {
        identityDocument: identityDocument,
        missingNumber: 10 - (sum % 10), 
      };

      return await this.idRepository.create(identityNumber);
    } catch (error) {
      throw new Error(error);
    }
  }
}

export const idService = new IdService();
