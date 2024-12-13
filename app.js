class Cars{
    constructor(name,model,speed){
        this.name=name;
        this.model=model;
        this.speed=speed;
    }
    fast(){
        console.log(`this ${this.name} ${this.model} have ${this.speed} speed`);
    }
}

class Bmw extends Cars{
    constructor(name,model,speed){
        super(name,model,speed)
    }
}

class Tata extends Cars{
    constructor(name,model,speed){
        super(name,model,speed)

    }
}