import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import {TabsExampleIconText} from './navBar';
import {WhoToFollow} from './whoToFollow';
import {Trends} from './trends'
import {Feed} from './feed'
import {Profile} from './profile'

class App extends Component {
  render() {
    return (
	<MuiThemeProvider>
	<div style={{backgroundColor:'#EAF2F8' ,height:'1520px'}}>
      <div className="App" style={{ height:70,backgroundColor:'white'}}>
		 <TabsExampleIconText/>
      </div>
	   <div style={{marginLeft:1000, marginRight:200, backgroundColor:'white',marginTop:10}}>
	     <WhoToFollow width='320px'/>
	  </div>
	      <div style={{marginTop:4}}>
           <Trends/>
          </div>
		  
		  <div style={{marginLeft:490, marginRight:530,height:1000,marginTop:-820}}>
		  <Feed/>
		  </div>
		  <div style={{width:280,height:230,marginTop:-1000,marginLeft:200,
			             backgroundColor:'white'}}>
		   <Profile/>
		  </div>
	  </div>
	 </MuiThemeProvider>
    );
  }
}

export default App;