import { QueryClient } from '@tanstack/react-query'
import NavBar from '@/components/global/navbar';
import Sidebar from '@/components/global/sidebar';
import React from 'react'
import { PrefetchUserProfile } from '@/react-query/prefetch';

type Props = {
    children: React.ReactNode
    params: {
    slug: string;
  };

}

const Layout = async ({ children, params }: Props) => {
    const query = new QueryClient()
    await PrefetchUserProfile(query)

    // await prefetchUserAutomations(query)
    
    return <div className='p-3'>
        <Sidebar slug={params.slug} />
        {/* Navbar */}
        <div className="lg:ml-62.5 lg:pl-10 lg:py-5 flex flex-col overflow-auto">
            <NavBar slug={params.slug} />
            {children}
        </div>
    </div>
}

export default Layout