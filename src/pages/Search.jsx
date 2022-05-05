import '../App.css';
import SearchBox from '../helpers/SearchBox';

const Home = () => {
  return (
    <>
      <section className="flex">
        <div>
          <h1>Find your artist by name bellow</h1>
        </div>
        <div>
          <SearchBox />
        </div>
      </section>
    </>
  );
};

export default Home;
