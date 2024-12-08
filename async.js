async function getdata() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(455)
        }, 3500);
    })
    
}

async function main() {
    console.log("loading modules")
    console.log("do something else")
    console.log("load data")
let data = await getdata();

console.log(data)
console.log("process data")

console.log("task 2")
    
}


main()