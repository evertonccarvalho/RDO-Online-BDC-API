import { inject, injectable } from 'tsyringe';
import { IGetAll } from '../interfaces/IGetAll';
import { IGetAllRepository } from '../repositories/IGetAllRepository';

@injectable()
class GetAllUseCase {
	constructor(
		@inject('GetAllRepository')
		private getAllRepository: IGetAllRepository
	) {}

	async execute(userId: number): Promise<IGetAll[]> {
		return this.getAllRepository.read(userId);
	}
}

export { GetAllUseCase };
