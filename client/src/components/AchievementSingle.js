import React from 'react'
import { Item } from 'semantic-ui-react'

const AchievementSingle = (props) => (
  <Item>
    <Item.Image size={props.size} src={props.image} />
    <Item.Content content={props.content} verticalAlign='middle' style={{textAlign: 'left'}} />
  </Item>
)


AchievementSingle.defaultProps = {
  size: "tiny",
  image: "https://react.semantic-ui.com/images/wireframe/image.png",
  content: "No content"

};

export default AchievementSingle;