let todoList = [ 
   {item : 'study' ,
   dueDate : '2025-10-12'
   } , 
   {item : 'sleep', 
   dueDate : '2025-10-12'
   } , 
   {item : 'enjoy',
   dueDate : '2025-10-12'
   }]
displayItems();
function addTodo(){
   let inputElement = document.querySelector('#todo-input') ;
   let dateElement = document.querySelector('#todo-date');
   let todoItem = inputElement.value ;
   let todoDate = dateElement.value ;
   
   todoList.push({item : todoItem , dueDate: todoDate});
   inputElement.value = '' ;
   dateElement.value = '' ;
   displayItems();
}

function displayItems(){
   let containerElement = document.querySelector('.todo-container');
   let newHtml = '';
   for( let i = 0 ; i < todoList.length; i++){
     let item = todoList[i].item;    // let {item, dueDate} = todoList[i];
     let dueDate = todoList[i].dueDate;  
   newHtml += `
   
   <span>${item } </span>
   <span>${dueDate} </span>
   
   <button id="dlt-button" onclick= " todoList.splice(${i} , 1); displayItems();"> Delete </button>
  
   `;
   
   }
   containerElement.innerHTML = newHtml;
   
}
