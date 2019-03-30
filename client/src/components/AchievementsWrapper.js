import React from 'react'
import { Item } from 'semantic-ui-react'
import AchievementSingle from './AchievementSingle';
import styles from './AchievementsWrapper.module.css';


const AchievementsWrapper = () => (
    <Item.Group divided className={styles.fullWidth}>
      <AchievementSingle />
      <AchievementSingle />
      <AchievementSingle />
    </Item.Group>
);

export default AchievementsWrapper