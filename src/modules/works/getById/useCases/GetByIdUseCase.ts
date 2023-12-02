import { inject, injectable } from 'tsyringe';
import { IGetByIdWork } from '../interfaces/IGetWorkById';
import { IGetByIdRepository } from '../repositories/IGetByIdRepository';

@injectable()
class GetByIdUseCase {
	constructor(
		@inject('GetByIdRepository')
		private getByIdUseCase: IGetByIdRepository
	) {}

	async execute(id: number): Promise<IGetByIdWork | null> {
		return this.getByIdUseCase.getById(id);
	}
}

export { GetByIdUseCase };
