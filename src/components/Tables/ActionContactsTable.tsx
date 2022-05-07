import React, {useState} from 'react';
import {MenuItem} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import ActionMenuButton from "../Button/ActionMenuButton";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {useNavigate} from "react-router-dom";
import {PathRouter} from "../../types/route";
import network from "../../api/network";
import {useActions} from "../../hooks/useActions";

interface IActionUserTable {
    id: string
}

const ActionContactsTable = ({id}: IActionUserTable) => {
    const navigation = useNavigate()
    const {fetchContacts} = useActions()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleDelete = async (id: string) => {
        handleClose()
        if (!!id) {
            await network.delete(`/contacts/${id}`).then(() => {
                fetchContacts()
                alert("Contact deleted!")
            })
        }
    }

    const handleEdit = (id: string) => {
        navigation(PathRouter.editContact + `/${id}`)
        handleClose()
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <ActionMenuButton anchorEl={anchorEl} setAnchorEl={setAnchorEl}>
            <MenuItem onClick={() => handleEdit(id)}><EditIcon/> Edit</MenuItem>
            <MenuItem onClick={() => handleDelete(id)}><DeleteForeverIcon/> Delete</MenuItem>
        </ActionMenuButton>
    );
};

export default ActionContactsTable;