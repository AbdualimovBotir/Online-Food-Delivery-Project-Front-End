import React from 'react'
import { Formik, Field, ErrorMessage } from 'formik'
import { TextField, Typography, Button } from '@mui/material'
import { object, string } from 'yup'
import { useNavigate } from 'react-router-dom'

const initialValues = {
  email: '',
  password: ''
}

// Validation schema using Yup
const validationSchema = object({
  email: string().email('Invalid email format').required('Email is required'),
  password: string().min(6, 'Password must be at least 6 characters').required('Password is required')
})

const LoginForm = () => {
  const navigate=useNavigate()
  // Form submission handler
  const handleSubmit = (values) => {
    console.log(values)
    // Handle form submission (e.g., make API call)
  }

  return (
    <div>
      <Typography variant="h5" className="text-center" gutterBottom>
        Login
      </Typography>
      
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ touched, errors }) => (
          <form>
            {/* Email Field */}
            <Field
              as={TextField}
              name="email"
              label="Email"
              fullWidth
              variant="outlined"
              error={touched.email && !!errors.email}
              helperText={<ErrorMessage name="email" />}
              margin="normal"
            />

            {/* Password Field */}
            <Field
              as={TextField}
              name="password"
              label="Password"
              fullWidth
              type="password"
              variant="outlined"
              error={touched.password && !!errors.password}
              helperText={<ErrorMessage name="password" />}
              margin="normal"
            />

            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: '16px' }}
              sx={{mt:2,padding:"1rem"}}
            >
              Login
            </Button>
          </form>
        )}
      </Formik>
      <Typography variant='body2' align='center' sx={{mt:3}}>
        Don't have an account?
        <Button size='small' onClick={()=>navigate("/account/register")}>register</Button>
      </Typography>
    </div>
  )
}

export default LoginForm
