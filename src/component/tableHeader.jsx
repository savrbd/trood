import React from 'react';
import Dropdown from './dropdown';

const TableHeader = ({ onSort, sortBy, arrStatus, arrType, onFilter }) => {
    return (
        <thead>
            <tr>
                <th  scope="col">
                    <div className='d-flex flex-row justify-content-center'>
                        {sortBy.iter === 'name' && sortBy.order === "desc"? "-": null}
                        <p onClick={()=>onSort('name')}>Project</p>
                        <Dropdown arr={arrStatus} value={'status'} onFilter={onFilter}/>
                    </div>
                </th>
                <th  scope="col">
                    <div className='d-flex flex-row justify-content-center'>
                        {sortBy.iter === 'type' && sortBy.order === "desc"? "-": null}
                        <p onClick={()=>onSort('type')}>Token type</p>
                        <Dropdown arr={arrType} value={'type'} onFilter={onFilter}/>
                    </div>
                </th>
                <th onClick={()=>onSort('conditions')} scope="col">{sortBy.iter === 'conditions' && sortBy.order === "desc"? "-": null}Conditions</th>
                <th onClick={()=>onSort('volume')} scope="col">{sortBy.iter === 'volume' && sortBy.order === "desc"? "-": null}Volume</th>
                <th onClick={()=>onSort('roi')} scope="col">{sortBy.iter === 'roi' && sortBy.order === "desc"? "-": null}ROI</th>
                <th onClick={()=>onSort('free')} scope="col">{sortBy.iter === 'free' && sortBy.order === "desc"? "-": null}Free float</th>
                <th onClick={()=>onSort('hedge')} scope="col">{sortBy.iter === 'hedge' && sortBy.order === "desc"? "-": null}Insurance hedge</th>
                <th scope="col"></th>
            </tr>
        </thead>
    );
}
 
export default TableHeader;