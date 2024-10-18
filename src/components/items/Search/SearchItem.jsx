const handleSerch=()=>{

    axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/product/getSingleSearch/?search=${getSearch}`).then((res)=> 
    {
     setgetProduct(res.data.data)
      setLoader(true)
    
    }
      )
     
    
  }

import React from 'react'

const SearchItem = () => {
  return (
    <div>SearchItem</div>
  )
}

export default SearchItem