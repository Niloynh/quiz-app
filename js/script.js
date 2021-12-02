const MyBtn = document.querySelector(".MyBtn button");
const RulesBox = document.querySelector(".RulesBox")
const exitButton = document.querySelector(".Buttons .ExitButton")
const ContinueButton = document.querySelector(".Buttons .ContinueButton")
const Questions = document.querySelector(".Questions")

MyBtn.onClick = () => {
    RulesBox.classList.add("activeInfo");
}
exitButton.onClick = () => {
    RulesBox.classList.remove("activeInfo")
}
ContinueButton.onClick = () => {
    RulesBox.classList.remove("activeInfo")
    Questions.classList.add("activeQuiz")
    showQuestions(0)
}

const nextBtn = document.querySelector(".nextBtn")

let que_count = 0;
nextBtn.onClick = () => {
    if(que_count <questions.length - 1) {
        que_count ++
        showQuestions(que_count)
    }
    else{
       console.log("you have complete your task") 
    }
}


function showQuestions(index) {
    const que_text = document.querySelector('.text');

    const option_list = document.querySelector(".MyOptions");

    let option_tag = '<div class="options"><span>'+ questions[index].options[0] +'</span></div>'
                     +'<div class="options"><span>'+ questions[index].options[1] +'</span></div>'
                     + '<div class="options"><span>'+ questions[index].options[2] +'</span></div>'
                     + '<div class="options"><span>'+ questions[index].options[3] +'</span></div>';


    let que_tag = "<span>" + questions[index].numb + '.' + questions[index].question +"</span>";

    que_text.innerHTML = que_tag;
    
    option_list.innerHTML = option_tag;
    const total_que = document.querySelector(".total_que");
    let total_queTag = '<p>'+ questions[index].numb + 'Of 5</p>';
    total_que.innerHTML = total_queTag;
}