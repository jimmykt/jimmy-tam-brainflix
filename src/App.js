import './App.scss';
import './styles/partials/_global.scss';
import Navigation from'./components/Navigation/Navigation';
import Video from './components/Video/Video';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Video />
    </div>
  );
}

export default App;
