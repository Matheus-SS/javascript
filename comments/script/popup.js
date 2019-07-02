const ul = document.querySelector('ul');
const form = document.querySelector('form');
// funcão de abrir e fechar card body
ul.addEventListener('click', e => {
    if (e.target.className.includes("open")) {
        const cardBody = e.target.offsetParent.lastElementChild;

        cardBody.classList.add("hide");
        e.target.classList.add("spin");
        e.target.classList.add("close");
        e.target.classList.remove("open");
    } else if (e.target.className.includes("close")) {
        const cardBody = e.target.offsetParent.lastElementChild;

        cardBody.classList.remove("hide");
        e.target.classList.remove("spin");
        e.target.classList.remove("close");
        e.target.classList.add("open");
    }

});

// enviar comentario
form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.name.value;
    const title = form.title.value;
    const comment = form.comment.value;
    const completeInput = {
        //o nome do objeto vai ser o nome que sera gravado no banco
        name,
        title,
        comment
    };
    form.reset();
    // adicionar no banco 
    db.collection('comments').add(completeInput).then(() => {
        console.log("added done");
    }).catch(err => {
        console.log(err);
    });
});

// pegando os commentarios do banco e removendo em tempo real
db.collection('comments').onSnapshot(snapshot =>{
    snapshot.docChanges().forEach(change =>{
        const doc = change.doc;
        if(change.type === 'added'){
            addComment(doc.data(), doc.id);
        }else if(change.type === 'removed'){
            deleteComment(doc.id);
        }
    });
});

// criando uma função para que receba os dados do banco e apareça na tela
const addComment = (commnent, id) => {
    html = `
    <li data-id = "${id}">
            <div class="card mb-2 mt-4">
                <div class="card-header d-flex justify-content-between">
                    <h5>${commnent.title}</h5>
                     <i class="fas fa-plus open"></i>
                </div>

                <div class="card-body">
                    <h5 class="card-title">${commnent.name}</h5>
                    <p class="card-text">${commnent.comment}</p>
                    <button class="btn btn-danger">delete</button>
                </div>
            </div>
        </li>
    `;

    ul.innerHTML += html;
};

//remove da tela o elemento li 
const deleteComment = (id) =>{
    const li = document.querySelectorAll('li');
    li.forEach(li =>{
        if(li.getAttribute('data-id') === id){
            li.remove();
        }
    });
}

//deleta o documento do banco
ul.addEventListener('click', e => {
    if(e.target.tagName === 'BUTTON'){
        //pega o id do elemento LI
        const idLi = e.target.parentElement.parentElement.parentElement.getAttribute('data-id');
        db.collection('comments').doc(idLi).delete().then(() => {
            console.log('delete done');
        }).catch(err => {
            console.log('delete error: ',err);
        });
    }
});