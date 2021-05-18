import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data'

function Products() {
    return (
        <>
            <Pricing />
            <HeroSection {...homeObjTwo} />
        </>
    )
}

export default Products;