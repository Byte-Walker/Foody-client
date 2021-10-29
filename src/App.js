import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Pages/Home/Home/Home';
import Login from './components/Pages/Login/Login';
import { createContext } from 'react';
import useFirebase from './hooks/useFirebase';
import PlaceOrder from './components/Pages/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute';

export const AuthContext = createContext();

function App() {
    const { user } = useFirebase();

    return (
        <AuthContext.Provider value={user}>
            <Router>
                <Header />
                <Switch>
                    {/* Login route */}
                    <Route exact path="/login">
                         <Login />
                    </Route>

                    {/* Order placing route */}
                    <PrivateRoute exact path="/placeorder">
                        <PlaceOrder/>
                    </PrivateRoute>

                    {/* Home route */}
                    <Route exact path={['/', '/home']}>
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
