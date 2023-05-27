import React from "react";
import { useFormik } from "formik";
import validationSchema from "../assets/ValidationSchema";
import register from "../assets/FakeApi";
// import yup from "yup";

const FormikForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };

  const onSubmit = async (formValues) => {
    try {
      await register(formValues);
      console.log(formValues);
      resetForm();

      alert("registration success");
    } catch ({ errors }) {
      console.log(errors);
      // to manually set error on the field(s)
      for (let key of errors) {
        setFieldError(key, errors[key]);
      }
    }
  };

  const {
    handleSubmit,
    values,
    touched,
    isValid,
    handleChange,
    handleBlur,
    resetForm,
    errors,
    isSubmitting,
    setFieldError,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <form>
      <div className="mb-10">
        <h1 className="text-5xl font-bold text-center">Create Profile</h1>
        <p className="text-gray-500 text-center">
          add information of your profile
        </p>
      </div>
      <div className="my-4 mx-4">
        <img
          src="../assets/images/ukraineapr2022president.jpg"
          alt=""
          className="img"
        />
      </div>
      <div className="my-4">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          className="input"
          placeholder="first name"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          id="firstName"
        />
        {touched.firstName && errors.firstName ? (
          <small className="error">{errors.firstName}</small>
        ) : (
          ""
        )}
      </div>
      <div className="my-4">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          className="input"
          placeholder="last name"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          id="lastName"
        />
        {touched.lastName && errors.lastName ? (
          <small className="error">{errors.lastName}</small>
        ) : (
          ""
        )}
      </div>
      <div className="my-4">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          className="input"
          placeholder="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          id="email"
        />
        {touched.email && errors.email ? (
          <small className="error">{errors.email}</small>
        ) : (
          ""
        )}
      </div>
      <div className="my-4">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="input"
          placeholder="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          id="password"
        />
        {touched.password && errors.password ? (
          <small className="error">{errors.password}</small>
        ) : (
          ""
        )}
      </div>
      <div className="my-4">
        <label htmlFor="confimationPassword">Confirm Password</label>
        <input
          type="password"
          className="input"
          placeholder="confirm password"
          name="passwordConfirmation"
          value={values.passwordConfirmation}
          onChange={handleChange}
          onBlur={handleBlur}
          id="passwordConfirmation"
        />
        {touched.passwordConfirmation && errors.passwordConfirmation ? (
          <small className="error">{errors.passwordConfirmation}</small>
        ) : (
          ""
        )}
        <div className="my-4">
          <button className="btn" disabled={!isValid || isSubmitting}>
            Register
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormikForm;
