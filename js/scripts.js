let post  = document.getElementById("toDoSubmit");
let clear  = document.getElementById("toDoClear");
let mark  = document.getElementById("toDoMark");
let del  = document.getElementById("toDoDelete");
 
post.addEventListener("click",TodoPost);
clear.addEventListener("click",TodoClear);
mark.addEventListener("click",TodoMark);
del.addEventListener("click",TodoDel);
 
function TodoPost(e){
    e.preventDefault();

    //para sacar el valor del textarea
    var todo = document.getElementById("toDoTexto").value;
    var list = document.getElementById("toDoLista");
     
    let currentListHTML = list.innerHTML;
    list.innerHTML = currentListHTML + '<input type = "checkbox" name="todo" /> ' + todo + '<br>';
}
 
function TodoClear(e){
    e.preventDefault();
 
    var todos = document.getElementsByName("todo");
 
    for (var i = 0; i <todos.length; i++){
        todos[i].checked = false;
    }
 
}
 
function TodoMark(e){
    e.preventDefault();
    var todos = document.getElementsByName("todo");
 
    for (var i = 0; i <todos.length; i++){
        todos[i].checked = true;
    }
 
}
 
function TodoDel(e){
    e.preventDefault();
 
    var list = document.getElementById("toDoLista");
    list.innerHTML = "";
}








