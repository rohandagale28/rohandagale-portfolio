'use client'
import React, { useEffect, useState } from 'react'
import './project.scss'
import { Card } from './card'
import Loading from './Loading'

const url = process.env.NEXT_PUBLIC_SERVER_URI;

export default function Projects() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function getData() {
            const res = await fetch(`${url}/project`)
                .then((res) => res.json())
                .then((res) => {
                    setData(res)
                    setLoading(true)
                })
        }
        getData()
    }, [])
    return (
        <>
            {loading === false ? (
                <>
                    <Loading />
                </>
            ) : (
                <>
                    <div className="project-page">
                        {/* <div className="page-title">Project</div> */}
                        {data && data.map((item) => {
                            return (
                                <React.Fragment key={item._id}>
                                    <Card data={item} />
                                </React.Fragment>
                            )
                        })}
                    </div >
                </>
            )}
        </>
    )
}