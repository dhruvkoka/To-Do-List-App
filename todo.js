let todo=document.getElementById("todo")
let insert=document.getElementById("insert")
let del=document.getElementById("delete")
let value=todo.value
let output=document.getElementById("output")


insert.addEventListener("click",function(){

    localStorage.setItem(value,value)
    output.innerHTML=localStorage.getItem(value)

})
del.addEventListener("click",function(){
    localStorage.clear()
    output.innerHTML=""
    todo.value=""
})


