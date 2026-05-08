const RepositorioExercicio= require("../repositories/pessoa.js")

const repositorio = new RepositorioExercicio()
class ServicoExercicio {

    async PegarUm(id){
      if(!id || isNaN(id)) {
        throw new Error("Favor corretamente o id.")
      }
      return repositorio.PegarUm(id)
    }

    async PegarTodos(){
      return repositorio.PegarTodos()
    }

    async Adicionar(pessoa){
      if(!pessoa) {
        throw new Error("Favor preencher o pessoa.")
      } else if(!pessoa.nome) {
        throw new Error("Favor preencher o nome.")
      } else if(!pessoa.email) {
        throw new Error("Favor preencher o email.")
      } else if(!pessoa.senha) {
        throw new Error("Favor preencher o senha.")
      }
      
      if(!this.validarEmail(pessoa.email)) {
        throw new Error("Email inválido. Favor fornecer um email válido.");
      }

      if (!pessoa.senha || pessoa.senha.trim().length === 0) {
        throw new Error("Senha inválida. A senha não pode ser vazia ou conter apenas espaços.");
      }

      return repositorio.Adicionar(pessoa)
    }

    async Alterar(id, pessoa){
      if(!id || isNaN(id)) {
        throw new Error("Favor informar corretamente o id.")
      }
      const pessoaExistente = await repositorio.PegarUm(id)
      if(!pessoaExistente) {
        throw new Error("Pessoa não encontrada.")
      }
      if(!this.validarEmail(pessoa.email)) {
        throw new Error("Email inválido. Favor fornecer um email válido.");
      }

      if(pessoa.senha) {
        if (pessoa.senha.trim().length === 0) {
          throw new Error("Senha inválida. A senha não pode ser vazia ou conter apenas espaços.");
        }
      }
      
      return repositorio.Alterar(id, pessoa)
    }

    async Deletar(id){
      if(!id || isNaN(id)) {
        throw new Error("Favor corretamente o id.")
      }
      const pessoaExistente = await repositorio.PegarUm(id)
      if(!pessoaExistente) {
        throw new Error("Pessoa não encontrada.")
      }

      return repositorio.Deletar(id)
    }

    validarEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
}
module.exports = ServicoExercicio