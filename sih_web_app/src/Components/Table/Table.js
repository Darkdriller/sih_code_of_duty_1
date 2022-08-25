import React from 'react';
import './Table.css';

const Table = ({ columns = [], data = [] }) => {
    return (
        <>
            <table className="w-full">
                <thead>
                <tr>
                    {columns.map((column, i) => (
                        <th key={i}>
                            {column.name}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data.map((data, di) => (
                    <tr key={di}>
                        {columns.map((column, i) => (
                            <td key={i}>{column.value(data, di)}</td>
                        ))}
                    </tr>
                ))}
                {data.length === 0 && (
                    <tr>
                        <td className="text-center" colSpan={columns.length}>The list is empty.</td>
                    </tr>
                )}
                </tbody>
            </table>
        </>
    );
};

export default Table;