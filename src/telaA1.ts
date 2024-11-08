import { Digito, Sinal, Tela } from "./calculadora";

export default class DisplayA1 implements Tela {
    mostreSeparadorDecimal(): void {
        console.log("●"); 
    }

    mostreSinal(sinal: Sinal): void {
        console.log(sinal == Sinal.NEGATIVO ? "-" : "");
    }

    mostre(digito: Digito): void {
        switch (digito) {
            case Digito.ZERO:
                console.log('0000\n0 0\n0 0\n0 0\n0000\n');
                break;
            case Digito.UM:
                console.log("  1 \n  1 \n  1 \n  1 \n1111\n");
                break;
            case Digito.DOIS:
                console.log("2222\n   2\n2222\n2\n2222");
                break; 
            case Digito.TRÊS:
                console.log("3333\n   3\n 333\n   3\n3333\n");
                break;
            case Digito.QUATRO:
                console.log("4  4\n4  4\n4444\n   4\n   4\n");
                break;
            case Digito.CINCO:
                console.log("5555\n5   \n5555\n   5\n5555\n");
                break;
            case Digito.SEIS:
                console.log("6666\n6   \n6666\n6  6\n6666\n");
                break;
            case Digito.SETE:
                console.log("7777\n   7\n   7\n   7\n   7\n");
                break;
            case Digito.OITO:
                console.log("8888\n8  8\n8888\n8  8\n8888\n");
                break;
            case Digito.NOVE:
                console.log("9999\n9  9\n9999\n   9\n9999\n");
                break;
            default:
                console.log("Dígito inválido");
        }
    }

    mostreMemoria(): void {
        // Implementação do método
        console.log("Mostrando memória");
    }

    mostreErro(): void {
        // Implementação do método
        console.log("Mostrando erro");
    }

    limpe(): void {
        console.log("Limpando a tela");
    }
}