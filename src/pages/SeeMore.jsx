import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../hooks';
import { Barchart } from '../components';

function SeeMore() {
    let { username } = useParams();
    let { data } = useFetch(`https://api.github.com/users/${username}`);
    let repos = useFetch(`https://api.github.com/users/${username}/repos`);

    let singleArr = [];
    let repoCount = {};

    if (repos?.data) {
        repos.data.forEach(repo => {
            if (repo.language) {
                let lang = repo.language;
                if (!repoCount[lang]) {
                    repoCount[lang] = 1;
                    singleArr.push(lang);
                } else {
                    repoCount[lang]++;
                }
            }
        });
    }

    let sortedRepoArr = Object.keys(repoCount).sort((a, b) => repoCount[b] - repoCount[a]);
    let counterArr = sortedRepoArr.map(lang => repoCount[lang]);

    console.log('Languages:', singleArr);
    console.log('Sorted Languages:', sortedRepoArr);
    console.log('Counters:', counterArr);

    return (
        <>
            {!data ? (
                <div className="w-full flex justify-center">
                    <img className="w-[75px] bg-transparent" src="../assets/loader.svg" alt="loader" />
                </div>
            ) : (
                <div className='max-w-[1110px] mx-auto w-full'>
                    <div className='w-full grid grid-cols-2 grid-rows-2 gap-6'>
                        {/* Name div */}
                        <div
                            className='rounded-lg col-span-1 row-span-2 flex items-center justify-center p-[20px]'
                            style={{ boxShadow: `0px 16px 30px -10px #4660BB33` }}>
                            <div className='flex flex-col items-center'>
                                {data?.avatar_url && <img className="rounded-lg bg-transparent" src={data?.avatar_url} alt="profile" />}
                                <div className='w-full mt-[25px] flex flex-col items-center gap-4'>
                                    <h1 className="font-bold text-4xl mb-[2px]">{data?.name ? data?.name : `unnamed user`}</h1>
                                    <Link to={`${data?.html_url}`} target="_blank">
                                        <p className="text-[#4B6A9B] text-xl">@{data?.login}</p>
                                    </Link>
                                    <div className='w-full flex flex-col gap-1'>
                                        <div className={`flex items-center gap-[19px] mb-[21px] ${!data?.location ? `opacity-50` : ''}`}>
                                            <img src="../assets/location.svg" alt="location" />
                                            <p className="text-[15px] text-[#4B6A9B]"> {data?.location ? data?.location : `It’s a mystery!`} </p>
                                        </div>
                                        <div className={`flex items-center gap-[19px] mb-[21px] ${!data?.company ? `opacity-50` : ''}`}>
                                            <img src="../assets/company.svg" alt="company" />
                                            <p className="text-[15px] text-[#4B6A9B]"> {data?.company ? data?.company : `It’s a mystery!`} </p>
                                        </div>
                                    </div>
                                    <div className='w-full text-center'>
                                        <p>{data?.bio ? data?.bio : `It's an amazing person!`}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right side divs */}
                        <div className='rounded-lg flex items-center justify-center' style={{ boxShadow: `0px 16px 30px -10px #4660BB33` }}>
                            <Barchart categories={sortedRepoArr} data={counterArr} />
                        </div>

                        <div className='rounded-lg flex items-center justify-center' style={{ boxShadow: `0px 16px 30px -10px #4660BB33` }}>
                            {/* Content for the second div */}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default SeeMore;
