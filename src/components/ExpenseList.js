import React, { useContext } from "react";
import ExpenseItem from './ExpenseItem';
import { AppContext } from "../context/AppContext";
import styled from 'styled-components';

const ListContainer = styled.ul`
    padding: 0;
`;

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    return(
        <ListContainer>
            {expenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    id={expense.id}
                    name={expense.name}
                    cost={expense.cost}
                />
            ))}
        </ListContainer>
    )
}

export default ExpenseList;