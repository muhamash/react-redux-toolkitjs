/* eslint-disable no-undef */
// import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Counter from './components/Counter';
import Stats from './components/Stats';
import { decrement, increment } from './features/counters/counterSlice';


function App() {

  const state = useSelector( ( state => state.counter ) )
  
  const dispatch = useDispatch()
  // const handleIncrement = ( id ) =>
  // {
  //   setState( ( prev ) =>
  //     prev.map( ( count ) => count.id === id ? { ...count, value: count.value + 1 } : count )
  //   )
  // };

  // const handleDecrement = ( id ) =>
  // {
  //   setState( ( prev ) =>
  //     prev.map( ( count ) => count.id === id ? { ...count, value: count.value - 1 } : count )
  //   )
  // };

  const total = state.reduce((acc, sum)=> acc + sum.value, 0)

  return (
    <div>
      <div>
        {
          state.map( ( count ) => (
            <Counter
              key={ count.id }
              count={ count.value }
              onIncrement={ () => dispatch(increment(count.id)) }
              onDecrement={ () => dispatch(decrement(count.id)) }
            />
          ) )
        }
      </div>
      <Stats totalCount={ total } />
    </div>
  );
}

export default App
