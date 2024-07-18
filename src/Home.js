import { React, useState, useEffect }from 'react'
import './Home.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link 
} from 'react-router-dom'

function Home() {
  // Making the states for the home page of the app
  const [input,setInput] = useState('');
  const [channelNames, setChannelNames] = useState(['test 1','test 2'])
  

  // Functions
  const addChannel = () => {
    setChannelNames([...channelNames,input])
  }
  return (
      <center>
            <div className="mainDiv">
                <h1>Conscia Forums</h1>
                <br/>
                <div className="addAndListing">
                    <input value={input} onChange={(event => {setInput(event.target.value)})} className ='channelImp' placeholder='Enter the name of the channel'/>
                    <button disabled={!input} onClick={addChannel}>Add Channel</button>
                    <hr/>
                    <div className='channelList'>
                        {channelNames.map((channelName,index) => {
                            // return <h5 key={index}>{channelName}</h5>
                            return <ul key={index}>
                                        <li>
                                            {/* <Link to={(`/${channelName}`)}>{channelName}</Link> */}
                                            <Link to={('/test')}>{channelName}</Link>
                                        </li>
                                   </ul>
                           
                        })}
                    </div>
                </div>
            </div>
      </center>
  )
}

// function test(){
//     return <h1>Test Page</h1>
// }
export default Home
