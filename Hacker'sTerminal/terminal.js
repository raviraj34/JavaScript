
const additem = async (item) => {
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div)
}

const randomDelay = () => {
    return new Promise((resolve, reject) => {
        timeout = 1 + 6 * Math.random();
        setTimeout(() => {
            resolve()
        }, timeout * 1000);
    })
}
async function main() {
    let t = setInterval(() => {
        let last = document.body.getElementsByTagName("div");
        last = last[last.length-1]
        if (last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length -3)
        }
        else {
            last.innerHTML = last.innerHTML + "."
        }
    }, 100);

    let text = ["intialized Hacking now reading your data",
        "reading your files ",
        "password files detected",
        "sending all password and person1 files to server",
        "cleaning up"]


    for (const item of text) {
        await additem(item)

    }
    
    await randomDelay()
    clearInterval(t)
}
main()