/*
  Warnings:

  - Made the column `installed` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "variable" SET DEFAULT '[]',
ALTER COLUMN "installed" SET NOT NULL,
ALTER COLUMN "installed" SET DEFAULT '[]';
