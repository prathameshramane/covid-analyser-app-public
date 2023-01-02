import React from "react";
import { useFormikContext } from "formik";

import Button from "../Button";

function SubmitButton({ text }) {
  const { handleSubmit } = useFormikContext();

  return <Button text={text} onPress={handleSubmit} />;
}

export default SubmitButton;
