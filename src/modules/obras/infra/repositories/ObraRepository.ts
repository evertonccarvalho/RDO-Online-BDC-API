import { IObraDTO } from "../entities/Obra";
import { db } from "../../../../api/config/prisma";
import { IObraRepository } from "./IObraRepository";

class ObraRepository implements IObraRepository {
  private adaptObra(dbObra: any): IObraDTO {
    return {
      id: dbObra.id,
      empresaObra: dbObra.empresaObra,
      descricaoObra: dbObra.descricaoObra,
      logo: dbObra.logo,
      enderecoCompleto: dbObra.enderecoCompleto,
      nomeResponsavel: dbObra.nomeResponsavel,
      telefoneContato: dbObra.telefoneContato,
      ativo: dbObra.ativo,
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
    await db.obra.create({
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
    const obras = await db.obra.findMany();

    // Adaptar os produtos usando a função de adaptação
    const adaptedObras: IObraDTO[] = obras.map(this.adaptObra);

    return adaptedObras;
  }

  async getById(obraId: number): Promise<IObraDTO | null> {
    const obra = await db.obra.findUnique({
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
    const obra = await db.obra.findUnique({
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
    await db.obra.update({
      where: {
        id: obraId,
      },
      data: updatedObraData,
    });
  }

  async delete(obraId: number): Promise<void> {
    await db.obra.delete({
      where: {
        id: obraId,
      },
    });
  }
}

export { ObraRepository };
