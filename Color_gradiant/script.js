let maintodoelem = document.querySelector(".todoelm");
let inputs = document.getElementsByClassName("input");

let localtodolist=[];


const gettodoListfromLocal =()=>{
    return JSON.parse(localStorage.getItem("todoList"));
}

const Addtodo=()=>{
    console.log("hello world");


    const todolistvalue = inputs[0].value.trim();

    localtodolist = gettodoListfromLocal() || [];
    localtodolist.push(todolistvalue);
    localtodolist=[...new Set(localtodolist)];
    console.log(localtodolist);

    localStorage.setItem("youtubetodolist",JSON.stringify(localtodolist));



    const divelemnt =document.createElement("div");
    divelemnt.classList.add("main_todo_div");
    divelemnt.innerHTML=`<li>${inputs.value}</li> <button class="button2">delete</button>`
    maintodoelem.appendChild(divelemnt);
}

document.querySelector(".button1").addEventListener("click", () => {

    Addtodo();    

})

