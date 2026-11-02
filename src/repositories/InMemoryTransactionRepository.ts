  import { ITransactionRepository } from './ITransactionRepository';
  import { Transaction } from '../models/Transaction';

  export class InMemoryTransactionRepository implements ITransactionRepository {
    private transactions: Transaction[] = [];

    async save(transaction: Transaction): Promise<Transaction> {
      // Simulamos que la BD genera un ID
      const newTransaction = { ...transaction, id: Math.random().toString(36).substr(2, 9) };
      this.transactions.push(newTransaction);
      return newTransaction;
    }

    async findAll(): Promise<Transaction[]> {
      return this.transactions;
    }

    async findById(id: string): Promise<Transaction | null> {
      return this.transactions.find(t => t.id === id) || null;
    }

    async delete(id: string): Promise<boolean> {
      const index = this.transactions.findIndex(t => t.id === id);
      if (index !== -1) {
        this.transactions.splice(index, 1);
        return true;
      }
      return false;
    }
  }