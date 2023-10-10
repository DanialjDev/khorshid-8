import { InitialValues, ValidationSchemaType } from "../auth/types";

type Action = "updateCounselor";

const adminValidation = (action: Action) => {
  let initialValues: InitialValues;
  let validationSchema: ValidationSchemaType;

  switch (action) {
    case "updateCounselor":
      initialValues = {};
  }
};
