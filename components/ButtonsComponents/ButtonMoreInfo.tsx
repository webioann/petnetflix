import { MdInfoOutline } from 'react-icons/md'
import './buttons.scss'

const ButtonMoreInfo = () => {
    // mock link button
    return (
        <button className='square-button'>
            <MdInfoOutline color='#fff' size={24}/>
            <span className='more-info-button-text'>More Info</span>
        </button>
    )
}

export default ButtonMoreInfo;