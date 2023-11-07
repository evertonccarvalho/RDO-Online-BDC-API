// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
provider = "prisma-client-js"
}

datasource db {
provider = "postgresql"
url = env("DATABASE_URL")
}

model Usuario {
id Int @id @default(autoincrement())
usuario String
email String
senha String
ativo Boolean
dataCriacao DateTime @default(now())
role String
idObra Int
obra Obra @relation(fields: [idObra], references: [id])
}

model Obra {
id Int @id @default(autoincrement())
descricaoObra String
empresaObra String
nomeResponsavel String
telefoneContato String
enderecoCompleto String
logo String
ativo Boolean
dataCriacao DateTime @default(now())
usuarios Usuario[]
equipes Equipe[]
servicos Servico[]
efetivos Efetivo[]
turnos Turno[]
interferencias Interferencia[]
locais Local[]
}

model CategoriaServico {
id Int @id @default(autoincrement())
nome String
ativo Boolean
dataCriacao DateTime @default(now())
subcategorias SubCategoriaServico[]
}

model SubCategoriaServico {
id Int @id @default(autoincrement())
nome String
ativo Boolean
categoriaServicoId Int
categoriaServico CategoriaServico @relation(fields: [categoriaServicoId], references: [id])
servicos Servico[]
}

model Servico {
id Int @id @default(autoincrement())
descricaoServico String
unidade String
ativo Boolean
dataCriacao DateTime @default(now())
subcategoriaId Int
subcategoria SubCategoriaServico @relation(fields: [subcategoriaId], references: [id])
idObra Int
obra Obra @relation(fields: [idObra], references: [id])
}

model Equipe {
id Int @id @default(autoincrement())
descricaoEquipe String
empresaContratada String
ativo Boolean
dataCriacao DateTime @default(now())
idObra Int
obra Obra @relation(fields: [idObra], references: [id])
turnos Turno[]
interferencias Interferencia[]
}

model Efetivo {
id Int @id @default(autoincrement())
tipo String
descricaoEfetivo String
ativo Boolean
dataCriacao DateTime @default(now())
idObra Int
obra Obra @relation(fields: [idObra], references: [id])
}

model Turno {
id Int @id @default(autoincrement())
descricaoTurno String
praticabilidade String
clima String
ativo Boolean
dataCriacao DateTime @default(now())
idEquipe Int
equipe Equipe @relation(fields: [idEquipe], references: [id])
idObra Int
obra Obra @relation(fields: [idObra], references: [id])
}

model Interferencia {
id Int @id @default(autoincrement())
responsavelInterferencia String
categoria String
subCategoria String
ativo Boolean
dataCriacao DateTime @default(now())
idEquipe Int
equipe Equipe @relation(fields: [idEquipe], references: [id])
idObra Int
obra Obra @relation(fields: [idObra], references: [id])
}

model Local {
id Int @id @default(autoincrement())
descricaoLocal String
responsavelLocal String
ativo Boolean
dataCriacao DateTime @default(now())
idObra Int
obra Obra @relation(fields: [idObra], references: [id])
}
