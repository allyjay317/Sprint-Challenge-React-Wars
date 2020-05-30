import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import CardContainer from './components/CardContainer'
import { Button } from 'reactstrap';
import PageButton from './components/PageButton';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([]);
  const [hasNext, setHasNext] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(()=>{
    console.log(page)
    axios.get(`https://swapi.py4e.com/api/people/?page=${page}`)
      .then((data)=>{
        setCharacters(data.data.results)
        setHasNext(data.data.next)
      })
      .catch(()=> setCharacters("error"));
  }, [page])

  function changePage(e, dir){
    
    e.preventDefault();
    setPage(page+dir);
  }
  return (
    <>
    <Header />
    <PageButton text="Previous" click={(event)=> changePage(event, -1)} hasNext={page === 1 ? false : true} />
    <CardContainer characters={characters}/>
    <PageButton text="Next" click={(event) => changePage(event, 1)} hasNext={page < 9 ? true : false} />
    <Footer />
    </>
  );
}

export default App;
