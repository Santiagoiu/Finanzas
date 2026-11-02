 import express, { Request, Response } from 'express';
  import dotenv from 'dotenv';
  import { InMemoryTransactionRepository } from './repositories/InMemoryTransactionRepository';
  import { TransactionService } from './services/TransactionService';

  dotenv.config();

  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.json());

  // --- CONFIGURACIÓN DE DEPENDENCIAS (Inyección Manual) ---
  // Aquí decidimos usar el repositorio en memoria.
  // Si mañana creas un MariaDBRepository, solo cambias esta línea.
  const transactionRepo = new InMemoryTransactionRepository();
  const transactionService = new TransactionService(transactionRepo);
  // -------------------------------------------------------

  app.get('/', (req: Request, res: Response) => {
    res.send('🚀 Servidor de FinanzaPro funcionando con Arquitectura Profesional!');
  });

  // ENDPOINT 1: Crear una transacción
  app.post('/transactions', async (req: Request, res: Response) => {
    try {
      const data = req.body;
      const transaction = await transactionService.createTransaction(data);
      res.status(201).json(transaction);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  // ENDPOINT 2: Ver todas las transacciones
  app.get('/transactions', async (req: Request, res: Response) => {
    const transactions = await transactionService.getAllTransactions();
    res.json(transactions);
  });

  app.listen(PORT, () => {
    console.log(`==================================================`);
    console.log(`✅ Servidor corriendo en: http://localhost:${PORT}`);
    console.log(`💰 Endpoints disponibles:`);
    console.log(`   POST /transactions - Crear transacción`);
    console.log(`   GET  /transactions - Listar todas`);
    console.log(`==================================================`);
  });
