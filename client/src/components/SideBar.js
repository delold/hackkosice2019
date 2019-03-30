import React from 'react';
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';
import styles from './SideBar.module.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Settings from './Settings.js'


class SideBar extends React.Component {
  state = { visible: false }
	
	handleShowClick = () => {
  		if(this.state.visible === true) this.setState({ visible: false });
  		else this.setState({ visible: true });
  	}
  

  	render() {
    	const { visible } = this.state

    	return (
      		<div>
        		<Button.Group>

          			<Button onClick={this.handleShowClick}>
         				<Icon name='bars'/>
            			Show sidebar
          			</Button>
        		</Button.Group>

        	<Sidebar.Pushable className={styles.sidebarcontainer}>
	          	<Sidebar
		            as={Menu}
		            animation='overlay'
		            icon='labeled'
		            inverted
		            onHide={this.handleSidebarHide}
		            vertical
		            visible={visible}
		            width='thin'>

		            <Menu.Item as='a'>
	             		<Icon name='pie chart' />
	             		<span className="input-group-btn">
						  <Link to="/" style={{ color: '#FFF' }}>Overview</Link>
						</span>
             		</Menu.Item>

	            	<Menu.Item as='a'>
	             		<Icon name='chart bar' />
	             		<span className="input-group-btn">
						  <Link to="/statistics" style={{ color: '#FFF' }}>Statistics</Link>
						</span>
             		</Menu.Item>

	            	<Menu.Item as='a'>
	            		<Icon name='cog' />
	            		<span className="input-group-btn">
						  <Link to="/settings" style={{ color: '#FFF' }}>Settings</Link>
						</span>
            		</Menu.Item>

            		<Menu.Item as='a'>
	            		<Icon name='trophy' />
	            			<span className="input-group-btn">
							  <Link to="/achievements" style={{ color: '#FFF' }}>Achievements</Link>
							</span>
            		</Menu.Item>
	          	</Sidebar>

	          	<Sidebar.Pusher>
	              	{this.props.children}
	          	</Sidebar.Pusher>
	        </Sidebar.Pushable>
      </div>
    )
  }
}

export default SideBar;