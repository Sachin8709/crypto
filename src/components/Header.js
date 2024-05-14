import React from 'react'
import hlogo from './images/headerlogo.png'
import './Header.css'
import logo from './images/download.png'
const Header = () => {
  return (
       <div className="header">
            <img src={hlogo} alt=''/>
            <div className="middle">
             <select>
                <option>INR</option>
             </select>
             <select>
            <option value="btc">BTC</option>
            <option value="eth">ETH</option>
            <option value="zil">ZIL</option>
            <option value="bat">BAT</option>
            <option value="zrx">ZRX</option>
            <option value="req">REQ</option>
            <option value="nuls">NULS</option>
            <option value="xrp">XRP</option>
            <option value="trx">TRX</option>
            <option value="eos">EOS</option>
             </select>
             <button>
               BUY BTC
             </button>
            </div>
            <div className="right">
                <div className="f">
                    57
                </div>
                <div className="mid">
                    <div className="mid-inside">
                        <img  src={logo} alt='/'/>
                    </div>
                    <div className="mid-last">
                        Contact Telegram
                    </div>
                </div>
                <div className="last">
                        <div className="last-inside"></div>
                    </div>
            </div>
        </div>
  )
}

export default Header
