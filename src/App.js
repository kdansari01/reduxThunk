import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { Decrement, fetchtodo, Increment } from "./action";
import { useEffect, useState } from "react";
export default function App() {
  const { value } = useSelector((state) => state.data);
  const [data, setData] = useState(0);
  const dispatch = useDispatch();
  // const butnFun = (value) => {
  //   dispatch(value);
  // };
  useEffect(() => {
    setData(value);
    // const { data } = value;
    dispatch(fetchtodo());
    localStorage.setItem("numb", data);
  }, [data]);
  console.log(value);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <div>
        <h1>count:= {JSON.stringify(value)}</h1>
        <button onClick={() => dispatch(Increment())}>Inc</button>
        <button onClick={() => dispatch(Decrement())}>Dec</button>
      </div>
    </div>
  );
}
