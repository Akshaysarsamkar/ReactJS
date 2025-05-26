import React from 'react'
import ErrorBoundary from './ErrorBoundary';
import Receiver from './Receiver';

const Sender = () => {
  return (
    <>
      <ErrorBoundary>
        <Receiver money={20000}/>
      </ErrorBoundary>

      <ErrorBoundary>
        <Receiver money={30000}/>
      </ErrorBoundary>

      <ErrorBoundary>
        <Receiver money={40000}/>
      </ErrorBoundary>
    </>
  )
}

export default Sender
