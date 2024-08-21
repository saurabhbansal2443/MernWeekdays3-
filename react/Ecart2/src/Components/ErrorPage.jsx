import React from 'react';
import {useRouteError } from 'react-router-dom'

const ErrorPage = () => {

    let {error , status , statusText } = useRouteError();
    
  return (
    <div>
      <h1> {error.message  }</h1>
      <h2> {status}</h2>
      <h3> {statusText}</h3>
    </div>
  )
}

export default ErrorPage
