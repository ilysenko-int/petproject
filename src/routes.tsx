import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import { createBrowserHistory } from "history";
import Home from './pages/home/container/Home'
import Booking from './pages/booking/container/Booking'
import Shop from './pages/shop/container/Shop'
import Players from './pages/players/container/Players'
import News from './pages/news/container/News'

// const history = createBrowserHistory();

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/booking" component={Booking} />
            <Route exact={true} path="/players" component={Players} />
            <Route exact={true} path="/shop" component={Shop} />
            <Route exact={true} path="/news" component={News} />
        </Switch>
    );
};

export default Routes
