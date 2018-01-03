import React from 'react';
import Paper from 'material-ui/Paper'
import Aadhaarpro from './aadhaarpro'
import {Aadhaarfeed} from './aadhaarfeed'


export class Middle extends React.Component{
	render(){
		return(
		   <div style={{backgroundColor:'#EAF2F8',height:1400,width:500,marginLeft:10,float:'left'}}>
		   
		          <div style={{backgroundColor:'#F7F9F9',height:50,marginTop:-3}}>
				        <Paper style={{backgroundColor:'#F7F9F9',height:50,width:500,marginTop:13}}>
				      <p style={{fontFamily:'Arial',textAlign:'center',color:'#3498DB',paddingTop:15}}><a href="not given" style={{textDecoration:'none',color:'#3498DB'}}> 153 new Results</a></p>
					    </Paper>
				  </div>
				  <div style={{backgroundColor:'#EAF2F8',height:305,marginTop:-5}}>
				         <Aadhaarpro/>
				  </div>
				  <div style={{backgroundColor:'white',height:1000,marginTop:10}}>
				     <Aadhaarfeed/>
				  </div>
				  
		 </div>
);
}}