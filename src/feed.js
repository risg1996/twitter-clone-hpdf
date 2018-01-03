import React from 'react';
import dp from './dp.jpg';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import CommunicationChatBubbleOutline from 'material-ui/svg-icons/communication/chat-bubble-outline.js'
import ActionCached from 'material-ui/svg-icons/action/cached.js'
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border.js'
import CommunicationMailOutline from 'material-ui/svg-icons/communication/mail-outline';
import Paper from 'material-ui/Paper'
 
const paper={backgroundColor:'white',textAlign: 'left', display: 'inline-block',height: 'wrap-content',width:'wrap-content' }
		  

const style={
	width: '60%',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '16px',
    backgroundColor: 'white',
    padding: '10px 5px 10px 5px',
	marginLeft:'20px',
	marginTop:15,
	float:'left'
}


export class Feed extends React.Component{
	render(){
		return(
		   <div >
		   <Paper style={paper}>
		     <div>
			 <Avatar
                src={dp}
                size={50}
                style={{marginLeft:'40px',marginTop:'10px',float:'left'}}
              />
			  <input type="text" placeholder=" What's Happening? " style={style} />
			  </div>
			  <br/><br/><br/><br/>
			   <Divider style={{backgroundColor:'black'}}/>
			        <br/>
			         
			        <List style={{marginTop:'',backgroundColor:'white'}}>
				        
				      <ListItem  style={{marginTop:-30}}
            					  primaryText="Hasura"
				                secondaryText=" @hasuraHPDF . 8h "
                                leftAvatar={<Avatar src="https://hasura.io/rstatic/resources/logo/Hasura-face-new.png" />} />
                        <p style={{fontFamily:'Arial',marginLeft:15}}> Wishing you all a very Happy New Year!!! :) #HappyNewYear </p>
                      <div style={{backgroundColor:'white',width:500,height:550}}>
					  <img src="https://www.123greetingmessage.net/wp-content/uploads/2017/12/Happy-New-Year-2018-GIF-Image-download.gif" 
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
				 
				  <ListItem      primaryText="Shah Rukh Khan"
				                secondaryText=" @iamsrk . 4h "
                                leftAvatar={<Avatar src="https://i.pinimg.com/736x/a9/e4/bb/a9e4bb93d87083f92d76066a9e5004b4--shahrukh-khan.jpg" />} />
                        <p style={{fontFamily:'Arial',marginLeft:15}}> Wishing you all a very Happy New Year!!! :) #HappyNewYear </p>
                      <div style={{backgroundColor:'white',width:500,height:550}}>
					  <img src="https://i.pinimg.com/736x/a9/e4/bb/a9e4bb93d87083f92d76066a9e5004b4--shahrukh-khan.jpg" alt="not found "  style={{width:500,height:500, float:'right'}}/>
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