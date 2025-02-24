import React from 'react'
import HomeSection1 from './HomeSection1'
import { Trending } from './Trending'
import { LatestStoriesSection } from './LatestStoriesSection'



export default function Home() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-10">
           <HomeSection1/>
           <Trending/>
           <LatestStoriesSection/>
        </div>
    )
}