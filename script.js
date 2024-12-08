console.log("this is a javascript string tutorial ");
let a = "raviraj";
console.log(a[4]);
let real_name = "ravirajsingh";
let friend = "rajverma";

console.log(`his name is ${real_name} and his friends name is ${friend}`);

let b = "shivam";
console.log(b.toUpperCase());


const callback = (arg) => {
    console.log(arg);

}
const loadscript = (src , callback)=> {


let sc = document.createElement("script");
sc.src = src;

sc.onload = callback("harry");
document.head.append(sc);

}