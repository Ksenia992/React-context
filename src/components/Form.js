import * as React from 'react';
import { useFormik } from 'formik';
import Box from "@mui/material/Box";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import * as Yup from "yup"
// import { useHistory } from 'react-router-dom'
// import { Link, withRouter } from "react-router-dom";


const Form = () => {
    // const history = useHistory()
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            isAgreeToPrivacy: false
        },
        validationSchema: Yup.object({
            name: Yup
                .string()
                .max(12)
                .matches(/^[aA-zZ\s]+$/, 'Enter valid name')
                .required("Required"),
            email: Yup.string()
                .email("The e-mail address is invalid.")
                .required("Required"),
            phone: Yup.number()
                .typeError("Enter valid number")
                .positive("A phone number can't start with a minus")
                .integer("A phone number can't include a decimal point")
                .min(8)
                .required('Required'),
            password: Yup.string().required("Required").test(
                "regex",
                "Password must be min 8 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase",
                val => {
                    let regExp = new RegExp(
                        "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
                    );
                    return regExp.test(val);
                }
            ),
            confirmPassword: Yup
                .string()
                .required("Required")
                .oneOf([Yup.ref("password"), null], "Passwords must match"),
            isAgreeToPrivacy: Yup.boolean().oneOf([true], "You must accept Privacy Policy")
        }),
        onSubmit: (values) => {
            localStorage.setItem("userData", JSON.stringify(values))
            // history.push('/profile');
        },
    })
    return (
                <form onSubmit={formik.handleSubmit}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'column',
                        alignItems: 'center',
                        height: '70vh'
                    }}>
                        <Box>
                            <TextField
                                name="name"
                                id="name"
                                label='Enter your name'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                fullWidth
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <div className="error">{formik.errors.name}</div>
                            ) : null}
                        </Box>
                        <Box>
                            <TextField
                                id="email"
                                name="email"
                                label='Email'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                fullWidth
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="error">{formik.errors.email}</div>
                            ) : null}
                        </Box>
                        <Box>
                            <TextField
                                name="phone"
                                id="phone"
                                label='Enter your phone'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone}
                                fullWidth
                            />
                            {formik.touched.phone && formik.errors.phone ? (
                                <div className="error">{formik.errors.phone}</div>
                            ) : null}
                        </Box>
                        <Box>
                            <TextField
                                name="password"
                                id="password"
                                label='Password'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                fullWidth
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <div className="error">{formik.errors.password}</div>
                            ) : null}
                        </Box>
                        <Box>
                            <TextField
                                name="confirmPassword"
                                id="confirmPassword"
                                label='Repeat password'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.confirmPassword}
                                fullWidth
                            />
                            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                <div className="error">{formik.errors.confirmPassword}</div>
                            ) : null}
                        </Box>
                        <Box sx={{
                          paddingLeft: '26px'
                        }}>
                            <FormControlLabel
                                label="I agree to the Privacy Policy"
                                control={
                                    <Checkbox
                                        name="isAgreeToPrivacy"
                                        id="isAgreeToPrivacy"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.isAgreeToPrivacy}
                                    />
                                }
                            />
                            {formik.touched.isAgreeToPrivacy && formik.errors.isAgreeToPrivacy ? (
                                <div className="error">{formik.errors.isAgreeToPrivacy}</div>
                            ) : null}
                        </Box>
                        {/*<Link to="/profile/">*/}
                        <Button color='primary' type='submit' variant="contained">
                           Sign up
                        </Button>
                        {/*</Link>*/}
                    </Box>
                </form>
    )
}

export default Form;