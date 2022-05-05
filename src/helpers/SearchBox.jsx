import axios from 'axios';
import { useState, useEffect } from 'react';

const SearchBox = ({ data }) => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState({});

  const findMusic = async () => {
    const { data } = await axios.get(
      `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${search}`
    );
    setSearch('');
    setResults(data);
  };

  return (
    <>
      <section className="container">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search an artist"
          value={search}
        />
        <button className="button" onClick={findMusic}>
          Submit
        </button>
      </section>
      <section className="container">
        {results.artists ? (
          <>
            <div className="search-grid">
              <div>
                <h2 className="bco">{results.artists?.[0].strArtist}</h2>
                <h3 className="bco">
                  Born year: {results.artists?.[0].intBornYear}
                </h3>
                <p className="bco">{results.artists?.[0].strBiographyEN}</p>
              </div>
              <div>
                <img src={results.artists?.[0].strArtistWideThumb} alt="" />
              </div>
            </div>
          </>
        ) : (
          <p>You haven't searched yet or there are no results</p>
        )}
      </section>
    </>
  );
};

export default SearchBox;
