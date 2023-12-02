interface IDeleteRepository {
	delete(id: number, userId: number): Promise<void>;
}
export { IDeleteRepository };
