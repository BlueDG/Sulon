import React, {useState, useEffect} from 'react'
import {Text, Title, Footer} from "./components/Text"
import {Container} from "./components/Container"
import {InputText} from './components/Input'
import Axios from 'axios'



export default function App() {

  const [request, setRequest] = useState();
  const [data, setData] = useState([]);
  const [searchType, setSearchType] = useState("people");

  useEffect(()=> {
    Axios.get(`https://swapi.co/api/${searchType}/?search=${request}`)
    .then(res => setData(res.data.results))
    .catch(_=> setData([]))
    }, [request, searchType])


  return (
    <>
    <Container>
    <Title>Sulon</Title>
    <Text>A repository of knowledge from the Star Wars universe from Episode I to Episode VI.</Text>
    <InputText setRequest={setRequest}/>
    {Array.from(["people", "species", "starships", "planets", "vehicles", "films"]).map((e,i)=>{
      return (
        <div key={i}>
          <label>{e}</label>
          <input type="checkbox" value={e} checked={e === searchType} onChange={(e)=> setSearchType(e.target.value)}/>
        </div>
      )
    })}
    </Container>
    <Container>
    {data.length > 0 && data.map((r,i)=>
      <div key={i}>
        {r.name}
      </div>
    )}
    </Container>
    <Footer className="fixed-bottom text-center py-1.5">Data from <a href="https://swapi.co/" className="card-link">SWAPI.co</a></Footer>
    </>
  )
}

