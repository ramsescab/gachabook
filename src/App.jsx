import { useState, useMemo } from 'react'
import './App.css'
import books from './books'

function App() {
  const [refreshKey, setRefreshKey] = useState(0)

  const randomBook = useMemo(() => {
    return books[Math.floor(Math.random() * books.length)]
  }, [refreshKey])

  return (
    <>
      <h1>Book Recommendation</h1>
      <div className="recommendation">
        <h2>{randomBook.title}</h2>
        <h3>by {randomBook.author}</h3>
        <p>{randomBook.description}</p>
        <button onClick={() => setRefreshKey(k => k + 1)}>
          Get Another Recommendation
        </button>
      </div>
    </>
  )
}

export default App
