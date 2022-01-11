import React from 'react'
import {useRouter} from 'next/router'
import NavLink from '../../../components/NavLink'

const article = () => {
    const router = useRouter()
    const {id} = router.query
    let stnCss = "text-black";
    return (
        <>
        <NavLink rout="" text="< Back" css={stnCss}/>
        <div className='text-black'>This is article {id}</div>
        
        </>
    )
}

export default article
