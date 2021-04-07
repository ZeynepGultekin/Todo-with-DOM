const todoInput = document.querySelector('.todo-input');
const addButton = document.querySelector('.add-btn');
const todoDiv = document.querySelector('.todo-container');
const filterOption = document.querySelector('.filter-todo');
const ulElement = document.querySelector('ul');
const spanElement = document.querySelector('span');



//EventListeners
addButton.addEventListener('click',addTodo);
//filterOption.addEventListener('click', filterTodo);

//Functions 
function addTodo(event){
    event.preventDefault();
    if(todoInput.value === ""){
        alert("You didn't write any TODO!")
    }
    else{
        //create elements
        todoDiv.classList.add('card-body');
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
        
        spanElement.addEventListener('click',deleteCheckEdit);
        
    }
};

function deleteCheckEdit(event){
    //event.preventDefault();
    //console.log(event.target);
    //event.target = span element;

    let a = event.target.classList;
    //console.log(a);
    for(let i =0; i < a.length; i++){
        if(a[i].match('delete-btn')){
            event.target.parentElement.parentElement.remove();
        }
        else if(a[i].match('edit-btn')){
            var editValue = prompt('edit the selected item');
            //console.log(event.target.parentElement.parentElement.firstChild.nodeValue);
            event.target.parentElement.parentElement.firstChild.nodeValue = editValue;  
        }
        else if(a[i].match('complete-btn')){
        event.target.parentElement.parentElement.classList.toggle('checked');
        }

            
    }
 
    
}

