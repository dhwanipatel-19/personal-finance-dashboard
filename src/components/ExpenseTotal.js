import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import styled from 'styled-components';

const TotalContainer = styled.div`
    background-color: #f4f4f4;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    margin-top: 20px;
`;

const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return(
        <TotalContainer>
            <span>Spent so far: ${totalExpenses}</span>
        </TotalContainer>
    );
};

export default ExpenseTotal;