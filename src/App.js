import './style/style.css';
import sections from './components/index';

function App() {
  return (
    <div className="App">
      <sections.Hero />
      <sections.statics />
      <sections.design />
      <sections.project />
      <sections.footer />

    </div>
  );
}

export default App;
