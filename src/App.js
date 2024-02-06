import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from 'react';
import CountDown from './CountDown';

function App() {
  const [gif, setGif] = useState("");
  const [wish, setWish] = useState("");
  const current = new Date();
  const [hig,sethig] = useState(220);
  const [wid,setwid] = useState(200)
  const [week,setweek] = useState(true)

  useEffect(() => {
    const roseDay = new Date(current.getFullYear(), 1, 7);
    const ProposeDay = new Date(current.getFullYear(), 1, 8)
    const ChocolateDay = new Date(current.getFullYear(), 1, 9)
    const TeddyDate = new Date(current.getFullYear(),1,10)
    const PromiseDate = new Date(current.getFullYear(),1,11)
    const HugDay = new Date(current.getFullYear(),1,12)
    const KissDay = new Date(current.getFullYear(),1,13)
    const ValentineDay = new Date(current.getFullYear(),1,14)

    if (roseDay.toDateString() === current.toDateString()) {
      setGif("https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif");
      setWish("Happy Rose Day! 🌹");
    }
    else if (ProposeDay.toDateString() === current.toDateString()){
      setGif("https://media1.tenor.com/m/9X_EXRhnImUAAAAC/love-ilu.gif")
      setWish("Happy Propose Day! 💍")
    }
    else if (ChocolateDay.toDateString() === current.toDateString()){
      setGif("https://media1.tenor.com/m/JxcS75r-imoAAAAC/bear-panda.gif")
      setWish("Happy Chocolate Day! 🍫")
      setwid(250)
    }
    else if (TeddyDate.toDateString() === current.toDateString()){
      setGif("https://media1.tenor.com/m/h1OQO6SevZEAAAAC/cute-kawaii.gif")
      setWish("Happy Teddy Day! 🧸")
    }
    else if (PromiseDate.toDateString() === current.toDateString()){
      setGif("https://media1.tenor.com/m/poZH3QmurKUAAAAC/pinky-promise-bear.gif")
      setWish("Happy Promise Day! 🫳")
    }
    else if (HugDay.toDateString() === current.toDateString()){
      setGif("https://media1.tenor.com/m/eze5IzkOlFoAAAAC/milk-and-mocha-bear-hearts.gif")
      setWish("Happy Hug Day! 🫂🤗")
    }
    else if (KissDay.toDateString() === current.toDateString()){
      setGif("https://media1.tenor.com/m/gUiu1zyxfzYAAAAC/bear-kiss-bear-kisses.gif")
      setWish("Happy Kiss Day! 😘💏")
    }
    else if (ValentineDay.toDateString() === current.toDateString()){
      setGif("https://media1.tenor.com/m/9Z_u2LHmnjwAAAAC/bear-bear-love.gif")
      setWish("Happy Valentine Day! 💝")
    }
    else{
      setweek(false)
    }
  }, [current]);

  return (
      week ? (
      <div className = "ValentineContainer" >
      <img src={gif} width={wid} height={hig} alt="" />
      <h1>{wish}</h1>
      <span style={{ marginBottom: "50px" }}>
      </span>
      </div>
     ) : (
      <CountDown/>
     )

  );
}

export default App;
