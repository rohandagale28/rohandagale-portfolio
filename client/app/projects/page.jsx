import './project.scss'
import React from 'react'
import { Card } from './card'
import axios from 'axios';
import Image from 'next/image';
import projectLogo from '../assets/icons/project-icon.svg'

const url = process.env.NEXT_PUBLIC_SERVER_URI;

export default async function Projects() {
    const res = await axios.get(`${url}/project`)
    const data = res.data

    return (
        <>
            <div className="project-page">
                <div className="project-page-title">
                    <div className="page-title-container">
                        <div className="tooltip">
                            Recent Projects<span className='tooltiptext'>click to open github repo</span>
                        </div>
                        <div className='page-title-icon'>
                            <Image src={projectLogo} height={20} width={20} alt='project Logo' />
                        </div>
                    </div>
                </div >
                <div className="project-page-container">
                    {data && data.map((item) => {
                        return (
                            <React.Fragment key={item._id}>
                                <Card data={item} />
                            </React.Fragment>
                        )
                    })}
                </div>
            </div >
        </>
    )
}

