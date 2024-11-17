const inputItem = document.querySelector('#addItem')
const todosList = document.querySelector('.todos')



const btnAdd = document.querySelector("#addbtn");
btnAdd.addEventListener('click', (e) => {
    e.preventDefault()
    const inputValue = inputItem.value;



    const addsomeItem = inputItem.value.trim();
    const newTodo = document.createElement('div');
    newTodo.className = 'todo';
    newTodo.innerHTML = `
     
        
      
    <li>${inputItem.value} <i class="delete"> delete </i></li>
   

   
    `;
    todosList.appendChild(newTodo)
    inputItem.value = ""


})
const tabort = (e) => {
    const todo = e.target;
    if (todo.classList.contains('delete')) {
        todo.parentElement.remove()
    }
}
todosList.addEventListener('click', tabort)


