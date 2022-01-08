import React from 'react'
import {useRouter} from 'next/router'
import NavLink from '../../../components/NavLink'

const article = () => {
    const router = useRouter()
    const {id} = router.query
    let stnCss = "ml-5 p-2 text-gray-100 nav-link text-gray-600";
    return (
        <>
        <NavLink rout="" text="< Back" css={stnCss}/>
        <div className='text-black'>This is article {id}</div>
        
        </>
    )
}

export default article
