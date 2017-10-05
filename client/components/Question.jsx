class Question extends React.Component{
  constructor(props) {
    super(props);
    this.state = {selectedOption: 'a'}
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
          <input onChange={(e) => console.log(e.target.value)} type="radio" value="a" checked={this.state.selectedOption === 'a'} /> {singleQuestion.a}
          <input onChange={(e) => console.log(e.target.value)} type="radio" value="b" checked={this.state.selectedOption === 'b'} /> {singleQuestion.b}
          <input onChange={(e) => console.log(e.target.value)} type="radio" value="c" checked={this.state.selectedOption === 'c'} /> {singleQuestion.c}
          <input onChange={(e) => console.log(e.target.value)} type="radio" value="d" checked={this.state.selectedOption === 'd'} /> {singleQuestion.d}
          <input type="submit" />
        </form>

      </div>
    )
  }
}

window.Question = Question;