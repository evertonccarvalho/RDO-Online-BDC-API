/*
  Warnings:

  - Added the required column `totalAmount` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Ativo', 'Inativo', 'Concluido', 'Paralizado');

-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "totalAmount" INTEGER NOT NULL;
