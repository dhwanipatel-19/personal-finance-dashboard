import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import styled from 'styled-components';

const BudgetContainer = styled.div`
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const BudgetHeader = styled.h2`
    font-size: 24px;
    margin-bottom: 10px;
`;

const BudgetContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const BudgetAmount = styled.p`
    font-size: 18px;
    margin: 0;
`;

const BudgetInput = styled.input`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100px;
`;

const BudgetUpdateButton = styled.button`
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

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState('');

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    };

    const handleBudgetUpdate = () => {
        if (!isNaN(newBudget) && newBudget >= 0) {
            dispatch({
                type: 'UPDATE_BUDGET',
                payload: parseInt(newBudget),
            });
            setNewBudget('');
        }
    };

    return (
        <BudgetContainer>
            <BudgetHeader>Your Budget</BudgetHeader>
            <BudgetContent>
                <BudgetAmount>Current budget: ${budget}</BudgetAmount>
                <div>
                    <BudgetInput
                        type='number'
                        value={newBudget}
                        onChange={handleBudgetChange}
                    />
                    <BudgetUpdateButton onClick={handleBudgetUpdate}>
                        Update
                    </BudgetUpdateButton>
                </div>
            </BudgetContent>
        </BudgetContainer>
    );
};

export default Budget;
