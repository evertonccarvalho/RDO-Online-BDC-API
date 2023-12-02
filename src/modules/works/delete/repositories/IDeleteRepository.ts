interface IDeleteRepository {
	delete(id: number): Promise<void>;
}
export { IDeleteRepository };
