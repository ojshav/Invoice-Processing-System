import { useState } from "react";
import { TextField, Typography, Box, Button, styled } from "@mui/material";
import { saveInvoice } from "../services/api";

const Component = styled(Box)({
    marginTop: 20,
    '& > p': {
        fontSize: 26,
        marginBottom: 10
    },
    '& > div > div': {
        marginRight: 20,
        minWidth: 200
    }
})

const defaultObj = {
    vendor: '',
    product: '',
    amount: 0,
    date: '',
    action: 'pending'
}

const AddInvoice = ({ setAddInvoice }) => {
    const [invoice, setInvoice] = useState(defaultObj);

    const onValueChange = (e) => {
        setInvoice({ ...invoice, [e.target.name]: e.target.value })
    }

    const addNewInvoice = async () => {
        await saveInvoice({ ...invoice, amount: Number(invoice['amount']) });

        setAddInvoice(false);
        

        // Check if setAddInvoice is a function before calling it
        if (typeof setAddInvoice === 'function') {
            setAddInvoice(false);
        } else {
            console.error("setAddInvoice is not a function");
        }
    }

    return (
        <Component>
            <Typography>Add Invoice</Typography>
            <Box>
                <TextField 
                    name="vendor"
                    variant="standard"
                    placeholder="Enter vendor name"
                    onChange={onValueChange}
                    autoComplete="off"
                />
                <TextField 
                    name="product"
                    variant="standard"
                    placeholder="Enter product name"
                    onChange={onValueChange}
                    autoComplete="off"
                />
                <TextField 
                    name="amount"
                    variant="standard"
                    placeholder="Enter amount (in Rs)"
                    onChange={onValueChange}
                    type="number"
                    autoComplete="off"
                />
                <TextField 
                    name="date"
                    variant="standard"
                    placeholder="Enter date"
                    onChange={onValueChange}
                    type="date"
                    autoComplete="off"
                />
                <Button
                    variant="contained"
                    onClick={addNewInvoice}
                >Add Invoice</Button>
            </Box>
        </Component>
    );
}

export default AddInvoice;
