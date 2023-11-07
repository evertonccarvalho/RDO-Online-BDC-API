// auth.ts

import { Request, Response, NextFunction } from "express";
import { jwtService } from "../utils/jwt"; // Importe o serviço JWT que você está usando

declare global {
  namespace Express {
    interface Request {
      user: any; // Defina o tipo apropriado para o objeto 'user'
    }
  }
}

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return res.status(401).json({ message: "Token de autenticação não fornecido." });
  }

  const token = authorizationHeader.replace(/Bearer /, "");

  jwtService.verifyToken(token, (err, decoded) => {
    if (err || typeof decoded === "undefined") {
      return res.status(401).json({ message: "Token de autenticação inválido." });
    }

    // Decodifique o token para obter informações do usuário, como o email
    req.user = decoded;
    next();
  });
};
