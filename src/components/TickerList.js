import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TickerList.css'

const TickerList = () => {
    const [tickers, setTickers] = useState([]);

    useEffect(() => {
        const fetchTickers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/tickers'); // Fetch data from the API endpoint
                setTickers(response.data);
            } catch (error) {
                console.error('Error fetching tickers:', error.message);
            }
        };

        fetchTickers();
    }, []);

    return (
        <div className='Tickerlist'>
            <h2 className='head' >Best Price to Trade</h2>
            <div class="trade">
                <ul>
                    <li>
                        <span>0.1%</span>
                        <span className='below'>5 Mins</span>
                    </li>
                    <li>
                        <span>0.96%</span>
                        <span className='below'>1 Hour</span>
                    </li>
                    <li>
                        <span className='rupees'>&#8377; 26,56,110</span>
                        <span className='below'>Average BTC/INR net price including commission </span>
                    </li>
                    <li>
                        <span>2.73%</span>
                        <span className='below'>1 Day</span>
                    </li>
                    <li>
                        <span>7.51%</span>
                        <span className='below'>7 days</span>
                    </li>
                </ul>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Price</th>
                        <th>Volume</th>
                        <th>Low</th>
                        <th>High</th>
                        <th>Open</th>
                        <th>Sell</th>
                        <th>Buy</th>
                    </tr>
                </thead>
                <tbody>
                    {tickers.map((ticker, index) => (
                        <tr key={index} className='data'>
                            <td>{ticker.name}</td>
                            <td>{ticker.last}</td>
                            <td>{ticker.volume}</td>
                            <td>{ticker.low}</td>
                            <td>{ticker.high}</td>
                            <td className='open'>{ticker.open}</td>
                            <td>&#8377;{ticker.sell}</td>
                            <td>&#8377;{ticker.buy}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TickerList;
