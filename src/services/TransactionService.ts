  import { ITransactionRepository } from '../repositories/ITransactionRepository';
  import { Transaction } from '../models/Transaction';

  export class TransactionService {
    // Inyección de dependencias por constructor (Tema 3)
    constructor(private transactionRepo: ITransactionRepository) {}

    async createTransaction(data: Transaction) {
      // Aquí irían las reglas de negocio
      if (data.amount <= 0) {
        throw new Error("El monto debe ser mayor a cero");
      }

      return await this.transactionRepo.save(data);
    }

    async getAllTransactions() {
      return await this.transactionRepo.findAll();
    }
  }