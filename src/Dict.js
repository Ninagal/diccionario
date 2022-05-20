import React, { useState } from "react";
import axios from "axios";

export default function Dict() {
    const [data, setData] = useState("");
    const [searchWord, setSearchWord] = useState("");
   
    // Function to fetch information on button
    // click, and set the data accordingly
    function handleSubmit(event) {
      event.preventDefault();
      getMeaning();
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
                    <h4>Example:</h4>                                
            <p>{data.meanings[0].definitions[0].example}</p>            
                    </div>
                )}
    </div> 
    )
}