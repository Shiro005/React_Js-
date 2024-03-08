import React from 'react'

function Card({username, info, btnText="Visit Me"}) {

    return (
        <div className="relative h-[400px] w-[300px] rounded-md m-4">
            <img
                src="https://img.freepik.com/free-photo/man-front-empire-state-building_23-2150897755.jpg?t=st=1709897805~exp=1709901405~hmac=b0c43f9b60e6e7928459d900f2ab0b78134b42cea1dfb901ba8ef8af312438ea&w=360"
                alt="AirMax Pro"
                className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">{username}</h1>
                <p className="mt-2 text-sm text-gray-300">
                   {info}
                </p>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                    {btnText} &rarr;
                </button>
            </div>
        </div>
    )
}

export default Card