import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/home/container/Home'
import AdminPage from './pages/admin-panel/containers/AdminPage'
import Booking from './pages/booking/container/Booking'
import Shop from './pages/shop/container/Shop'
import Players from './pages/players/containers/Players'
import News from './pages/news/containers/News'
import NewsDetails from './pages/news/containers/NewsDetails'
import PlayersDetails from './pages/players/containers/PlayersDetails'

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/admin" component={AdminPage} />
            <Route exact={true} path="/booking" component={Booking} />
            <Route exact={true} path="/players" component={Players} />
            <Route exact={true} path="/shop" component={Shop} />
            <Route exact={true} path="/news" component={News} />
            <Route path="/news/:id" component={NewsDetails} />
            <Route path="/players/:id" component={PlayersDetails} />
        </Switch>
    );
};

export default Routes
