'use client'
import React, { useEffect, useState } from 'react'
import './project.scss'
import axios from 'axios'
import { Card } from './card'
import Loading from './Loading'

export default function Projects() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const url = process.env.NEXT_PUBLIC_SERVER_URI

    useEffect(() => {
        async function getData() {
            await axios.get(`${url}/project`)
                .then((res) => {
                    setData(res.data)
                    setLoading(true)
                }
                )
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
                <div className="project-page">
                    {data && data.map((item) => {
                        return (
                            <React.Fragment key={item._id}>
                                <Card data={item} />
                            </React.Fragment>
                        )
                    })}
                </div >
            )}
        </>
    )
}