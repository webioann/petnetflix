'use client'
import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import { useRouter } from 'next/navigation'
import { saveMovieInMyList } from '../../lib/myListMoviesAPI'
import { FaPlus, FaCheck } from 'react-icons/fa6'
import { IResultType } from '@/types/movies.types'
import './buttons.scss'

interface ISaveMovieInMyList {
    movie: IResultType
    title?: string
    icon_size: number
}

const  ButtonSaveInMyList = ({ movie, title, icon_size }: ISaveMovieInMyList) =>{
    // save movie data on MY_LIST collection
    const [isSaved, setIsSaved] = useState(false)
    const { user } = useContext(UserContext)
    const router = useRouter()

    const saveMovie = async() => {
        if(user?.user_id) {
            const user_id = user?.user_id
            await saveMovieInMyList({user_id, movie})
            setIsSaved(true)
            router.refresh()
        }
    }

    if(title) {
        return (
            <button 
                onClick={() => saveMovie()}
                className='square-button'
                >
                <i>{ isSaved && user
                    ? <FaCheck size={18} color='#fff' title='this movie saved in My List'/> 
                    : <FaPlus size={18} color='#fff' title='register for save in My List'/>}
                </i>
                { title }
            </button>
        )
    }
    else {
        return (
            <button 
                onClick={() => saveMovie()}
                style={{
                    width: `${icon_size * 2}px`,
                    height: `${icon_size * 2}px`,
                }}
                className='small-circle circle-button'
                >
                <i>{ isSaved && user
                    ? <FaCheck size={icon_size} color='#fff' title='this movie saved in My List'/> 
                    : <FaPlus size={icon_size} color='#fff' title='register for save in My List'/>}
                </i>
            </button>
        )
    }
}

export default ButtonSaveInMyList;
