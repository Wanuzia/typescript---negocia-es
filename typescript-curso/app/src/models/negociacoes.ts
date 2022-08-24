import { Imprimivel } from '../utils/imprimivel.js';
import { Negociacao } from './negociacao.js';

export class Negociacoes extends Imprimivel{
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
    
    public paraTexto():string {
        return JSON.stringify(this.negociacoes, null, 2)
    }
}

/*
Polimorfismo: a capacidade que 
um objeto tem de ser referenciado de múltiplas formas.
Exemplo: a classe abstrata Imprimivel.
*/