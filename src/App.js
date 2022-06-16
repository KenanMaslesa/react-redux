import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByNumber } from './actions';
import './App.css';

function App() {
  const counter = useSelector(state => state.counter);
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();

  return <div className='counter-wrapper'>
    <div>
    <h1>{counter}</h1>
    <button onClick={() => dispatch(decrement())}>-</button>
    <button onClick={() => dispatch(increment())}>+</button>

    {/* <button onClick={() => dispatch(incrementByNumber(10))}>+</button> */}

    {isLoggedIn && <h3>SECRET DATA</h3>}
    </div>
  </div>
}

export default App;
