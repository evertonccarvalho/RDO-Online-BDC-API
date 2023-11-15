import { IObra } from "../entities/Obra";
import { db } from "../../../../api/config/prisma";
import { IObraRepository } from "./IObraRepository";

class ObraRepository implements IObraRepository {
  async register({
    descricaoObra,
    empresaObra,
    logo,
    enderecoCompleto,
    nomeResponsavel,
    telefoneContato,
    ativo,
    usuarios,
  }: IObra): Promise<void> {
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

  async read(): Promise<IObra[]> {
    const obras = await db.obra.findMany();

    // Adaptar os produtos usando a função de adaptação

    return obras;
  }

  async getById(obraId: number): Promise<IObra | null> {
    const obra = await db.obra.findUnique({
      where: {
        id: obraId,
      },
    });

    if (!obra) {
      return null; // Produto não encontrado
    }

    // Adaptar o produto usando a função de adaptação
    return obra;
  }

  async getByIdWithDetails(obraId: number): Promise<IObra | null> {
    const obra = await db.obra.findUnique({
      where: { id: obraId },
      include: {
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

  async update(obraId: number, updatedObraData: IObra): Promise<void> {
    await db.obra.updateMany({
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
