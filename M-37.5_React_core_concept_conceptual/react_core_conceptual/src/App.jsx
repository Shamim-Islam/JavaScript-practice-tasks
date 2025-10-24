import Users from './components/Users.jsx'
import { Suspense } from 'react'
import './App.css'

function App() {
 
  const fetchUrl = 'https://fake-json-api.mock.beeceptor.com/users'

  const userPromise = fetch(fetchUrl).then(res => {
    return res.json();
  })
  // console.log(userPromise)

  return (
    <>
     <Suspense fallback={<h1 className='text-3xl text-center'>Loding...........</h1>}>
      <Users userPromise={userPromise}></Users>
     </Suspense>
      
    </>
  )
}

export default App
