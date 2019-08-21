import React, {useState, useEffect} from 'react'
import {Text, Title, Footer} from "./components/Text"
import {Container1, Container2, Container3} from "./components/Container"
import InputText from './components/Input'
import Axios from 'axios'



export default function App() {

  const [request, setRequest] = useState('');
  const [data, setData] = useState([]);
  const [searchType, setSearchType] = useState('people');

  useEffect(()=> {
    Axios.get(`https://swapi.co/api/${searchType}/?search=${request}`)
    .then(res => setData(res.data.results))
    .catch(_=> setData([]))
    }, [request, searchType])


  return (
    <>
    <Container1>

    <Title>Sulon</Title>
    <Text>A repository of knowledge from the Star Wars universe from Episode I to Episode VI.</Text>

    <Container2>
    {Array.from(["people", "species", "starships", "planets", "vehicles"]).map((e,i)=>{
      return (
        <div key={i}>
          <label>{e}</label>
          <input type="checkbox" value={e} checked={e === searchType} onChange={(e)=> setSearchType(e.target.value)}/>
        </div>
      )
    })}
    </Container2>

    <InputText setRequest={setRequest}/>
    
    <Container3>
    {data.length > 0 && data.map((r,i)=>
      <ul key={i}>
        <li>{r.name}</li>
      </ul>
    )}
    </Container3>
    


    </Container1>
    <Footer className="fixed-bottom text-center py-1.5">Data from <a href="https://swapi.co/" className="card-link">SWAPI.co</a></Footer>
    </>
  )
}

