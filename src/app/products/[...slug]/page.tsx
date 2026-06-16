import React from 'react'


const nestedLinks = async ({params} : {params : {slug: string[]}}) => {
    const {slug} = await params;
    return (
    <div><h1>Nested links :</h1> <br />
    {slug.map((param) => (<h2>{param}</h2>))}

    </div>
  )
}

export default nestedLinks