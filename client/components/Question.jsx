class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: '',
      correctOption: this.props.singleQuestion.ans,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleSubmit(submitEvent) {
    submitEvent.preventDefault();
    if (this.state.correctOption === this.state.selectedOption) {
      this.props.updateScore();
    }
  }

  handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }



  render() {
    // console.log('correctOption', this.state.correctOption)
    // console.log('You have selected:', this.state.selectedOption);
    const singleQuestion = this.props.singleQuestion;
    return (
      <div>
        <form>
          {singleQuestion.q}
          <div className="radio">
            <label>
              <input
                type="radio"
                value="a"
                checked={this.state.selectedOption === 'a'}
                onChange={this.handleOptionChange}
              />
              {singleQuestion.a}
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="b"
                checked={this.state.selectedOption === 'b'}
                onChange={this.handleOptionChange}
              />
              {singleQuestion.b}
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="c"
                checked={this.state.selectedOption === 'c'}
                onChange={this.handleOptionChange}
              />
              {singleQuestion.c}
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="d"
                checked={this.state.selectedOption === 'd'}
                onChange={this.handleOptionChange}
              />
              {singleQuestion.d}
            </label>
          </div>
          <input
            type="submit"
            value="lock"
            onClick={this.handleSubmit}
          />
        </form>
      </div>
    );
  }
}