import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';

type FormData = {
    email: string;
    password: string;
};

interface LoginFormProps {
    onSubmit: SubmitHandler<FormData>;
}

export const LoginForm: React.FC<LoginFormProps> = ({onSubmit}) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    {...register('email', { required: 'Username is required' })}
                />
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    {...register('password', { required: 'Password is required' })}
                />
                {errors.password && <p>{errors.password.message}</p>}
            </div>
            <button type="submit">Login</button>
        </form>
    );
};