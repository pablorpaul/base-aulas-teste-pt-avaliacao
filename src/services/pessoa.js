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
      console.log(pessoa)
      if(!pessoa) {
        throw new Error("Favor preencher o pessoa.")
      } else if(!pessoa.nome) {
        throw new Error("Favor preencher o nome.")
      } else if(!pessoa.email) {
        throw new Error("Favor preencher o email.")
      } else if(!pessoa.senha) {
        throw new Error("Favor preencher o senha.")
      }

      return repositorio.Adicionar(pessoa)
    }

    async Alterar(id, pessoa){
      if(!id || isNaN(id)) {
        throw new Error("Favor corretamente o id.")
      }

      return repositorio.Adicionar(pessoa)
    }

    async Deletar(id){
      if(!id || isNaN(id)) {
        throw new Error("Favor corretamente o id.")
      }

      return repositorio.Deletar(id)
    }

}
module.exports = ServicoExercicio