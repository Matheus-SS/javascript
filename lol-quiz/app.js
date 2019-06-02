const correctAnswer = ['B','C','A','D'];
const form = document.querySelector("#form");
const result = document.querySelector(".result");
form.addEventListener('submit', e =>{
    e.preventDefault();
    let score = 0;
    //console.log(form.q1.value);
    const answer = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    answer.forEach((item,index)=>{
        if(item === correctAnswer[index]){
        score +=25;
        }else{
        score +=0;
        }
    });
    window.scrollTo(0,0);

    let i = 0;
    const timer = setInterval(()=>{
        result.textContent= i + '%';
        if(i === score){
            clearInterval(timer);
        }else{
            i++;
        }
       
    },50);
});