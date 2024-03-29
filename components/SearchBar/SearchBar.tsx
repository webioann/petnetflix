'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { IMovie } from '../../types/movies.types'
import { GoSearch } from 'react-icons/go'
import { IoClose } from 'react-icons/io5'
import './search-bar.scss'

const SearchBar = () => {

    const router = useRouter()
    const [barIsActive, setBarIsActive] = useState(false)
    const [search_query, setSearchQuery] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

        // const [searchResults, setSearchResults] = useState<IMovie[] | null>(null)
    // const [searchQuery, setSearchQuery] = useState<string | null>(null)

    // ===============================
    // const query = 'frends'
    // const passParamsToSearchPage = () => {
    //     router.push(`/search?q=${query}`)
    // }


    // useEffect(() => { 
    //     // reset SearchBar state if page changed
    //     setSearchResults(null)
    //     setValue('')
    //     setBarIsActive(false)
    // }, [])

    const onClickSearchIcon = () => {
        // on first click by icon button
        if(  search_query.length < 3 ) {
            setBarIsActive(true)
            inputRef.current?.focus()
        }
        // on second click with not empty input field
        if(  search_query.length >= 3 ) {
            router.push(`/search/${search_query}`)
            inputRef.current?.blur()
            setBarIsActive(false)
            setSearchQuery('')
        }
    }

    return (
        <div className={barIsActive ? 'search-bar' : 'shorted-search-bar'}>
            <GoSearch 
                size={24}
                color='#fff'
                className='search-icon'
                onClick={onClickSearchIcon}
            />
            <input 
                className='search-input'
                placeholder='Title, people, genres...'
                type='text'
                ref={inputRef}
                value={search_query}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <IoClose 
                onClick={() => {
                    setSearchQuery('')
                    setBarIsActive(false)
                }}
                className='close-input'
                color='#fff' 
                size={24}
                />
        </div>
    )
}

export default SearchBar;