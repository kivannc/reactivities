import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import { observer } from "mobx-react-lite";

function App() {
  return (
    <>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <Outlet />
      </Container>
    </>
  );
}

export default observer(App);
