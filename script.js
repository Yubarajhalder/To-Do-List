let input = document.getElementById("inp");
let txt=document.querySelector(".txt");
function Add(){
    if(input.value==""){
        alert("Enter Task")
    }else{
        let nel = document.createElement("ul")
        let li = document.createElement("li")
        li.textContent = input.value;
        let div = document.createElement("div")
        div.innerHTML="✖"
        nel.appendChild(li)
        nel.appendChild(div)
        txt.appendChild(nel)
        input.value = "";
        div.addEventListener("click", function() {
   
            nel.remove();
          });
    }
}

