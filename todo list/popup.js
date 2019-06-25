const adicionar = document.querySelector('form');
const text = document.querySelector('#text');
const ul = document.querySelector('ul');
const del = document.querySelector('.deletar');
const itemsLi = document.querySelectorAll('li');
const lista = [];
adicionar.addEventListener('submit', (e) => {

    e.preventDefault();
    const input = text.value.trim();
    if (input === '') {
        //   console.log('erro');
    } else {

        const button = document.createElement('button');
        button.classList.add('deletar');
        button.textContent = 'del';

        const p = document.createElement('p');
        p.textContent = text.value;

        const li = document.createElement('li');

        li.append(p, button);
        ul.appendChild(li);

        //adiciona um array de objetos
        lista.push({ input });
        adicionar.reset();
        //converte esse array em JSON
        localStorage.setItem('lista', JSON.stringify(lista));

    }


});//END SUBMIT

ul.addEventListener('click', e => {
    if (e.target.className === 'deletar') {
        e.target.parentNode.remove();
        const textoP = e.target.parentNode.firstElementChild.textContent;

        // filtrar o array list e remover do local storage
        lista.filter((item, key) => {
            if (item.input === textoP) {
                // console.log(item, key);
                lista.splice(key, 1);
            }

            // adiciona no localstorage a lista com os elementos removidos
            localStorage.setItem('lista', JSON.stringify(lista));
            return lista;

        });//END FILTER

    }//END IF CLASSNAME

});// END UL EVENTLISTENER


//display on web
if (localStorage.getItem('lista')) {
    let stored = localStorage.getItem('lista');
    //converte de json para string novamente
    stored = JSON.parse(stored);

    // adicionar os itens novamente porque ao atualizar o array lista fica vazio
    stored.forEach(item => {
        return lista.push(item);
    });

    // console.log(lista);

    lista.forEach(item => {
        ul.innerHTML += `<li>
        <p>${item.input}</p>
        <button class="deletar">del</button>
        </li>
        `;
    });


};//END IF
