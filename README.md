# server-reprogramafy 🎧🎼
 
 Projeto desenvolvido da semana 10


### Motivação

Aprender a diferença entre os métodos PUT e PATCH. 

Os verbos PUT e PATCH servem para atualização de um recurso.

Mas quando escolher um ou outro? Não fique confusa! O PUTserve para atualização do recurso inteiro enquanto o PATCH é uma atualização de um ou mais campos daquele recurso.

Verbo PUT:

Geralmente usado com parâmetro
Deve passar todos os dados do recurso preenchidos, independente de quais dados você de fato editou.
Por exemplo, digamos que seu model músicas possui os atributos nome e artista – e você editou apenas o nome. A documentação indica que você deve passar ambos os atributos preenchidos para o serviço (mesmo só tendo editado o nome).

Para resolver isso de forma elegante a adote por convenção, um quinto verbo HTTP: PATCH.

Verbo PATCH:

Use para editar o recurso sem a necessidade de enviar todos as chaves e valores do seu model
Envia de fato o que foi alterado
Além também de dizer qual o ID como parâmetro, para que o serviço saiba o que vai ser alterado.



