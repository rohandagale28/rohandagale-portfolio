import './stack.scss'
import React from 'react'
import axios from 'axios';
import { Card } from './card';
import hammer from '../assets/icons/hammer.svg'
import Image from 'next/image';

const url = process.env.NEXT_PUBLIC_SERVER_URI;

export default async function Stack() {
    const res = await axios.get(`${url}/stack`)
    const data = res.data

    return (
        <>
            <main className="stack-page">
                <div className='stack-page-title'>
                    <div className='title'>
                        Programing Languages, Frameworks & Tools
                    </div>
                    <div className='page-title-icon'>
                        <Image src={hammer} height={20} width={20} alt='project Logo' />
                    </div>
                </div>
                <div className="stack-container">
                    {data && data.map((item) => {
                        return (
                            <React.Fragment key={item._id}>
                                <Card data={item} />
                            </React.Fragment>
                        )
                    })}
                </div>
            </main>
        </>
    )
}