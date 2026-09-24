/////////////////////////////////////////// MongoDB ///////////////////////////////////////////

///////////////////////////////////////////////////////////
// BANCO DE DADOS NÃO RELACIONAL (MongoDB & NoSQL)
///////////////////////////////////////////////////////////

/// -- NoSQL (Not Only SQL / Não Apenas SQL)
// O conceito de NoSQL surgiu para suprir limitações de volume e variabilidade de dados dos SGBDs relacionais.

/// Principais diferenças:
// - Relacionais (SQL): Estrutura em TABELAS, esquema rígido, usa linguagem SQL.
// - MongoDB (NoSQL): Estrutura em DOCUMENTOS (JSON/BSON), esquemas flexíveis (schemaless), usa métodos JavaScript (mongosh).





/////////////////////////////////////////// TIPOS DE DADOS NO MONGODB ///////////////////////////////////////////
/// O MongoDB armazena registros de dados como documentos BSON, que é uma representação binária de documentos JSON.
/// O valor de um campo em um documento pode ser qualquer um dos tipos de dados BSON, incluindo outros documentos, 
// matrizes e matrizes de documentos, então vamos conhecer alguns desses tipos de dados?

// - NULL: armazena valores nulos;

// - Boolean: pode armazenar valores true ou falso;

// - Number: número com sinal que pode ter uma notação com E exponencial;

// - Inteiro: pode armazenar o tipo de dados inteiro em duas formas, inteiro assinado de 32 bits e inteiro assinado de 64 bits;

// - String: uma sequência de um ou mais caracteres Unicode;

// - Object: um array não ordenado com itens do tipo chave/valor, também conhecidos como documentos aninhados;

// - Array: armazena uma lista ordenada de qualquer tipo, criada usando colchetes (item1, item2) e com cada elemento separado por vírgulas;

// - ObjectId: identificador único de um registro do MongoDB;

// - Date(): retorna a data atual em formato de string; e

// - New Date() e ISODate(): retornam um objeto de data.

/// -- Esses são apenas alguns tipos de dados que podemos trabalhar no MongoDB, a título de complemento, 
// você pode acessar também a documentação do MongoDB sobre BSON types neste link (https://www.mongodb.com/pt-br/docs/manual/reference/bson-types/)





/////////////////////////////////////////// CONHECENDO ALGUMAS REGRAS DO BANDO DE DADOS E COLEÇÕES ///////////////////////////////////////////

///// -- Por padrão, o MongoDB já vem com três bancos de dados criados, o Admin, config e local. 
/// Além desses, nós temos a liberdade de criar novos bancos de dados. Porém, precisamos seguir algumas restrições:

/// -- Diferenciação de maiúsculas e minúsculas do nome do banco de dados
// Os nomes de banco de dados diferenciam maiúsculas de minúsculas no MongoDB. Por exemplo: se o banco de dados AluraDB já existir, o MongoDB retornará um erro se você tentar criar um banco de dados chamado AluraDB.

/// -- Restrições sobre nomes de banco de dados para Windows
// Para implantações do MongoDB em sistemas operacionais Windows, os nomes de banco de dados não podem conter nenhum dos seguintes caracteres:
// ."$*<>:|?/

/// -- Restrições sobre nomes de banco de dados para sistemas Unix e Linux
// Para implantações do MongoDB em em sistemas operacionais Unix e Linux, os nomes de banco de dados não podem conter nenhum dos seguintes caracteres:
// ."$/

/// - Além disso, os nomes de banco de dados não podem conter o caractere nulo.

/// -- Comprimento dos nomes de banco de dados
// Os nomes de banco de dados não podem estar vazios e devem ter menos de 64 caracteres.

/// - Assim como para criar um banco de dados, também existem restrições para se criar uma coleção aqui no MongoDB, que são:
/// Os nomes das coleções devem começar com um sublinhado ou um caractere de letra.
/// -- Não podem:
// - Conter o $.
// - Ser uma string vazia (por exemplo "", ).
// - Conter o caractere nulo.
// - Começar com o system.prefixo. (Reservado para uso interno).

/// -- Nós podemos utilizar o site de manual do MongoDB (https://www.mongodb.com/docs/manual/reference/method/db.createCollection/) para facilitar os nossos estudos sobre o assunto.




/////////////////////////////////////////// ISTALANDO O SISTEMA ///////////////////////////////////////////

