export abstract class Imprimivel {
    public abstract paraTexto():string;
}

/*
classes abastratas não podem ser instanciadas;
classes abstratas possuem métodos que devem ser implementados,
caso contrário, dá erro em tempo de desenvolvimento, o que garante
performance e evita erros no código.
*/