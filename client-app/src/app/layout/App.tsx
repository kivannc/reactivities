import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import { Outlet, useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";

function App() {
  const locaiotn = useLocation();

  return (
    <>
      {locaiotn.pathname !== "/" && <NavBar />}
      <Container style={{ marginTop: "7em" }}>
        <Outlet />
      </Container>
    </>
  );
}

export default observer(App);
