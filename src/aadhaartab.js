import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

export class Aadhaartab extends React.Component{
	render(){
		return(
		   
		       <div style={{backgroundColor:'white'}}>
		      <Tabs inkBarStyle={{background: '#00aced'}}
			        tabItemContainerStyle={{backgroundColor:'white'}} 
					style={{marginLeft:200,marginRight:700}}
					>
              <Tab  buttonStyle={{color:'grey',fontFamily:'Roboto'}}
			       label="Top" > </Tab>
			   <Tab  buttonStyle={{color:'grey',fontFamily:'Roboto'}} 
			        label="Latest" > </Tab>
			    <Tab  buttonStyle={{color:'grey',fontFamily:'Roboto'}} 
				     label="People" > </Tab>
				 <Tab    buttonStyle={{color:'grey',fontFamily:'Roboto'}} 
				        label="Photos" > </Tab>
				  <Tab  buttonStyle={{color:'grey',fontFamily:'Roboto'}} 
				        label="Videos" > </Tab>
				<Tab  buttonStyle={{color:'grey',fontFamily:'Roboto'}} 
				        label="News" > </Tab>
				<Tab  buttonStyle={{color:'grey',fontFamily:'Roboto'}} 
				        label="Broadcasts" > </Tab>
                                      
			 </Tabs>
			 </div>
			
		);
	}
}