import React from 'react'
import { BsUpload } from 'react-icons/bs'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import Upload from '../Upload/Upload'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data'

function SignUp() {
    return (
        <>
            <Pricing />
            <Upload/>
            {/* <HeroSection {...homeObjThree} /> */}
        </>
    )
}

export default SignUp;
