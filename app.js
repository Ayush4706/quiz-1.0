const correctAnswer=['A','B','C','B','C'];
const form=document.querySelector('.quiz-form');
const result=document.querySelector('.result');
form.addEventListener('submit',e=>{
    e.preventDefault();
    const userAnswer=[form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value];
    let score=0;
    userAnswer.forEach((answer,index)=>{

        if (answer===correctAnswer[index]){
            score+=20;
        }
        index+=1
    });

    scrollTo(0,0);

    result.classList.remove('d-none');

    let output=0;

    const timer=setInterval(()=>{
        result.querySelector('span').textContent=`${output}%`;
        if (output===score){
            clearInterval(timer);
        }
        else{
            output++;
        }


    },60);

})