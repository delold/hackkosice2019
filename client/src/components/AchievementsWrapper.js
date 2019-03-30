import React from 'react'
import { Item } from 'semantic-ui-react'
import AchievementSingle from './AchievementSingle';
import styles from './AchievementsWrapper.module.css';

import SideBar from './SideBar'


const AchievementsWrapper = () => (
	<SideBar>
	    <Item.Group divided className={styles.fullWidth}>
	      <AchievementSingle />
	      <AchievementSingle />
	      <AchievementSingle />
	    </Item.Group>
    </SideBar>
);

export default AchievementsWrapper