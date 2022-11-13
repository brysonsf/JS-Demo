let wrapper

const sleep = (ms) => new Promise ( resolve => setTimeout(resolve, ms))


// can write any text into a container with the cute vibes
async function writingString(stringTarget, container){
    wrapper = document.querySelector('[' + container + ']')
    const stringsContainer = document.getElementsByClassName(stringTarget)

    while(wrapper){
        for(i=0; i<stringsContainer.length; i++){
            const string = stringsContainer[i].textContent
            console.log(string)
            await write(string)
            await sleep(1000)
            await erase()
            await sleep(1000)
        }
    }
};

async function write(stringText){
    let index=0;
    while(index < stringText.length){
        const timeout=100
        await sleep(timeout)
        index++
        wrapper.innerHTML=stringText.substring(0, index)
    }
};

async function erase(){
    while(wrapper.textContent.length){
        const timeout=100
        await sleep(timeout)
        //erase speed set by substring length reduction
        wrapper.textContent=wrapper.textContent.substring(0, wrapper.textContent.length-1)
    }
};
// put prompt behind button

function addText(){
    var name=prompt("i love you; whats ur name");
    var newElement = document.createElement("SPAN");
    var text = document.createTextNode(name);
    newElement.className="item";
    newElement.appendChild(text);
    document.querySelector(".wrapper").appendChild(newElement);
};

// create function for text entry and add element
/*
    - create array of items
        - halt async
    - append additional elements
    - restart
*/

writingString('item', 'data-text');