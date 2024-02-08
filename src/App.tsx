import { useEffect, useState } from 'react'
import './App.scss'
import confetti from "https://esm.run/canvas-confetti@1"

function App() {
  const [open, setOpen] = useState<boolean>(false)
  const [showBtn, setShowBtn] = useState<boolean>(false)

  const [modalPos, setModalPos] = useState<boolean>(false)
  const [widthBtnBigger, setWidthBtnBigger] = useState<number>(150)
  const [heightBtnBigger, seHeightBtnBigger] = useState<number>(70)

  function onClickConfetti() {
    confetti({
      particleCount: 150,
      spread: 60
    });
    setModalPos(true)
  }

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setShowBtn(true)
      }, 1800);
    }
  }, [open])

  const biggerBtn = () => {
    setWidthBtnBigger(widthBtnBigger / 0.9)
    seHeightBtnBigger(heightBtnBigger / 0.9)
  }


  return (
    <>
      <div id="card">
        <center><h1 className='text'>Валентинка для Діанки </h1></center>
        <div className={`heart ${open ? 'heart1Open' : ''}`} id={`heart1`} onClick={() => setOpen(true)}>
          <div id="half1">
            <div id="circle"></div>
            <div id="rec"></div>
          </div>

          <div id="half2">
            <div id="circle"></div>
            <div id="rec"></div>
          </div>
        </div>
        <div id="message">
          <h2>Будеш моїм Валентином? ❤️</h2>
          {
            showBtn ? (
              <div
                className='wrapper'>
                <button onClick={onClickConfetti} style={{ zIndex: 10000, width: widthBtnBigger, height: heightBtnBigger }}>ТААААААААК!</button>
                <button onClick={biggerBtn} style={{ zIndex: 10000 }}>Я не знаю😿</button>
              </div>

            ) : null
          }

        </div>
        <div className={`heart ${open ? 'heart2Open' : ''}`} id="heart2" onClick={() => setOpen(true)}>
          <div id="half1">
            <div id="circle"></div>
            <div id="rec"></div>
          </div>
          <div id="half2">
            <div id="circle"></div>
            <div id="rec"></div>
          </div>
        </div>
        x
      </div>
      <div className={`${showBtn ? 'blur' : ''} bg`}>
        {
          modalPos ? (
            <span style={{ fontSize: 80 }} className='happy-answer'> УРАААААААААААААААААААААААААААААА!!!</span>
          ) : null
        }
      </div>
    </>
  )
}

export default App
