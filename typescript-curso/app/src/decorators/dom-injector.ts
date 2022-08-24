//o decorator de propriedade não tem o descriptor, como no decorator de método. 

//a function que vai criar e aplicar o getter de uma vez só para cada propriedade
//o getter sempre vai verificar se o elemento existe ou não // decorator versátil e performático
export function domInjector(seletor: string) {
    return function(target: any, propertyKey: string) {
        console.log(`Modificando prototype ${target.constructor.name} 
        e adicionando getter para a propriedade${propertyKey}`)
       //getter para ser aplicado mem tempo de execução//toda hora o sendo buscado, queremos buscá-lo somente uma vez, pra usar o elemento em cache;
       
       
       let elemento: HTMLElement;

       //o getter é atribuído para o define property, sempre lembra o valor da variável definida no escopo anterior
       //busca o elemento apenas uma vez, depois apenas o renderiza novamente
       const getter = function() {
        if (!elemento) {
            elemento = <HTMLElement>document.querySelector(seletor)
           console.log(`buscando elemento do DOM com o seletor
            ${seletor} para injetar em ${propertyKey}`); 
        }
        
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