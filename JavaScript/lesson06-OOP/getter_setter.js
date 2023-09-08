#!/usr/bin/env node

// get/ set - binds a property to a function that controls how it's accessed,
//            this promotes encapsulation

class Secret {
    #passwd = "";
    constructor(passwd){
        this.#passwd =  passwd;
    }

    get pass(){
        return this.#passwd
    }

    set pass(passwd){
        this.#passwd = passwd
    }
}

shhh = new Secret("Onions Have Layers")
console.log(shhh.pass)
shhh.pass = "Lumos"
console.log(shhh.pass)
