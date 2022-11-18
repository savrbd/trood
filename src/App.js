import { useState } from 'react';
import './App.css';
import Table from './component/table';
import _ from "lodash";

function App() {
  const arr = ([
    {id: 1, name: 'Pyshky.net', status: 'green', type: 'TRST', conditions: 'x2,6 months', volume: 120000, roi: 4, free: 20, hedge: 20},
    {id: 2, name: 'NFT-Flowershop', status: 'yellow', type: 'THT', conditions: 'x4,2 years', volume: 80000, roi: 23, free: 12, hedge: 0},
    {id: 4, name: 'Web3 P2P University', status: 'red', type: 'TRST', conditions: 'x2,1 years', volume: 200000, roi: 6, free: 1, hedge: 0}
  ]);

  const arrStatus = ['green', 'yellow','red']
  const arrType = ['TRST','THT']
  const [items] = useState(arr);
  const [sortBy, setSortBy] = useState({ iter: '', order: "asc" });
  const [selectedProf, setSelectedProf] = useState()
  const onBuy = (e) => {
    console.log(e);

  }
  const onFilter = (params) => {
    setSelectedProf(params)
  }
  const onSort = (params) => {
    if (sortBy.iter === params) {
      setSortBy((prevState) => ({ ...prevState, order: prevState.order === "asc" ? "desc" : "asc"})); 
    } else {
      setSortBy({ iter: params, order: "asc"})
    }
  }
  const filterItems= selectedProf
  ? items.filter((item) => item[selectedProf.name] === selectedProf.value)
  : items;
  const sortedItems= _.orderBy(filterItems,[sortBy.iter],[sortBy.order])

  return (
    <div className="App">
      <Table items={sortedItems} onBuy={onBuy} onSort={onSort} sortBy={sortBy} arrStatus={arrStatus} arrType={arrType} onFilter={onFilter}/>
    </div>
  );
}

export default App;
