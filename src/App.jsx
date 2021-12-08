import React, { useState, useEffect } from 'react';
import { Cards } from './components/Cards';
import { Details } from './components/Details';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './App.scss';
import { CircularProgress } from '@mui/material'
import { makeEndPoint } from './helper';
import { getData } from './api/Api';
import classNames from 'classnames';

export const AppContext = React.createContext();

function App() {
  const [cards, setCards] = useState(null);
  const [details, setDetails] = useState(null);
  const [filterBy, setFilterBy] = useState(null);
  const [endPoint, setEndPoint] = useState(null);


  useEffect(() => {
      getData('pokemon/?limit=12&offset=0').then(setCards)
  }, [])

  useEffect(() => {
    if (!filterBy) return;
    getData(`type/${filterBy}`).then(res => {
      const results = res.pokemon.reduce((arr, item) => [...arr, item.pokemon], [])
      setCards({ results })
    })
  }, [filterBy])

  useEffect(() => {
    if (!endPoint) return;
    const f = +endPoint ? setDetails : setCards
    getData(`pokemon/${endPoint}`).then(f)
  }, [endPoint])

  const activeCardId = details && details.id
  
  return (
    <AppContext.Provider value={{
      setEndPoint,
      setFilterBy,
      activeCardId,
      filterBy
    }}>
      <div className="App">
        <Header />
        <div className="App__main">
          {!cards ? <CircularProgress /> : <>
            <div className="App__content-block">
              <Cards cards={cards.results} />
              <div className="App__buttons">
                <button
                  className="App__button"
                  hidden={!cards.previous}
                  onClick={() => setEndPoint(makeEndPoint(cards.previous))}
                >
                  Previous Page
                </button>
                <button
                  className="App__button"
                  hidden={!cards.next}
                  onClick={() => setEndPoint(makeEndPoint(cards.next))}
                >
                  Next Page
                </button>
              </div>
            </div>
          </>}

          <div className={classNames(
            "App__details-block",
            { "App__details-block--is-open": !!details }
          )}>
            {!!details &&
              <Details
                {...details}
                onSetDetails={setDetails}
              />
            }
          </div>
        </div>
        <Footer />
      </div >
    </AppContext.Provider>
  );
}

export default App;
