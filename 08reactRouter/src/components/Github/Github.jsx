import React, { useEffect, useState } from 'react';

function Github() {
    const [data, setData] = useState({ followers: 0, avatar_url: '', location: '', public_repos: '' });
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://api.github.com/users/Shiro005')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
            });
    }, []);

    const searchGithub = () => {
        fetch(`https://api.github.com/users/${search}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
            })
            .catch(error => console.error('Error searching Github:', error));
    };

    const handleSearchInputChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <>
            <div className="flex items-center">
                <input
                    type="text"
                    placeholder="Search..."
                    className="py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 flex-grow"
                    value={search}
                    onChange={handleSearchInputChange}
                />
                <button
                    className="py-2 px-4 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    onClick={searchGithub}
                >
                    Search
                </button>
            </div>
            <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
                <img src={data.avatar_url} alt="Git picture" width={300} />
                <h3>Current Location : {data.location}</h3>
                <h3>Current Repo : {data.public_repos}</h3>
            </div>
        </>
    );
}

export default Github;
