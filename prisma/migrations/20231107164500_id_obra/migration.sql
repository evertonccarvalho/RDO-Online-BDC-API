-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_idObra_fkey";

-- AlterTable
ALTER TABLE "Usuario" ALTER COLUMN "idObra" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_idObra_fkey" FOREIGN KEY ("idObra") REFERENCES "Obra"("id") ON DELETE SET NULL ON UPDATE CASCADE;
