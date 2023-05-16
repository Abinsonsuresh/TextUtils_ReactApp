import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" abouttxt="About"/>
      <div className="container">
        <TextForm heading = "Enter the Text to analyze"/>

      </div>
    </>
  );
}

export default App;
