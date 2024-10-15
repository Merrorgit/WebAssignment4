function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("ToDoInput").value;

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        li.innerText = inputValue; 
        document.getElementById("ToDoUL").appendChild(li); 
    }

    document.getElementById("ToDoInput").value = "";

    let deleteBtn = document.createElement("BUTTON");
    deleteBtn.innerText = "Delete"; 
    deleteBtn.className = "deleteBtn"; 
    deleteBtn.onclick = function() {
        li.remove(); 
    }
    li.appendChild(deleteBtn);

    let completeBtn = document.createElement("BUTTON");
    completeBtn.innerText = "Completed";
    completeBtn.className = "completeBtn";
    completeBtn.onclick = function() {
        li.classList.toggle('checked');
    }
    li.appendChild(completeBtn);
}