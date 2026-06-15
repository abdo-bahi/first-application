import dynamic from 'next/dynamic'
import React from 'react'
// here we are using dynamic route where we have to use from link params for specific content
//params ( from the link ) is returning a promise with link content
const testingRoutes = async ({params} : { params: {testid:string}}) => {
    const {testid} = await params;
  return (
    <div>testingRoutes for {testid}</div>
  )
}

export default testingRoutes