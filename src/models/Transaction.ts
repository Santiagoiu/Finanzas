 export interface Transaction {
    id?: string;          // El '?' significa que es opcional (la BD lo genera)
    concept: string;      // Ejemplo: "Sueldo", "Pago de Luz"
    amount: number;       // Ejemplo: 1500.50
    type: 'income' | 'expense'; // Solo permite 'income' (ingreso) o 'expense' (gasto)
    date: Date;           // Fecha de la transacción
    category: string;     // Ejemplo: "Alimentación", "Salud", "Ocio"
  }