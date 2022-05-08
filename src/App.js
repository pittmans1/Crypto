import './App.css';
import Header from './Components/Header';
import CollectionCard from './Components/CollectionCard'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
const [collection, setCollection] = useState([])

// useEffect(() => {
//   const getMyNfts = async () =>{
//     const openseaData = await axios.get('https://testnets.opensea.io/assets/0x4725221593b4AEE34BA39084C5E33e69862f5A2b/')
//     console.log(openseaData.data.assets)
//   }
//   return getMyNfts()
// },[])

  return (
    <div class='app'>
      <Header />
      <CollectionCard 
        id={0}
        name={'space'}
        traits={[{'value':7}]}
        image='https://lh3.googleusercontent.com/Sp21Knk2dSKH00EbTjq31vyArcUinbfBKBzadsaxCsjbs8IHBSTALLI7xGwd_63q9wp1LLXPneCwW-_YobBR_bGs6Q2vkuL5aZHrxg=w600'/>
    </div>
  )
}

export default App;
