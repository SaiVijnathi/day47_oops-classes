import './App.css';
import TenthStudent from './components/TenthStudent';
import SSCStudent from './classes/SSCStudent';


function App() {

  let Vijnathi = new SSCStudent("Vijnathi","22","I0","6","B");
  let Sai = new SSCStudent("Sai","14","A21","10","A");

  return (
    <div className="App">
    <h1>OOPS - Classes</h1>
    <h1>Tenth Student MarkSheet</h1>
        <TenthStudent name="Sai Vijnathi" telMarks="91" hinMarks="92" engMarks="93" matMarks="94" sciMarks="95" socMarks="96" />
        <TenthStudent name="Vijnathi" telMarks="96" hinMarks="89" engMarks="91" matMarks="96" sciMarks="94" socMarks="82" />
    </div>
  );
}

export default App;
