import './App.css';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Visit from './components/Visit/Visit';
import BasicExample from './components/Accordion/Accordion';

function App() {
  return (
    <div className="App">
      <Visit />
      <BasicExample />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
