import React, { useState } from 'react'
import axios from 'axios';

const GithubSearch = () => {

    const [username, setUsername] = useState("");
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            setProfile(response.data);
            console.log(response.data);
            setError(null);
        }

        catch (error) {
            setProfile(null);
            setError('User not found!');
        }

    }

    return (
        <div className='w-full flex justify-center items-center flex-col'>

            <h1 className='commissioner p-4 pt-10 sm:pt-14 md:pt-14 lg:pt-10 text-4xl text-zinc-200 font-semibold underline underline-offset-8'>
                <span className='text-yellow-400 font-extrabold text-5xl crafty-girls-regular'>GitProfile</span> &mdash; A GitHub Profile Finder</h1>

            <form onSubmit={(e) => submitHandler(e)} className='mt-10 flex flex-col items-center sm:flex-row gap-10'>

                <input type="text"
                    placeholder='Enter GitHub username...'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='commissioner bg-zinc-100 text-zinc-950 font-bold py-3 px-4 w-100 rounded-2xl outline-none'
                />

                <button
                    className='commissioner bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded cursor-pointer'>
                    Search
                </button>

            </form>

            {error && <p className='commissioner text-zinc-100 text-2xl mt-10'>{error}</p>}
            {profile &&

                // profile container
                <div className='profile-container mt-10 text-zinc-50 commissioner p-8 w-180 h-auto my-0 mx-auto rounded-xl shadow-xl shadow-zinc-900'>

                    {/* profile content */}
                    <div className='flex gap-7 justify-start'>

                        {/* profile image */}
                        <div className='h-full'>
                            <img src={profile.avatar_url}
                                alt="profile-avatar"
                                className="w-32 h-32 rounded-full border-[3px] border-zinc-500 shadow-xl shadow-zinc-900" />
                        </div>

                        {/* profile details */}
                        <div className='flex flex-col'>

                            {/* profile description */}
                            <div className='flex justify-between items-center gap-25'>

                                <h2 className='text-3xl font-semibold'>{profile.name}</h2>
                                <p>
                                    Joined:{" "}
                                    {new Date(profile.created_at).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </p>
                            </div>

                            <a href={profile.html_url}
                                target='_blank'
                                className='text-zinc-300 mt-2.5'>@{profile.login}</a>

                            <p className='mt-10 mr-5 mb-20 ml-1.25 text-lg leading-6 text-zinc-200 font-normal'>{profile.bio}</p>

                            {/* profile stats */}
                            <div className='profile-stats flex justify-evenly items-center h-25 w-125 rounded-xl text-black text-center shadow-xl shadow-zinc-900 text-[13px] leading-10'>
                                <p>Repositories <br /> <span className='stats'>{profile.public_repos}</span></p>
                                <p>Followers <br /> <span className='stats'>{profile.followers}</span></p>
                                <p>Following <br /> <span className='stats'>{profile.following}</span></p>
                            </div>
                        </div>

                    </div>
                </div>
            }

        </div>
    )
}

export default GithubSearch