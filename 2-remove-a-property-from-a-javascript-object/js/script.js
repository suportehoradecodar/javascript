// Objeto inicial
let meuObjeto = {
    propriedade1: 'valor1',
    propriedade2: 'valor2',
    propriedade3: 'valor3'
  };
  
  // Função para atualizar a visualização do objeto na página
  const atualizarVisualizacao = () => {
    document.getElementById('objeto').textContent = JSON.stringify(meuObjeto, null, 2);
  };
  
  // Função para adicionar uma propriedade ao objeto
  const adicionarPropriedade = () => {
    const novaPropriedade = prompt('Digite o nome da nova propriedade:');
    const valorPropriedade = prompt(`Digite o valor da propriedade "${novaPropriedade}":`);
    meuObjeto[novaPropriedade] = valorPropriedade;
    atualizarVisualizacao();
  };
  
  // Função para remover uma propriedade do objeto
  const removerPropriedade = () => {
    const propriedadeParaRemover = prompt('Digite o nome da propriedade a ser removida:');
    if (propriedadeParaRemover in meuObjeto) {
      delete meuObjeto[propriedadeParaRemover];
      atualizarVisualizacao();
    } else {
      alert('A propriedade especificada não existe no objeto.');
    }
  };
  
  // Atualiza a visualização do objeto na inicialização
  atualizarVisualizacao();
  