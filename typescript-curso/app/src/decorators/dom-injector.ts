//o decorator de propriedade não tem o descriptor, como no decorator de método. 

export function domInjector(seletor: string) {
    return function(target: any, propertyKey: string) {
        console.log(`Modificando prototype ${target.constructor.name} 
        e adicionando getter para a propriedade${propertyKey}`)
       //getter para ser aplicado mem tempo de execução//toda hora o sendo buscado, queremos buscá-lo somente uma vez, pra usar o elemento em cache;
        const getter = function() {
            const elemento = document.querySelector(seletor);
            console.log(`buscando elemento do DOM com o seletor
            ${seletor} para injetar em ${propertyKey}`);
            return elemento;
        }
//cria o getter
        Object.defineProperty(
            target,
            propertyKey,
            { get: getter }
        );
    }
}