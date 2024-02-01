-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pedido" (
    "id_pedido" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_mesa" INTEGER,
    "formaPag" TEXT NOT NULL,
    "statusPag" TEXT NOT NULL,
    "statusPedido" TEXT NOT NULL,
    "valorTotal" REAL NOT NULL,
    "dataPedido" DATETIME NOT NULL,
    CONSTRAINT "Pedido_id_mesa_fkey" FOREIGN KEY ("id_mesa") REFERENCES "Mesa" ("id_mesa") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Pedido" ("dataPedido", "formaPag", "id_mesa", "id_pedido", "statusPag", "statusPedido", "valorTotal") SELECT "dataPedido", "formaPag", "id_mesa", "id_pedido", "statusPag", "statusPedido", "valorTotal" FROM "Pedido";
DROP TABLE "Pedido";
ALTER TABLE "new_Pedido" RENAME TO "Pedido";
CREATE UNIQUE INDEX "Pedido_id_pedido_key" ON "Pedido"("id_pedido");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
