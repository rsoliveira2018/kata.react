import './App.css';

function App() {
  const value = 'Teste 1';

  return (
    <div>
      <div className="row">
        <div className="col-md-6">{value}</div>
        <div className="col-md-6">Teste 2</div>
      </div>
    </div>
  );
}

export default App;
