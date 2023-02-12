import { Container, Header, Segment } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";

export default function ServerError() {
  const { commonStore } = useStore();

  return (
    <Container>
      <Header as={"h1"} content={"Server Error"} />
      <Header sub as={"h5"} content={commonStore.error?.message} />
      {commonStore.error?.details && (
        <Segment>
          <Header sub as={"h4"} content="Stack trace" color="teal" />
          <code style={{ marginTop: 10 }}>
            <NewlineText text={commonStore.error.details} />
          </code>
        </Segment>
      )}
    </Container>
  );
}

interface Props {
  text: string;
}

function NewlineText({ text }: Props) {
  const newText = text.split("\n").map((str) => <p>{str}</p>);

  return <>{newText}</>;
}
