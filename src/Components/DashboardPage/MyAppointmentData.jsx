/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const MyAppointmentData = ({ book, i }) => {
    return (
        <tr>
            <td>{i + 1}</td>
            <td>{book.patient}</td>
            <td>{book.treatment}</td>
            <td>{book.date}</td>
        </tr>
    );
};

export default MyAppointmentData;