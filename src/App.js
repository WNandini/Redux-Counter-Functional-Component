import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {incNumber, decNumber} from './actions/index';

const App = () => {
  const myState = useSelector(state => state.counter)
  const dispatch = useDispatch();

  return(
      <div style={{textAlign: 'center'}}>
        <h4>Redux Counter</h4>
        <button onClick={() => dispatch(incNumber())}>Increment + </button>
        <h5>{myState}</h5>
        <button onClick={() => dispatch(decNumber())}>Decrement - </button>
      </div>
  )
} 

export default App;