import React from 'react';
import ReactDOM from 'react-dom';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import ActionHome from 'material-ui/svg-icons/action/home';
import twitterlogo from './twitterlogo.jpg';
import Avatar from 'material-ui/Avatar';
import dp from './dp.jpg';
import CommunicationMailOutline from 'material-ui/svg-icons/communication/mail-outline';
import ImageFlashOn from 'material-ui/svg-icons/image/flash-on';
import SocialNotificationsNone from 'material-ui/svg-icons/social/notifications-none';
import {Aadhaar} from './aadhaar'


export class TabsExampleIconText extends React.Component{
	
	    constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
	if(this.state.value==="aadhaar"||this.state.value==="Aadhaar"||this.state.value==="AADHAAR")
	{ 
        ReactDOM.render(<Aadhaar />, document.getElementById('root'));
	}
	else
	{
		alert("Type 'aadhaar' To See Search Working");
	}
    event.preventDefault();
  }




render()
{

    return(
  <div>
    <Tabs style={{ height:'20%',marginLeft:'200px',marginTop:'',width:'28%',float:'left'}}

      tabItemContainerStyle={{backgroundColor:''}}
      inkBarStyle={{color:'blue',background: '#00aced'}} >

      <Tab iconStyle={{color:'grey'}} buttonStyle={{color:'grey'}}
        icon={<FontIcon style={{color:'#00aced',textTransform: "none"}} className="material-icons"><ActionHome style={{color:'blue500'}}/></FontIcon>}
        label="Home"  
      />
      <Tab buttonStyle={{color:'grey'}}
        icon={<FontIcon  style={{color:'#00aced'}} className ="material-icons"><ImageFlashOn/></FontIcon>}
        label="Moments"  style={{textTransform: "none"}}
      />
      <Tab buttonStyle={{color:'grey'}} 
        icon={<FontIcon style={{color:'#00aced'}} iconStyle={{color:'black'}} className ="material-icons"><SocialNotificationsNone/></FontIcon>}
           label="Notifications"  style={{textTransform: "none"}}
      />
      <Tab buttonStyle={{color:'grey'}} 
        icon={<FontIcon style={{color:'#00aced'}} className="material-icons"><CommunicationMailOutline/></FontIcon>}
        label="Messages"  style={{textTransform: "none"}}
      />

    </Tabs>
	
	
	<img src={twitterlogo} alt="logo" width='50px' height='40px' style={{marginLeft:'110px',float:'left',marginTop:'15px'}}/>
	 <form onSubmit={this.handleSubmit}>
	<input type="text" placeholder="   Search Twitter..." size="20"     value={this.state.value} onChange={this.handleChange}
	                                                                    style={{ border: '1px solid #ccc',
                                                                       	borderRadius:'50px',
																		marginLeft:'180px',
																		padding:'5px 5px 5px 5px',
                                 										backgroundColor:'#EAF2F8',
																		float:'left',
																		marginTop:'20px',
																		}}/>
         </form>
	
        <Avatar
          src={dp}
          size={40}
          style={{marginLeft:'25px',float:'left',marginTop:'15px'}}
        />
    <button type="button" style={{color: 'white', backgroundColor:'#3498DB',
                                  border: 'none',
								  padding:' 7px 20px 7px 20px',
                                  textAlign: 'center',
                                  textDecoration: 'none',
                                  fontSize: '16px',
                                  marginLeft:'25px',
	                              borderRadius: '40px',
                                  cursor: 'pointer',
                                  float:'left'	,marginTop:'20px',marginBottom:'20px' }}
	   >Tweet</button>
	
 </div>
);
}
}
