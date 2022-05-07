import React, {useEffect} from 'react';
import * as L from './LoginFormStyle'
import {Card, CardContent, TextField, Typography} from "@mui/material";
import {LoadingButton} from '@mui/lab';
import network from '../../../api/network';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import {SubmitHandler, useForm} from "react-hook-form";
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';

type FormData = {
    email: string;
    password: string;
};

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
}).required();

const LoginForm = () => {
    const {isLoading, error} = useTypedSelector(state => state.auth)
    const {login} = useActions()
    const { register, handleSubmit, formState: {isValid}} = useForm<FormData>({
        mode: 'onChange',
        resolver: yupResolver(schema),
        defaultValues: {
            email: "sergey@mail.ru",
            password: "1234qwer"
        }
    });

    const onSubmit: SubmitHandler<FormData> = data => {
        login(data.email, data.password)
    };

    return (
        <L.Wrap>
            <Card>
                <CardContent>
                    <L.Form onSubmit={handleSubmit(onSubmit)}>
                        <L.Title>Login</L.Title>
                        <TextField
                            sx={{marginBottom: '15px'}}
                            fullWidth
                            label="Email"
                            variant="outlined"
                            type="text"
                            {...register('email')}
                        />
                        <TextField
                            sx={{marginBottom: '15px'}}
                            fullWidth
                            label="Password"
                            variant="outlined"
                            type="password"
                            autoComplete="on"
                            {...register('password')}
                        />
                        <LoadingButton
                            type="submit"
                            loading={isLoading}
                            disabled={isLoading || !isValid}
                            size={"large"}
                            variant={"contained"}
                            fullWidth
                        >
                            Log in
                        </LoadingButton>

                        {error && <Typography color="error" fontSize={12} sx={{marginTop: 2}}>{error}</Typography>}
                    </L.Form>
                </CardContent>
            </Card>
        </L.Wrap>
    );
};

export default LoginForm;