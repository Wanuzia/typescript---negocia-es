export function logarTempoDeExecucao(emSegundos: boolean = false) {
    return function(
        target: any, //função construtora da classe em caso de método estático; - prototype em outros casos; any porque pode ser construtor ou prototype
        propertyKey: string, //me dá o nome do método
        descriptor: PropertyDescriptor //sabe tudo sobre o método, tem referência para o método original
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: Array<any>){
            let divisor = 1;
            let unidade = 'milisegundos';
            if (emSegundos) {
                divisor = 1000;
                unidade =  'segundos'
            }
            const t1 = performance.now();
            //apply permite passar um contexto(o 'this' é o que vai ser executado, por exemplo o método 'adiciona') e um array de parametros, assim cada parâmetro passado ocupa uma posição no 'args'.
            const retorno = metodoOriginal.apply(this, args)
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t1 - t2)/divisor} ${unidade}.`)
            retorno
            
        };
        return descriptor;
    }
}