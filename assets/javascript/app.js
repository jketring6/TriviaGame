var questions = [{
	question: "Which of the following dragons was NOT used in the Triwizard Tournament?",
	choices: ["Norwegian Ridgeback", "Hungarian Horntail", "Swedish Short-Snout", "Chinese Fireball"],
	answer: 0
},
{
	question: "What position on the Gryffindor Quidditch team did Ron Weasley play?",
	choices: ["Chaser", "Seeker", "Beater", "Keeper"],
	answer:	3
},
{
	question: "Which of the Deathly Hallows does Harry receive as a Christmas gift?",
	choices: ["Elder Wand", "Cloak of Invisibility", "Resurrection Stone"],
	answer:	1
},
{
	question: "Which Defense Against the Dark Arts professor dies before the end of the school year?",
	choices: ["Dolores Umbridge", "Gilderoy Lockhart", "Remus Lupin", "Quirinus Quirrell"],
	answer:	3
},
{
	question: "Which of the Weasleys went to Romania to study dragons?",
	choices: ["Percy", "Bill", "Charlie", "George"],
	answer:	2
}];

var correctAnswers = 0;
var incorrectAnswers = 0;
var uncompletedQuestions = 5;

$(document).ready(function() {

	$("#questionsDiv").hide();

	$(".start").on("click", function() {

		$("#start").hide()
		$("#questionsDiv").show();

		setTimeout(setTimer);

		var timeRemaining = 59;

		var counter = setInterval(setTimer, 1000);

		function setTimer() {

			$("#timer").html("Time Remaining: 00:" + timeRemaining);

			timeRemaining--;

			if (timeRemaining <= 0) {

				clearInterval(counter);

				$("#timer").html("<h4>Correct Answers: " + correctAnswers + "<br>" + "Incorrect Answers: " + incorrectAnswers + "<br>" + "Uncompleted: " + uncompletedQuestions + "<br><br> Reload the page to try again!</h4>");

				$("#questionsDiv").hide();			
			}

			$(".submit").on("click", function submit() {

				clearInterval(counter);

				$("#timer").html("<h4>Correct Answers: " + correctAnswers + "<br>" + "Incorrect Answers: " + incorrectAnswers + "<br>" + "Uncompleted: " + uncompletedQuestions + "<br><br> Reload the page to try again!</h4>");

				$("#questionsDiv").hide();

			});
		};

	});

	function questionOne() {

		console.log(questions[0]);

		$("#questionsDiv").append("<h3>" + questions[0].question + "</h3> <br>");

		for (var j = 0; j < questions[0].choices.length; j++) {

			$("#questionsDiv").append('<input type="radio" name="radioQ1" id="radioAnswer1">' + questions[0].choices[j]) + " ";
		}

		var radioValue = $('input[name="radioQ1"]:checked').val();
		if (radioValue === questions[0].answer) {
			correctAnswers++;
			uncompletedQuestions--;
			}
		else if (radioValue !== questions[0].answer) {
			incorrectAnswers++;
			uncompletedQuestions--;
			}

		console.log("CHECK!!!" + radioValue);

	}

	function questionTwo() {

		console.log(questions[1]);

		$("#questionsDiv").append("<h3>" + questions[1].question + "</h3> <br>");

		for (var j = 0; j < questions[1].choices.length; j++) {

			$("#questionsDiv").append('<input type="radio" name="radioQ2" id="radioAnswer2">' + questions[1].choices[j]) + " ";
		}


			var radioValue = $("input[name='radioQ2']:checked").val();
			if (radioValue == questions[1].choices[3]) {
				correctAnswers++;
				uncompletedQuestions--;
			}
			else {
				incorrectAnswers++;
				uncompletedQuestions--;
			}

	}

	function questionThree() {

		console.log(questions[2]);

		$("#questionsDiv").append("<h3>" + questions[2].question + "</h3> <br>");

		for (var j = 0; j < questions[2].choices.length; j++) {

			$("#questionsDiv").append('<input type="radio" name="radioQ3" id="radioAnswer3">' + questions[2].choices[j]) + " ";
		}


			var radioValue = $("input[name='radioQ3']:checked").val();
			if (radioValue == questions[2].choices[1]) {
				correctAnswers++;
				uncompletedQuestions--;
			}
			else {
				incorrectAnswers++;
				uncompletedQuestions--;
			}

	}

	function questionFour() {

		console.log(questions[3]);

		$("#questionsDiv").append("<h3>" + questions[3].question + "</h3> <br>");

		for (var j = 0; j < questions[3].choices.length; j++) {

			$("#questionsDiv").append('<input type="radio" name="radioQ4" id="radioAnswer4">' + questions[3].choices[j]) + " ";
		}


			var radioValue = $("input[name='radioQ4']:checked").val();
			if (radioValue == questions[3].choices[3]) {
				correctAnswers++;
				uncompletedQuestions--;
			}
			else {
				incorrectAnswers++;
				uncompletedQuestions--;
			}

	}

	function questionFive() {

		console.log(questions[4]);

		$("#questionsDiv").append("<h3>" + questions[1].question + "</h3> <br>");

		for (var j = 0; j < questions[4].choices.length; j++) {

			$("#questionsDiv").append('<input type="radio" name="radioQ5" id="radioAnswer5">' + questions[4].choices[j]) + " ";
		}


			var radioValue = $("input[name='radioQ5']:checked").val();
			if (radioValue == questions[4].choices[2]) {
				correctAnswers++;
				uncompletedQuestions--;
			}
			else {
				incorrectAnswers++;
				uncompletedQuestions--;
			}

	}



	questionOne();
	questionTwo();
	questionThree();
	questionFour();
	questionFive();

	$("#questionsDiv").append('<br><br> <button id="submit" class="btn btn-default submit" type="submit">SUBMIT</button>');

});