## Sistema de Gerenciamento de Contatos com Padrões de Projeto em JavaScript

### Integrantes do Grupo
- Sérgio Alexandre  RA: 2346591
- Mariana de Oliveira RA: 2410320


### Objetivo:

Desenvolver um sistema de gerenciamento de contatos em JavaScript que aplica os princípios de design de software através da implementação de padrões de projeto estruturais e comportamentais.

### Problema:

Criar um sistema que permita aos usuários:

* Adicionar, remover e listar contatos.
* Buscar contatos por nome.

### **Requisitos:**

* **Classe Contato:**
    * Atributos: nome, telefone e email.
* **Classe GerenciadorContatos:**
    * Métodos: adicionar, remover e listar contatos.
    * Manter uma lista de contatos.
* **Interface CLI:**
    * Permitir a interação do usuário com o sistema.
* **Padrões de Projeto:**
    * Estrutural: garantir a extensibilidade da adição e remoção de contatos.
    * Comportamental: implementar a busca de contatos de forma independente dos algoritmos de busca.

## Padrões de Projeto Escolhidos:

### Estrutural:

* **Padrão Factory Method:**
    * Permite a criação de objetos de diferentes tipos sem modificar o código do cliente.
    * Facilita a adição de novos tipos de contatos no futuro.

### Comportamental:

* **Padrão Strategy:**
    * Define uma família de algoritmos, encapsula cada um deles e os torna intercambiáveis.
    * Permite a variação do algoritmo de busca sem afetar o restante do sistema.

## Justificativa para a Escolha dos Padrões:

* **Factory Method:**
    * Promove flexibilidade e extensibilidade na criação de contatos.
    * Permite a adição de novos tipos de contatos sem modificar o código existente.
    * Simplifica o código do cliente, evitando a necessidade de conhecer os detalhes específicos de cada tipo de contato.

* **Strategy:**
    * Permite a implementação de diferentes algoritmos de busca de forma independente.
    * Facilita a troca de algoritmos de busca sem afetar o restante do sistema.
    * Promove flexibilidade e desacoplamento entre a interface de busca e os algoritmos específicos.

**Documentação do Código:**

* O código está documentado com comentários que explicam a implementação dos padrões de projeto.
* A documentação também inclui informações sobre as melhores práticas de desenvolvimento JavaScript e padrões de codificação utilizados.