/// -- Para instalarmos o MongoDB, temos que acessar o site oficial do MongoDB (https://www.mongodb.com/try/download/community) e baixar a versão Community Server, que é gratuita. 
// Após o download, siga os passos de instalação conforme o sistema operacional que você está utilizando (Windows, macOS ou Linux).

/// -- Lembrar de instalar também o MongoDB Compass, que é uma interface gráfica para gerenciar o banco de dados de forma mais intuitiva, 
// essa ferramenta se encontra no mesmo sistema de instalação do MongoDB Community Server, basta selecionar a opção de instalar o Compass durante a instalação do MongoDB.

/// -- Após a instalação, vamos instalar o MongoDB Shell (mongosh), que é a interface de linha de comando para interagir com o banco de dados.
// Para isso, acesse o site oficial do MongoDB (https://www.mongodb.com/try/download/shell) e baixe a versão correspondente ao seu sistema operacional.

/// -- Se o seu prompt de comando estiver com o mongosh ativo, ele irá exibir o tradicional texto "test>"; caso contrário, digite o comando "mongosh" para iniciar a interface de linha de comando do MongoDB.


/////////////////////////////////////////// CONFIGURANDO O AMBIENTE ///////////////////////////////////////////

/// -- Depois da instalação do mongosh, abra o terminal ou prompt de comando e digite o comando "mongosh" para iniciar a interface de linha de comando do MongoDB.

/// -- Feito isso, vamos acessar o MongoDB Compass, que é a interface gráfica para gerenciar o banco de dados e conectar ao servidor local do MongoDB. 
// Após abrir o Compass, clique em "New Connection" e insira a string de conexão padrão "mongodb://localhost:27017" para se conectar ao servidor local do MongoDB.

/// -- Enfim, com o MongoDB Compass e o mongosh configurados, você está pronto para começar a trabalhar com o MongoDB e explorar suas funcionalidades.




/////////////////////////////////////////// CRIANDO UM BANCO DE DADOS E UMA COLEÇÃO ///////////////////////////////////////////

//// -- Conceito:
/// - O que é um banco de dados?
// Um banco de dados é uma coleção organizada de dados que podem ser facilmente acessados, gerenciados e atualizados. 
// Ele é projetado para armazenar informações de forma estruturada, permitindo que os usuários realizem operações como inserção, consulta, atualização e exclusão de dados de maneira eficiente.

/// - O que é uma coleção?
// Uma coleção é um agrupamento de documentos dentro de um banco de dados.
// Cada documento é uma unidade de dados que contém informações em formato JSON (JavaScript Object Notation) ou BSON (Binary JSON).

//// MONGOSH;
/// -- Para criar/selecionar um banco de dados no MongoDB, podemos utilizar o comando "use" seguido do nome do banco de dados que desejamos criar.
use myDatabase 
/// Este comando cria o banco de dados "myDatabase" caso ele não exista, e também muda o contexto para esse banco de dados.

/// -- Para criar uma coleção no MongoDB, podemos utilizar o comando "db.createCollection()" seguido do nome da coleção que desejamos criar.
db.createCollection("myCollection")
/// Este comando cria a coleção "myCollection" no banco de dados atualmente selecionado, o prompt retornará "ok: 1" caso a coleção seja criada com sucesso.

//// MONGODB COMPASS;
/// -- Para verificar se a coleção está dentro do MongoDB Compass, basta apenas atualizar a página do banco de dados que você criou, e a coleção aparecerá na lista de coleções do banco de dados.
// Podemos tmbém criar um banco de dados e uma coleção diretamente pelo MongoDB Compass, clicando no botão "Create Database" e preenchendo os campos "Database Name" e "Collection Name". 
// (se for criar somente a coleção, basta clicar no botão "Create Collection" e preencher o campo "Collection Name").




/////////////////////////////////////////// VISUALIZANDO OS BANCO DE DADOS EXISTENTES ///////////////////////////////////////////

/// -- Para visualizar os bancos de dados existentes no MongoDB, podemos utilizar o comando "show dbs" (ou "show databases") no mongosh.
show dbs
/// Este comando lista todos os bancos de dados existentes no servidor MongoDB, juntamente com o tamanho de cada banco de dados.




/////////////////////////////////////////// REMOVENDO UM BANCO DE DADOS E UMA COLEÇÃO ///////////////////////////////////////////

