import { NextFunction, Request, Response } from "express";

import { CelebrateError } from "celebrate";

export const celebrateError = (error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof CelebrateError) {
    const errorBody = error.details.get("body");
    return res.status(400).json({
      message: errorBody?.message,
    });
  }

  return res.status(500).json({
    status: "Error",
    message: `Internal server error: ${error.message}`,
  });
};
