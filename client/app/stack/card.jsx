import Image from 'next/image'
import React from 'react'

export const Card = ({ data }) => {

    return (
        <a href={data?.link} target='_blank' >
            <div className="card">
                <div className='left'>
                    <Image src={data?.image} alt={data?.title} width={20} height={20} className='image' />
                </div>
                <div className='right'>
                    <div>{data?.title}</div>
                    <div>{data?.description}</div>
                </div>
            </div>
        </a>
    )
}