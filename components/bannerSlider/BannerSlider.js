import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';

const url = "https://cdn.jwplayer.com/v2/playlists/"
const BannerSlider = (data) => {
    const [playlist, setPlaylist] = useState([])

    useEffect(() => {
        const fetchBannerData = async () => {
            const res = await fetch(`https://cdn.jwplayer.com/v2/playlists/${data.data.playlistId}`)
            const bannerdata = await res.json()
            // console.log("banner data", bannerdata);
            setPlaylist(bannerdata.playlist)
        }
        fetchBannerData()
    }, [])

    return (
        <>
            <h1 style={{ fontSize: "20px", backgroundColor: "#222", width: "max-content", color: "white", padding: "5px 20px", borderRadius: "20px", boxShadow: "0px 0px 5px 1px lightgray" }}>banner container</h1>
            <Carousel style={{ maxWidth: "700px", margin: "0 auto", boxShadow: "0px 0px 5px 2px gray", borderRadius: "5px" }}>
                {
                    playlist.map((data, index) => {
                        return (
                            <Carousel.Item key={index} >
                                <img
                                    className="d-block w-100"
                                    src={data.images[0].src}
                                    alt="slide"
                                    style={{ borderRadius: "5px", boxShadow: "0px 0px 5px 1px black" }}
                                />
                                <Carousel.Caption>
                                    <h1 style={{ fontSize: "18px" }}>{data.title}</h1>
                                    <p>{data.description}</p>
                                </Carousel.Caption>
                            </Carousel.Item >
                        )
                    })
                }
            </Carousel >
            <hr />
        </>
    )
}

export default BannerSlider