const data = document.querySelector('#data');
const days = document.querySelector('.days');
//evento ao enviar o formulario
data.addEventListener('submit',(e)=>{
    e.preventDefault();
    const html = `<h2> ${compararDatas(data)} dias de diferença</h2>`;
    days.innerHTML = html;
});

//função que compara as datas
 const compararDatas = (data)=>{
    let date1 = data.date1.value; // pega o valor do primeiro input
    let date2 = data.date2.value; // pega o valor do segundo input
    let diff = 0;
    //faz com que as datas fiquem do tipo date
    date1 = new Date(date1);
    date2 = new Date(date2);
    // compara o timestamp das datas
    if(date1.getTime() > date2.getTime()){
        //timestamp da primeira data maior que o da segunda 
         diff = date1.getTime() - date2.getTime();
    }else{
        //timestamp da segunda data maior que o da primeira
         diff = date2.getTime() - date1.getTime();
    }
    //converte o resultado do timestamp em minutos,horas e days 
    const mins = Math.round(diff / 1000 / 60);
    const hours = Math.round(mins / 60);
    const days = Math.round(hours / 24);
    //retorna os dias de diferença
    return days;
 };