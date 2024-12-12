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
  

