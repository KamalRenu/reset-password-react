import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Register() {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmpassword: ''
        },
        validationSchema : Yup.object({
            username : Yup.string().min(5, 'Name must atleast contain 3 characters'),
            email : Yup.string().email('Enter valid email'),
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
                await axios.post("https://reset-pass-node.herokuapp.com/api/auth/register",values)
                navigate("/")
            } catch (error) {
                console.log(error)
            }
        },
    });
    return (
        <div className="center">
            <h1>Register</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="txt_field">
                    <input type="text" name='name' onChange={formik.handleChange} value={formik.values.name} />
                    <label>Name</label>
                </div>
                <div className="txt_field">
                    <input type="email" name='email' onChange={formik.handleChange} value={formik.values.email} />
                    <label>Email</label>
                </div>
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

export default Register