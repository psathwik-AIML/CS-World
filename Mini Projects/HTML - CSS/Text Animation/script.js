let input=document.querySelector("input")
let h1=document.querySelector("#text")


function animate(text){
    lettersArray=text.split("")
    // console.log(lettersArray);
    let s=lettersArray.map((eachLetter)=>{
        return `<span>${eachLetter}</span>`
    })
    s=s.join("")
    // console.log(s);
    
    h1.innerHTML=s
    Array.from(h1.children).forEach((each,index)=>{
        setTimeout(()=>{
            each.classList.add("wave")
        },index*100+200)
    })
}
animate(input.value)

input.oninput=()=>{
    animate(input.value)
}