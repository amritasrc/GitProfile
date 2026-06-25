import React, { useState } from 'react'
import axios from 'axios';

const GithubSearch = () => {

    const [username, setUsername] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className='w-full flex justify-center items-center flex-col'>
            <h1 className='crafty-girls-regular p-4 pt-10 sm:pt-14 md:pt-14 lg:pt-10 text-4xl text-white font-bold underline underline-offset-8'>GitProfile - A GitHub Profile Finder</h1>

            <form onSubmit={(e) => submitHandler(e)} className='mt-10 flex flex-col items-center sm:flex-row gap-10'>
                <input type="text"
                    placeholder='Enter GitHub username...'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='commissioner bg-zinc-100 text-zinc-950 font-bold py-3 px-4 w-100 rounded-2xl outline-none'
                />

                <button
                    className='commissioner bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded'>
                    Search
                </button>
            </form>

        </div>
    )
}

export default GithubSearch