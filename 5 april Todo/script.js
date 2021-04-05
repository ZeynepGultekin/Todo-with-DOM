const todoInput = document.querySelector('.todo-input');
const addButton = document.querySelector('.add-btn');
const todoDiv = document.querySelector('.todo-container');
const filterOption = document.querySelector('.filter-todo');

//create ul
const ulElement = document.createElement('ul');
ulElement.classList.add('list-group','todo-list');



//Event listener 
addButton.addEventListener('click',function(event){

    if(todoInput.value === ""){
        alert("You didn't write any TODO!")
    }
    else{
        //create elements
        todoDiv.classList.add('card');
        todoDiv.appendChild(ulElement);

        const liElement = document.createElement('li');
        liElement.classList.add('list-group-item');
        liElement.innerHTML = todoInput.value;
        ulElement.appendChild(liElement);
        todoInput.value ="";
        
        const spanElement = document.createElement('span');
        liElement.appendChild(spanElement);
        
        const editButton = document.createElement('button');
        editButton.classList.add('btn','btn-outline-primary','edit-btn');
        editButton.innerHTML = '<i class="fas fa-edit"></i>'
        
        const checkButton = document.createElement('button');
        checkButton.classList.add('btn','btn-outline-success','complete-btn');
        checkButton.innerHTML = '<i class="fas fa-check"></i>'
        
        
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn','btn-outline-danger','delete-btn');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>'
        
        spanElement.appendChild(editButton);
        spanElement.appendChild(checkButton);
        spanElement.appendChild(deleteButton);
    }
});
