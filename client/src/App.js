import React from 'react';
import {Provider} from 'react-redux';
import Store from './redux/store';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'

import LandingPage from './pages/LandingPage';
import Shop from './pages/Shop';
import Admin from './pages/Admin/Admin';
import ShopAdmin from './pages/Admin/ShopAdmin';
import TestimonialsAdmin from './pages/Admin/TestimonialsAdmin';
import NotFound from './pages/NotFound';


class App extends React.Component {
  componentWillMount(){
    document.title = 'Doodlewrite'
  }

  render() { 
    return (
      <Provider store={Store}>
        <Router>
          <ScrollToTop/>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/shop' component={Shop} />
            <Route exact path='/admin' component={Admin} />
            <Route exact path='/admin/shop' component={ShopAdmin} />
            <Route exact path='/admin/testimonials' component={TestimonialsAdmin} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App;