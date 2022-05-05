import axios from 'axios';
import { useState, useEffect } from 'react';

const radonId = Math.floor(Math.random() * 50) + 112000;

const Artist = () => {
  const [bands, setBands] = useState([]);

  useEffect(() => {
    axios
      .get(`https://theaudiodb.com/api/v1/json/2/artist.php?i=${radonId}`)
      .then((res) => setBands(res.data.artists));
  }, []);

  return (
    <>
      <h1 className="centrar">Artists</h1>
      <section className="container">
        {bands.map((band) => (
          <ul key={band.idArtist} className="card">
            <li className="bco">Artist: {band.strArtist}</li>
            <li className="bco">Born year: {band.intBornYear}</li>
            <li className="bco">Description: {band.strBiographyEN}</li>
            <img src={band.strArtistThumb} alt="strArtistThumb" />
          </ul>
        ))}
      </section>
    </>
  );
};

export default Artist;
