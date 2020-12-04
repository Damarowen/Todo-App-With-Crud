  // variabel
  const todo = document.getElementById('todo')
  const tambah = document.getElementById('tambah')
  const inputs = document.getElementById('inputs')


  // delete todo
  todo.addEventListener("click", function (e) {
      const buttonTgt = e.target
      const tgt = e.target.parentNode.parentNode
      if (buttonTgt.id == "remove") {
          tgt.remove();
      }
  });

  //edit todo
  todo.addEventListener('click', (e) => {
      // if user click button edit
      if (e.target.id == "edit") {
          const listItem = e.target.parentNode.parentNode
          const editInput = listItem.querySelector('.input');
          const label = listItem.querySelector("label");
          // switch class
          if (listItem.classList.contains("editMode")) {
              label.innerText = editInput.value;
          } else {
              editInput.value = label.innerText;
          }
          // if enter
          editInput.addEventListener("keyup", () => {
              if (event.keyCode === 13) {
                  listItem.querySelector('#edit').click()
              }
          })

          listItem.classList.toggle("editMode");
          // cursor go to input
          editInput.focus()

      }

  })


  //function on click
  let addNew = function (e) {
      const labelTag = document.createElement('label')
      const newTodo = document.createElement('li')
      // insert elemet to label tag
      labelTag.append(inputs.value)
      newTodo.append(labelTag)
      newTodo.innerHTML +=
          "<input type=\"text\" class=\"input\"> <span><button type=\"button\" id=\"remove\">Delete</button></span><span><button type=\"button\" id=\"edit\">Edit</button></span>"
      todo.append(newTodo)
      inputs.value = ""
  }

//if user enter to input text it will trigger add new function
  inputs.addEventListener('keyup', (e) => {
      if (event.keyCode === 13) {
          document.querySelector('#add').click()
      }
  })



  // let editTask = function (e) {
  //     const listItem = this.parentNode.parentNode
  //     const  tgt = e.target.parentNode.parentNode
  //     const  editInput = listItem.querySelector('input[type=text]');
  //     const  label = listItem.querySelector("label");
  //     //If class of the parent is .editmode
  //     if (listItem.classList.contains("editMode")) {
  //         label.innerText = editInput.value;
  //     } else {
  //         editInput.value = label.innerText;
  //     }
  //     tgt.classList.toggle("editMode");
  // }

  // editButton.onclick = editTask;