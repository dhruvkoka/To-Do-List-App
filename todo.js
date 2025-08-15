const todo=document.getElementById("todo")
let insert=document.getElementById("insert")
let del=document.getElementById("delete")
let output=document.getElementById("output")
let todosList=[]
let checkforPrevious=localStorage.getItem("todosList")

function checkPrevious(){
    if(checkforPrevious){
        todosList=checkforPrevious
        render()
    }
}



insert.addEventListener("click",function(){
    if (todo.value===""){
        void(0)
    }
    else{
        todosList.push(todo.value)
        localStorage.setItem("todosList",todosList)
        todo.value=""
        render()
    }

       

})

del.addEventListener("click",function(){
    localStorage.clear()
    todosList=[]
    output.innerHTML=""
    


})
function render(){
    finallist=""
    for (let i=0;i<todosList.length;i++){
        finallist+=`<li>${todosList[i]}</li>`
    }
    output.innerHTML=finallist
}
