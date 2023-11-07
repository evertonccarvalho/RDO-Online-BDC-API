const customMessages = (field: string) => {
  return {
    "string.empty": `O Campo ${field} não pode ser vazio!`,
    "any.required": `O Campo ${field} é Obrigatório!`,
  };
};

export { customMessages };
