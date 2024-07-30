import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/nav.jsx'
import Booklist from './components/booklist.jsx'
import BookDetails from './components/Bookdet.jsx'
import Account from './components/account.jsx'
import Auth from './components/auth.jsx'


const App = () => {
  const [token, setToken] = useState("");

  return (
    <>
      <Nav token={token} setToken={setToken}/>

      <Routes>
        <Route path='/' element={<Booklist />}/>
        <Route path='/books/:id' element={<BookDetails token={token} />} />
        <Route path='/my-account' element={<Account token={token} setToken={setToken} />}/>
        <Route path='/login' element={<Auth token={token} setToken={setToken} />} />
      </Routes>

    </>
  )
}

export default App
