let task = [
    {task : "Task 1", status : "False"},
    {task : "Task 2", status : "True"},
    {task : "Task 3", status : "False"},
    {task : "Task 4", status : "True"},
]

function analyzer(todo){
    todo.forEach((element) => {
        if(element.status === "True"){
            console.log(element.task + " = " + element.status)
        }
    })
}
analyzer(task)