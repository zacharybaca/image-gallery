import './index.css';
import Form from './components/Form';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';

function App() {
  return (
    <div className="container">
      <Form />
      <Nav />
      <PhotoContainer />
    </div>
  );
}

export default App;
