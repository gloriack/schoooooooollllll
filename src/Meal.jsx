import { useEffect, useState } from 'react'

function Meal (){(0)
  const today = new Date().toISOString().split('T')[0];
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(today);
  const handleSelectedDate = (event) =>{
    setSelectedDate(event.target.value);
  }

  useEffect(() => {
    const fetchMeals = async () =>{
      setLoading(true);
      const response = await fetch(`https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=bdb16532a0f741eea4a3c43108cbbd1c&Type=json&ATPT_OFCDC_SC_CODE=B10&SD_SCHUL_CODE=7010178&MLSV_YMD=${selectedDate.replace(/-/g, '')}`);
      const data = await response.json();
      const mealList = data?.mealServiceDietInfo?.[1]?.row || [];
      setMeals(mealList); 
      setLoading(false);
    };
    fetchMeals();
  },[selectedDate]);

  if (loading) return <p>로딩중...</p>


  return (
    <div>
      <h1>급식</h1>
      <label>
         <input type="date" onChange={handleSelectedDate} value={selectedDate} />
      </label>
      {meals.length > 0 ? (meals.map((meal, idx) =>
      <div key={idx}>
        <p>{meal.MMEAL_SC_NM}</p>
        <pre>{meal.DDISH_NM.replace(/<br\/>/g, '\n')}</pre>
      </div>
       )): (<p>급식 없습니다..</p>)}

    </div>
  );


}
export default Meal