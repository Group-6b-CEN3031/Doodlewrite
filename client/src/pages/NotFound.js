import React from 'react';

import Header from './../components/Header';
import Footer from './../components/Footer';

import Frown from './../assets/frown.png';

class NotFound extends React.Component {
    render() { 
        return (
            <React.Fragment>
                <Header tab='Home'/>
                <div style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center', minHeight: window.innerHeight - 120}}>
                    <img src={Frown} alt='frown' style={{padding: 50}}/>
                    <div>Error 404: Page Not Found</div>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}
 
export default NotFound;