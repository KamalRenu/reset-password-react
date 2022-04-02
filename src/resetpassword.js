import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function ResetPassword() {
    const navigate = useNavigate()
    const URLToken = useParams()
    const formik = useFormik({
        initialValues: {
            password: '',
            confirmpassword: ''
        },
        validationSchema : Yup.object({
            password : Yup.string()
                .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            ),
            confirmpassword : Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
        }),
        onSubmit: async (values) => {
            try {
                await axios.put(`https://reset-pass-node.herokuapp.com/api/auth/resetpassword/${URLToken.resetToken}`,values)
                navigate("/")
            } catch (error) {
                console.log(error)
            }
        },
    });
  return (
    <div className="center">
    <h1>Reset Password</h1>
    <form onSubmit={formik.handleSubmit}>
        <div className="txt_field">
            <input type="password" name='password' onChange={formik.handleChange} value={formik.values.password} />
            <label>Password</label>
        </div>
        <div className="txt_field">
            <input type="password" name="confirmpassword" onChange={formik.handleChange} value={formik.values.confirmpassword} />
            <label>Confirm Password</label>
        </div>
        <input type="submit" name="" value="Signup" />
    </form>
</div>
  )
}

export default ResetPassword