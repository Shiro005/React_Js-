import React, { useEffect, useState } from 'react';

function Instagram() {
    const [data, setData] = useState({ followers: 0, profile_picture_url: '' });

    useEffect(() => {
        const fetchInstagramData = async () => {
            try {
                // Replace with your Instagram username
                const username = 'shirov_005';
                const response = await fetch(`https://www.instagram.com/${username}/?__a=1`);
                const json = await response.json();
                console.log(json);

                // Extract followers count and profile picture URL from the response
                const followersCount = json.graphql.user.edge_followed_by.count;
                const profilePicUrl = json.graphql.user.profile_pic_url_hd;

                // Update state with fetched data
                setData({ followers: followersCount, profile_picture_url: profilePicUrl });
            } catch (error) {
                console.error('Error fetching Instagram data:', error);
            }
        };

        fetchInstagramData();
    }, []);

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Instagram followers: {data.followers}
            {data.profile_picture_url && (
                <img src={data.profile_picture_url} alt="Instagram picture" width={300} />
            )}
        </div>
    );
}

export default Instagram;
