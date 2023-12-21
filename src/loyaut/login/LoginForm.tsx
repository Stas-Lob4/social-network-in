import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import styled from 'styled-components';

type FormData = {
    email: string;
    password: string;
};

interface LoginFormProps {
    onSubmit: SubmitHandler<FormData>;
}

export const LoginForm: React.FC<LoginFormProps> = ({onSubmit}) => {
    const {register, handleSubmit, formState: {errors} }= useForm<FormData>();

    return (
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
            <TitleForm>Login</TitleForm>
            <div>
                <InputForm
                    type="text"
                    id="username"
                    placeholder={'Email'}
                    {...register('email', {required: 'Username is required'})}
                />
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
                <InputForm
                    type="password"
                    id="password"
                    placeholder={'Password'}
                    {...register('password', {required: 'Password is required'})}
                />
                {errors.password && <p>{errors.password.message}</p>}
            </div>
            <ButtonSendForm type="submit">Login</ButtonSendForm>
        </FormStyled>
    );
}

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 25px;
    border: 1px solid #00000024;
    box-shadow: -8px 4px 5px 0 rgba(0, 0, 0, 0.24);
    padding: 97px 40px 47px 40px;
    border-radius: 20px;
`

export const TitleForm = styled.h2`
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

export const InputForm = styled.input`
    width: 400px;
    height: 55px;
    padding: 16px;
    background: none;
    border: 1px solid white;
    border-radius: 12px;
    color: white;
`
export const ButtonSendForm = styled.button`
    border-radius: 12px;
    width: 400px;
    padding: 14px 10px;
    justify-content: center;
    align-items: center;
    background: linear-gradient(91deg, #628EFF 9.91%, #8740CD 53.29%, #580475 91.56%);

    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border: none;

    &:hover {
        background: linear-gradient(91deg, #2E4CEE 9.91%, #221EBF 53.29%, #040F75 91.56%);
    }
`
