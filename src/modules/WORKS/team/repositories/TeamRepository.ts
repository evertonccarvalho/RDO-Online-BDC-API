import { Team } from '@prisma/client';
import { db } from '../../../../api/config/prisma';
import { ITeam } from '../interface/ITeam';
import { ITeamRepository } from './ITeamRepository';

class TeamRepository implements ITeamRepository {
	public async create(team: ITeam, workId: number): Promise<ITeam> {
		try {
			const newTeam = await db.team.create({
				data: {
					workId: workId,
					descricaoEquipe: team.descricaoEquipe,
					empresaContratada: team.empresaContratada,
					status: team.status,
				},
				include: {
					Shifts: true,
				},
			});

			return newTeam;
		} catch (error) {
			// Aqui você pode tratar o erro de alguma forma específica para o seu aplicativo
			throw new Error(`Erro ao criar o equipe: ${error}`);
		}
	}

	async read(workId: number): Promise<Team[]> {
		const teams = await db.team.findMany({
			where: {
				work: {
					id: workId,
				},
			},
		});
		return teams;
	}

	async getById(id: number, workId: number): Promise<ITeam | null> {
		const service = await db.team.findUnique({
			where: {
				id: id,
				work: {
					id: workId,
				},
			},
		});
		if (!service) {
			return null;
		}

		return service;
	}

	async update(id: number, workId: number, updatedData: ITeam): Promise<void> {
		const team = await db.team.findUnique({
			where: {
				id: id,
				work: {
					id: workId,
				},
			},
		});

		if (!team) {
			throw new Error('A obra não foi encontrada ou não pertence ao usupario');
		}

		await db.team.update({
			where: {
				id: id,
				work: {
					id: workId,
				},
			},
			data: updatedData,
		});
	}

	async delete(id: number, workId: number): Promise<void> {
		const team = await db.team.findUnique({
			where: {
				id: id,
				work: {
					id: workId,
				},
			},
		});

		if (!team) {
			throw new Error('A obra não foi encontrada ou não pertence ao usupario');
		}

		await db.team.delete({
			where: {
				id: id,
			},
		});
	}
}

export { TeamRepository };
