import React from 'react'
import {Text, Title, Footer} from "./components/Text"


function App() {
  return (
    <>
    <Title>Sulon</Title>
    <Text>Here is gathered some information regarding the Star Wars universe from Episode I to Episode VI.</Text>
    <Footer className="fixed-bottom text-center py-3">Data from <a href="https://swapi.co/" className="card-link">SWAPI.co</a></Footer>
    


    </>
  )
}

export default App;
