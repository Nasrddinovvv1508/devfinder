// components
import { useState } from 'react';
import { Search, UserData } from '../components';
import { useFetch } from '../hooks';

function Home() {
    let [info, setInfo] = useState(null);

    let { data, isPending, error } = useFetch(`https://api.github.com/users/${info}`)

    return (
        <div className='h-full'>
            <div className='main-container'>
                <Search setInfo={setInfo} />
            </div>

            <div className='main-container mt-[24px]'>
                {
                    info ? <UserData user={data?.login && data} error={error} isPending={isPending} /> :
                        <div>
                            <p
                                className='text-3xl text-center mt-[40px] font-semibold text-[#4B6A9B]'>
                                Looks like a user blackout. Search to bring some light!
                            </p>
                        </div>
                }
            </div>
        </div>
    )
}

export default Home