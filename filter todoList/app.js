const newItem = document.querySelector("#FormAdd input");
const formAdd = document.querySelector("#FormAdd");
const list = document.querySelector("#list");
const formSearch = document.querySelector("#FormSearch");
const searchItem = document.querySelector("#FormSearch input");
//INPUT NEW TODO
formAdd.addEventListener('submit',e =>{
    //prevents page to refresh when send the form
    e.preventDefault();
   // console.log(newItem.value.trim());
   // console.log(list.innerHTML);
    if(newItem.value === ''){
        //do nothing
    }else{
        list.innerHTML += `<li>
        <span class="text">${newItem.value.trim().toLowerCase()}</span>
        <span class="delete">x</span>
     </li>`;
        formAdd.reset();
    }
});

//EVENT ON LIST 
list.addEventListener("click", e=>{
    //if inside de LI tag has the class delete ,it will removes de element parent in that case (LI); 
    if(e.target.classList.contains("delete")){
        (e.target.parentElement.remove());
    }else{
        //do nothing
    }
});

const filterTodo = (item) =>{
    //create a array from list children (li) who is a html collection
  Array.from(list.children)
    .filter((todo)=>{
        //it will NOT returns the text that contains the word that we are looking for 
        return !todo.firstElementChild.textContent.includes(item);
    })
    // it will add a class called filtered for each LI tag that dont match to the word
     .forEach((todo)=>{
         todo.classList.add("filtered");
     });

     
     Array.from(list.children)
     .filter((todo)=>{
         return todo.firstElementChild.textContent.includes(item);
     }).forEach((todo)=>{
         todo.classList.remove("filtered");
     });
};


// EVENT SEARCH
formSearch.addEventListener('keyup',e=>{
    const item = searchItem.value.trim();
    filterTodo(item);
});
