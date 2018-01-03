import React from 'react';
import Avatar from 'material-ui/Avatar';
import dp from './dp.jpg';
import Paper from 'material-ui/Paper'

const style={
	paper:{
		     backgroundColor:'white',textAlign: 'left', display: 'inline-block',height: 230,width:'wrap-content'
		  },
    avatar:{  marginTop: -40, border: '4px solid white',marginLeft:20,display: 'inline-block'},
	  
     text:{ marginRight:45 ,marginTop:10,display:'inline-block', float:'right'}	  ,
	 a:{color:'grey',fontSize:'small',fontWeight:700,marginLeft:30}
    
}

export class Profile extends React.Component{
	render(){
		return(
		    
			<div >
	                <Paper style={style.paper}>
				  
			        <img src="http://blogs.kqed.org/pressroom/files/2017/03/1007.jpg" alt="not found"
                        style={{width:280,height:105}} />	
				     <Avatar
                     src={dp}
                     size={80}
                     style={style.avatar} />	
   			         <h4 style={style.text} >Rishav Gautam</h4>
					 <p style={{marginRight:80 ,marginTop:-22,display:'inline-block', float:'right',color:'grey'}} ><small> @RishavG96</small> </p>
					 
					 <span style={style.a}>Tweets</span>
					 <span style={style.a}>Followers</span>
					 <span style={style.a}>Following</span><br/>
					 <span style={{color:'#00aced',fontSize:'medium',fontWeight:600,marginLeft:40}}>20</span>
					 <span style={{color:'#00aced',fontSize:'medium',fontWeight:600,marginLeft:60}}>45</span>
					 <span style={{color:'#00aced',fontSize:'medium',fontWeight:600,marginLeft:80}}>12</span>
					 
                 
                    </Paper>   	   
			</div>
		
		);
	}
} 
export default Profile;