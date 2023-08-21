import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import styled from 'styled-components';

const RemainingContainer = styled.div`
    background-color: ${props => props.alertType === 'alert-danger' ? '#f8d7da' : '#d4edda'};
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    margin-top: 20px;
    color: ${props => props.alertType === 'alert-danger' ? '#721c24' : '#155724'};
`;

const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    return (
        <RemainingContainer alertType={alertType}>
            <span>Remaining: ${budget - totalExpenses}</span>
        </RemainingContainer>
    );
};

export default Remaining;