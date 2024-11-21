import { Controle, Cpu, Digito, Operação, Sinal, Tela } from "./calculadora";

export class TestadorTela {
  testeTodosSímbolo() {
      ;
  }
  private tela: Tela;

  constructor(tela: Tela) {
    this.tela = tela;
  }

  // testeTodosNúmeros() {
  //   this.tela.limpe();
  //   console.log("= Testando todos os dígitos ===========================");
  //   Object.keys(Digito).forEach((element) => {
  //     if (Number(element)) this.tela.mostre(Number(element));
  //   });
  // }
}

export class TestadorCpu {
  private cpu: Cpu;
  constructor(cpu: Cpu) {
    this.cpu = cpu;
  }

   teste123Soma456() {
     console.log("= Testando 123 + 456 ===========================");
     [Digito.UM, Digito.DOIS, Digito.TRÊS].forEach((element) => {
       this.cpu.recebaDigito(element);
     });
     this.cpu.recebaOperacao(Operação.SOMA);
     [Digito.QUATRO, Digito.CINCO, Digito.SEIS].forEach((element) => {
       this.cpu.recebaDigito(element);
     });
     this.cpu.recebaControle(Controle.IGUAL);
   }
  
   teste12Soma34Soma56() {
     console.log("= Testando 12 + 34 + 56 ===========================");
     [Digito.UM, Digito.DOIS].forEach((element) => {
       this.cpu.recebaDigito(element);
     });
     this.cpu.recebaOperacao(Operação.SOMA);
     [Digito.TRÊS, Digito.QUATRO].forEach((element) => {
       this.cpu.recebaDigito(element);
     });
     this.cpu.recebaOperacao(Operação.SOMA);
     [Digito.CINCO, Digito.SEIS].forEach((element) => {
       this.cpu.recebaDigito(element);
     });
     this.cpu.recebaControle(Controle.IGUAL);
   }
   testeRaiz(){
     console.log("teste raiz 5");
     this.cpu.recebaDigito(Digito.CINCO)
     this.cpu.recebaOperacao(Operação.RAIZ_QUADRADA)
    
   }


  // TESTE DOS DECIMAIS
  testeNumeroDecimal() {
    console.log("Teste Números Decimais");
    this.cpu.recebaDigito(Digito.SETE); // 1
    this.cpu.recebaDigito(Digito.SEIS); // 1
    this.cpu.recebaControle(Controle.SEPARADOR_DECIMAL); // Adiciona separador decimal
    this.cpu.recebaDigito(Digito.CINCO);
    this.cpu.recebaDigito(Digito.QUATRO) // 5
  }
  
  testeMemoria() {
    console.log("teste memória");
    [Digito.UM, Digito.DOIS, Digito.TRÊS].forEach((element) => {
      this.cpu.recebaDigito(element);
    });
    this.cpu.recebaControle(Controle.MEMÓRIA_MAIS);
    this.cpu.recebaOperacao(Operação.SOMA);
    [Digito.UM].forEach((element) => {
      this.cpu.recebaDigito(element);
    });
    this.cpu.recebaControle(Controle.IGUAL);
  }
  testeMemoriaMenos() {
    console.log("teste memória menos");
    [Digito.UM, Digito.DOIS, Digito.TRÊS].forEach((element) => {
      this.cpu.recebaDigito(element);
    });
    console.log('passei aqu')
    this.cpu.recebaControle(Controle.MEMÓRIA_MAIS);
    console.log('passei aqu')
    this.cpu.recebaOperacao(Operação.SUBTRAÇÃO);
    [Digito.UM].forEach((element) => {
      this.cpu.recebaDigito(element);
    });
    this.cpu.recebaControle(Controle.IGUAL);
  }
  testeMrc(){
    console.log("teste MRC");
    [Digito.UM, Digito.DOIS, Digito.TRÊS].forEach((element) => {
      this.cpu.recebaDigito(element);
    });
    this.cpu.recebaControle(Controle.MEMÓRIA_MAIS);
    this.cpu.recebaOperacao(Operação.SOMA);
    [Digito.UM].forEach((element) => {
      this.cpu.recebaDigito(element);
    });
    this.cpu.recebaControle(Controle.MEMÓRIA_LEITURA_LIMPEZA);
    this.cpu.recebaControle(Controle.IGUAL);
  
  }
}