class Car {
    constructor(make, model, year, isAvailable) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.isAvailable = isAvailable;
    }
    toggleAvailability() {
        this.isAvailable = !this.isAvailable;
    }
}
const bmw = new Car('BMW', 'M4-Convertable', 2014, 'true')
console.log({bmw});
// Rental class
class Rental {
    constructor(car, renterName, rentalStartDate, rentalEndDate) {
        this.car = car;
        this.renterName = renterName;
        this.rentalStartDate = new Date(rentalStartDate);
        this.rentalEndDate = new Date(rentalEndDate);
    }
    calculateRentalDuration() {
        const  differenceInMilliseconds = this.rentalEndDate - this.rentalStartDate;
        const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
        return differenceInDays;
    }
}
const myRental = new Rental ('Toyota', 'Ben', "2024-4-20", "2024-5-10")
console.log({myRental});

/*Q2*/
class Question {
    constructor(text, options, correctAnswer) {
      this.text = text;
      this.options = options;
      this.correctAnswer = correctAnswer;
    }
    checkAnswer(userAnswer) {
      return userAnswer === this.correctAnswer;
    }
  }
  const sampleQuestion = new Question(
    "how many side does a triangle have?",
    ["one", "two", "three", "four"],
  );
  console.log(sampleQuestion.checkAnswer("three"));
  console.log(sampleQuestion.checkAnswer("four"));
  class Quiz {
    constructor() {
      this.questions = [];
      this.currentQuestionIndex = 0;
      this.score = 0;
    }
    addQuestion(question) {
      this.questions.push(question);
    }
    nextQuestion() {
      this.currentQuestionIndex++;
    }
    submitAnswer(userAnswer) {
      const currentQuestion = this.questions[this.currentQuestionIndex];
      if (currentQuestion.checkAnswer(userAnswer)) {
        this.score++;
      }
      this.nextQuestion();
    }
  }
  const quiz = new Quiz();
  const question1 = new Question("What is the square 3?", ["12", "8", "9"], "9");
  const question2 = new Question("What is the first season in the year", ["Summer", "winter", "spring"], "Spring");
  quiz.addQuestion(question1);
  quiz.addQuestion(question2);
  quiz.submitAnswer("9");
  quiz.submitAnswer("winter");
  console.log("Score:", quiz.score);