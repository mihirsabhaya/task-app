import React, { useState, useEffect } from 'react'
// import Carousel from 'react-bootstrap/Carousel';

const url = "https://cdn.jwplayer.com/v2/playlists/"

const CardSlider = ({ data }) => {
    // console.log(data.playlistId);
    const [cards, setCards] = useState([])

    useEffect(() => {
        const getCardData = async () => {
            // console.log(`https://cdn.jwplayer.com/v2/playlists/${data.playlistId}`);
            const res = await fetch(`https://cdn.jwplayer.com/v2/playlists/${data.playlistId}`)

            // console.log("res", await res.json());
            const CardData = await res.json()
            // console.log(CardData);
            setCards(CardData.playlist)
        }
        getCardData()
    }, [])
    // console.log(cards);

    return (
        <>
            <h1 className='heading'>card container</h1>
            <div className='row mt-3 m-0' style={{ overflowX: "scroll", flexWrap: "nowrap" }}>
                {
                    cards.map((data, index) => {
                        return (
                            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3"  >
                                <div className='single_card'>
                                    <img src={data.images[0].src} layout="responsive"
                                        alt="Image" style={{ width: "100%", borderRadius: "5px", boxShadow: "0px 0px 5px 1px black" }} />
                                    <div className="card-content">
                                        <h2 style={{ fontSize: "18px", marginTop: "10px", paddingBottom: "10px" }}>{data.title}</h2>
                                        {/* <p>{data.description}</p> */}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <hr />
        </>
    )
}

export default CardSlider