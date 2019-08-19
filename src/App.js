import React from 'react'
import {Text, Title, Footer} from "./components/Text"
import {Container} from "./components/Container"
import {VideoContainer} from "./components/VideoContainer";

function App() {
  return (
    <>
    <VideoContainer>
    <Container>
    <Title>Sulon</Title>
    <Text>A repository of knowledge from the Star Wars universe from Episode I to Episode VI.</Text>
    </Container>
    </VideoContainer>
    <Footer className="fixed-bottom text-center py-3">Data from <a href="https://swapi.co/" className="card-link">SWAPI.co</a></Footer>
    


    </>
  )
}

export default App;
