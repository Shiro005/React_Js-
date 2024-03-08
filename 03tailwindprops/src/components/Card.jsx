import React from 'react'

function Card({username, btnText="visit me", info}) {
    console.log(username);
  return (
    <div className="relative h-[400px] w-[300px] rounded-md m-4">
  <img
    src="https://img.freepik.com/free-vector/mecha-devil-skull-vector-logo_43623-858.jpg?size=626&ext=jpg&ga=GA1.1.747577405.1704558825&semt=sph"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{username}</h1>
    <p className="mt-2 text-sm text-gray-300 font-bold">
      {info}
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      {btnText } →
    </button>
  </div>
</div>
  )
}

export default Card