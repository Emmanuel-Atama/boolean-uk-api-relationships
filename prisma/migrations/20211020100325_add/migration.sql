/*
  Warnings:

  - You are about to alter the column `postCode` on the `Address` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(8)`.

*/
-- AlterTable
ALTER TABLE "Address" ALTER COLUMN "postCode" SET DATA TYPE VARCHAR(8);
