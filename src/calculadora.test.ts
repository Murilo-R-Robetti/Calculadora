import { TestadorCpu } from "./calculadoraTestes"
import { Cpu, Controle, Operação, Sinal, Digito } from "./calculadora"
import CpuA1 from "./cpuA1"
import TelaX0Teste from "./telaX0Teste"

describe("Testando minha calculadora", () => {
    let cpu = new CpuA1()  
    let tela = new TelaX0Teste()
    tela.debug = true
    beforeEach(()=>{
      tela.limpe()
      cpu.reinicie()
    })
    afterEach(()=>{
      tela.limpe()
      cpu.reinicie()
    })
    cpu.definaTela(tela)

/*test("teste",()=>{
    console.log("Teste Números Decimais");
    cpu.recebaDigito(Digito.SETE); 
    cpu.recebaDigito(Digito.SEIS); 
    cpu.recebaControle(Controle.SEPARADOR_DECIMAL); 
    cpu.recebaDigito(Digito.CINCO);
    cpu.recebaDigito(Digito.QUATRO)
    expect(tela.digitos).toBe("76.54")
    expect(tela.sinal).toBe(Sinal.POSITIVO)
    expect(tela.memoria).toBeFalsy()
    expect(tela.error).toBeFalsy()
  })*/
    
    test("Testar soma 100 + 100", ()=>{
        console.log("= Testando 100 + 100 ===========================");
     [Digito.UM, Digito.ZERO,Digito.ZERO].forEach((element) => {
       cpu.recebaDigito(element);
     });
     cpu.recebaOperacao(Operação.SOMA);
     [Digito.UM, Digito.ZERO,Digito.ZERO].forEach((element) => {
       cpu.recebaDigito(element);
     });
     cpu.recebaControle(Controle.IGUAL);
     expect(tela.digitos).toBe("200")
     expect(tela.sinal).toBe(Sinal.POSITIVO)
     expect(tela.memoria).toBeFalsy()
     expect(tela.error).toBeFalsy()
    })
    test("TESTE RAIZ 9", ()=>{
      console.log("teste raiz")
      cpu.recebaDigito(Digito.NOVE);
      cpu.recebaOperacao(Operação.RAIZ_QUADRADA);
      expect(tela.digitos).toBe("3")
      expect(tela.sinal).toBe(Sinal.POSITIVO)
      expect(tela.memoria).toBeFalsy()
      expect(tela.error).toBeFalsy()
      });
      test("TESTE RAIZ 100", ()=>{
        console.log("teste raiz");
        [Digito.UM, Digito.ZERO,Digito.ZERO].forEach((element) => {
          cpu.recebaDigito(element)});
        cpu.recebaOperacao(Operação.RAIZ_QUADRADA);
        expect(tela.digitos).toBe("10")
        expect(tela.sinal).toBe(Sinal.POSITIVO)
        expect(tela.memoria).toBeFalsy()
        expect(tela.error).toBeFalsy()
        });
  })
  
//HELOISA
describe("Testando minha calculadora", () => {
  let cpu = new CpuA1()  
  let tela = new TelaX0Teste()
  tela.debug = true
  beforeEach(()=>{
    tela.limpe()
    cpu.reinicie()
  })
  afterEach(()=>{
    tela.limpe()
    cpu.reinicie()
  })
  cpu.definaTela(tela)
  test("TESTE RAIZ QUADRADA DE 4", ()=>{
    console.log("testando raiz de 4")
    cpu.recebaDigito(Digito.QUATRO);
    cpu.recebaOperacao(Operação.RAIZ_QUADRADA);
    expect(tela.digitos).toBe("2")
    expect(tela.sinal).toBe(Sinal.POSITIVO)
    expect(tela.memoria).toBeFalsy()
    expect(tela.error).toBeFalsy()
    });
    cpu.definaTela(tela)

 /* test("TESTE MULTIPLICAÇÃO 5 x 2", () => {

    cpu.recebaDigito(Digito.CINCO);
    cpu.recebaOperacao(Operação.MULTIPLICAÇÃO);
    cpu.recebaDigito(Digito.DOIS);
    cpu.recebaControle(Controle.IGUAL);
    expect(tela.digitos).toBe("10"); 
    expect(tela.sinal).toBe(Sinal.POSITIVO); 
    expect(tela.memoria).toBeFalsy(); 
    expect(tela.error).toBeFalsy(); 
});*/

test("TESTE RAIZ QUADRADA DE 5", () => {
  console.log("testando raiz quadrada de 5");

  cpu.recebaDigito(Digito.CINCO);
  cpu.recebaOperacao(Operação.RAIZ_QUADRADA);

  expect(tela.digitos).toBe("2.23606797749979"); 
  expect(tela.sinal).toBe(Sinal.POSITIVO); 
  expect(tela.memoria).toBeFalsy(); 
  expect(tela.error).toBeFalsy(); 
  
});
})



