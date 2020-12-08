function addTask() {
    const task = document.getElementById("tarefa")
    const day = document.getElementById("dias-semana").value
    const hour = document.getElementById("hora")

    if(task.value !== "") {
        if(hour !== "") {
            const selectedDay = document.getElementById(day)
            selectedDay.innerHTML += `<li onclick="erase(this)">${hour.value}h - ${task.value}</li>`

            task.value = ""
            hour.value = ""
        } else {
            alert("Você não pode deixar a hora em branco!")
        }
    } else {
        alert("Você não pode deixar a tarefa em branco!")
    }
}

function erase(clicked) {
    clicked.style.textDecoration = "line-through";
}

function eraseAll() {
    const days = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"]
    
    for (d of days) {
        document.getElementById(d).innerHTML = "";
    }
}