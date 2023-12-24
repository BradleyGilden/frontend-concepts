import { useState } from 'react';

const ShortCircuitOverview = () => {
  const [zero, setZero] = useState(0);
  const [nonZero, setNonZero] = useState(10);


  return (
    <>
      <h4>Falsy OR: {zero || 10}</h4>
      <h4>Falsy AND: {zero && 10}</h4>
      <h4>Truthy OR: {nonZero || 10}</h4>
      <h4>Falsy AND: {nonZero && 10}</h4>
    </>
  );
};
export default ShortCircuitOverview;
