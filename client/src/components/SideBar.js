import React from 'react';
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';
import styles from './SideBar.module.css';

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
	              		<Icon name='clock outline' /> Activity
              		</Menu.Item>
	            	<Menu.Item as='a'>
	             		<Icon name='chart bar' /> Statistics
             		</Menu.Item>
	            	<Menu.Item as='a'>
	            		<Icon name='cog' /> Settings
            		</Menu.Item>
            		<Menu.Item as='a'>
	            		<Icon name='trophy' /> Achievements
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