import { Controle, Cpu, Digito, Operação, Sinal, Tela } from "./calculadora";

export default class CpuA1 implements Cpu {
    tela!: Tela;
    digitosArmazenados1: Array <Digito> = [];
    digitosArmazenados2: Array <Digito> = [];
    operacao: Operação | undefined = undefined;
    separadorDecimalpos1 : number = 0;
    separadorDecimalpos2 : number = 0;
    digitosArm1Sinal: Sinal = Sinal.POSITIVO;
    digitosArm2Sinal: Sinal = Sinal.POSITIVO;
    sinal: Sinal = Sinal.POSITIVO || Sinal.NEGATIVO;

    recebaDigito(digito: Digito): void {
        // Armazenar o digito
        if (this.operacao === undefined){
            this.digitosArmazenados1.push(digito)
            // Limpar a tela se for o primeiro digito
            if(this.digitosArmazenados1.length === 0){
                this.tela?.limpe()
            }
        }
        else{
            this.digitosArmazenados2.push(digito)
            // Limpar a tela se for o primeiro digito
            if(this.digitosArmazenados2.length === 0){
                this.tela?.limpe()
            }
        }
        // Mostre o digito
        this.tela?.mostre(digito)
    }

    recebaOperacao(operação: Operação): void {
        // manda o igual para cpu se já existe uma operação corrente pronta 
        if(operação == Operação.RAIZ_QUADRADA){
            this.tratarRAIZ()
            return
        }
        if(operação && this.digitosArmazenados1.length){
            this.recebaControle(Controle.IGUAL)
        }
        // Defina a operação corrente com o valor que esta chegando
        this.operacao = operação
        
    }
    recebaControle(controle: Controle): void {
        // Se o controle for para ligar a calculadora então chama o método interno que trata a ativação limpeza erro
        switch(controle){
            case Controle.ATIVAÇÃO_LIMPEZA_ERRO:
                this.tratarATIVAÇÃO_LIMPEZA_ERRO()
                break
            case Controle.IGUAL:
                this.tratarIGUAL()
                break
            case Controle.SEPARADOR_DECIMAL:
                this.tratarPONTO()
                break
        }
    }
    private convertaDigitosEmNumero(digitos:Digito[], sinal: Sinal):number{
        //multiplica por 10 e soma o novo digito
        let r = 0
        digitos.forEach(digito => {
            r = r * 10 +digito
        });
        return r * (this.sinal==Sinal.NEGATIVO?-1:1);
    }
    private convertaNumeroEmDigitos(numero: number):Digito[]{
        let digitos:Digito[] = []
        while(numero > 0){
            let digito = numero%10
            digitos.push(digito)
            numero -= digito
            numero /= 10
        }
        if (digitos.length === 0){
            digitos.push(Digito.ZERO)
        }
        return digitos.reverse()
    }
    private mostrarDigitos(digitos:Digito []):void{
        this.tela?.limpe()
        digitos.forEach(digito => {
            this.tela?.mostre(digito)
        });
        this.tela.mostreSinal(this.sinal)
    }
    private tratarIGUAL() {
        const numero1 = this.convertaDigitosEmNumero(this.digitosArmazenados1, this.digitosArm1Sinal)
        const numero2 = this.convertaDigitosEmNumero(this.digitosArmazenados2, this.digitosArm2Sinal)
        let resultado = 0
        if (this.operacao === Operação.SOMA){
            resultado = numero1 + numero2
        }
        if (this.operacao === Operação.SUBTRAÇÃO){
            resultado = numero1 - numero2
        }
        if (this.operacao === Operação.MULTIPLICAÇÃO){
            resultado = numero1 * numero2
        }
        if (this.operacao === Operação.DIVISÃO){
            resultado = numero1 / numero2
        }
        let resultadoDigitos = this.convertaNumeroEmDigitos(resultado)
        this.digitosArmazenados1 = resultadoDigitos
        this.mostrarDigitos(resultadoDigitos)
        this.digitosArmazenados1 = this.convertaNumeroEmDigitos(resultado)
        this.digitosArm1Sinal = resultado>0?Sinal.POSITIVO:Sinal.NEGATIVO;
    }
    private tratarRAIZ() {
        const numero = this.convertaDigitosEmNumero(this.operacao === undefined ? this.digitosArmazenados1 : this.digitosArmazenados2, this.digitosArm1Sinal)
        if (numero >= 0) {
            const resultado = Math.sqrt(numero)
            const resultadoDigitos = this.convertaNumeroEmDigitos(Math.floor(resultado)) 
            if (this.operacao === undefined){
                this.digitosArmazenados1 = resultadoDigitos
            }
            else{
                this.digitosArmazenados2 = resultadoDigitos
            }
            this.mostrarDigitos(resultadoDigitos)
        }
    }
    private tratarPONTO(){
        if (this.operacao === undefined){
            this.separadorDecimalpos1 = this.digitosArmazenados1.length
        }
        else{
            this.separadorDecimalpos2 = this.digitosArmazenados2.length
        }
    }
    tratarATIVAÇÃO_LIMPEZA_ERRO() {
        // LImpe a tela 
        this.tela?.limpe()

        // Mostre o zero na tela
        this.tela?.mostre(Digito.ZERO)
    }
    reinicie(): void {
        throw new Error("Method not implemented.");
    }
    definaTela(tela: Tela): void {
        this.tela = tela
    }
    obtenhaTela(): Tela|undefined{
        return this.tela
    }
}