-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin', 'member', 'guest');

-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'guest';
