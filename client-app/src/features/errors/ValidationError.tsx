import { Message } from "semantic-ui-react";

interface Props {
  errors: string[] | null;
}
export default function ValidationError({ errors }: Props) {
  return (
    <Message error>
      <Message.Header>
        There are some errors with your submission
      </Message.Header>
      {errors && (
        <Message.List>
          {errors.map((err, i) => (
            <Message.Item key={i}>{err}</Message.Item>
          ))}
        </Message.List>
      )}
    </Message>
  );
}
