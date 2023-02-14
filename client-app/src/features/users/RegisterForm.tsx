import { ErrorMessage, Form, Formik } from "formik";
import { observer } from "mobx-react-lite";
import { Button, Header } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import MyTextInput from "../../common/form/MyTextInput";
import * as Yup from "yup";
import ValidationErrors from "../errors/ValidationErrors";

export default observer(function RegisterForm() {
  const { userStore } = useStore();

  return (
    <Formik
      initialValues={{ email: "", displayName: "", username: "", password: "", error: null }}
      onSubmit={(values, { setErrors }) =>
        userStore.register(values).catch((error) => setErrors({ error }))
      }
      validationSchema={Yup.object({
        email: Yup.string().required().email(),
        displayName: Yup.string().required(),
        username: Yup.string().required(),
        password: Yup.string().required(),
      })}
    >
      {({ handleSubmit, isSubmitting, errors, isValid, dirty }) => (
        <Form className="ui form error" onSubmit={handleSubmit} autoComplete="off">
          <Header as="h2" content="Resister to Reactivities" color="teal" textAlign="center" />
          <MyTextInput placeholder="Email" name="email" />
          <MyTextInput placeholder="Username" name="username" />
          <MyTextInput placeholder="Display Nsame" name="displayName" />
          <MyTextInput placeholder="Password" name="password" type="password" />
          <ErrorMessage name="error" render={() => <ValidationErrors errors={errors.error} />} />
          <Button
            disabled={!isValid || !dirty || isSubmitting}
            loading={isSubmitting}
            positive
            content="Register"
            type="submit"
            fluid
          />
        </Form>
      )}
    </Formik>
  );
});
