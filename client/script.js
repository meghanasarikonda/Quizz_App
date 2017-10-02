const App = ({ user="Human" }) => {
  return (
    <div>
      <h1 className="titLe"> Hello {user}! </h1>
      <TakeQuizz/>
    </div>
  );
}




ReactDOM.render(<App />, document.getElementById('root'));