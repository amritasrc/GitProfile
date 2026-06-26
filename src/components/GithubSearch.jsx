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
           // console.log(response.data);
            setError(null);
        }

        catch (error) {
            setProfile(null);
            setError('User not found!');
        }

    }

    return (
        <div className='w-full flex justify-center items-center flex-col'>
            <h1 className='crafty-girls-regular p-4 pt-10 sm:pt-14 md:pt-14 lg:pt-10 text-4xl text-zinc-200 font-bold underline underline-offset-8'>
                <span className='text-yellow-400 font-extrabold text-5xl'>GitProfile</span> - A GitHub Profile Finder</h1>

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

            {error && <p className='text-zinc-100 text-2xl mt-10'>{error}</p>}

        </div>
    )
}

export default GithubSearch