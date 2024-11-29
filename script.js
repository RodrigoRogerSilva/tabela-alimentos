// Dados dos alimentos com suas respectivas características
const alimentos = [
    {
      nome: "Maçã",
      origem: "Fruta (Vem da Terra)",
      transgenico: "Não",
      glúten: "Não",
      lactose: "Não",
      calorias: 52,
      nutricional: "Carboidratos: 14g, Proteínas: 0g, Gorduras: 0g"
    },
    {
      nome: "Chocolate",
      origem: "Fábrica (Doce)",
      transgenico: "Sim",
      glúten: "Sim",
      lactose: "Sim",
      calorias: 540,
      nutricional: "Carboidratos: 60g, Proteínas: 4g, Gorduras: 30g"
    },
    {
      nome: "Arroz",
      origem: "Fruto da Terra",
      transgenico: "Não",
      glúten: "Não",
      lactose: "Não",
      calorias: 130,
      nutricional: "Carboidratos: 28g, Proteínas: 2g, Gorduras: 0g"
    },
    {
      nome: "Iogurte",
      origem: "Fábrica (Lácteo)",
      transgenico: "Não",
      glúten: "Não",
      lactose: "Sim",
      calorias: 59,
      nutricional: "Carboidratos: 9g, Proteínas: 3g, Gorduras: 2g"
    },
    {
      nome: "Banana",
      origem: "Fruta (Vem da Terra)",
      transgenico: "Não",
      glúten: "Não",
      lactose: "Não",
      calorias: 89,
      nutricional: "Carboidratos: 23g, Proteínas: 1g, Gorduras: 0g"
    },
    {
      nome: "Pão",
      origem: "Fábrica (Pão Industrializado)",
      transgenico: "Sim",
      glúten: "Sim",
      lactose: "Sim",
      calorias: 265,
      nutricional: "Carboidratos: 49g, Proteínas: 9g, Gorduras: 3g"
    },
    {
      nome: "Alface",
      origem: "Fruta/Legume (Vem da Terra)",
      transgenico: "Não",
      glúten: "Não",
      lactose: "Não",
      calorias: 15,
      nutricional: "Carboidratos: 3g, Proteínas: 1g, Gorduras: 0g"
    }
  ];
  
  // Função para preencher a tabela
  function preencherTabela() {
    const tbody = document.querySelector('#tabelaAlimentos tbody');
    
    alimentos.forEach(alimento => {
      const tr = document.createElement('tr');
      
      tr.innerHTML = `
        <td>${alimento.nome}</td>
        <td>${alimento.origem}</td>
        <td>
          <p>Transgênico: ${alimento.transgenico}</p>
          <p>Contém Glúten: ${alimento.glúten}</p>
          <p>Contém Lactose: ${alimento.lactose}</p>
        </td>
        <td>${alimento.calorias} kcal</td>
        <td>${alimento.nutricional}</td>
      `;
      
      tbody.appendChild(tr);
    });
  }
  
  // Chama a função para preencher a tabela assim que o script for carregado
  preencherTabela();
  