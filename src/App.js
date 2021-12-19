import './App.scss';
import './styles/partials/_global.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';
import Header from './components/Header/Header';





function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/video/:id" component={HomePage} />

        {/* <Route path="/:id" render={(routerProps) => (<HomePage {...routerProps} />)} /> */}
        <Route path="/upload" component={UploadPage} />

      </Switch>
    </BrowserRouter>
  );
}
export default App;


