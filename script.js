// Step 1 Build Function Constructor

function Question(question, answer, correct) {
    this.question = question;
    this.answer = answer;
    this.correct = correct;
}
 
// Create a Method in the proto type prop

Question.prototype.displayQuestion = function(){
    console.log(this.question);

    for (var i = 0; i < this.answer.length; i++) {
        console.log(this.answer[i])
    }
};

// Step 2 Create questions using the Const Proto

var q1 = new Question('What is HTML', ['HyperTextMarkUp', 'CSS'], 0);

var q2 = new Question('What is JavaScript for?', ['Ux', 'UI'], 1);

//Step 3 Store the Questions in an Array

var questions = [q1, q2];

// Step 4 Choose question at Random , times the array.length = 1
// Using math floor to remove decimals

var n = Math.floor(Math.random() * questions.length);

// To get random question - apply the random varibale to the array as a function

questions[n].displayQuestion();

