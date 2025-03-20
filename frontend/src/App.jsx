import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'
import './felveteli.css'
import Felvettek from './Felvettek'; 

function App() {
  return (
    <>
    <div>
        <div className='bg-fej'>
          
        </div>
    </div>
    <div>
          <div className='container row bg-torzs'>
                <div className='col-md-4'>
                  <h3>Központi felvételi tájékoztató</h3>
                    <p>A középiskolákba történő jelentkezés során az iskolák határozzák meg, hogy a felvételi rangsort mi alapján döntik el. A Jószakma Szakgimnázium a felvételi során az általános iskolából hozott és a központi felvételin szerzett pontok alapján rangsorolja az iskolába jelentkezőket.</p>
                    <a href='https://www.oktatas.hu/kozneveles/kozepfoku_felveteli_eljaras/kozepfoku_felveteli_eljaras_informacioi'>Tájékoztató oldal</a>
                    <img className='opacity-50' src="../img/logo.png" alt="" />
                </div>
                <div className='col-md-4 bg-white'>
                    <h1>Tájékoztatás</h1>
                    <h3>Jószakma Szakgimnázium </h3>
                  <p>A központi felvételit magyar nyelv és irodalom, illetve matematika tantárgyakból írják a jelentkezők. Mindkét tárgy esetén legfeljebb 50 pont szerezhető. A felvételiző hozott pontjait az általános iskolai év végi eredményei alapján számolják, ez a pontszám legfeljebb 50 pont lehet. A hozott pontokat duplázzák. A központi felvételin szerzett és a hozott pontok összege adja a felvételiző összesített pontszámát.
                  </p>

                </div>
                <div className='col-md-4'>
                  <h3>Az oldal használatáról</h3>
                    <h6>Ön az oldal használatával a következő információkhoz juthat hozzá</h6>
                    <ul>
                        <li>Előzetes rangsor: </li>
                          <ol>
                              <li>Nevek</li>
                              <li>Ágazat</li>
                              <li>Összes pontszám</li>
                          </ol>
                        <li>Előzetes rangsor nyelvi előkészítő</li>
                        <li>A felvettek névsora</li>
                    </ul>
                </div>
          </div>
        </div>


    <div>
    <div>
        <div className='row'>
            <h3>A felvételt nyert tanulók névsora a nyelvi előkészítőre</h3>
            <div className='col-md-6'>
              <select name="" id="">
                <option value="">Elektronika</option>
                <option value="">Informatika</option>
              </select>

              <button>Adatok</button>
            </div>
            <div className='col-md-6'>
              <Felvettek></Felvettek>
            </div>
            

        </div>
    </div>
    </div>
    </>
  )
}

export default App
