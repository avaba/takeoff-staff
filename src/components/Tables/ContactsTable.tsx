import React, {useEffect, useMemo, useState} from 'react';
import {
    Box,
    Card,
    CircularProgress,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from "@mui/material";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import ActionContactsTable from "./ActionContactsTable";

const ContactsTable = () => {
    const {isLoading, error, list} = useTypedSelector(state => state.contacts)
    const {fetchContacts} = useActions()
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        fetchContacts()
    }, [])

    const filterContact = useMemo(() => {
        return list.filter(item =>
            item.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.lastName.toLowerCase().includes(searchQuery.toLowerCase())
        )
    }, [list, searchQuery])

    const renderTable = () => {
        return (
            <Card>
                <Box sx={{padding: 3}}>
                    <TextField
                        fullWidth
                        label="Search for name"
                        variant="outlined"
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </Box>
                <TableContainer>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Phone</TableCell>
                                <TableCell>Position</TableCell>
                                <TableCell align={"center"}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filterContact.map(item => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.firstName} {item.lastName}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.phone}</TableCell>
                                    <TableCell>{item.position}</TableCell>
                                    <TableCell align={"center"}><ActionContactsTable id={item.id}/></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        )
    }

    const loading = isLoading && <CircularProgress sx={{margin: "0 auto", display: "block"}}/>
    const content = (!isLoading && list.length) && renderTable()
    const errorMessage = (!isLoading && error) && (<p>{error}</p>)

    return (
        <>
            {loading}
            {content}
            {errorMessage}
        </>
    );
};

export default ContactsTable;