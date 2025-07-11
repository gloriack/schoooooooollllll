import { useEffect, useState } from 'react'
import Calculator from './Calculator';
import Meal from './Meal';
import Vote from './Vote';

function App () {
  const [mean, setMean] = useState("");
  const [std, setStd] = useState("");


  const handleMean = (e) => {
    const meanValue = e.target.value;
    setMean(meanValue === "" ? "" :Number(meanValue));
  }

  const handleStd = (e) => {
    const stdValue = e.target.value;
    setStd(stdValue === "" ? "" : Number(stdValue));
  }





  return (
    <div>
      <Meal />
      <label>
        <input type="number" value={mean} onChange={handleMean} placeholder="평균" />
        <input type="number" value={std} onChange={handleStd} placeholder="표준편차" />
      </label>
      <Calculator mean={mean} std={std} />
      <Vote />
    </div>
  )
}
export default App;