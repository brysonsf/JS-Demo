let wrapper

const sleep = (ms) => new Promise ( resolve => setTimeout(resolve, ms))


// writes string console logs once per typing demo iteration
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
        wrapper.textContent=wrapper.textContent.substring(0, wrapper.textContent.length-2)
    }
};

writingString('item', 'data-text');