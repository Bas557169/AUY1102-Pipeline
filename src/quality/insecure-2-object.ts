import express, { Request, Response } from "express";

const app = express();

// SQL Injection (ejemplo inseguro)
const username: string = "admin'; DROP TABLE Users; --";
const queryString: string = `SELECT * FROM Users WHERE username='${username}'`;

// XSS (ejemplo inseguro)
const userInput: string = '<script>alert("XSS");</script>';
const html: string = `<div>${userInput}</div>`;

// CSRF (ejemplo inseguro)
app.post("/change-password", (req: Request, res: Response) => {
  const newPassword: string = req.body.newPassword;
  // Cambiar la contraseña sin verificar el token CSRF
  res.send(`Contraseña cambiada a: ${newPassword}`);
});

// Deserialización insegura
app.post("/", (req: Request, res: Response) => {
  const input: string = req.body.username || "";
  res.send(`Hola ${input}`);
});

// Credenciales expuestas (ejemplo inseguro)
const dbPassword: string = "password123";
// const apiSecretKey = 'supersecretkey123'; // No usar en producción
const config = {
  dbUsername: "admin",
  dbPassword: "password123",
  apiKey: "abc123",
};

// Hash inseguro (ejemplo)
function hash(value: string): string {
  return `hashed(${value})`; // placeholder para evitar error TS2304
}

const hashedPassword: string = hash("password123");

console.log(`Error: La contraseña ${dbPassword} no es válida`);

export {};
