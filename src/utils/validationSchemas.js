import * as Yup from 'yup';

// Validation schema for login form
export const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
        .max(30, 'Email cannot be longer than 30 characters.')
        .matches(/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,6}$/, 'Enter a valid email address (e.g., example@mail.xyz).')
        .required('Email is required.'),
    password: Yup.string()
        .min(8, 'Minimum length of 8 characters.')
        .matches(/[a-z]/, 'Must contain at least one lowercase letter (a-z).')
        .matches(/[A-Z]/, 'Must contain at least one uppercase letter (A-Z).')
        .matches(/[0-9!@#$%^&*(),.?":{}|<>]/, 'Must contain at least one number (0-9) or special character (!@#$%^&*).')
        .required('Password is required.'),
});

// Validation schema for sign-up form
export const registerValidationSchema = Yup.object().shape({

    name: Yup.string()
        .matches(/^[\p{L}\s']+$/u, 'Name must only contain letters, spaces, hyphens, and apostrophes')
        .min(2, 'Name must be at least 2 character')
        .max(100, 'Name cannot be longer than 100 characters')
        .required('Name is required'),
    email: Yup.string()
        .max(30, 'Email cannot be longer than 30 characters.')
        .matches(/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,6}$/, 'Enter a valid email address (e.g., example@mail.xyz).')
        .required('Email is required.'),
    city: Yup.string()
        .matches(/^[\p{L}\s]+$/u, 'City must only contain letters and spaces')
        .required('City is required'),
    state: Yup.string()
        .matches(/^[\p{L}\s]+$/u, 'State must only contain letters and spaces')
        .required('State is required'),
    country: Yup.string()
        .matches(/^[\p{L}\s]+$/u, 'Country must only contain letters and spaces')
        .required('Country is required'),
    password: Yup.string()
        .min(8, 'Minimum length of 8 characters.')
        .matches(/[a-z]/, 'Must contain at least one lowercase letter (a-z).')
        .matches(/[A-Z]/, 'Must contain at least one uppercase letter (A-Z).')
        .matches(
            /[0-9!@#$%^&*(),.?":{}|<>]/,
            'Must contain at least one number (0–9) or special character (!@#$%^&*).'
        )
        .required('Password is required.'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match.')
        .required('Confirm Password is required.'),
});

//validation schema for edit profile
export const eidtProfile = Yup.object().shape({

    name: Yup.string()
        .matches(/^[\p{L}\s']+$/u, 'Name must only contain letters, spaces, hyphens, and apostrophes')
        .min(2, 'Name must be at least 2 character')
        .max(100, 'Name cannot be longer than 100 characters')
        .required('Name is required'),
    email: Yup.string()
        .max(30, 'Email cannot be longer than 30 characters.')
        .matches(/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,6}$/, 'Enter a valid email address (e.g., example@mail.xyz).')
        .required('Email is required.'),
    city: Yup.string()
        .matches(/^[\p{L}\s]+$/u, 'City must only contain letters and spaces')
        .required('City is required'),
    state: Yup.string()
        .matches(/^[\p{L}\s]+$/u, 'State must only contain letters and spaces')
        .required('State is required'),
    country: Yup.string()
        .matches(/^[\p{L}\s]+$/u, 'Country must only contain letters and spaces')
        .required('Country is required'),

});

// Validation schema for forgot password form
export const forgotPasswordValidationSchema = Yup.object().shape({
    email: Yup.string()
        .max(30, 'Email cannot be longer than 30 characters.')
        .matches(/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,6}$/, 'Enter a valid email address (e.g., example@mail.xyz).')
        .required('Email is required.'),
});

// Validation schema for reset password form
export const resetPasswordValidationSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, 'Minimum length of 8 characters.')
        .matches(/[a-z]/, 'Must contain at least one lowercase letter (a-z).')
        .matches(/[A-Z]/, 'Must contain at least one uppercase letter (A-Z).')
        .matches(
            /[0-9!@#$%^&*(),.?":{}|<>]/,
            'Must contain at least one number (0–9) or special character (!@#$%^&*).'
        )
        .required('Password is required.'),

    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match.')
        .required('Confirm Password is required.'),
});

// Validation schema for location address form
export const locationAddressValidationSchema = Yup.object().shape({
    address: Yup.string()
        .min(2, 'Address must be at least 2 character')
        .max(100, 'Address cannot be longer than 100 characters'),
    // .required('Address is required'),
    city: Yup.string()
        .min(2, 'City must be at least 2 character')
        .max(100, 'City cannot be longer than 100 characters'),
    // .required('City is required'),
    area: Yup.string()
        .min(2, 'Area must be at least 2 character')
        .max(100, 'Area cannot be longer than 100 characters'),
    // .required('Area is required'),
    // postalCode: Yup.string()
    //   .min(2, 'Postal code must be at least 2 character')
    //   .max(100, 'Postal code cannot be longer than 100 characters')
    postalCode: Yup.string()
        // .required(t('errorsTxt.postalCodeRequired')),
        .matches(/^\d+$/, "Postal code contain only numbers")
    // .required('Postal code is required'),
});

