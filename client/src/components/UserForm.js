import React, { useState, useEffect } from "react";
import { Formik, Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const UserForm = () => {
  return (
    <div className="form">
      <h1>Form</h1>
      <Form>
        <Field type="text" name="username" placeholder="Username" />
        <Field type="text" name="password" placeholder="Password" />
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
  }
})(UserForm);

export default FormikForm;
