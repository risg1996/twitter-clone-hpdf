import React from 'react';
import {WhoToFollow} from './whoToFollow';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper'

const paper={backgroundColor:'white',textAlign: 'left', display: 'inline-block',height: 'wrap-content',width:'wrap-content' }

const style={
	marginLeft:25,
	color:'#3498DB',
	fontSize:'medium'
}

export class Left extends React.Component{
	render(){
		return(
		   <div style={{backgroundColor:'#EAF2F8',height:1400,width:300,marginLeft:200,marginTop:'',float:'left'}}>
		         <div style={{height:50,backgroundColor:'white',marginTop:-10}}>
				      <h5 style={{marginLeft:'25px',paddingTop:15}}>    
		              <b style={{fontSize:'20px'}}> Search filters &middot; </b>
                      <a style={{ fontSize:'12px' ,textDecoration:'none' , color:'#00aced'}} href="not given till now"> Show </a>
                      </h5>
				 </div>
				 <div style={{backgroundColor:'white',height:170,marginTop:-5}}>
				     <p style={{lineHeight:'150%',paddingTop:15}}> 
				         <b style={{fontSize:'large',marginLeft:25}}>Related Searches</b><br/>
					     <span style={style}>vir chakra</span><br/>
					     <span style={style}>#jootachorpakistan</span><br/>
					     <span style={style}>#railways</span><br/>
					     <span style={style}>#malegaonblast</span><br/>
					     <span style={style}>ravi shastri</span>
				     </p>
				 </div>
				 <div style={{backgroundColor:'white',height:450,marginTop:13}}>
				        <WhoToFollow width='300px'/>
			     </div>
				
				         	<div style={{backgroundColor:'white',height:580,marginTop:28}} >
	                            <Paper style={paper}>
	                            <List style={{height:'580px',backgroundColor:'white',width:'300px'}}>
			
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
				
		   </div>
		);
	}
}