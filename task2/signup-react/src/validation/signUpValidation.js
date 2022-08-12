import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required("required field"),
  lastName: yup.string().required("required field"),
  gender: yup.string().required("required Field"),
  age: yup.number().required("required Field").positive().integer(),
  email: yup.string().email().required("required field"),
  socialConnection: yup.string().url("must be a url"),
});

export default schema;
