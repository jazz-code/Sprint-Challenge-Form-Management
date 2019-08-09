import React, { useState, useEffect } from "react";
import { Formik, Form, Field, withFormik, validateYupSchema } from "formik";
import * as Yup from "yup";
import axios from "axios";

const UserForm = () => {
  return (
    <div className="form">
      <h1>Form</h1>
      <Form>
        <Field type="text" name="username" placeholder="Username" />
        <Field type="text" name="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

const FormikForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is Required"),
    password: Yup.string().required("Password is Required")
  }),

  handleSubmit(values, { resetForm }) {
    axios
      .post(`http://localhost:5000/api/register`, values)
      .then(res => console.log(res));
    resetForm();
  }
})(UserForm);

export default FormikForm;
