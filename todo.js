const todo=document.getElementById("todo")
let insert=document.getElementById("insert")
let del=document.getElementById("delete")
let output=document.getElementById("output")
let value=todo.value


insert.addEventListener("click",function(){
    let value=todo.value
    localStorage.setItem("value",JSON.stringify(value))
    output.textContent=JSON.parse(localStorage.getItem("value"))


})
del.addEventListener("click",function(){
    localStorage.clear()
    output.textContent=""
    todo.value=""

})



