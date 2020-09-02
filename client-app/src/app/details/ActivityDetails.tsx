import React from "react";
import { Card, Image, ButtonGroup, Button } from "semantic-ui-react";
import { IActivity } from "../models/activity";
interface IProps {
  activity: IActivity;
  setEditMode: (editMode: boolean) => void;
  setSelectedActivity: (activity: IActivity | null) => void;
}
const ActivityDetails: React.FC<IProps> = ({
  activity,
  setEditMode,
  setSelectedActivity,
}) => {
  return (
    <Card fluid>
      <Image
        src={`/assets/categoryImages/${activity.category}.jpg`}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span className="date">{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <ButtonGroup widths={2}>
          <Button
            onClick={() => setEditMode(true)}
            color="blue"
            basic
            content="Edit"
          />
          <Button
            onClick={() => setSelectedActivity(null)}
            color="grey"
            basic
            content="Cancel"
          />
        </ButtonGroup>
      </Card.Content>
    </Card>
  );
};
export default ActivityDetails;
