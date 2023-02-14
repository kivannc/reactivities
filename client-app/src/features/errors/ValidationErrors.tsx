import { Message } from "semantic-ui-react";

interface Props {
  errors: any;
}
export default function ValidationErrors({ errors }: Props) {
  return (
    <Message error>
      <Message.Header>There are some errors with your submission</Message.Header>
      {errors && (
        <Message.List>
          {errors.map((err: any, i: any) => (
            <Message.Item key={i}>{err}</Message.Item>
          ))}
        </Message.List>
      )}
    </Message>
  );
}
