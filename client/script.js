const App = ({ user = prompt('Enter your name') }) => {
  return (
    <div>
      <h1 className="titLe"> Hello {user}! </h1>
      <TakeQuizz username={user}/>
    </div>
  );
}




ReactDOM.render(<App />, document.getElementById('root'));