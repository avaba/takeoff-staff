import React from 'react';
import {useParams} from "react-router-dom";
import {Stack} from "@mui/material";
import ContactForm from "../components/Forms/ContactForm/ContactForm";

const AddEditContact = () => {
    const id = useParams().id
    const isAddMode = !id;

    return (
        <Stack justifyContent="center" alignItems="center">
            {isAddMode ? <h1>Add contact</h1> : <h1>Edit contact</h1>}
            <ContactForm
                id={id}
                isAddMode={isAddMode}
            />
        </Stack>
    );
};

export default AddEditContact;