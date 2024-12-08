
let a = console.log("enter first number")

let b = console.log("enter sacond number")

if(isNaN(a) || isNaN(b) ){

    throw SyntaxError("this is not allowed ")
}


let sum = parseInt(a) + parseInt(b)





try {

    console.log("the sum is "+sum)
    
} catch (error) {
    
    console.log("this is show an error" )    

}


class animal {

    constructor (name){
        this.name = name;
        console.log("class is created ")

    }


    eats(){

        console.log("khana kha raha hu ")

    }

    jumps(){
        console.log("kud raha hu")
    }

}

let ad = new animal("rabbit");
console.log(ad)


class lion extends animal{

    constructor(name){
        super(name)
        console.log("this is the lion class this the lion is in the danger")


    }



    roor(){

        console.log("lion is rorring")

    }

    run(){
        console.log("lion is runinng")
    }
}

let lio  = new lion("shera")
console.log(lio);


class cat extends lion {

    constructor (name){
        super(name)

        console.log("this is the cat class ")


    }

    meow(){
        console.log("this is the meow funtion ")

    }

}

let ca = new cat("billa")
console.log (ca)