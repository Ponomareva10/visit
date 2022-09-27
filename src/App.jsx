import './App.css';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Visit from './components/Visit/Visit';
import Authorization from './components/AuthorizationModal/Authorization';

function App() {
  return (
    <div className="App">
      {/* <Visit />
      <Content />
      <Footer /> */}
      <Authorization/>
    </div>
  );
}

export default App;
