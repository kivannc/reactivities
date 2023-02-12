import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Calendar } from "react-calendar";
import { Header, Menu } from "semantic-ui-react";

export default observer(function ActivityFilters() {
  return (
    <>
      <Menu vertical size="large" style={{ width: "100%", marginTop: 30 }}>
        <Header icon="filter" attached color="teal" content="Filters" />
        <Menu.Item
          // active={predicate.size === 0}
          // onClick={() => setPredicate("all", "true")}
          content="All Activities"
        />
        <Menu.Item
          // active={predicate.has("isGoing")}
          // onClick={() => setPredicate("isGoing", "true")}
          content="I'm going"
        />
        <Menu.Item
          // active={predicate.has("isHost")}
          // onClick={() => setPredicate("isHost", "true")}
          content="I'm hosting"
        />
      </Menu>
      <Calendar />
    </>
  );
});
