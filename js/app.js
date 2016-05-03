$(document).ready(function() {
  //quiz questions

        
				//variables
        var numberCorrect = 0;
        var currentQuestion = 0;

        $("#submit").on("click",function () {
        currentQuestion++;
        nextQuestion();
    });
});


var questions = [{
            question: "What year was Michael Jordan Drafted?",
            choices: ['1984', '1986', '1988'],
            qNum: 0,
            correct: 0,
            fact: "Michael Jordan was drafted in 1984 and was the third overall pick."
        }, 
        {
            question: "What year did Scottie Pippen win the NBA All-Star MVP?",
            choices: ['1992', '1993', '1994'],
            qNum: 1,
            correct: 2,
            fact: "Scottie Pippen scored 29 points and grabbed 11 rebounds on his way to being named the 1994 NBA All-Star MVP."
        }, 
        {
            question: "Who was the first coach in franchise history?",
            choices: ["Johnny Kerr", "Dick Motta", "Jerry Sloan"],
            qNum: 2,
            correct: 0,
            fact: "Johnny Red Kerr was the first coach in franchie history in 1966."
        }, 
        {
            question: "What year did the franchie win it's first championship?",
            choices: ['1989', '1991', '1984'],
            qNum: 3,
            correct: 1,
            fact: "The Chicago Bulls defeated the Los Angeles Lakers in 1991 to win their first NBA Championship."
        }, 
        {
            question: "What is the name of their mascot?",
            choices: ["Billy the Bull", "Benny the Bull", "Frankie the Bull"],
            qNum: 4,
            correct: 1,
            fact: "Benny the Bull."
        }]



