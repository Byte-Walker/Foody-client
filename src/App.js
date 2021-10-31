import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Pages/Home/Home/Home';
import Login from './components/Pages/Login/Login';
import { createContext } from 'react';
import useFirebase from './hooks/useFirebase';
import PlaceOrder from './components/Pages/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute';
import MyOrders from './components/Pages/MyOrders/MyOrders';
import AllOrders from './components/Pages/AllOrders/AllOrders';
import AddNewFood from './components/Pages/AddNewFood/AddNewFood';
import FoodsPage from './components/Pages/FoodsPage/FoodsPage';
import NotFound from './components/Pages/NotFound/NotFound';
import Footer from './components/Pages/Home/Footer/Footer';

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
                    <PrivateRoute exact path="/placeorder/:productId">
                        <PlaceOrder />
                    </PrivateRoute>

                    {/* My orders route */}
                    <PrivateRoute exact path="/myorders">
                        <MyOrders />
                    </PrivateRoute>

                    {/* All orders route */}
                    <PrivateRoute exact path="/allorders">
                        <AllOrders />
                    </PrivateRoute>

                    {/* Add new food route */}
                    <PrivateRoute exact path="/newfood">
                        <AddNewFood />
                    </PrivateRoute>

                    {/* Add new food route */}
                    <Route exact path="/foods">
                        <FoodsPage />
                    </Route>

                    {/* Home route */}
                    <Route exact path={['/', '/home']}>
                        <Home />
                    </Route>

                    {/* Not Found route */}
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
