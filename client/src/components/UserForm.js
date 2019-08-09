import React, { useState, useEffect } from "react";
import { Formik, Form, Field, withFormik, validateYupSchema } from "formik";
import * as Yup from "yup";
import axios from "axios";

const UserForm = ({ status }) => {
  const [userData, setUserData] = useState([]);

  // useEffect(()=> {
  //   if (status) {
  //     setUserData([...userData, status])
  //   }
  // },[status])

  useEffect(() => {
    axios.get(`http://localhost:5000/api/restricted/data`).then(res => {
      const data = res.data;
      setUserData(data);
    });
  }, []);

  return (
    <div className="form">
      <h1>Form</h1>
      <Form>
        <Field type="text" name="username" placeholder="Username" />
        <Field type="text" name="password" placeholder="Password" />
        <button data-test-id="submit" type="submit">
          Submit
        </button>
      </Form>
      {userData.map(data => {
        console.log(data);
        return (
          <div>
            <h3>Name: {data.name}</h3>
            <h3>Course: {data.course}</h3>
            <h3>Technique: {data.technique}</h3>
          </div>
        );
      })}
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
