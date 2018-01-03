import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper'

const paper={backgroundColor:'white',textAlign: 'left', display: 'inline-block',height: 'wrap-content',width:'wrap-content' }

export class Trends extends React.Component{
render(){

return(

	<div style={{marginLeft:200, marginRight:1000,height:580,marginTop:-230,backgroundColor:'white', width:'280px'}} >
	    <Paper style={paper}>
	   <List style={{height:'580px',backgroundColor:'white',width:'280px'}}>
			
			 <h5 style={{marginLeft:'25px',marginTop:5,marginBottom:0}}>    
		       <b style={{fontSize:'20px'}}> Trends For You &middot; </b>
               <a style={{ fontSize:'12px' ,textDecoration:'none' , color:'#00aced'}} href="not given till now"> Change </a>
            </h5>
			
           <ListItem  style={{color:'#3498DB'}} primaryText="#NARI" secondaryText="@PiyushGoyal is Tweeting about this"/>
           <ListItem  style={{color:'#3498DB'}} primaryText="#TuesdayThoughts" secondaryText="6,555 Tweets"/>
           <ListItem  style={{color:'#3498DB'}} primaryText="#DoctorStrike" secondaryText="9810 Tweets"/>
           <ListItem  style={{color:'#3498DB'}} primaryText="#ZeroTheMovie" secondaryText="4,797 Tweets"/>
           <ListItem  style={{color:'#3498DB'}} primaryText="#RajyaSabha" secondaryText="7,366 Tweets"/>
           <ListItem  style={{color:'#3498DB'}} primaryText="#Army" secondaryText="355K Tweets"/>
           <ListItem  style={{color:'#3498DB'}} primaryText="#TuesdayThoughts" secondaryText="6,554 tweets"/>

		</List>
	   </Paper>
	</div>


);
}
}
