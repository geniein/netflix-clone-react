import './App.css';
import Header from './Header';
import Banner from './Banner';
import requests from './requests';
import Row from './Row';
function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Row
        isLargeRow = {true}
        title = "NETFILX ORIGINALS"
        fetchUrl={requests.fetchNetFlixOriginals}
      />
      <Row
        isLargeRow = {true}
        title = "Trending New"
        fetchUrl={requests.fetchTreding}
      />
      <Row
        isLargeRow = {true}
        title = "Top Rated"
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        isLargeRow = {true}
        title = "Action Moives"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        isLargeRow = {true}
        title = "Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        isLargeRow = {true}
        title = "Documetaries"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default App;