///// MONGODB COMPASS;
/// -- Primeiro, vamos utilizar o MongoDB Compass para remover um banco de dados e uma coleção. 
// Para isso, basta clicar com o botão direito do mouse sobre o banco de dados ou coleção que desejamos remover e selecionar a opção "Drop Database" ou "Drop Collection", respectivamente.


///// MONGOSH;
/// -- Segundo, podemos utilizar o mongosh para remover um banco de dados e uma coleção. Para remover um banco de dados, utilizamos o comando "db.dropDatabase()" no contexto do banco de dados que desejamos remover.
db.dropDatabase()
/// Este comando remove o banco de dados atualmente selecionado, juntamente com todas as suas coleções e documentos.
// O prompt retornará "ok: 1, dropped: '...' " caso o banco de dados seja removido com sucesso.

/// -- Para remover uma coleção, utilizamos o comando "db.collection.drop()" no contexto do banco de dados que contém a coleção que desejamos remover.
db.myCollection.drop()
/// Este comando remove a coleção "myCollection" do banco de dados atualmente selecionado, juntamente com todos os seus documentos.
// O prompt retornará "true" caso a coleção seja removida com sucesso.




/////////////////////////////////////////// INSERINDO DOCUMENTOS EM UMA COLEÇÃO ///////////////////////////////////////////

///// MONGODB COMPASS;
// - Para isso, vamos selecionar a coleção do banco de dados que desejamos, clicar no botão de "+" (verde), e selecionar a opção "Insert Document".

/// -- A inserção no MongoDB Compass pode ser feita através de 3 modos de visualização (VIEW):
// 1. JSON / EJSON ("{}"): Permite colar documentos no formato JSON. Tipos especiais utilizam chaves com prefixo "$" (ex: "$oid").
// 2. List / Form ("≡"): Apresenta uma interface gráfica amigável de formulário, permitindo alterar chaves, valores e tipos de dados em lista.
// 3. Shell / JavaScript (">_"): Permite digitar ou colar o documento utilizando a sintaxe nativa do mongosh (ex: ObjectId("...")).

//// -- Nós também podemos importar documentos JSON ou CSV em uma coleção de dados no MongoDB Compass, 
// basta acessar a coleção desejada, apertar o botão de "Import JSON or CSV file" e selecionar o arquivo JSON ou CSV que desejamos importar.


///// MONGOSH;
/// -- Para inserir um documento em uma coleção no MongoDB Shell, podemos utilizar o comando "db.collection.insertOne()" ou "db.collection.insertMany()" no contexto do banco de dados que contém a coleção que desejamos inserir o documento.

/// -- Para inserir documentos em uma coleção, temos que utilizar parênteses e chaves, pois o MongoDB utiliza a sintaxe de objetos JavaScript para representar documentos.

/// Estrutura padrão dos métodos de Insert:
db.colecao.insertOne({
  "campo1": "valor1",
  "campo2": "valor2"
})

db.colecao.insertMany([
  { "campo1": "valor1", "campo2": "valor2" },
  { "campo1": "valor3", "campo2": "valor4" }
])

//// insertOne() >> Insere um único documento na coleção especificada.
db.myCollection.insertOne({ 
    name: "John Doe", 
    age: 30, 
    email: "john.doe@example.com" })
/// Este comando insere um documento na coleção "myCollection" com os campos "name", "age" e "email" e seus respectivos valores.
// O prompt retornará um objeto com informações sobre a operação de inserção, incluindo o ID gerado para o documento inserido.

//// -- RETORNO DO TERMINAL (insertOne):
{
  acknowledged: true,
  insertedId: ObjectId("62e3304614da01e6f2b547c1") // ID único do documento inserido automaticamente pelo MongoDB.
}

//// - Exemplo adicional com insertOne():
db.series.insertOne({
    "Série": "Breaking Bad",
    "Ano de lançamento": 2008,
    "Temporadas disponíveis": 5
})
/// Este comando insere um único documento na coleção "series".
// O prompt retornará o status "acknowledged: true" e o "insertedId" único do documento gerado.


///// insertMany() >> Insere múltiplos documentos na coleção especificada.
db.myCollection.insertMany([ // - Utilizamos colchetes para indicar que estamos inserindo múltiplos documentos, é uma lista de documentos separados por vírgulas.
  { name: "Jane Smith", age: 25, email: "jane.smith@example.com" },
  { name: "Bob Johnson", age: 35, email: "bob.johnson@example.com" }
])
/// Este comando insere múltiplos documentos na coleção "myCollection" com os campos "name", "age" e "email" e seus respectivos valores.
// O prompt retornará um objeto com informações sobre a operação de inserção, incluindo o número de documentos inseridos e os IDs gerados para cada documento.

