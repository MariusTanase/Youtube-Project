import React from 'react'
import setPageTitle from '../hooks/setPageTitle'

const Home = () => {
  setPageTitle('Home')

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-black max-w-[1280px] m-auto mt-2">
    <h1 className="text-6xl font-bold">Home</h1>
    <p className="text-xl mt-4">This is the default page</p>
</div>
  )
}

export default Home