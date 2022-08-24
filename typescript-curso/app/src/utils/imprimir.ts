import { Imprimivel } from "./imprimivel.js";

export function imprimir(...objetos: Imprimivel[]){
    for (let objeto of objetos) {
        console.log(objeto.paraTexto());
    }
}
/*
Nesta função, todo objeto tem o método paraTexto(). 
Não é possível criá-la sem a implementação do método da classe abstrata Imprimivel.
*/