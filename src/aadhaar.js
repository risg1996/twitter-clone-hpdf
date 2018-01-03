import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import {TabsExampleIconText} from './navBar';
import {Aadhaartab} from './aadhaartab';
import {Left} from './left'
import {Middle} from './middle'

export class Aadhaar extends Component {
  render() {
    return (
	       <MuiThemeProvider>
	      <div style={{backgroundColor:'#EAF2F8' ,height:'1950px'}}>
          <div className="App" style={{ height:70,backgroundColor:'white'}}>
		  <TabsExampleIconText/>
          </div>
		  <div style={{height:'80px',backgroundColor:'#6BC2FF',marginTop:-22}}>
		  <h2 style={{paddingTop:'25px',fontSize:'30px',fontWeight:650, color:'white',fontFamily:'Arial',paddingLeft:'200px'}}>aadhaar</h2>
		  </div>
		   <div>
		      <Aadhaartab/>
		   </div>
		           <div>
		               <div>
			                <Left/>
			           </div>
					   <div>
					         <Middle/>
					   </div>
					 </div>
	       </div>
	     </MuiThemeProvider>
    );
  }
};
export default Aadhaar;

