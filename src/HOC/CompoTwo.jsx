// import React from 'react'
// import Hoc from './Hoc'

// const CompoTwo = (props) => {
//     console.log(props)
//   return (
//     <>
//       <h1>CompoTwo --- {props.sname} is developer</h1>
//     </>
//   )
// }

// export default Hoc(CompoTwo)


// EXAMPLE 2: INCREMENT THE VALUE BY ONE 
import React from 'react'
import Hoc from './Hoc'
const CompoTwo = (props) => {
  console.log(props)
  let {count,increment} = props.simplecounter
  return (
    <>
      <h1>Count --- {count}</h1>
      <button onMouseMove={increment}>Increment Count</button>
    </>
  )
}
export default Hoc(CompoTwo)
