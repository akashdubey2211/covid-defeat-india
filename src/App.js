import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from './component/home/Home';
import Instruction from './component/instruction/Instruction'
import Report from './component/Report/Report';
import SlotAv  from './component/Slots/SlotAv'
import {Switch , Route} from 'react-router-dom'
import Navbar from './component/navbar/Navbar';
import District from '../src/component/Slots/Pages/District'
import Pincode from './component/Slots/Pages/Pincode'

import Footer from './component/Footer/Footer';

const App = () =>{
  return(
    <div>
    <Navbar />
    
 
<Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/instruction" component={Instruction} />
  <Route exact path="/report" component={Report} />
  <Route  exact path="/slot" component={SlotAv} />
  <Route path="/district" component={District} />
  <Route path="/pincode" component={Pincode} />
</Switch>
<Footer />
    </div>
  )
}

export default App;