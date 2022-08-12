import React from "react";
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import signUpValidation from "../validation/signUpValidation";
import "./Signup.css";
const SignUp = () => {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      gender: "",
      age: "",
      email: "",
      socialConnection: "",
    },
    validationSchema: signUpValidation,
    onSubmit: (values, { setSubmitting }) => {
      //
      let userdata;
      localStorage.getItem("userdata") === null
        ? (userdata = [])
        : (userdata = JSON.parse(localStorage.getItem("userdata")));
      userdata.push(values);
      localStorage.setItem("userdata", JSON.stringify(userdata));
      setSubmitting(false);
      navigate("../users", { replace: true });
    },
  });

  return (
    <div className="signup-form-parant container">
      <button>
        <Link to="/users">User Table</Link>
      </button>
      <h1>Sign Up Form</h1>
      <hr />
      <form onSubmit={formik.handleSubmit} className="sign-form">
        <div>
          <div>
            <label htmlFor="firstName">First Name :</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            {formik.errors.firstName &&
              formik.touched.firstName &&
              formik.errors.firstName}
          </div>
          <div>
            <label htmlFor="lastName">Last Name :</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            {formik.errors.lastName &&
              formik.touched.lastName &&
              formik.errors.lastName}
          </div>
        </div>
        <div>
          <label htmlFor="gender">gender :</label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={formik.handleChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={formik.handleChange}
          />
          Female
          {formik.errors.gender &&
            formik.touched.gender &&
            formik.errors.gender}
        </div>

        <div>
          <label htmlFor="age">age :</label>
          <input
            name="age"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.age}
          />
          {formik.errors.age && formik.touched.age && formik.errors.age}
        </div>

        <div>
          <label htmlFor="email">Email Address :</label>
          <input
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && formik.errors.email}
        </div>
        <div>
          <label htmlFor="socialConnection">Social site :</label>
          <input
            id="socialConnection"
            name="socialConnection"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.socialConnection}
          />
          {formik.errors.socialConnection &&
            formik.touched.socialConnection &&
            formik.errors.socialConnection}
        </div>
        <div className="clearfix">
          <button type="button" className="cancelbtn">
            Cancel
          </button>
          <button type="submit" className="signupbtn">
            {/* disabled={formik.isSubmitting} */}
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
