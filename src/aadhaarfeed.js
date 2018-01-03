import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import CommunicationChatBubbleOutline from 'material-ui/svg-icons/communication/chat-bubble-outline.js'
import ActionCached from 'material-ui/svg-icons/action/cached.js'
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border.js'
import CommunicationMailOutline from 'material-ui/svg-icons/communication/mail-outline';
import Paper from 'material-ui/Paper'
 
const paper={backgroundColor:'white',textAlign: 'left', display: 'inline-block',height: '1000',width:'wrap-content',marginTop:0 }
		  

const stylea={
	color:'#00aced'
}


export class Aadhaarfeed extends React.Component{
	render(){
		return(
		   <div >
		   <Paper style={paper}>
		    
			  
			         
			        <List style={{backgroundColor:'white'}}>
				        
				      <ListItem  style={{marginTop:-10}}
            					  primaryText="Digital India"
				                secondaryText=" @_Digitalindia . 8h "
                                leftAvatar={<Avatar src="https://pbs.twimg.com/profile_images/615753714335256576/y0fcedIR_400x400.png" />} />
                        <p style={{fontFamily:'Arial',marginLeft:15}}> 

	<span style={stylea}>#DigitalIdentity</span> service made easy <span style={stylea}>@UIDAI</span>(<b>Aadhaar</b>) has issued directives for generating OTP either through the service provider's website or through the Interactive Voice Response (IVR) services to facilitate the linking, also known as re-verification. 
                                
						</p>
                      <div style={{backgroundColor:'white',width:500,height:550}}>
					  <img src="https://pbs.twimg.com/media/DShtlWKV4AE7dL0.jpg" 
					                alt="not found "  style={{width:500,height:500, float:'right'}}/>
					  <CommunicationChatBubbleOutline color="grey" hoverColor="#2196F3" style={{marginTop:20,marginLeft:30,float:'left',cursor: 'pointer'}}/>
           					  <p style={{float:'left',marginTop:20,marginLeft:10,fontFamily:'Areal'}}>35</p>
					  <ActionCached color="grey" hoverColor="green" style={{marginTop:18,marginLeft:35,float:'left',cursor: 'pointer'}}/> 
					           <p style={{float:'left',marginTop:20,marginLeft:10,fontFamily:'Areal'}}>85</p>
					  <ActionFavoriteBorder color="grey" hoverColor="red" style={{marginTop:18,marginLeft:35,float:'left',cursor: 'pointer'}}/> 
					           <p style={{float:'left',marginTop:20,marginLeft:10,fontFamily:'Areal'}}>25</p>
					  <CommunicationMailOutline color="grey" hoverColor="orange" style={{marginTop:18,marginLeft:35,float:'left',cursor: 'pointer'}}/> 
					           <p style={{float:'left',marginTop:20,marginLeft:10,fontFamily:'Areal'}}>75</p>
					     </div>
				     	
				   
				         <hr/>
				 
				  <ListItem      primaryText="NDTV"
				                secondaryText=" @ndtv . 4h "
                                leftAvatar={<Avatar src="https://pbs.twimg.com/profile_images/570440108424171520/QuGYd7jH_400x400.png" />} />
                        <p style={{fontFamily:'Arial',marginLeft:15}}> 
Karnataka cabinet approves bill mandating <span style={stylea}>#Aadhaar</span> for subsidies <span style={stylea}>https://www.ndtv.com/karnataka-news/karnataka-cabinet-approves…</span>
						</p>
                      <div style={{backgroundColor:'white',width:500,height:400}}>
					  <img src="https://pbs.twimg.com/media/DSmYV3BVoAACWYy.jpg" alt="not found "  style={{width:500,height:400, float:'right'}}/>
					  <CommunicationChatBubbleOutline color="grey" hoverColor="#2196F3" style={{marginTop:20,marginLeft:30,float:'left',cursor: 'pointer'}}/>
           					  <p style={{float:'left',marginTop:20,marginLeft:10,fontFamily:'Areal'}}>15</p>
					  <ActionCached color="grey" hoverColor="Green" style={{marginTop:18,marginLeft:35,float:'left',cursor: 'pointer'}}/> 
					           <p style={{float:'left',marginTop:20,marginLeft:10,fontFamily:'Areal'}}>15</p>
					  <ActionFavoriteBorder color="grey" hoverColor="red" style={{marginTop:18,marginLeft:35,float:'left',cursor: 'pointer'}}/> 
					           <p style={{float:'left',marginTop:20,marginLeft:10,fontFamily:'Areal'}}>15</p>
					  <CommunicationMailOutline color="grey" hoverColor="orange" style={{marginTop:18,marginLeft:35,float:'left',cursor: 'pointer'}}/> 
					           <p style={{float:'left',marginTop:20,marginLeft:10,fontFamily:'Areal'}}>15</p>
					  </div>
				 
				 
				 
				   
				 </List>
				 </Paper>
	        
          </div>
		);
	}
}