import { useEffect, useState } from "react"
import "./Artists.css"
import { apiClient } from "../../components/axios/apiClient"
import ArtistCards from "../../components/ArtistCards/ArtistCards"
function Artists() {
  const [artist, setArtist] = useState([])

  async function getArtist() {
    try {
      const res = await apiClient.get(
        "/movie/550/credits?api_key=2fa8f297328a4293f06805fe0c1b915d"
      )
      setArtist(res.data.cast)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getArtist()
  }, [])

  return (
    <div className="artist">
      {artist.map((arti) => (
        <ArtistCards key={arti.id} arti={arti} />
      ))}
    </div>
  )
}

export default Artists