import { IObraDTO } from "../entities/Obra";
import { prisma } from "../../../../lib/prisma";
import { IObraRepository } from "./IObraRepository";

class ObraRepository implements IObraRepository {
  private adaptObra(prismaObra: any): IObraDTO {
    return {
      id: prismaObra.id,
      empresaObra: prismaObra.empresaObra,
      descricaoObra: prismaObra.descricaoObra,
      logo: prismaObra.logo,
      enderecoCompleto: prismaObra.enderecoCompleto,
      nomeResponsavel: prismaObra.nomeResponsavel,
      telefoneContato: prismaObra.telefoneContato,
      ativo: prismaObra.ativo,
    };
  }

  async register({
    descricaoObra,
    empresaObra,
    logo,
    enderecoCompleto,
    nomeResponsavel,
    telefoneContato,
    ativo,
  }: IObraDTO): Promise<void> {
    await prisma.obra.create({
      data: {
        descricaoObra,
        empresaObra,
        logo,
        enderecoCompleto,
        nomeResponsavel,
        telefoneContato,
        ativo,
      },
    });
  }

  async read(): Promise<IObraDTO[]> {
    const obras = await prisma.obra.findMany();

    // Adaptar os produtos usando a função de adaptação
    const adaptedObras: IObraDTO[] = obras.map(this.adaptObra);

    return adaptedObras;
  }

  async getById(obraId: number): Promise<IObraDTO | null> {
    const obra = await prisma.obra.findUnique({
      where: {
        id: obraId,
      },
    });

    if (!obra) {
      return null; // Produto não encontrado
    }

    // Adaptar o produto usando a função de adaptação
    return this.adaptObra(obra);
  }

  async getByIdWithDetails(obraId: number): Promise<IObraDTO | null> {
    const obra = await prisma.obra.findUnique({
      where: { id: obraId },
      include: {
        usuarios: true, // Inclui os usuários relacionados
        equipes: true, // Inclui as equipes relacionadas
        servicos: true, // Inclui os serviços relacionados
        efetivos: true, // Inclui os efetivos relacionados
        turnos: true, // Inclui os turnos relacionados
        interferencias: true, // Inclui as interferências relacionadas
        locais: true, // Inclui os locais relacionados
      },
    });

    return obra;
  }

  async update(obraId: number, updatedObraData: IObraDTO): Promise<void> {
    await prisma.obra.update({
      where: {
        id: obraId,
      },
      data: updatedObraData,
    });
  }

  async delete(obraId: number): Promise<void> {
    await prisma.obra.delete({
      where: {
        id: obraId,
      },
    });
  }
}

export { ObraRepository };
