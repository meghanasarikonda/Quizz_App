class CreateQuiz extends React.Component {
  constructor() {
    super();
    this.someFunc = this.someFunc.bind(this);
  }

  someFunc(e) {
    e.preventDefault();
    var q = this.q.value;
    console.log(q)
    var a = this.a.value;
    var b = this.b.value;
    var c = this.c.value;
    var d = this.d.value;
    axios.post('/api/quizdata', {
      q: q,
      a: a,
      b: b,
      c: c,
      d: d,
      ans: this.ans.value,
      username: this.props.username
    })
    .then(result => {
      this.q.value='';
      this.a.value='';
      this.b.value='';
      this.c.value='';
      this.d.value='';
      this.ans.value='';
    })
    //this._q.value = '';
  }

  render() {
    return (
      <div>
      <div>
        <p>Wanna Create a Quizz?</p>
        <form onSubmit={this.someFunc}>
          <input ref={(input) => this.q = input} type="text" placeholder="Enter the question" name="question"/>
          <input ref={(input) => this.a = input} type="text" placeholder="Enter option a" name="a"/>
          <input ref={(input) => this.b = input} type="text" placeholder="Enter option b" name="b"/>
          <input ref={(input) => this.c = input} type="text" placeholder="Enter option c" name="c"/>
          <input ref={(input) => this.d = input} type="text" placeholder="Enter option d" name="d"/>
          <input ref={(input) => this.ans = input} type="text" placeholder="Enter correct option" name="answer"/>
          <input type="submit"/>
        </form>
      </div>
      </div>
    );
  }
}

window.CreateQuiz = CreateQuiz;

