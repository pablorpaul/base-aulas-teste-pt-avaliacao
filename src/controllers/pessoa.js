const ServicoExercicio = require("../services/pessoa.js");

const servico = new ServicoExercicio()
class ControllerExercicio {

    async PegarUm(req, res){
      try {
        const id = req.params.id

        const result = await servico.PegarUm(id)

        if(!result) {
          return res.status(404).json({ message: "Pessoa não encontrada."});
        }
        
        res.status(200).json(result);
      } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message}); 
      }
    }

    async PegarTodos(_, res){
      try {
        const result = await servico.PegarTodos()

        res.status(200).json(result); 
      } catch (error) {
        res.status(500).json({ message: error.message});
      }
    }

    async Adicionar(req, res){
      try {
        const { pessoa } = req.body

        await servico.Adicionar(pessoa)
        
        res.status(201).json({ message: "Adicionado com sucesso!"});
      } catch (error) {
        if(error.parent === "ER_DUP_ENTRY") {
          res.status(500).json({ message: "Email já cadastrado!"});
        }else{
          res.status(500).json({ message: error.parent.message || error.message});
        }
      }
    }

    async Alterar(req, res){
      try {
        const { id } = req.params
        const { pessoa } = req.body
    
        await servico.Alterar(id, pessoa)
          
        res.status(200).json({ message: "Alterado com sucesso!"});
      } catch (error) {
        res.status(500).json({ message: error.message});
        
      }
    }

    async Deletar(req, res){
      try {
        const id = req.params.id

        await servico.Deletar(id)
          
        res.status(204).json();
      } catch (error) {
        res.status(500).json({ message: error.message});
        
      }
    }

}

module.exports = ControllerExercicio