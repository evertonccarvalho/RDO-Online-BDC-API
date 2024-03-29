import { db } from '../../../../../api/config/prisma';
import { ISubServiceCategory } from '../../interface/IService';
import { ISubServiceCategoryRepository } from './ISubServiceCategoryRepository';

class SubServiceCategoryRepository implements ISubServiceCategoryRepository {
	public async create(
		subServiceCategory: ISubServiceCategory,
		serviceCategoryId: number
	): Promise<ISubServiceCategory> {
		try {
			const newSubCategory = await db.subServiceCategory.create({
				data: {
					name: subServiceCategory.name,
					status: subServiceCategory.status,
					serviceCategoryId: serviceCategoryId,
				},
			});

			return newSubCategory;
		} catch (error) {
			// Aqui você pode tratar o erro de alguma forma específica para o seu aplicativo
			throw new Error(`Erro ao criar o serviço: ${error}`);
		}
	}

	async read(): Promise<ISubServiceCategory[]> {
		const subCategory = await db.subServiceCategory.findMany();
		return subCategory;
	}

	async getById(id: number): Promise<ISubServiceCategory | null> {
		const subCategory = await db.subServiceCategory.findUnique({
			where: {
				id: id,
			},
		});
		if (!subCategory) {
			return null;
		}

		return subCategory;
	}

	async update(id: number, updateData: ISubServiceCategory): Promise<void> {
		const subCategory = await db.subServiceCategory.findUnique({
			where: {
				id: id,
			},
		});

		if (!subCategory) {
			throw new Error('Não foi encontrada ou ');
		}

		await db.subServiceCategory.update({
			where: {
				id: id,
			},
			data: {
				name: updateData.name,
				status: updateData.status,
				serviceCategoryId: updateData.serviceCategoryId,
			},
		});
	}

	async delete(id: number): Promise<void> {
		const subCategory = await db.subServiceCategory.findUnique({
			where: {
				id: id,
			},
		});

		if (!subCategory) {
			throw new Error('Não foi encontrada');
		}

		await db.subServiceCategory.delete({
			where: {
				id: id,
			},
		});
	}
}

export { SubServiceCategoryRepository };
