import { useState } from 'react';
import { Button, Stack, TextField, Typography, colors } from '@mui/material';
import React from 'react';
import { ScreenMode } from '../pages/SigninPage';

const SignupForm = ({ onSwitchMode }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your validation logic here
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // Basic email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert("Invalid email format");
            return;
        }

        // Proceed with your signup logic here
        // ...

        // Clear form after successful signup
        setFormData({
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    };

    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            sx={{
                height: "100%",
                color: colors.grey[800]
            }}
        >
            <Stack spacing={5} sx={{
                width: "100%",
                maxWidth: "500px"
            }}>
                <Stack>
                    <Typography variant='h3' fontWeight={600} color={colors.grey[800]}>
                        Create an account
                    </Typography>
                </Stack>
                <Stack spacing={4}>
                    <Stack spacing={1}>
                        <Typography color={colors.grey[800]}>Name</Typography>
                        <TextField
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </Stack>
                    <Stack spacing={1}>
                        <Typography color={colors.grey[800]}>Email</Typography>
                        <TextField
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </Stack>
                    <Stack spacing={1}>
                        <Typography color={colors.grey[800]}>Password</Typography>
                        <TextField
                            name='password'
                            type='password'
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </Stack>
                    <Stack spacing={1}>
                        <Typography color={colors.grey[800]}>Confirm Password</Typography>
                        <TextField
                            name='confirmPassword'
                            type='password'
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    </Stack>
                    <Button
                        variant='contained'
                        size='large'
                        onClick={handleSubmit}
                        sx={{
                            bgcolor: colors.grey[800],
                            "&:hover": {
                                bgcolor: colors.grey[600]
                            }
                        }}
                    >
                        Sign up
                    </Button>
                </Stack>

                <Stack direction="row" spacing={2}>
                    <Typography>Already have an account?</Typography>
                    <Typography
                        onClick={() => onSwitchMode(ScreenMode.SIGN_IN)}
                        fontWeight={600}
                        sx={{
                            cursor: "pointer",
                            userSelect: "none"
                        }}
                    >
                        Sign in
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default SignupForm;
