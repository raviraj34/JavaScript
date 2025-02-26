let maintodoelem = document.querySelector(".todoelm");
let inputs = document.getElementsByClassName("input");




const gettodoListfromLocal =()=>{
    return JSON.parse(localStorage.getItem("todoList"));
};

let localtodolist = gettodoListfromLocal() || [];



const addtodoDynamicElement=(element)=>{
    const divelemnt =document.createElement("div");
    divelemnt.classList.add("main_todo_div");
    divelemnt.innerHTML=`<li>${element}</li> <button class="button2">delete</button>`;
    maintodoelem.append(divelemnt);
};

const Addtodo=()=>{
    console.log("hello world");


    const todolistvalue = inputs[0].value.trim();

    localtodolist.push(todolistvalue);
    localtodolist=[...new Set(localtodolist)];
    console.log(localtodolist);

    localStorage.setItem("youtubetodolist",JSON.stringify(localtodolist));



    const divelemnt =document.createElement("div");
    divelemnt.classList.add("main_todo_div");
    divelemnt.innerHTML=`<li>${todolistvalue}</li> <button class="button2">delete</button>`;
    maintodoelem.append(divelemnt);
}



const showtodolist=()=>{
    console.log(localtodolist);

    localtodolist.forEach((element) => {
    
    addtodoDynamicElement(element);
    });



    
};

showtodolist();
document.querySelector(".button1").addEventListener("click", (e) => {

    Addtodo(e);    

});

