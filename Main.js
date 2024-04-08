// Mariana de oliveira - 2410320
// Sérgio Alexandre - 2346591

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
