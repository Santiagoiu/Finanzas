  import { Transaction } from '../models/Transaction';

  export interface ITransactionRepository {
    save(transaction: Transaction): Promise<Transaction>;
    findAll(): Promise<Transaction[]>;
    findById(id: string): Promise<Transaction | null>;
    delete(id: string): Promise<boolean>;
  }