//// -- RETORNO DO TERMINAL (insertMany):
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("62e330d014da01e6f2b547c2"),
    '1': ObjectId("62e330d014da01e6f2b547c3")
  }
}

//// - Exemplo adicional com insertMany():
db.series.insertMany([
  { "Série": "Stranger Things", "Ano de lançamento": 2016, "Temporadas disponíveis": 4 },
  { "Série": "Dark", "Ano de lançamento": 2017, "Temporadas disponíveis": 3 }
])
/// Este comando insere múltiplos documentos na coleção "series" passando um array de objetos.
// O prompt retornará o objeto "insertedIds" contendo o índice de cada elemento e o seu respetivo ObjectId gerado.

/// -- Assim, como para criar um banco de dados e coleções, também existem restrições ao se criar um documento:
// - O nome do campo _id é reservado para uso como chave primária. Seu valor deve ser único na coleção, é imutável e pode ser de qualquer tipo que não seja um array.
// - Os nomes dos campos não podem conter o caractere NULL.

/// -- Os documentos BSON, também possuem restrições de tamanho:
// - O tamanho máximo de um documento BSON é 16 megabytes.




/////////////////////////////////////////// CONSULTANDO DOCUMENTOS EM UMA COLEÇÃO ///////////////////////////////////////////

///// MONGODB COMPASS;
// - Para consultar documentos em uma coleção no MongoDB Compass, basta selecionar a coleção desejada e utilizar a barra de pesquisa para filtrar os documentos com base em critérios específicos.

/// -- A consulta no MongoDB Compass pode ser feita através de 3 modos de visualização (VIEW):
// 1. JSON / EJSON ("{}"): Permite colar consultas no formato JSON. Tipos especiais utilizam chaves com prefixo "$" (ex: "$oid").
// 2. List / Form ("≡"): Apresenta uma interface gráfica amigável de formulário, permitindo alterar chaves, valores e tipos de dados em lista.
// 3. Shell / JavaScript (">_"): Permite digitar ou colar a consulta utilizando a sintaxe nativa do mongosh (ex: ObjectId("...")).

//// -- Utilizando o LIST / FORM VIEW:
/// Quando já selecionado a coleção desejada do banco de dados, teremos a opção de "Options";
/// Clicando no botão "Options" ao lado da barra de pesquisa do Find, expandimos os campos avançados de consulta:

//// 1. Filter ({}) [Barra principal]: 
///    - Filtro de busca padrão (ex: { "Ano de lançamento": 2020 }).

//// 2. Project ({ field: 1 } ou { field: 0 }):
///    - Define quais campos devem ser exibidos (1) ou ocultados (0) no resultado final. 

//// 3. Sort ({ field: 1 } ou { field: -1 }):
///    - Ordena os resultados da consulta. Usa 1 para ordem crescente e -1 para ordem decrescente.

//// 4. Collation ({ locale: 'simple' }):
///    - Define regras específicas de idioma para comparação de strings (como acentuação e maiúsculas/minúsculas).

//// 5. Index Hint ({ field: 1 } ou "indexName"):
///    - Força a consulta a utilizar um índice específico da coleção para otimizar a busca.

//// 6. Max Time MS:
///    - Define o tempo limite máximo (em milissegundos) para a execução da consulta antes de ser cancelada.

//// 7. Skip:
///    - Define o número de documentos que devem ser ignorados/saltados no início do resultado (útil para paginação).

//// 8. Limit:
///    - Define o número máximo de documentos que a consulta deve retornar.




/////////////////////////////////////////// OPERADORES DE CONSULTA E FILTROS (MONGODB) ///////////////////////////////////////////

/// -- Enquanto o SQL utiliza símbolos convencionais (ex: >, <, =), o MongoDB utiliza operadores específicos iniciados por cifrão ($).

//// 1. OPERADORES DE COMPARAÇÃO:
// - $eq  : Igual a (Equal). Filtro padrão ao passar { "campo": valor }.
// - $gt  : Maior que (Greater Than). Ex: { "Temporadas disponíveis": { $gt: 2 } }
// - $gte : Maior ou igual a (Greater Than or Equal). Ex: { "Temporadas disponíveis": { $gte: 2 } }
// - $lt  : Menor que (Less Than). Ex: { "Temporadas disponíveis": { $lt: 5 } }
// - $lte : Menor ou igual a (Less Than or Equal). Ex: { "Temporadas disponíveis": { $lte: 5 } }
// - $in  : Retorna documentos cujo campo corresponda a QUALQUER valor contido numa lista/array.
//          Ex: { "Ano de lançamento": { $in: [2019, 2020] } }


