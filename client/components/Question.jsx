class Question extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props, 'props')
    // const { singleQuestion } = this.props
    const singleQuestion = this.props.singleQuestion
    return (
      <div>
        <li>{ singleQuestion.q }</li>
        <form onSubmit={(event) => {
          console.log(event)
          event.preventDefault()
          }}>
          <input onChange={(e) => console.log(e.target.value)} type="radio" value="a" checked={this.state.selectedOption === 'option1'} />/> {singleQuestion.a}
          <input onChange={(e) => console.log(e.target.value)} type="radio" value="b" /> {singleQuestion.b}
          <input onChange={(e) => console.log(e.target.value)} type="radio" value="c" /> {singleQuestion.c}
          <input onChange={(e) => console.log(e.target.value)} type="radio" value="d" /> {singleQuestion.d}
          <input type="submit" />
        </form>

      </div>
    )
  }
}

window.Question = Question;