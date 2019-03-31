import React from 'react'
import { Item } from 'semantic-ui-react'
import AchievementSingle from '../components/AchievementSingle';
import styles from './AchievementPage.module.css';

const AchievementPage = () => (
	<Item.Group divided className={styles.fullWidth}>
		<AchievementSingle />
		<AchievementSingle />
		<AchievementSingle />
	</Item.Group>
);

export default AchievementPage