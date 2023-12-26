document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //grab the form element
  let form = document.querySelector('form')
   
  //add event listener to the form
  form.addEventListener('submit', (e) => {
    e.preventDefault(); //prevents the form's default behaviour
    buildToDo(e.target.new_task_description.value) //passes the value of the event's target to the buildToDo function
    form.reset() //resets the form 
  })
});

function buildToDo(todo) {
  let p = document.createElement('p') //creates a paragraph element
  let btn = document.createElement('button') // creates the button beside the p element
  btn.addEventListener('click', handleDelete) 
  btn.textContent = "x" //sets the text of the button to be a lowercase x
  p.textContent = `${todo} ` // note the whitespace after the closing curly brace 
  p.appendChild(btn) //appends the button to the paragraph
  document.querySelector('#tasks').appendChild(p) // appends the paragraph to the to do list
}

function handleDelete(e) {
  e.target.parentNode.remove() //removes the paragraph when the button is clicked
}
