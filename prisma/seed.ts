// seed.js

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Criar obras de exemplo
  const obra1 = await prisma.obra.create({
    data: {
      descricaoObra: "Construção do Edifício A",
      empresaObra: "Empresa Construtora X",
      nomeResponsavel: "João Silva",
      telefoneContato: "123-456-7890",
      enderecoCompleto: "1234 Main Street, Cidade A",
      logo: "logo1.png",
      ativo: true,
    },
  });

  const obra2 = await prisma.obra.create({
    data: {
      descricaoObra: "Reforma do Shopping B",
      empresaObra: "Empresa Construtora Y",
      nomeResponsavel: "Maria Santos",
      telefoneContato: "987-654-3210",
      enderecoCompleto: "5678 Elm Street, Cidade B",
      logo: "logo2.png",
      ativo: true,
    },
  });

  // Criar categorias de serviço de exemplo
  const categoria1 = await prisma.categoriaServico.create({
    data: {
      nome: "Construção",
      ativo: true,
    },
  });

  const categoria2 = await prisma.categoriaServico.create({
    data: {
      nome: "Reforma",
      ativo: true,
    },
  });

  // Criar subcategorias de serviço de exemplo
  const subcategoria1 = await prisma.subCategoriaServico.create({
    data: {
      nome: "Alvenaria",
      categoriaServicoId: categoria1.id,
      ativo: true,
    },
  });

  const subcategoria2 = await prisma.subCategoriaServico.create({
    data: {
      nome: "Elétrica",
      categoriaServicoId: categoria1.id,
      ativo: true,
    },
  });

  const subcategoria3 = await prisma.subCategoriaServico.create({
    data: {
      nome: "Pintura",
      categoriaServicoId: categoria2.id,
      ativo: true,
    },
  });

  // Criar serviços de exemplo
  const servico1 = await prisma.servico.create({
    data: {
      descricaoServico: "Construção da Estrutura",
      unidade: "Metros Cúbicos",
      ativo: true,
      subcategoriaId: subcategoria1.id,
      idObra: obra1.id,
    },
  });

  const servico2 = await prisma.servico.create({
    data: {
      descricaoServico: "Instalação Elétrica",
      unidade: "Pontos",
      ativo: true,
      subcategoriaId: subcategoria2.id,
      idObra: obra1.id,
    },
  });

  const servico3 = await prisma.servico.create({
    data: {
      descricaoServico: "Pintura de Fachada",
      unidade: "Metros Quadrados",
      ativo: true,
      subcategoriaId: subcategoria3.id,
      idObra: obra2.id,
    },
  });

  // Criar usuários de exemplo
  const usuario1 = await prisma.usuario.create({
    data: {
      usuario: "joao_silva",
      email: "joao.silva@example.com",
      senha: "senha123",
      ativo: true,
      role: "Gerente",
      idObra: obra1.id,
    },
  });

  const usuario2 = await prisma.usuario.create({
    data: {
      usuario: "maria_santos",
      email: "maria.santos@example.com",
      senha: "senha456",
      ativo: true,
      role: "Supervisor",
      idObra: obra2.id,
    },
  });
  // Criar equipes de exemplo
  const equipe1 = await prisma.equipe.create({
    data: {
      descricaoEquipe: "Equipe de Construção",
      empresaContratada: "Construções ABC",
      ativo: true,
      idObra: obra1.id,
    },
  });

  const equipe2 = await prisma.equipe.create({
    data: {
      descricaoEquipe: "Equipe de Manutenção",
      empresaContratada: "Manutenção XYZ",
      ativo: true,
      idObra: obra2.id,
    },
  });

  // Criar efetivos de exemplo
  const efetivo1 = await prisma.efetivo.create({
    data: {
      tipo: "Operários",
      descricaoEfetivo: "Equipe de Construção",
      ativo: true,
      idObra: obra1.id,
    },
  });

  const efetivo2 = await prisma.efetivo.create({
    data: {
      tipo: "Técnicos",
      descricaoEfetivo: "Equipe de Manutenção",
      ativo: true,
      idObra: obra2.id,
    },
  });

  // Criar turnos de exemplo
  const turno1 = await prisma.turno.create({
    data: {
      descricaoTurno: "Turno Diurno",
      praticabilidade: "Boa",
      clima: "Ensolarado",
      ativo: true,
      idEquipe: equipe1.id,
      idObra: obra1.id,
    },
  });

  const turno2 = await prisma.turno.create({
    data: {
      descricaoTurno: "Turno Noturno",
      praticabilidade: "Regular",
      clima: "Chuvoso",
      ativo: true,
      idEquipe: equipe2.id,
      idObra: obra2.id,
    },
  });

  // Criar interferências de exemplo
  const interferencia1 = await prisma.interferencia.create({
    data: {
      responsavelInterferencia: "Engenheiro A",
      categoria: "Logística",
      subCategoria: "Transporte",
      ativo: true,
      idEquipe: equipe1.id,
      idObra: obra1.id,
    },
  });

  const interferencia2 = await prisma.interferencia.create({
    data: {
      responsavelInterferencia: "Técnico B",
      categoria: "Elétrica",
      subCategoria: "Fiação",
      ativo: true,
      idEquipe: equipe2.id,
      idObra: obra2.id,
    },
  });

  // Criar locais de exemplo
  const local1 = await prisma.local.create({
    data: {
      descricaoLocal: "Área de Construção",
      responsavelLocal: "Supervisor X",
      ativo: true,
      idObra: obra1.id,
    },
  });

  const local2 = await prisma.local.create({
    data: {
      descricaoLocal: "Central Elétrica",
      responsavelLocal: "Gerente Y",
      ativo: true,
      idObra: obra2.id,
    },
  });

  // Outros modelos (Equipe, Efetivo, Turno, Interferencia, Local) podem ser adicionados aqui conforme necessário.

  console.log("Dados de exemplo foram inseridos no banco de dados.");
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
