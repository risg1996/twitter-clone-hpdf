import React from 'react';

import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import SocialPeople from 'material-ui/svg-icons/social/people.js';
import Paper from 'material-ui/Paper'

const paper={backgroundColor:'white',textAlign: 'left', display: 'inline-block',height: 'wrap-content',width:'wrap-content' }


export class WhoToFollow extends React.Component{
	render(){
		return(
		  <div >
		   <Paper style={paper}>
		   
		   <List style={{height:'450px',backgroundColor:'white',width:this.props.width}}>
           <h5 style={{marginLeft:'25px'}}>    
		       <b style={{fontSize:'20px'}}> Who to follow &middot; </b>
               <a style={{ fontSize:'12px' ,textDecoration:'none',color:'#00aced'}} href="dp.jpg"> Refresh &middot; </a>
               <a style={{ fontSize:'12px' , textDecoration:'none',color:'#00aced'}} href="dp.jpg">  View all </a>
            </h5>
	    <Divider inset={true} />

        <List>
      <ListItem style={{zIndex:'2',marginTop:-15}}
        leftAvatar={<Avatar src="https://timesofindia.indiatimes.com/thumb/msid-61127741,width-400,resizemode-4/61127741.jpg"/>}
        primaryText=" Sachin Tendulkar "
        secondaryText=" @sachin_rt "
      />
	  <RaisedButton 
                     style={{marginLeft:'100px',borderRadius:'30px' ,marginBottom:'10px',zIndex:'1'}}
                     label="Follow"
					 buttonStyle={{borderRadius:'30px'}}
					 labelStyle={{textTransform: "none", color:'#00aced'}}
					 />
	  <Divider inset={true} />
      <ListItem style={{marginTop:-5}}
        leftAvatar={<Avatar src="https://www.biography.com/.image/t_share/MTIwNjA4NjMzODIyNjc2NDky/bill-gates-9307520-1-402.jpg" />}
        primaryText=" Bill Gates "
        secondaryText=" @Bill_Gates "
      />
	    <RaisedButton 
                     style={{marginLeft:'100px',borderRadius:'30px' ,marginBottom:'10px',zIndex:'1'}}
                     label="Follow"
					 buttonStyle={{borderRadius:'30px'}}
					 labelStyle={{textTransform: "none", color:'#00aced'}}
					 />
	  <Divider inset={true} />
      <ListItem style={{marginTop:-5}}
        leftAvatar={<Avatar src="https://pbs.twimg.com/profile_images/782474226020200448/zDo-gAo0_400x400.jpg" />}
        primaryText=" Elon Musk "
        secondaryText=" @elonmusk "
      />
	    <RaisedButton 
                     style={{marginLeft:'100px',borderRadius:'30px' ,marginBottom:'',zIndex:'1'}}
                     label="Follow"
					 buttonStyle={{borderRadius:'30px'}}
					 labelStyle={{textTransform: "none", color:'#00aced'}}
					 />
    </List>
    <Divider inset={true} />
	<br/>
	<SocialPeople style={{marginLeft:'40px',float:'left'}}/>
    <a href="dp.jpg" style={{marginLeft:'20px', color:'#00aced',float:'left',marginTop:'2px'}}>Find People You Know</a>
  </List>
  </Paper>
</div>
		);
	}
}