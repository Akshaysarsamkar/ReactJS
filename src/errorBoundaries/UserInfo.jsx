import React from 'react'
import ErrorBoundary from './ErrorBoundary';

const UserInfo = () => {
  return (
    <>
      <ErrorBoundary>
        <UserInfo name={"Bhima"}/>
      </ErrorBoundary>

      <ErrorBoundary>
        <UserInfo name={"Ram"}/>
      </ErrorBoundary>

      <ErrorBoundary>
        <UserInfo name={"Sam"}/>
      </ErrorBoundary>
    </>
  )
}

export default UserInfo
