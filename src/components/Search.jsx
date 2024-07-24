// material tailwind
import { Button } from '@material-tailwind/react'

// react icons
import { FiSearch } from "react-icons/fi";
import { FaDeleteLeft } from "react-icons/fa6";

// react
import { useRef } from 'react';

// components
import Input from './Input';

// hooks
import { useFetch } from '../hooks';

function Search({ setInfo }) {
    // hooks
    let inputRef = useRef()

    // functions
    let handleClickSearch = (e) => {
        setInfo(e.target.value)
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        setInfo(inputRef.current.value)
    }

    return (
        <form
            className='w-full mt-[19px] rounded-[15px] py-[10px] pl-[32px] bg-base-100 pr-[10px] flex justify-between'
            style={{
                boxShadow: `0px 16px 30px -10px #4660BB33
                `}}
            onSubmit={handleSubmit}
        >
            <label className='flex items-center gap-[24px] w-full mr-4'>
                <FiSearch size={28} color='#0079FF' />
                <input
                    placeholder='Search GitHub username…'
                    className='w-full bg-transparent focus:outline-none text-[#4B6A9B] text-[18px] placeholder:text-[18px] placeholder:text-[#4B6A9B]'
                    type='text'
                    ref={inputRef}
                    onChange={handleClickSearch}
                />

                <FaDeleteLeft
                    className='cursor-pointer'
                    size={30}
                    onClick={() => {
                        inputRef.current.value = ``
                    }} />
            </label>

            <Button
                color='blue'
                className='font-[inherit] capitalize text-[16px]'
                type='submit'
            >
                Search
            </Button>
        </form>
    )
}

export default Search