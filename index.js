import express from "express"; // Importando o express. Para isso é preciso definir o modelo de importação no nosso package.json: "type": "module"

import path from "path"; // Serve para definir caminhos padrões

const __dirname = path.resolve(path.dirname("")); // __dirname serve para informar qual é o caminho padrão da minha pasta

const server = express(); // instanciando o express dentro da const "server"

server.set("view engine", "ejs"); // mudar a forma com o express reconhece arquivos que por padrão é somente HTML

server.use(express.static(path.join(__dirname, "public"))); // Esse comando serve para juntar a pasta public com minha pasta views

const port = 3007; // definindo a porta que vai rodar o servidor

server.listen(port, () => {
  // é uma função do expres para criar servidor
  console.log(`Rodando na porta ${port}`);
});
let pokedex = [
  {
    numero: "Nº150",
    nome: "Mewtwo",
    tipo: "Psíquico",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
    descricao:
      "Seu DNA é quase o mesmo do Mew. No entanto, seu tamanho e disposição são muito diferentes.",
    altura: "2,0 m",
    peso: "122,0 kg",
    categoria: "Genético",
    habilidade: "Pressão",
  },
  {
    numero: "Nº244",
    nome: "Entei",
    tipo: "Fogo",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/244.png",
    descricao:
      "Entei encarna a paixão do magma. Acredita-se que este Pokémon tenha nascido na erupção de um vulcão. Ele envia explosões maciças de fogo que consomem totalmente tudo o que eles tocam.",
    altura: "2,1 m",
    peso: "198,0 kg",
    categoria: "Vulcão",
    habilidade: "Pressão",
  },
  {
    numero: "Nº083",
    nome: "Farfetch'd",
    tipo: "Fighting",
    imagem:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/083_f2.png",
    descricao:
      "Os Farfetch'd da região de Galar são bravos guerreiros, e eles empunham alho-poró grosso e duro em batalha.",
    altura: "0,8 m",
    peso: "42,0 kg",
    categoria: "Pato Selvagem",
    habilidade: "Firme",
  },
  {
    numero: "Nº004",
    nome: "Charmander",
    tipo: "Fire",
    imagem:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    descricao:
      "Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta da cauda..",
    altura: "0,6 m",
    peso: "8,5 kg",
    categoria: "Lagarto",
    habilidade: "Brilhar",
  },
];
server.get("/", (rec, res) => {
  // é um metodo http para trazer uma pagina como resposta ao usuario
  res.render("index.ejs", { pokedex });
});

server.get("/detalhes", (rec, res) => {
  // é um metodo http para trazer uma pagina como resposta ao usuario
  res.render("detalhes.ejs");
});
