-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "idObra" INTEGER NOT NULL,
    "usuario" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL,
    "role" TEXT NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Obra" (
    "id" SERIAL NOT NULL,
    "descricaoObra" TEXT NOT NULL,
    "empresaObra" TEXT NOT NULL,
    "nomeResponsavel" TEXT NOT NULL,
    "telefoneContato" TEXT NOT NULL,
    "enderecoCompleto" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Obra_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoriaServico" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CategoriaServico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubCategoriaServico" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL,
    "categoriaServicoId" INTEGER NOT NULL,

    CONSTRAINT "SubCategoriaServico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Servico" (
    "id" SERIAL NOT NULL,
    "idObra" INTEGER NOT NULL,
    "descricaoServico" TEXT NOT NULL,
    "unidade" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL,
    "subcategoriaId" INTEGER NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Servico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Equipe" (
    "id" SERIAL NOT NULL,
    "idObra" INTEGER NOT NULL,
    "descricaoEquipe" TEXT NOT NULL,
    "empresaContratada" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Equipe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Efetivo" (
    "id" SERIAL NOT NULL,
    "idObra" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,
    "descricaoEfetivo" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Efetivo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Turno" (
    "id" SERIAL NOT NULL,
    "idEquipe" INTEGER NOT NULL,
    "idObra" INTEGER NOT NULL,
    "descricaoTurno" TEXT NOT NULL,
    "praticabilidade" TEXT NOT NULL,
    "clima" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Turno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Interferencia" (
    "id" SERIAL NOT NULL,
    "idEquipe" INTEGER NOT NULL,
    "idObra" INTEGER NOT NULL,
    "responsavelInterferencia" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "subCategoria" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Interferencia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Local" (
    "id" SERIAL NOT NULL,
    "idObra" INTEGER NOT NULL,
    "descricaoLocal" TEXT NOT NULL,
    "responsavelLocal" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Local_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_idObra_fkey" FOREIGN KEY ("idObra") REFERENCES "Obra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubCategoriaServico" ADD CONSTRAINT "SubCategoriaServico_categoriaServicoId_fkey" FOREIGN KEY ("categoriaServicoId") REFERENCES "CategoriaServico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Servico" ADD CONSTRAINT "Servico_idObra_fkey" FOREIGN KEY ("idObra") REFERENCES "Obra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Servico" ADD CONSTRAINT "Servico_subcategoriaId_fkey" FOREIGN KEY ("subcategoriaId") REFERENCES "SubCategoriaServico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Equipe" ADD CONSTRAINT "Equipe_idObra_fkey" FOREIGN KEY ("idObra") REFERENCES "Obra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Efetivo" ADD CONSTRAINT "Efetivo_idObra_fkey" FOREIGN KEY ("idObra") REFERENCES "Obra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turno" ADD CONSTRAINT "Turno_idEquipe_fkey" FOREIGN KEY ("idEquipe") REFERENCES "Equipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turno" ADD CONSTRAINT "Turno_idObra_fkey" FOREIGN KEY ("idObra") REFERENCES "Obra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Interferencia" ADD CONSTRAINT "Interferencia_idEquipe_fkey" FOREIGN KEY ("idEquipe") REFERENCES "Equipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Interferencia" ADD CONSTRAINT "Interferencia_idObra_fkey" FOREIGN KEY ("idObra") REFERENCES "Obra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Local" ADD CONSTRAINT "Local_idObra_fkey" FOREIGN KEY ("idObra") REFERENCES "Obra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
