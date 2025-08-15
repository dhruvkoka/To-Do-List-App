let todosList=[]
let todo=document.getElementById("todo")
let insert=document.getElementById("insert")
let del=document.getElementById("delete")
let output=document.getElementById("output")
let checkforPrevious=JSON.parse(localStorage.getItem("todosList"))


if (checkforPrevious){
    todosList=checkforPrevious
    render()
}
insert.addEventListener("click",function(){
    if (todo.value===""){
        void(0)
    }
    else{
        todosList.push(todo.value)
        localStorage.setItem("todosList",JSON.stringify(todosList))
        todo.value=""
        render()
    }

       

})

del.addEventListener("click",function(){
    localStorage.clear()
    todosList=[]
    output.innerHTML=""
    todo.value=""
    


})
function render(){
    let finallist=""
    for (let i=0;i<todosList.length;i++){
        finallist+=`<ul><input type="checkbox" class="todo-checkbox" data-index="${i}"> ${todosList[i]}</ul>`
    }
    output.innerHTML=finallist
}
checkbox.addEventListener("change", function (){
    if (checkbox.checked){
        output.innerHTML=""
    }

})
