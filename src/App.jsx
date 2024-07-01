import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Stats from './components/Stats';
import counter from './data/counter';


function App() {

  const [ state, setState ] = React.useState(counter);

  const handleIncrement = ( id ) =>
  {
    setState( ( prev ) =>
      prev.map( ( count ) => count.id === id ? { ...count, value: count.value + 1 } : count )
    )
  };

  const handleDecrement = ( id ) =>
  {
    setState( ( prev ) =>
      prev.map( ( count ) => count.id === id ? { ...count, value: count.value - 1 } : count )
    )
  };

  const total = state.reduce((acc, sum)=> acc + sum.value, 0)

  return (
    <div>
      <div>
        {
          state.map( ( count ) => (
            <Counter
              key={ count.id }
              count={ count.value }
              onIncrement={ () => handleIncrement(count.id) }
              onDecrement={ () => handleDecrement(count.id) }
            />
          ) )
        }
      </div>
      <Stats totalCount={ total } />
    </div>
  );
}

export default App
