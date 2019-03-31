import React from 'react';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';
import styles from './SideBar.module.css';
import { Link } from "react-router-dom";

import logo from '../logo.png'
class SideBar extends React.Component {
  state = { visible: false }
	
	handleShowClick = () => {
		if(this.state.visible === true) this.setState({ visible: false });
		else this.setState({ visible: true });
	}


	render() {
		const { visible } = this.state

    	return (
				<>
				<div className={styles.logoHeader}>
					<img className={styles.logo} src={logo} alt="Banana Milkshake"/>
				</div>
				<div className={styles.menu} onClick={this.handleShowClick}>
					<Icon name='bars' size="big" />
				</div>

				<Sidebar.Pushable className={styles.sidebarcontainer}>
					<div className={styles.menuWrap}>
						<Sidebar
							as={Menu}
							animation='overlay'
							icon='labeled'
							inverted
							onHide={this.handleSidebarHide}
							vertical
							visible={visible}
							width='thin'>

							<div className={styles.content}>

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
							</div>
						</Sidebar>
					</div>

					<Sidebar.Pusher>
						<div className={styles.sidebarContent}>
							{this.props.children}
						</div>
					</Sidebar.Pusher>
				</Sidebar.Pushable>
      </>
    )
  }
}

export default SideBar;