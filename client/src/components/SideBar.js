import React from 'react'
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

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

        	<Sidebar.Pushable>
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
	              		<Icon name='home' /> Home</Menu.Item>
	            	<Menu.Item as='a'>
	             		<Icon name='gamepad' /> Games</Menu.Item>
	            	<Menu.Item as='a'>
	            		<Icon name='camera' /> Channels</Menu.Item>
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