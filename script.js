let input = document.querySelector(".input");;
var addButton = document.querySelector(".addButton");
let container = document.querySelector(".Container");

// class item{
// constractor(todo){
// this.createDive(todo);
// 	}

function createDive(todo){
		// console.log("sada", todo);

		let input = document.createElement('input');
		input.value = todo;
		// input.disabled = true;
		input.classList.add('item_input');
		input.type = "text";                                 

		let itemBox = document.createElement('div');
		itemBox.classList.add('item');
			// add button and button name EDIT
		let editButton = document.createElement('button');
		editButton.innerHTML = "EDIT";
		editButton.classList.add('editBtn');

			// add button and button name removeButton
		let removeButton = document.createElement('button');
		removeButton.innerHTML = "REMOVE"
		removeButton.classList.add('deleteBtn')

		container.appendChild(itemBox);

		itemBox.appendChild(input);
		itemBox.appendChild(editButton);
		itemBox.appendChild(removeButton);

		editButton.addEventListener('click', () => edit(input));

		removeButton.addEventListener('click', () => remove(itemBox))

		
	}

	function edit(input){
		// input.focus
		input.disabled = !input.disabled;
	}
	function remove(item){
		if(confirm("Are you sure you can delete this Field")){
			container.removeChild(item);
		}
		else{
			return false;
		}
	}

// }





function check(){

	if(input.value != ""){
		createDive(input.value);
		// new item(input.value);
		input.value = "";
	}
}
 addButton.addEventListener('click', check);

 // addButton.addEventListener('click', check);
 // window.addEventListener('keydown', (e) =>{
 // 	if(e.which == 0){
 // 		check();
 // 	}
 // })

// new item("Sporrt")

