import { Imprimivel } from "../utils/imprimivel.js";
import { Comparavel } from "./comparavel.js";

export interface Modelo<T> extends Imprimivel, Comparavel<T> {

}



/* 
Uma classe só pode extender outra classe.
Uma interface pode extender várias interfaces.
*/