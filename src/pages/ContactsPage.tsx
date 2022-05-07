import React from 'react';
import ContactsTable from "../components/Tables/ContactsTable";
import {Button} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {PathRouter} from "../types/route";
import {useNavigate} from "react-router-dom";

const ContactsPage = () => {
    const navigation = useNavigate()

    return (
        <>
            <h1>Contacts list</h1>

            <Button
                variant={"contained"}
                sx={{marginBottom: 3}}
                startIcon={<AddCircleIcon />}
                onClick={() => navigation(PathRouter.addContact)}
            >
                Add contact
            </Button>

            <ContactsTable/>
        </>
    );
};

export default ContactsPage;