import axios from 'axios';
import { useState, useEffect } from 'react';

const radonId = Math.floor(Math.random() * 50) + 112000;

const Albums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get(`https://theaudiodb.com/api/v1/json/2/album.php?i=${radonId}`)
      .then((res) => setAlbums(res.data.album));
  }, []);

  return (
    <>
      <h1 className="centrar">Albums Random</h1>
      <section className="container grid">
        {albums.map((album) => (
          <ul key={album.idAlbum} className="card">
            <li className="bco">Artist: {album.strArtist}</li>
            <li className="bco">Album: {album.strAlbum}</li>
            <li className="bco">Year: {album.intYearReleased}</li>
            <li className="bco">Description: {album.strDescriptionEN}</li>
            <img src={album.strAlbumThumb} alt="strAlbumThumb" />
          </ul>
        ))}
      </section>
    </>
  );
};

export default Albums;
