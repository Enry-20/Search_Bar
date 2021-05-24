const input= document.getElementById("input0")
const autocomplete=document.getElementById("autocomplete")



const states= async inputText =>{
    const res = await fetch("obj0.json")
    const satados= await res

    console.log(satados)
    }



input.addEventListener("input", ()=> states(input.value))