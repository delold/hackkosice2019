import React from 'react';
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';
import styles from './SideBar.module.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


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

								<Link to="/" style={{ color: '#FFF' }}>
									<Menu.Item as='a'>
										<Icon name='pie chart' />
										<span className="input-group-btn">
											Overview
										</span>
									</Menu.Item>
								</Link>
								<Link to="/statistics" style={{ color: '#FFF' }}>
										<Menu.Item as='a'>
										<Icon name='chart bar' />
										<span className="input-group-btn">
										Statistics
										</span>
									</Menu.Item>
								</Link>

								<Link to="/settings" style={{ color: '#FFF' }}>
									<Menu.Item as='a'>
										<Icon name='cog' />
										<span className="input-group-btn">Settings</span>
									</Menu.Item>
								</Link>

							  <Link to="/achievements" style={{ color: '#FFF' }}>
									<Menu.Item as='a'>
										<Icon name='trophy' />
										<span className="input-group-btn">
											Achievements
										</span>
									</Menu.Item>
								</Link>
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