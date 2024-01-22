'use client'
import React from 'react'
import Image from 'next/image'

export const Card = ({ data }) => {

    return (
        <div className="project-card">
            <div className="section-1">
                <div className="title">{data?.title}</div>
                <div className="logo">{data?.icons?.map((item) => {
                    return (
                        <React.Fragment key={item}>
                            <Image src={item} alt={item} height={20} width={20} />
                        </React.Fragment>
                    )
                })}</div>
            </div>
            <div className="section-2">
                {data?.description.length > 250 ? data?.description.slice(0, 250) + "..." : data?.description}
            </div>
        </div>
    )
}
