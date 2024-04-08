// Mariana de oliveira - 2410320
// Sérgio Alexandre - 2346591

const readline = require('readline');

// Configuração do readline para interação com o usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Definição da classe Contato
class Contato {
  constructor(nome, telefone, email) {
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
  }

  // Método para formatar os detalhes do contato como uma string
  toString() {
    return `\nNome: ${this.nome}\nTelefone: ${this.telefone}\nEmail: ${this.email}`;
  }
}

// Definição da classe GerenciadorContatos
class GerenciadorContatos {
  constructor() {
    this.contatos = [];
  }

  // Método para adicionar um novo contato à lista de contatos
  adicionar(contato) {
    this.contatos.push(contato);
  }

  // Método para remover um contato da lista de contatos pelo nome
  remover(nome) {
    const indice = this.contatos.findIndex((contato) => contato.nome === nome);
    if (indice !== -1) {
      this.contatos.splice(indice, 1);
      console.log("Contato removido com sucesso!");
    } else {
      console.log("Contato não encontrado!");
    }
  }

  // Método para listar todos os contatos na lista
  listar() {
    if (this.contatos.length === 0) {
      console.log("Nenhum contato cadastrado.");
    } else {
      this.contatos.forEach((contato) => console.log(contato.toString()));
    }
  }

  // Método para buscar um contato na lista pelo nome
  buscar(nome) {
    const contato = this.contatos.find((contato) => contato.nome === nome);
    if (contato) {
      console.log(`Contato encontrado:\n${contato}`);
    } else {
      console.log("Contato não encontrado!");
    }
  }
}

// Definição da classe FabricaContatos para criar diferentes tipos de contatos
class FabricaContatos {
  static criar(tipo, ...args) {
    switch (tipo) {
      case "Pessoal":
        return new ContatoPessoal(...args);
      case "Profissional":
        return new ContatoProfissional(...args);
      default:
        throw new Error(`Tipo de contato inválido: ${tipo}`);
    }
  }
}

// Definição da classe ContatoPessoal que herda de Contato
class ContatoPessoal extends Contato {
  constructor(nome, telefone, email, aniversario) {
    super(nome, telefone, email);
    this.aniversario = aniversario;
  }
}

// Definição da classe ContatoProfissional que herda de Contato
class ContatoProfissional extends Contato {
  constructor(nome, telefone, email, cargo, empresa) {
    super(nome, telefone, email);
    this.cargo = cargo;
    this.empresa = empresa;
  }
}

// Função para adicionar um novo contato
function adicionarContato() {
  rl.question("Digite o nome do contato: ", (nome) => {
    rl.question("Digite o telefone do contato: ", (telefone) => {
      rl.question("Digite o email do contato: ", (email) => {
        rl.question("Digite o tipo de contato (Pessoal ou Profissional): ", (tipo) => {
          try {
            const contato = FabricaContatos.criar(tipo, nome, telefone, email);
            gerenciador.adicionar(contato);
            console.log("Contato adicionado com sucesso!");
          } catch (error) {
            console.log(error.message);
          }
          // Após adicionar o contato, mostra novamente o menu
          menu();
        });
      });
    });
  });
}

// Função para remover um contato
function removerContato() {
  rl.question("Digite o nome do contato a ser removido: ", (nome) => {
    gerenciador.remover(nome);
    // Após remover o contato, mostra novamente o menu
    menu();
  });
}

// Função para listar todos os contatos
function listarContatos() {
  gerenciador.listar();
  // Mostra novamente o menu após listar os contatos
  menu();
}

// Função para buscar um contato pelo nome
function buscarContato() {
  rl.question("Digite o nome do contato a ser buscado: ", (nome) => {
    gerenciador.buscar(nome);
    // Mostra novamente o menu após buscar o contato
    menu();
  });
}

// Função para mostrar o menu de opções e processar a escolha do usuário
function menu() {
  rl.question(
    "\nDigite a opção desejada:\n1 - Adicionar contato\n2 - Remover contato\n3 - Listar contatos\n4 - Buscar contato\n0 - Sair\n",
    (opcao) => {
      switch (opcao) {
        case "1":
          adicionarContato();
          break;
        case "2":
          removerContato();
          break;
        case "3":
          listarContatos();
          break;
        case "4":
          buscarContato();
          break;
        case "0":
          console.log("Saindo...");
          rl.close();
          break;
        default:
          console.log("Opção inválida!");
          // Mostra novamente o menu se a opção for inválida
          menu();
      }
    }
  );
}

// Instância do gerenciador de contatos
const gerenciador = new GerenciadorContatos();

// Iniciar o menu
menu();