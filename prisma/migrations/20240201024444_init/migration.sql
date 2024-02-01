-- CreateTable
CREATE TABLE "Funcionario" (
    "id_funcionario" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "telefone" INTEGER NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Item" (
    "id_item" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    "validade" DATETIME NOT NULL,
    "categoria" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Mesa" (
    "id_mesa" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "numero" INTEGER NOT NULL,
    "status" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Pedido" (
    "id_pedido" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_mesa" INTEGER,
    "formaPag" TEXT NOT NULL,
    "statusPag" BOOLEAN NOT NULL,
    "statusPedido" TEXT NOT NULL,
    "valorTotal" REAL NOT NULL,
    "dataPedido" DATETIME NOT NULL,
    CONSTRAINT "Pedido_id_mesa_fkey" FOREIGN KEY ("id_mesa") REFERENCES "Mesa" ("id_mesa") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ItemToPedido" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ItemToPedido_A_fkey" FOREIGN KEY ("A") REFERENCES "Item" ("id_item") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ItemToPedido_B_fkey" FOREIGN KEY ("B") REFERENCES "Pedido" ("id_pedido") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Funcionario_id_funcionario_key" ON "Funcionario"("id_funcionario");

-- CreateIndex
CREATE UNIQUE INDEX "Funcionario_email_key" ON "Funcionario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Item_id_item_key" ON "Item"("id_item");

-- CreateIndex
CREATE UNIQUE INDEX "Mesa_id_mesa_key" ON "Mesa"("id_mesa");

-- CreateIndex
CREATE UNIQUE INDEX "Pedido_id_pedido_key" ON "Pedido"("id_pedido");

-- CreateIndex
CREATE UNIQUE INDEX "_ItemToPedido_AB_unique" ON "_ItemToPedido"("A", "B");

-- CreateIndex
CREATE INDEX "_ItemToPedido_B_index" ON "_ItemToPedido"("B");
