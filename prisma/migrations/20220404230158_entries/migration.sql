-- CreateTable
CREATE TABLE `Entries` (
    `id` VARCHAR(191) NOT NULL,
    `oldQuantity` INTEGER NOT NULL,
    `newQuantity` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    `createdById` VARCHAR(191) NOT NULL,
    `productId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Entries` ADD CONSTRAINT `Entries_createdById_fkey` FOREIGN KEY (`createdById`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Entries` ADD CONSTRAINT `Entries_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
