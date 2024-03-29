import { ReactNode } from 'react'
import Image from 'next/image'
import NavigationHeader from '@/components/NavigatioHeader/NavigationHeader'
import NetflixLogo from '@/components/NetflixLogo/NetflixLogo'
import Navigation from '@/components/Navigation/Navigation'
import SearchBar from '@/components/SearchBar/SearchBar'
import KidsLink from '@/components/EmptyLinksComponents/KidsLink'
import GiftLink from '@/components/EmptyLinksComponents/GiftLink'
import MessageBell from '@/components/EmptyLinksComponents/MessageBell'
import UserProfiles from '@/components/UserProfile/UserProfiles'
import Container from "../../components/Container/Container";

import  './browse.scss'
import image from '../../public/login_background.jpg'

async function BrowseLayout ({ children }: { children: ReactNode }) {
    // const session = await getServerSession(authOptions)
    // if (session) redirect("/");
    return (
        <main className='browse-page'>
            <Container width='1600'>
                <NavigationHeader>
                    <NetflixLogo/>
                    <Navigation/>
                    <SearchBar/>
                    <KidsLink/>
                    <GiftLink/>
                    <MessageBell/>
                    <UserProfiles/>
                </NavigationHeader>
            </Container>
            {children}
        </main>
    )
}

export default BrowseLayout;