//// 2. OPERADORES LÓGICOS:
// - $or  : Retorna documentos que atendam a PELO MENOS UMA das condições passadas numa lista.
//          Sintaxe: { $or: [ { "Ano de lançamento": 2018 }, { "Classificação": "18+" } ] }
//
// - $and : Retorna documentos que atendam a TODAS as condições passadas na lista.
//          Sintaxe: { $and: [ { "Ano de lançamento": 2018 }, { "Classificação": "18+" } ] }
//
// - $nor : Negação lógica do $or. Retorna documentos que NÃO atendam a NENHUMA das condições especificadas.
//          Sintaxe: { $nor: [ { "Ano de lançamento": 2018 }, { "Classificação": "18+" } ] }
//
// - $not : Inverte o efeito de uma expressão de filtro específica.


//// -- APLICAÇÃO PRÁTICA NO COMPASS (EXEMPLO COMPLETO):
// - Filter  : { "Temporadas disponíveis": { $lt: 5 } }
// - Project : { "Série": 1, "Linguagem": 1, "_id": 0 }  (Exibe apenas nome e idioma, ocultando o _id)
// - Sort    : { "Série": 1 }                           (Ordena em ordem alfabética crescente)
// - Limit   : 10                                       (Limita o retorno aos 10 primeiros resultados)


//// -- APLICAÇÃO PRÁTICA NO MONGOSH (EXEMPLO COMPLETO):
db.users.find(                          // collection
   { age: { $gt: 18  } },               // query criteria
     { name: 1, address: 1 }            // projection
).limit(5)                              // cursor modifier
/// -- Perceba que mesmo no mongosh, ele segue as normas de consulta do MongoDB Compass, então a ordem de execução dos parâmetros é a mesma.

//// -- Padrão de consulta no mongosh:
db.vetin.find(                          // Lembrar que TEMOS que citar a nossa coleção e o FIND para pesquisar os documentos dentro dela
  { "campeonato": "Campeonato Brasileiro" }               // Nosso CRITÉRIO em seguida, que no caso é o nome do time que queremos pesquisar
   { "time": 1, "técnico": 1, "_id": 0 }             // Nossa PROJEÇÃO, que no caso é o nome do time e o nome do técnico, e o _id não será exibido
).limit(19)                                // Nosso Limitador, que no caso é o número de documentos que queremos que seja exibido, no caso 19 times do campeonato brasileiro.

//// -- Vamos montar passo a passo;
db.series.find() 
/// Este prompt retornará todos os documentos da coleção "series" sem nenhum filtro ou projeção aplicada.

//// -- Aplicando um filtro para exibir apenas os campos "Série" e "Ano de lançamento";
db.series.find({},{"Série":1, "Ano de lançamento": 1, "_id":0})
/// Este prompt retornará todos os documentos da coleção "series", mas apenas os campos "Série" e "Ano e lançamento" serão exibidos, e o campo "_id" será ocultado.

//// -- Aplicando um filtro para exibir apenas as séries lançadas em 2019 ou 2020;
db.series.find({"Ano de lançamento": {$in: [2019,2020]}})
/// Este prompt retornará todos os documentos da coleção "series" que possuem o campo "Ano de lançamento" com valor 2019 ou 2020.

//// -- Aplicando um filtro para exibir apenas 5 documentos da coleção "series", em ordem alfabética crescente pelo campo "Série";
db.series.find().limit(5)
/// Este prompt retornará apenas os 5 primeiros documentos da coleção "series", em ordem alfabética crescente pelo campo "Série".




/////////////////////////////////////////// ATUALIZANDO DOCUMENTOS EM UMA COLEÇÃO ///////////////////////////////////////////

///// MONGODB COMPASS;
// - Ao passar o mouse sobre o documento desejado no Compass, clique no ícone de lápis "Edit Document" no canto superior direito para alterar ou adicionar novos campos manualmente.


///// MONGOSH;
/// -- Para atualizar documentos no terminal, utilizamos os métodos updateOne() ou updateMany().

