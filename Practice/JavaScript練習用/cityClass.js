'use strict'

class GenerateTime {
    constructor() {
        console.log(Date());
    }
}

class City extends GenerateTime {
    // private 
    // private thisへの追加によって後から追加できない。
    static country;
    #name;
    population;
    #citizen

    // コンストラクタ
    constructor(country, name, population, citizen) {
        super();
        this.country = country;
        this.#name = name;
        this.population = population;
        this.#citizen = citizen;
    }

    // getter
    getName() {
        return this.#name;
    }

    // getter
    getCitizen() {
        return this.#citizen;
    }
}

var Citizen = class {
    //private 
    #name;
    #age;

    // コンストラクタ
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    // getter
    getName() {
        return this.#name;
    }
}

let hyogo = new City("japan", "hyogo", 100, new Citizen("Tok", 50));
let oosaka = new City("japan", "oosaka", 110, new Citizen("kty", 40));

console.log(hyogo.getCitizen().getName());
console.log(oosaka.getCitizen().getName());

// 外部から新しくプロパティ、メソッドを作成する場合。
hyogo.prefecturalOfficeLocation = "kobeCity";

City.prototype.getNameAndPlace = function () {
    console.log(`県名:${this.getName()} + 市民名:${this.getCitizen().getName()} + 県庁所在地${this.prefecturalOfficeLocation}`);
};

hyogo.getNameAndPlace();

