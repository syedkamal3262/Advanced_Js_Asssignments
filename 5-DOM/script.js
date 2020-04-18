var userInput =document.getElementById("userInput");

function deleteLi(){
    var del=document.getElementById("del");
    var res=del.parentElement.parentElement.remove;
    console.log(res);
}
function result(){
    if(userInput.value !== ""){
    var result=document.getElementById("result");
    var x = document.createElement("li");
    var z = document.createElement("button");
    var t = document.createTextNode(userInput.value);
    x.appendChild(t);
    z.value=userInput.value;
    result.appendChild(x);
    x.appendChild(z);
    var e = document.createTextNode("Delete");
    z.appendChild(e);
    // z.setAttribute("onclick","deleteLi()");
    z.setAttribute("type","submit");
    z.setAttribute("id","del");
    userInput.value=null;
    z.addEventListener('click', function() {
        z.parentElement.remove();
    }, false);
        

    }
    
}
