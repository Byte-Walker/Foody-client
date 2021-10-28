import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Pages/Home/Home/Home';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                {/* Home route */}
                <Route exact path={['/', '/home']}>
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