//// Estrutura padrão dos métodos de Update:
db.colecao.updateOne(
  { "campo": "valor" },             // 1º Parâmetro: Filtro (Update Filter)
  { $set: { "campo": "novoValor" } }  // 2º Parâmetro: Ação de Atualização (Update Action com operador $set)
)

db.colecao.updateMany(
  { "campo": "valor" },             // 1º Parâmetro: Filtro (Update Filter)
  { $set: { "campo": "novoValor" } }  // 2º Parâmetro: Ação de Atualização (Update Action com operador $set)
)

//// updateOne() >> Atualiza apenas o PRIMEIRO documento que corresponde ao filtro informado.
db.series.updateOne(
  { "Série": "The Office" },
  { $set: { "Temporadas disponíveis": 9 } }
)
/// Atualiza o documento da série "The Office" na coleção "series", alterando o valor do campo "Temporadas disponíveis" para 9.

//// updateMany() >> Atualiza TODOS os documentos que correspondem ao filtro informado.
db.series.updateMany(
  { "Ano de lançamento": { $lt: 2015 } },
  { $set: { "Categoria": "Clássico" } }
)
/// Atualiza todos os documentos da coleção "series" que possuem o campo "Ano de lançamento" com valor menor que 2015, adicionando o campo "Categoria" com valor "Clássico".




/////////////////////////////////////////// SUBSTITUINDO DOCUMENTOS EM UMA COLEÇÃO ///////////////////////////////////////////

///// MONGOSH;
/// -- Além de atualizar campos específicos, podemos substituir um documento inteiro mantendo o mesmo _id através do método replaceOne().

//// Estrutura padrão do ReplaceOne:
db.colecao.replaceOne(
   { "campo": "valor" }, // 1º Parâmetro: Filter (condição para localizar o documento)
   {                     // 2º Parâmetro: Replacement (novo documento completo)
     "campo1": "novoValor1",
     "campo2": "novoValor2"
   }
)

//// replaceOne() >> Substitui TODO o documento original mantendo apenas o mesmo _id.
db.series.replaceOne(
  { "Série": "Grimm" },
  {
    "Série": "Grimm",
    "Ano de lançamento": 2012,
    "Temporadas disponíveis": 6,
    "Linguagem": "Inglês",
    "Genero": ["Drama", "Ação", "Aventura", "Fantasia"],
    "Status": "Encerrada"
  }
)
/// Substitui o documento da série "Grimm" por um novo documento completo, mantendo apenas o mesmo _id do documento original.




/////////////////////////////////////////// REMOVENDO DOCUMENTOS NO MONGODB ///////////////////////////////////////////

///// MONGODB COMPASS;
/// -- Na interface gráfica, ao passar o mouse sobre um documento, é exibido o ícone de Lixeira ("Remove document") no canto superior direito.
// - Ao clicar no botão de lixeira, o documento selecionado fica destacado com uma caixa vermelha.
// - São exibidos dois botões na parte inferior do documento: "Cancel" (para abortar a ação) e "Delete" (para confirmar a exclusão).


///// MONGOSH;
/// -- Para remover documentos via linha de comando, o MongoDB disponibiliza dois métodos principais: deleteOne() e deleteMany().

//// Estrutura padrão dos métodos de Delete:
db.colecao.deleteOne(
   { "campo": "valor" } // Filtro de deleção (Delete Filter para um único documento)
)

db.colecao.deleteMany(
   { "campo": "valor" } // Filtro de deleção (Delete Filter para múltiplos documentos)
)

//// deleteOne() >> Remove apenas o PRIMEIRO documento que corresponde ao filtro informado.
db.series.deleteOne(
  { "Série": "The Boys" }
)
/// Remove a série "The Boys" da coleção.

//// -- RETORNO DO TERMINAL (deleteOne):
{ acknowledged: true, deletedCount: 1 }

//// deleteMany() >> Remove TODOS os documentos que correspondem ao filtro informado.
db.series.deleteMany(
  { "Temporadas disponíveis": 1 }
)
/// Remove todas as séries que possuem apenas 1 temporada disponível de uma só vez.

//// -- RETORNO DO TERMINAL (deleteMany):
{ acknowledged: true, deletedCount: 29 }

//// -- ATENÇÃO AO USAR DELETEMANY SEM FILTRO:
// Se o método deleteMany() for executado com as chaves vazias {}, TODOS os documentos da coleção serão permanentemente excluídos.
db.series.deleteMany({})
