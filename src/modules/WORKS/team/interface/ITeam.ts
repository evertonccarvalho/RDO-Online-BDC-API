export interface BaseInterface {
	id: number;
	createdAt: Date;
	updatedAt: Date;
}

export interface ITeam extends BaseInterface {
	workId: number;
	descricaoEquipe: string;
	empresaContratada: string;
	status: string;
}
