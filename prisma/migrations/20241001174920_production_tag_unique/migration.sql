/*
  Warnings:

  - A unique constraint covering the columns `[tag]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Product_tag_key" ON "Product"("tag");
