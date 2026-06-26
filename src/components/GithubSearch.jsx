import React, { useState } from 'react'
import axios from 'axios';
import { IoLocationSharp } from "react-icons/io5";
import { IoBusinessSharp } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const GithubSearch = () => {

    const [username, setUsername] = useState("");
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        setProfile(null);
        setError(null);

        if (!username.trim()) {
            setError("Please enter a GitHub username.");
            return;
        }
        const tempUsername = username;
        setUsername("");


        setLoading(true);
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            setProfile(response.data);
            setError(null);
        }

        catch (error) {
            setProfile(null);
            if (error.response?.status === 404) {
                setError("User not found!");
            } else {
                setError("Something went wrong. Please try again.");
            }
        }

        finally {
            setLoading(false);
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
                    disabled={loading}
                    className='commissioner bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded cursor-pointer'>
                    {loading ? "Searching..." : "Search"}
                </button>

            </form>

            {error && <p className='commissioner text-zinc-100 text-2xl mt-10'>{error}</p>}
            {profile &&

                // profile container
                <div className='profile-container m-10 mt-10 text-zinc-50 commissioner p-8 w-full max-w-3xl h-auto my-0 mx-auto rounded-xl shadow-xl shadow-zinc-900'>

                    {/* profile content */}
                    <div className='flex flex-col md:flex-row gap-7'>

                        {/* profile image */}
                        <div className='h-full shrink-0'>
                            <img src={profile.avatar_url}
                                alt="profile-avatar"
                                className="w-32 h-32 rounded-full border-[3px] border-zinc-500 shadow-xl shadow-zinc-900" />
                        </div>

                        {/* profile details */}
                        <div className='flex flex-col'>

                            {/* profile description */}
                            <div className='flex justify-between items-center'>

                                <h2 className='text-3xl font-semibold'>{profile.name || profile.login}</h2>
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
                                className='text-zinc-300 mt-1'>@{profile.login}</a>

                            <p className='mt-5 mb-5 ml-1.25 text-lg leading-6 text-zinc-200 font-normal w-full'>{profile.bio || "No bio available."}
                            </p>

                            {/* profile stats */}
                            <div className='profile-stats flex justify-evenly items-center h-25 w-full max-w-xl mt-5 rounded-xl text-black text-center shadow-xl shadow-zinc-900 text-[13px] leading-10'>
                                <p>Repositories <br /> <span className='stats'>{profile.public_repos}</span></p>
                                <p>Followers <br /> <span className='stats'>{profile.followers}</span></p>
                                <p>Following <br /> <span className='stats'>{profile.following}</span></p>
                            </div>

                            {/* profile info */}
                            <div className='flex justify-between mt-10'>
                                <p className='flex gap-1 items-center'>
                                    <IoLocationSharp />
                                    {profile.location || "Unknown"}
                                </p>
                                <p className="flex gap-1 items-center">
                                    <IoBusinessSharp />
                                    {profile.company || "Not specified"}
                                </p>
                            </div>

                            {/* profile links */}
                            <div className='flex flex-col gap-5 mt-10'>
                                {profile.twitter_username ? (
                                    <a
                                        href={`https://x.com/${profile.twitter_username}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-amber-400 hover:bg-amber-500 text-black py-2 px-3 flex gap-1 items-center w-fit rounded-full"
                                    >
                                        <FaXTwitter />
                                        @{profile.twitter_username}
                                    </a>
                                ) : (
                                    <p className="bg-zinc-700 text-zinc-300 py-2 px-3 flex gap-1 items-center w-fit rounded-full">
                                        <FaXTwitter />
                                        X Profile Not Available
                                    </p>
                                )}
                                <a
                                    href={profile.html_url}
                                    target='_blank'
                                    className='bg-amber-400 hover:bg-amber-500 text-black py-2 px-3 flex gap-1 items-center w-fit rounded-full'
                                ><FaGithub />View Profile</a>
                            </div>
                        </div>

                    </div>
                </div>
            }

        </div>
    )
}

export default GithubSearch