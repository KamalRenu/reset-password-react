import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema : Yup.object({
            email: Yup.string().email('Enter valid email').required('Email is required')
        }),
        onSubmit: async (values) => {
            try {
                await axios.post("https://reset-pass-node.herokuapp.com/api/password-reset",values)
                navigate("/")
            } catch (error) {
                console.log(error)
            }
        },
    });
  return (
    <div className="center">
            <h1>Forgot Password</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="txt_field">
                    <input type="email" name='email' onChange={formik.handleChange} value={formik.values.email} />
                    <label for="">Email</label>
                </div>
                <input type="submit" name="" value="Send Mail" />
            </form>
        </div>
  )
}

export default ForgotPassword