import React from 'react';

const TableBody = ({items, onBuy}) => {
    return (  
        <tbody>
            {
                items.map((item)=>{ return (
                    <tr key={item.id}>
                        <td><i className="bi bi-circle-fill" style={{color: `${item.status}`}}></i> {item.name}</td>
                        <td>{item.type}</td>
                        <td>{item.conditions}</td>
                        <td>$ {item.volume}</td>
                        <td>{item.roi} %</td>
                        <td>{item.free}</td>
                        <td>{item.hedge} %</td>
                        <td><button type="button" className="btn btn-outline-secondary" onClick={()=>{onBuy(item.id)}}>Buy</button></td>
                    </tr>
                    )
                })
            }
        </tbody>
    );
}
 
export default TableBody;