import './style/style.css';
import sections from './components/index';

console.log(sections);
function App() {
  return (
    <div className="App">
     <sections.Hero />
     <sections.statics />
    </div>
  );
}

export default App;
