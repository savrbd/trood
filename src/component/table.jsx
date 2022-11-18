import React from 'react';
import TableBody from './tableBody';
import TableHeader from './tableHeader';

const Table = ({items, onBuy, onSort, sortBy, arrStatus, arrType, onFilter}) => {
    
    return (
        <table className="table">
            <TableHeader onSort={onSort} sortBy={sortBy} arrStatus={arrStatus} arrType={arrType} onFilter={onFilter}/>
            <TableBody items={items} onBuy={onBuy} />
        </table>
        
    );
}
 
export default Table;