//SARAH
describe("Testando minha calculadora", () => {
    let cpu = new CpuA1()  
    let tela = new TelaX0Teste()
    tela.debug = true
    beforeEach(()=>{
      tela.limpe()
      cpu.reinicie()
    })
    afterEach(()=>{
      tela.limpe()
      cpu.reinicie()
    })
    cpu.definaTela(tela)

    test("Testar Subtração,2-1", ()=>{  //Esse funciona teoricamente
      console.log("Testando 2-1");
      cpu.recebaDigito(Digito.DOIS);
      cpu.recebaOperacao(Operação.SUBTRAÇÃO);
      cpu.recebaDigito(Digito.UM);
    cpu.recebaControle(Controle.IGUAL);
    expect(tela.digitos).toBe("1");           /*esperado*/ 
    expect(tela.sinal).toBe(Sinal.POSITIVO);      /*esperado*/ 
    expect(tela.memoria).toBeFalsy();
    expect(tela.error).toBeFalsy();
    })

  test("testar 1,9 - 1 ", () => { //teoricamente certo
    cpu.recebaDigito(Digito.UM);
    cpu.recebaControle(Controle.SEPARADOR_DECIMAL);
    cpu.recebaDigito(Digito.NOVE);
    cpu.recebaOperacao(Operação.SUBTRAÇÃO);
    cpu.recebaDigito(Digito.UM);
    cpu.recebaControle(Controle.IGUAL); 
    expect(tela.digitos).toBe("0,9");
    expect(tela.sinal).toBe(Sinal.POSITIVO);
    expect(tela.memoria).toBeFalsy();
    expect(tela.error).toBeFalsy();
  })

  test("testar 12 x 34", () => { //o teste parece certo
    console.log("= Testando 12 . 34 ");
    [Digito.UM, Digito.DOIS].forEach((element) => {
      cpu.recebaDigito(element);  
    });
    cpu.recebaOperacao(Operação.MULTIPLICAÇÃO);
    [Digito.TRÊS, Digito.QUATRO].forEach((element) => {
      cpu.recebaDigito(element);  
    });
    cpu.recebaControle(Controle.IGUAL);  
    expect(tela.digitos).toBe("408"); 
    expect(tela.sinal).toBe(Sinal.POSITIVO);  
    expect(tela.error).toBeFalsy(); 

  })
//TEORICAMENTE

 test("TESTE PERCENTUAL 5", () => {
  console.log("testando 5%");        
  [Digito.DOIS, Digito.ZERO, Digito.ZERO].forEach((digito) => {
   cpu.recebaDigito(digito);
  });
  cpu.recebaOperacao(Operação.SOMA);
  [Digito.CINCO, Digito.ZERO].forEach((digito) => {
    cpu.recebaDigito(digito);
  });
  cpu.recebaOperacao(Operação.PERCENTUAL); 
  expect(tela.digitos).toBe("300");
  expect(tela.sinal).toBe(Sinal.POSITIVO);
  expect(tela.error).toBeFalsy(); 
})

  test("TESTE DIVISÃO 14/2", () => {
      console.log("= Testando 14/2");
      [Digito.UM, Digito.QUATRO].forEach((element) => {
        cpu.recebaDigito(element);  
      });
      cpu.recebaOperacao(Operação.DIVISÃO); 
      cpu.recebaDigito(Digito.NOVE);
      cpu.recebaControle(Controle.IGUAL);  
      expect(tela.digitos).toBe("7"); 
      expect(tela.sinal).toBe(Sinal.POSITIVO); 
      expect(tela.memoria).toBeFalsy();
      expect(tela.error).toBeFalsy();  
    })

 test("Testando subtração de resultados negativos 1 - 9", () => {
    console.log("= Testando 1 - 9 ");
    cpu.recebaDigito(Digito.UM);
    cpu.recebaOperacao(Operação.SUBTRAÇÃO);
    cpu.recebaDigito(Digito.NOVE);
    cpu.recebaControle(Controle.IGUAL);
    expect(tela.digitos).toBe("-8"); //resultado esperado
    expect(tela.sinal).toBe(Sinal.NEGATIVO); //ESPERADO
    expect(tela.memoria).toBeFalsy();
    expect(tela.error).toBeFalsy();
  });
})
