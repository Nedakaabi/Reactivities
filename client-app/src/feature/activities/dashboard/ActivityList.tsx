import React from "react";
import { Item, Button, Label, Segment } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
interface IProps {
  activities: IActivity[];
  selectAcivity: (id: string) => void;
  deleteActivity: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => void;
  submitting: boolean;
  target: string;
}
const ActivityList: React.FC<IProps> = ({
  activities,
  selectAcivity,
  deleteActivity,
  submitting,
  target,
}) => {
  return (
    <Segment clearing>
      <Item.Group divided>
        {activities.map((activities) => (
          <Item key={activities.id}>
            <Item.Image
              size="tiny"
              src="https://react.semantic-ui.com/images/wireframe/image.png"
            />

            <Item.Content>
              <Item.Header as="a">{activities.title}</Item.Header>
              <Item.Meta>{activities.date}</Item.Meta>
              <Item.Description>
                <div>{activities.description}</div>
                <div>
                  {activities.city},{activities.venue}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button
                  onClick={() => selectAcivity(activities.id)}
                  floated="right"
                  content="View"
                  color="blue"
                />
                <Button
                  name={activities.id}
                  onClick={(e) => deleteActivity(e, activities.id)}
                  floated="right"
                  content="Delete"
                  color="red"
                  loading={target === activities.id && submitting}
                />
                <Label basic content={activities.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};
export default ActivityList;
