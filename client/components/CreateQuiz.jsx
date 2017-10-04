class CreateQuiz extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      <div>
        <p>Wanna Create a Quizz?</p>
        <form action="http://localhost:3000/api/quizdata" method="post">
          <input type="text" placeholder="Enter the question" name="question"/>
          <input type="text" placeholder="Enter option 1" name="a"/>
          <input type="text" placeholder="Enter option 2" name="b"/>
          <input type="text" placeholder="Enter option 3" name="c"/>
          <input type="text" placeholder="Enter option 4" name="d"/>
          <input type="text" placeholder="Enter correct option" name="answer"/>
          <input type="submit"/>
        </form>
      </div>
      </div>
    );
  }
}

window.CreateQuiz = CreateQuiz;

