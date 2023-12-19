/*
  Warnings:

  - You are about to drop the column `userId` on the `Work` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Work" DROP CONSTRAINT "Work_userId_fkey";

-- AlterTable
ALTER TABLE "Work" DROP COLUMN "userId";

-- CreateTable
CREATE TABLE "WorkUser" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "workId" INTEGER NOT NULL,

    CONSTRAINT "WorkUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserWorks" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserWorks_AB_unique" ON "_UserWorks"("A", "B");

-- CreateIndex
CREATE INDEX "_UserWorks_B_index" ON "_UserWorks"("B");

-- AddForeignKey
ALTER TABLE "WorkUser" ADD CONSTRAINT "WorkUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkUser" ADD CONSTRAINT "WorkUser_workId_fkey" FOREIGN KEY ("workId") REFERENCES "Work"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserWorks" ADD CONSTRAINT "_UserWorks_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserWorks" ADD CONSTRAINT "_UserWorks_B_fkey" FOREIGN KEY ("B") REFERENCES "Work"("id") ON DELETE CASCADE ON UPDATE CASCADE;
