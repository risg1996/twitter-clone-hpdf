import React from 'react';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton';


const style={
	paper:{
		     backgroundColor:'white',textAlign: 'left', display: 'inline-block',height: 275,width:245
		  },
	
    avatar:{  marginTop: -40, border: '4px solid white',marginLeft:20,display: 'inline-block'},
	  
     text:{ marginRight:10 ,marginTop:10,display:'inline-block', float:'right'}	  ,
	 a:{color:'black',fontSize:'large',fontWeight:700},
    span:{color:'#00aced'}
}

export class Aadhaarpro extends React.Component{
	render(){
		return(
		<div style={{height:300,width:500}}>
                   <p style={{color:'black',fontSize:'large',fontWeight:725,fontFamily:'Arial'}}>People</p>
			<div style={{height:275,width:500,marginTop:-10}}>
			       <div style={{float:'left'}}>
	                <Paper style={style.paper}>
			        <img src="https://cdn.ndtv.com/tech/images/gadgets/aadhaar_child_uidai.jpg?output-quality=80" alt="not found"
                        style={{width:245,height:120}} />	
				     <Avatar
                     src="https://img.etimg.com/thumb/msid-59348539,width-300,imgsize-30651,resizemode-4/scared-of-aadhaar-misuse-lock-your-biometrics-now.jpg"
                     size={70}
                     style={style.avatar} />	
					                  <RaisedButton 
                                       style={{borderRadius:'30px',marginRight:30 ,marginTop:10,display:'inline-block', float:'right'}}
                                       label="Follow"
					                   buttonStyle={{borderRadius:'30px'}}
					                   labelStyle={{textTransform: "none", color:'#00aced'}}
					                   />
					 <p style={{marginTop:5,paddingLeft:15,marginRight:10,align:'left'}}>
					 <span style={style.a}><a href="not given till now" style={{textDecoration:'none',color:'black'}}>Aadhaar</a></span><br/>
					 <span style={{color:'grey',fontSize:'small'}}>@UIDAI</span><br/>
					 <span style={{color:'black',fontSize:'small',fontWeight:300}}>
					        Official Twitter account of the Unique Identification Authority of India. RTs are not endorsements
					 </span>
					 </p>
                 
                    </Paper>	
                   </div>
                    <div style={{float:'right',paddingLeft:10}}>
					
					              <Paper style={style.paper}>
			        <img src="https://pbs.twimg.com/media/DQIqzZCVAAAzvCu.jpg" alt="not found"
                        style={{width:245,height:120}} />	
				     <Avatar
                     src="https://pbs.twimg.com/profile_images/433527646433996801/6uVeWNXV.jpeg"
                     size={70}
                     style={style.avatar} />	
					                  <RaisedButton 
                                       style={{borderRadius:'30px',marginRight:30 ,marginTop:10,display:'inline-block', float:'right'}}
                                       label="Follow"
					                   buttonStyle={{borderRadius:'30px'}}
					                   labelStyle={{textTransform: "none", color:'#00aced'}}
					                   />
					 <p style={{marginTop:10,paddingLeft:15,marginRight:10,align:'left'}}>
					 <span style={style.a}><a href="not given till now" style={{textDecoration:'none',color:'black'}}>Nandan Nilekani‏</a></span><br/>
					 <span style={{color:'grey',fontSize:'small'}}>@NandanNilekani </span><br/>
					 <span style={{color:'black',fontSize:'small',fontWeight:300}}>
					        Co-founder of <span style={style.span}>@Infosys.</span> Worked on <span style={style.span}>#Aadhaar.</span> Co-author of <span style={style.span}>@RebootingIndia.</span> Author of …
					 </span>
					 </p>
					</Paper>
                   </div>					
			</div>
		</div>
		);
	}
} 
export default Aadhaarpro;