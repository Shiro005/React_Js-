import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/Shiro005')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setData(data)
            })
    }, [])

    return (
        <>
            <div className="max-w-lg mx-lg bg-white shadow-lg rounded-lg overflow-hidden m-5">
                <div className="sm:flex sm:items-center px-6 py-4">
                    <img
                        className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full"
                        src={data.avatar_url}
                        alt="User profile"
                    />
                    <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                        <p className="text-xl leading-tight">{data.name}</p>
                        <div className="mt-4">
                            <p className="text-gray-600">Followers: {data.followers}</p>
                            <p className="text-gray-600">Following: {data.following}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Github