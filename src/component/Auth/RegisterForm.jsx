import React from 'react'
import { Formik, Field, ErrorMessage } from 'formik'
import { TextField, Typography, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material'
import { object, string } from 'yup'
import { useNavigate } from 'react-router-dom'

// Initial values for the form fields
const initialValues = {
  fullName: '',
  email: '',
  password: '',
  role: '', // Default role
}

// Validation schema using Yup
const validationSchema = object({
  fullName: string().required('Full name is required'),
  email: string().email('Invalid email format').required('Email is required'),
  password: string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  role: string().required('Role is required')
})

const RegisterForm = () => {
  const navigate = useNavigate()

  // Form submission handler
  const handleSubmit = (values) => {
    console.log('Form submitted with values:', values) // Check if this log prints values
    // Perform actual registration logic (e.g., API call)
  }

  return (
    <div>
      <Typography variant="h5" className="text-center" gutterBottom>
        Register
      </Typography>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('Form Values:', values) // Debug log to ensure it's being triggered
          handleSubmit(values) // Call the handleSubmit with values
        }}
      >
        {({ touched, errors }) => (
          <form>
            {/* Full Name Field */}
            <Field
              as={TextField}
              name="fullName"
              label="Full Name"
              fullWidth
              variant="outlined"
              error={touched.fullName && !!errors.fullName}
              helperText={<ErrorMessage name="fullName" />}
              margin="normal"
            />

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

            {/* Role Selection */}
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel id="role-simple-select-label">Role</InputLabel>
              <Field
                as={Select}
                name="role"
                labelId="role-simple-select-label"
                label="Role"
                error={touched.role && !!errors.role}
              >
                <MenuItem value="ROLE_CUSTOMER">Customer</MenuItem>
                <MenuItem value="ROLE_RESTAURANT_OWNER">Restaurant Owner</MenuItem>
                {/* You can add more roles here */}
              </Field>
              <ErrorMessage name="role" component="div" style={{ color: 'red', marginTop: '4px' }} />
            </FormControl>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2, padding: '1rem' }}  // Using sx prop for styling
            >
              Register
            </Button>
          </form>
        )}
      </Formik>

      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        Already have an account? 
        <Button size="small" onClick={() => navigate("/account/login")}>
          Login
        </Button>
      </Typography>
    </div>
  )
}

export default RegisterForm
 