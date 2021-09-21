import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/client/Home/Home';
import Theater from './containers/client/Theater/Theater';
import Review from './containers/client/Review/Review';
import About from './containers/client/About/About';
import MovieDetail from './containers/client/MovieDetail/MovieDetail';
import PageNotFound from './containers/shared/PageNotFound/PageNotFound';
import Header from './components/Header/Header';
import Footer from 'components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/theater" component={Theater} />
          <Route path="/review" component={Review} />
          <Route path="/about" component={About} />
          <Route path="/movie-detail/:movieId" component={MovieDetail} />
          <Route path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App;

