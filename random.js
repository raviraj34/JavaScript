
rand = Math.random()
let first,second,third;
if (rand<0.33){
   first= "chicken";

}
else if (rand<0.66 && rand>=0.33){
   first = "ticka";
}
else {
   first ="panner";
}


//secand juess
rand = Math.random()

if (rand<0.33){
   second= "football";
}
else if (rand<0.66 && rand>=0.33){
   second = "hockey";
}
else {
   second = "badmintan";
}

rand = Math.random()

if (rand<0.33){
   third= "pizza";

}
else if (rand<0.66 && rand>=0.33){
   third = "chesss";
}
else {
   third = "barger";
}

console.log(`${first} ${second} ${third}`);