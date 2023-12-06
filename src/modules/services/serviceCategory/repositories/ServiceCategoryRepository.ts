import { db } from '../../../../api/config/prisma';
import { IServiceCategory } from '../../interface/IService';
import { IServiceCategoryRepository } from './IServiceCategoryRepository';

class ServiceCategoryRepository implements IServiceCategoryRepository {
	public async create(
		serviceCategory: IServiceCategory
	): Promise<IServiceCategory> {
		try {
			const newCategory = await db.serviceCategory.create({
				data: {
					name: serviceCategory.name,
					status: serviceCategory.status,
				},
			});

			return newCategory;
		} catch (error) {
			// Aqui você pode tratar o erro de alguma forma específica para o seu aplicativo
			throw new Error(`Erro ao criar o serviço: ${error}`);
		}
	}

	async read(): Promise<IServiceCategory[]> {
		const categories = await db.serviceCategory.findMany();
		return categories;
	}

	async getById(id: number): Promise<IServiceCategory | null> {
		const category = await db.serviceCategory.findUnique({
			where: {
				id: id,
			},
		});
		if (!category) {
			return null;
		}

		return category;
	}

	async update(id: number, updateData: IServiceCategory): Promise<void> {
		const category = await db.serviceCategory.findUnique({
			where: {
				id: id,
			},
		});

		if (!category) {
			throw new Error('A obra não foi encontrada ou não pertence ao usupario');
		}

		await db.serviceCategory.update({
			where: {
				id: id,
			},
			data: updateData,
		});
	}

	async delete(id: number): Promise<void> {
		const category = await db.serviceCategory.findUnique({
			where: {
				id: id,
			},
		});

		if (!category) {
			throw new Error('Não foi encontrada');
		}

		await db.serviceCategory.delete({
			where: {
				id: id,
			},
		});
	}
}

export { ServiceCategoryRepository };
