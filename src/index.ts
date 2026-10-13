 import express, { Request, Response } from 'express';

  const app = express();
  const PORT = 3000;

  // Middleware para que el servidor pueda leer datos en formato JSON
  app.use(express.json());

  // Nuestra primera ruta (Endpoint)
  app.get('/', (req: Request, res: Response) => {
    res.send('🚀 Servidor de FinanzaPro funcionando correctamente con TypeScript!');
  });

  // Iniciar el servidor
  app.listen(PORT, () => {
    console.log(`==================================================`);
    console.log(`✅ Servidor corriendo en: http://localhost:${PORT}`);
    console.log(`🚀 Presiona Ctrl+C para detener el servidor`);
    console.log(`==================================================`);
  });