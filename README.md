<h1 align="center"> Desafio - Nunes Sports - Produtos </h1>

# Sobre o projeto

Trata-se de um sistema de CRUD de produtos. O usuário administrador, previamente cadastrado na plataforma, poderá cadastrar, alterar, deletar, bem como, ver todos os produtos cadastrados -e presentes- na base de dados.

<h2>Regras</h2>

  1. [IN] O usuário adm informa: nome, descrição e preço do produto a ser cadastrado/alterado.

  2. [OUT] O sistema informa uma listagem paginada contendo id, nome, descrição e preço dos produtos presentes na base de dados. 
  
     **Informações complementares**

     - Nome do produto precisa ter de 3 a 80 caracteres.

     - A Descrição do produto precisa ter no mínimo 10 caracteres.

     - O Preço deve ser positivo.
    
     - Para as três validações elencadas acima, foi utilizado @BeanValidation. Também foi criado o tratamento de erro específico *MethodArgumentNotValidException* -erro 422- na camada de controlador *ControllerExceptionHandler*.
       
     - Há tratamento de erro caso exista busca ou exclusão por produto não encontrado (por id). *ResourceNotFoundException* -erro 404- na camada de controlador *ControllerExceptionHandler*, tratamento em nível de controlador.
      

 ## Estrutura do Projeto (Back-end)
  * *src/main/java/com.nunessports.commerce/**controllers***: O controlador do sistema (Product Controller).
  * *src/main/java/com.nunessports.commerce/controllers/**handlers***: Os tratamentos de erros em nível de controlador (anotação @ControllerAdvice).
  * *src/main/java/com.nunessports.commerce/controllers/**dtos***: Os DTOs do projeto (Product DTO), bem como, as classes que representam os erros e suas mensagens.
  * *src/main/java/com.nunessports.commerce/controllers/**entities***: As entidades mapeadas pela JPA. No sistema são duas. User (usuário) e Product (produto). Cada atributo da entidade corresponde a um campo na tabela no banco de dados.
  * *src/main/java/com.nunessports.commerce/controllers/**repositories***: Onde se encontra a interface ProductRepository, extensão da JPARepository capaz de fazer a ligação com o banco de dados.
  * *src/main/java/com.nunessports.commerce/controllers/**services***: Presente a classe ProductService, onde toda lógica é trabalhada para ser utilizada na camada de controlador, quando chamado.
  * *src/main/java/com.nunessports.commerce/controllers/services/**exceptions***: Presente a classe ResourceNotFoundException extensão de RuntimeException, para tratamento de erros sem a necessidade de utilização de try-catch.
  * *src/main/resources/**application.properties***: Arquivo de configuração do banco de dados H2 (como url do banco, username e password), configurações da JPA e SQL.
  * *src/main/resources/**import.sql***: Arquivo . sql onde estão presentes algumas inserções, as quais, ao inicializar o sistema, já estarão previamente cadastradas no banco de dados, sendo elas: o usuário adm na tabela *tb_user* e um produto na tabela *tb_product*.

 ## Estrutura do Projeto (Front-end)
 * *src/**components***: Onde estão os arquivos que representam as páginas da aplicação (Home, Sobre e Produtos)
 
 ## Tecnologias utilizadas
- Java
- Spring Boot
- JPA / Hibernate
- H2 Database
- Maven
- React
- Html
- CSS

## Contribuições
- Console do banco de dados H2: http://www.localhost:8080/h2-console

## Autor

Larissa da Cruz

<a href="https://www.linkedin.com/in/larissa-da-cruz-0ba314219/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
