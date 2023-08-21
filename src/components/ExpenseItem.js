import React, { useContext } from "react";
import {TiDelete} from 'react-icons/ti';
import { AppContext } from "../context/AppContext";
import styled from 'styled-components';

const ListItem = styled.li`
    list-style: none;
    background-color: #f4f4f4;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    .badge {
        background-color: #007bff;
    }
`;

const DeleteIcon = styled(TiDelete)`
    cursor: pointer;
    color: #e74c3c;
    font-size: 1.5em;
`;

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch ({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    return(
        <ListItem>
            {props.name}
            <div>
                <span className="badge badge-primary badge-pill mr-3">
                    ${props.cost}
                </span>
                <DeleteIcon onClick={handleDeleteExpense} />
            </div>
        </ListItem>
    );
};

export default ExpenseItem;