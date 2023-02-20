import { Grid } from "semantic-ui-react";
import ProfileContent from "./ProfileContext";
import ProfileHeader from "./ProfileHeader";

export default function ProfilePage() {
  return (
    <Grid>
      <Grid.Column width={16}>
        <ProfileHeader />
        <ProfileContent />
      </Grid.Column>
    </Grid>
  );
}
