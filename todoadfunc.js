const todolist = JSON.parse(localStorage.getItem("todolist"));

displaytodolist();

function displaytodolist() {
  let todolistHtml = ``;

  todolist.forEach( (todoobject, index) => {
    const task = todoobject.name;
    const duedate = todoobject.duedate;
    const html = `
    <div>${task}</div>
    <div>${duedate}</div>
    <button class = "js-deletebtn">Delete</button>
  `;
    todolistHtml += html;
  });
  localStorage.setItem(`todolist`, JSON.stringify(todolist));
  document.querySelector(`.js-todo`).innerHTML = todolistHtml;

 //adding event listener for delete button
 //queryselectorall targets all the buttons with that class not only the first
 //it craetes and object containing all the buttons with that class on the page
 document.querySelectorAll(`.js-deletebtn`)
 .forEach((deletebtn, index)=>{
       deletebtn.addEventListener(`click`, () =>{ todolist.splice(index, 1); displaytodolist();})
 });

 
}
//adding event listener
 document.querySelector(`.js-addbtn`).addEventListener(`click`,()=>{addtodo()})
 document.body.addEventListener(`keydown`, (event)=>{
  if(event.key === `Enter`){
    addtodo()
  }
 })
 //adding event listener
 

function addtodo() {
  const inpElement = document.querySelector(`.js-input`);
  const name = inpElement.value;
  const dateinp = document.querySelector(`.js-duedate`);
  const duedate = dateinp.value;
  todolist.push({ name: name, duedate: duedate });
  console.log(todolist);
  inpElement.value = "";
  dateinp.value = "";
  displaytodolist();
}
