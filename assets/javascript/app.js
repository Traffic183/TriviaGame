
var questions = [{
  question: "Which one is NOT an example of a Comparison Operator?",
  answers: ["===", "!==", "||", "<="],
  correctAnswer: "||"
}, {
  question: "The exisiting content is lost when theis jQuery method is used to get and set the content of a selected element. ",
  answers: ["append()", "after()", "prepend()", "text()"],
  correctAnswer: "text()"
}, {
  question: "Which one is FALSE?",
  answers: ["ECMA is an organization that standardizes information", "ECMAScript was created to standardize JavaScript", "JavaScript was invented by Brendan Eich in 1995", "The eighth edition of ECMAScript (ES8) was released in 2016."],
  correctAnswer: "The eighth edition of ECMAScript (ES8) was released in 2016."
}, {
  question: "Which one is incorrect?",
  answers: ["The splice() method adds/removes items to/from an array, and returns the removed item(s).", "The join() method joins the elements of an array into a string without separators between the elements, and returns the string.", "The concat() method is used to join two or more strings.", "The split() method is used to split a string into an array of substrings, and returns the new array."],
  correctAnswer: "The join() method joins the elements of an array into a string without separators between the elements, and returns the string."
}, {
  question: "This method tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.",
  answers: ["event.preventDefault()", "event.isPropagationStopped()", "event.isDefaultPrevented()", "event.stopImmediatePropagation()"],
  correctAnswer: "event.preventDefault()",
}, {
  question: "Which is an example of a conditional statement used in JavaScript?",
  answers: ["if", "else if", "switch", "all the above"],
  correctAnswer: "all the above"
}, {
  question: "The typeof operator returns a string indicating the type of the unevaluated operand. Which one is NOT a possible return value.",
  answers: ["Null", "String", "Number", "Tupac"],
  correctAnswer: "Tupac"
}, {
  question: "Which one is False?",
  answers: ["APIs allow developers to pull information to do things.", "API stands for Application Personal Interface", "Reddit and Open Movie Database are examples of APIs.", "API stands for Application Program Interface. "],
  correctAnswer: "Application Personal Interface"
}];

var gameArea = $("#trivia");

var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#subwrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      gameArea.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        gameArea.append("<input id='radioBtns' type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    gameArea.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#subwrapper h2").remove();

    gameArea.html("<h2>All Done!</h2>");
    gameArea.append("<h3>Correct Answers: " + this.correct + "</h3>");
    gameArea.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    gameArea.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});
