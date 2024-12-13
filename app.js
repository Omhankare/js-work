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

//2
class Person{                       
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`hello my name is ${this.name}`);
    }
}

class Student extends Person{            
    constructor (name,age,marks){
        super(name,age)                 
        this.marks=marks;
    }
}

class Teacher extends Person{          
    constructor(name,age,subject){
        super(name,age)                 
        this.subject=subject;
    }
}