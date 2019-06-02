const adicionar = document.querySelector('.adicionar');
const text = document.querySelector('#text');
const ul = document.querySelector('ul');
const del = document.querySelector('.deletar');
const itemsLi = document.querySelectorAll('li');

    adicionar.addEventListener('click', () =>{
       
        if(text.value.trim() === ''){
         //   console.log('erro');
        }else{
        const button = document.createElement('button');
        button.classList.add('deletar');
        button.textContent = 'del';
    
        const p = document.createElement('p');
        p.textContent = text.value;

        const li = document.createElement('li');

        li.append(p,button);
        ul.appendChild(li);

        }
    });

   ul.addEventListener('click', e=>{
        if(e.target.className === 'deletar'){
            e.target.parentNode.remove();
        }
   });
        
