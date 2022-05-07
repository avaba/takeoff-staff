import React, {useEffect, useState} from 'react';
import * as yup from "yup";
import "yup-phone";
import {yupResolver} from '@hookform/resolvers/yup';
import {SubmitHandler, useForm} from "react-hook-form";
import network from "../../../api/network";
import * as C from './ContactFormStyle'
import ErrorIcon from "@mui/icons-material/Error";
import {Button, ButtonGroup, Card, CardContent, CircularProgress, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {PathRouter} from "../../../types/route";

interface IContactForm {
    id: string | undefined,
    isAddMode: boolean,
}

interface IDataForm {
    firstName: string,
    lastName: string,
    position: string,
    email: string,
    phone: string,
}

const defaultValue: IDataForm = {
    firstName: "",
    lastName: "",
    position: "",
    email: "",
    phone: "",
}

const schema = yup.object({
    firstName: yup.string().max(100).required(),
    lastName: yup.string().max(100).required(),
    position: yup.string().max(100).required(),
    email: yup.string().email("Email is not valid").max(100).required(),
    phone: yup.string().phone('RU', true, 'Phone number is invalid').required(),
}).required();

const ContactForm = ({id, isAddMode}: IContactForm) => {
    const navigation = useNavigate()
    const [loading, setLoading] = useState(false)
    const [isContact, setIsContact] = useState(true)

    const {register, handleSubmit, reset, setValue, formState: {isValid, errors}} = useForm<IDataForm>({
        mode: 'onChange',
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        if (!isAddMode) {
            setLoading(true)

            getContact(id).then(res => {
                if (!!res) {
                    setLoading(false)
                    setIsContact(true)
                    reset(res.data)
                } else {
                    setIsContact(false)
                    setLoading(false)
                }
            })
        } else {
            reset(defaultValue)
        }
    }, [isAddMode])

    const getContact = async (id: string | undefined) => {
        return await network.get(`/contacts/${id}`)
    }

    const editContact = async (id: string | undefined, data: IDataForm) => {
        if (!!id) {
            return await network.put(`/contacts/${id}`, data)
        }
    }

    const addContact = async (data: IDataForm) => {
        return await network.post("/contacts", data)
    }

    const deleteContact = async (id: string | undefined) => {
        if (!!id) {
            await network.delete(`/contacts/${id}`).then(() => {
                alert("Contact deleted!")
                navigation(PathRouter.home)
            })
        }
    }

    const onSubmit: SubmitHandler<IDataForm> = dataForm => {
        if (!isAddMode) {
            editContact(id, dataForm).then(() => alert("Contact updated!"))
        } else {
            addContact(dataForm).then(() => {
                reset(defaultValue)
                alert("Contact added!")
            })
        }
    }

    return (
        <>
            {(loading && !isAddMode) ? (
                <CircularProgress/>
            ) : isContact ? (
                <Card>
                    <C.Form onSubmit={handleSubmit(onSubmit)}>
                        <CardContent>
                            <TextField
                                fullWidth
                                label="First name"
                                variant="outlined"
                                helperText={errors.firstName?.message}
                                error={!!errors.firstName?.message}
                                sx={{marginBottom: 3}}
                                {...register("firstName")}
                            />

                            <TextField
                                fullWidth
                                label="Last name"
                                variant="outlined"
                                helperText={errors.lastName?.message}
                                error={!!errors.lastName?.message}
                                sx={{marginBottom: 3}}
                                {...register("lastName")}
                            />

                            <TextField
                                fullWidth
                                label="Position"
                                variant="outlined"
                                helperText={errors.position?.message}
                                error={!!errors.position?.message}
                                sx={{marginBottom: 3}}
                                {...register("position")}
                            />

                            <TextField
                                fullWidth
                                label="Email"
                                variant="outlined"
                                helperText={errors.email?.message}
                                error={!!errors.email?.message}
                                sx={{marginBottom: 3}}
                                {...register("email")}
                            />

                            <TextField
                                fullWidth
                                label="Phone"
                                variant="outlined"
                                helperText={errors.phone?.message}
                                error={!!errors.phone?.message}
                                sx={{marginBottom: 3}}
                                {...register("phone")}
                            />

                            <ButtonGroup>
                                <Button
                                    type={"submit"}
                                    variant={'contained'}
                                    size={"large"}
                                    disabled={!isValid || loading}
                                >
                                    {!isAddMode ? 'Edit contact' : 'Add contact'}
                                </Button>

                                <Button
                                    type={"button"}
                                    variant={'contained'}
                                    size={"large"}
                                    color={"warning"}
                                    onClick={() => navigation(PathRouter.home)}
                                >
                                    Cancel
                                </Button>

                                {!isAddMode && (
                                    <Button
                                        type={"button"}
                                        variant={'contained'}
                                        size={"large"}
                                        color={"secondary"}
                                        onClick={() => deleteContact(id)}
                                    >
                                        Delete contact
                                    </Button>
                                )}
                            </ButtonGroup>

                        </CardContent>
                    </C.Form>
                </Card>
            ) : (
                <Card>
                    <CardContent>
                        <ErrorIcon color={'error'}/>
                        <p>There is no contact with such an ID.</p>
                        <p>Check the URL in the browser bar.</p>
                        <Button
                            type={"button"}
                            variant={'contained'}
                            size={"large"}
                            onClick={() => navigation(PathRouter.home)}
                        >
                            Back to contact list
                        </Button>
                    </CardContent>
                </Card>
            )}
        </>
    );
};

export default ContactForm;