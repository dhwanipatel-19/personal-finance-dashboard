import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const FormContainer = styled.form`
    margin-top: 20px;
`;

const FormRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

const FormLabel = styled.label`
    flex: 1;
    font-weight: bold;
    margin-right: 10px;
`;

const FormInput = styled.input`
    flex: 2;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const FormButton = styled.button`
    padding: 8px 16px;
    background-color: #007bff;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: #0056b3;
    }
`;

const AddExpenseForm = () =>{
    const { dispatch } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (event)=>{
        //event.preventDefault();

        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
        };

        dispatch({
            type:'ADD_EXPENSE',
            payload: expense
        });

        setName('');
        setCost('');
    };

    return (
        <FormContainer onSubmit={onSubmit}>
            <FormRow>
                <FormLabel>Name</FormLabel>
                <FormInput
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                />
            </FormRow>
            <FormRow>
                <FormLabel>Cost</FormLabel>
                <FormInput
                    type="number"
                    value={cost}
                    onChange={(event) => setCost(event.target.value)}
                    required
                />
            </FormRow>
            <FormButton type="submit">Save</FormButton>
        </FormContainer>
    );
};

export default AddExpenseForm;