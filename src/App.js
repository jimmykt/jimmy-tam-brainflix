import './App.scss';
import './styles/partials/_global.scss';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';


import VideosData from './data/videos.json';
import VideosDetailsData from './data/video-details.json';

import Header from './components/Header/Header';






function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
      </Switch>
    </BrowserRouter>
  );
}
export default App;


