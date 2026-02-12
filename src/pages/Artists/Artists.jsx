import { useEffect, useState } from "react"
import "./Artists.css"
import found444 from "../../assets/Image (2).png"
import { apiClient } from "../../components/axios/apiClient"

function Artists() {
  const [artist, setArtist] = useState([])

  async function getArtist() {
    try {
      const res = await apiClient.get("/movie/550/credits?api_key=2fa8f297328a4293f06805fe0c1b915d")
      console.log(res.data.cast)
      setArtist(res.data.cast)
    } catch (error) {
      console.log(error)
      return `<img src=${found444} alt="" />`
    }
  }
  useEffect(() => {
    getArtist()
  }, [])

  return (
    <div className="artist">
      {artist.map((arti) => {
        <div key={item.art} artists={arti} ></div>
      })
      }
    </div>
  )
}

export default Artists