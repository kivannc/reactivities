import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import ActivityList from "./ActivityList";

export default observer(function ActivityDashboard() {
  const { activityStore } = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial)
    return <LoadingComponent content="Loading app..." />;

  return (
    <Grid>
      <Grid.Column width="12">
        <ActivityList />
      </Grid.Column>
      <Grid.Column width="4">
        <h2>Activity filters</h2>
      </Grid.Column>
    </Grid>
  );
});
