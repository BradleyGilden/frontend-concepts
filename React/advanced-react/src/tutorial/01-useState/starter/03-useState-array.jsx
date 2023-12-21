import { useState } from "react";
import {data} from '../../../data'

const UseStateArray = () => {
  const [dataList, setDataList] = useState(data);
  const clearAll = () => {
    setDataList([]);
  }
  const removeItem = (id) => {
    setDataList(dataList.filter((obj) => obj.id !== id));
  }
  return (
  <>
  <h2>useState array example</h2>
  {dataList.map((obj) => {
    return (
      <div key={obj.id}>
        <h4>{obj.name}</h4>
        <button type="button" onClick={() => {removeItem(obj.id)}}>remove</button>
      </div>
    );
  })}
  <button style={{ marginTop: '2rem' }} onClick={clearAll} type="button" className="btn">Clear All</button>
  </>
  );
};

export default UseStateArray;
