$(document).ready(function() {
    $(".reset").click(function() {
        location.reload(true);
    });
    $(".start").click(quiz);

    //quiz questions array
    function quiz() {
        var scoreAry = [];
        var questions = [{
            q: "What year was Michael Jordan drafted?",
            s: ["1984", "1986", "1988", "1999"],
            a: "1984",
            correct: 0
        }, {
            q: "What year was Scottie Pippen the NBA All-Star MVP?",
            s: ["1992", "1993", "1995", "1994"],
            a: "1993",
            correct: 0
        }, {
            q: "Who was the first coach in franchise history?",
            s: ["Johnny Kerr", "Dick Motta", "Phil Jackson", "Jerry Sloan"],
            a: "Johnny Kerr",
            correct: 0
        }, {
            q: "What year did the franchise when it's first championship?",
            s: ["1989", "1991", "1993", "1984"],
            a: "1991",
            correct: 0
        }, {
            q: "What is the name of the Chicago Bulls mascot?",
            s: ["Billy the Bull", "Frankie the Bull", "Sam the Bull", "Benny the Bull"],
            a: "Benny the Bull",
            correct: 0
        }];

        var counter = questions.length;

        //This grabs the question and answer data from the questions array and appends it to the #questions div:
        function createQuestion(questions) {
            for (var i = 0; i < questions.length; i++) {
                $(".start").hide();
                $("#questions").append('<form id="' + i + '" class="center-text"><p>Question ' + (i + 1) + ' of ' + questions.length + '</p><h3 class="question">' + questions[i].q + '</h3>' + radioButtons(questions[i].s, i) + '<button type="submit" class="next">NEXT &#8594;</button></p></form>');
            }
            //This hides all except the first question:
            for (var k = questions.length - 1; k > 0; k--) {
                $('#' + k).hide();
            }
        }
        //This grabs the answer from the questions array and returns them to createQuestion():
        function radioButtons(ary, qNum) {
            var answers = [];
            for (i = 0; i < ary.length; i++) {
                answers.push('<label><input type="radio" name="' + qNum + '" value="' + ary[i] + '">' + ary[i] + '</label>');
            }
            return answers.join(" ");
        }

        //This sums the correct values in the questions array:
        function sumScore(questions) {
            return scoreAry.reduce(function(previousValue, currentValue, index, array) {
                return previousValue + currentValue;
            });
        }

        //checks user's answer and updates the score:
        function checkAnswer(answer, qNum, questions) {
            if (answer == questions[qNum].a) {
                questions[qNum].correct = 1;
                scoreAry.push(questions[qNum].correct);
            } else {
                scoreAry.push(questions[qNum].correct);
            }
        }

        createQuestion(questions);

        $(".next").click(function(event) {
            event.preventDefault(); //This stops the form from submitting
            var qNum = $(this).closest("form").attr("id"); //shows question number
            var userInput = $('input[name=' + qNum + ']:radio:checked').val(); //This grabs the user's selected answer
            if (counter > 1) {
                checkAnswer(userInput, qNum, questions);
                $("#" + qNum).hide();
                $("#" + qNum).next().show();
                counter--;
            } else if (counter == 1) {
                checkAnswer(userInput, qNum, questions);
                $("#questions").find("form").remove();
                $("#questions").append('<h3 class="result"></h3>');
                $(".result").text('You got ' + sumScore(questions) + ' questions out of 5 correct.');
                for (j = 0; j < scoreAry.length; j++) {
                    if (scoreAry[j] === 0) {
                        console.log(questions[j].q, questions[j].a);
                        $("#questions").append('<p class="missed-' + j + '">You missed: ' + questions[j].q + ' ' + questions[j].a + '</p>');
                    }
                }
            } else {
                return false;
            }
        });
    }
});