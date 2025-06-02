// Exercícios de fixação
// Resolva cada questão e imprima a resposta no terminal usando "console.log()"
// 1) Use a função .indexOf para armazenar o índice do jogador "chelo"
const furiaCS = ["FalleN","chelo","skullz","yuurih","KSCERATO"];
const indiceChelo = furiaCS.indexOf("chelo");
console.log(indiceChelo);

// 2) Usando a função .splice, substitua "chelo" e "skullz" por "molodoy" e "YEKINDAR"
// ** Use o índice encontrado na questão 1
furiaCS.splice(indiceChelo, 2, "molodoy", "YEKINDAR");
console.log(furiaCS); 

// 3) Usando a função .map, crie uma lista com os caracteres maiúsculos (usar .toUpperCase)
const furiaCSMaiusculas = furiaCS.map((jogador) => jogador.toUpperCase());
console.log(furiaCSMaiusculas);

// 4) Usando a função .sort, ordene a lista com os nomes maiúsculos
furiaCSMaiusculas.sort((a, b) => a.localeCompare(b));
console.log(furiaCSMaiusculas);

// 5) Usando a função .filter, filtre apenas os nomes que começam com "y"
const nomesComY = furiaCS.filter(j => j.toLowerCase().startsWith("y"));
console.log(nomesComY);