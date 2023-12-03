import { inject, injectable } from 'tsyringe';
import { IGetByIdRepository } from '../repositories/IGetByIdRepository';
import { IWork } from '../../interface/IWork';

class GetByIdUseCase {
	constructor(private GetByIdUseCase: IGetByIdRepository) {}

	async execute(id: number, userId: number): Promise<IWork | null> {
		return this.GetByIdUseCase.getById(id, userId);
	}
}

export { GetByIdUseCase };
