// import React from 'react'
// import Hoc from './Hoc';

// const CompoOne = (props) => {
//     console.log(props);
    
//   return (
//     <>
//       <h1>CompoOne -- One Of My Sudent is {props.sname} </h1>
//     </>
//   )
// }

// export default Hoc(CompoOne)



// EXAMPLE 2: INCREMENT THE VALUE BY ONE 
import React from 'react'
import Hoc from './Hoc'

const CompoOne = (props) => {
  console.log(props)
  let {count,increment} = props.simplecounter
  return (
    <>
      <h1>Count --- {count} </h1>
      <button onClick={increment}>Increment Count</button>
    </>
  )
}
export default Hoc(CompoOne)
