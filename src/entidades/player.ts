import { StringMappingType } from "typescript";

export default class Player {
    public name : string;
    public idade : number;

    constructor(name : string, idade :number){
        this.name = name;
        this.idade = idade;

    }
}