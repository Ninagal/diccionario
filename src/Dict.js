import React, { useState } from "react";
import axios from "axios";
import Photos from "./Photos";

export default function Dict() {
    const [keyword, setKeyword] = useState("");
    const [data, setData] = useState("");
    const [searchWord, setSearchWord] = useState("");
    const [photos, setPhotos] = useState(null);
    const [results, setResults] = useState(null);

    function handleDictionResponse(response) {
      setResults(response.data[0]);
    }
    function handlePexelsResponse(response) {
      setPhotos(response.data.photos);
    }

    function search() {
      // documentation: https://dictionaryapi.dev/e
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
      axios.get(apiUrl).then(handleDictionResponse);
  
      let pexelsApiKey =
        "563492ad6f91700001000001fdd29f0808df42bd90c33f42e128fa89";
      let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
      let headers = { Authorization: `Bearer ${pexelsApiKey}` };
      axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }
    // Function to fetch information on button
    // click, and set the data accordingly
    function handleSubmit(event) {
      event.preventDefault();
      getMeaning();
      search();
    }
    function getMeaning() {
      axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`
      ).then((response) => {
        setData(response.data[0]);
      });
    }
    const formato = (<form onSubmit={handleSubmit}>
    <input type={"text"} style={{ height: '20px', fontSize:'22px' }} onChange={(e) => {
            setSearchWord(e.target.value);
            setKeyword(e.target.value)
          }}></input>
    <input type='submit' value='Search'  style={{background:'black', color:'white', padding:'5px', fontWeight: 'bold',
                fontSize: '20px'}}></input>
    </form>)
    return(
        <div>
            <h1>What Word are you Looking for Today??</h1>
            {formato}
            {data && (
        <div className="showResults">
          <h4>Parts of speech:</h4>                                
            <p>{data.meanings[0].partOfSpeech}</p>                        
                    <h4>Definition:</h4>                                
            <p>{data.meanings[0].definitions[0].definition}</p>                        
            <h4>Example Photos:</h4>
                  <Photos photos={photos} />
                    </div>
                )}
    </div> 
    )
}