import { useEffect, useState } from 'react';
import { GrMoney } from "react-icons/gr";
import {Currencyrate} from '../API/CurrencyApi';


function Currencies () {
    const [amount, setAmount] = useState(1)
    const [fromCurrency, setFromCurrency] = useState("USD")
    const [toCurrency, setToCurrency] = useState("INR")
    const [convertedAmount, setConvertedAmount] = useState(0)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleConvert = async () => {
        try {
            setLoading(true)
            const res = await Currencyrate(fromCurrency, toCurrency, amount)
            console.log(res.data)
            setConvertedAmount(res.data.conversion_result)
            setError(null)
        } catch (error) {
            setError(error.message)
            setConvertedAmount(0)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (fromCurrency === toCurrency) {
            setConvertedAmount(amount);
        } else {
            handleConvert();
        }
    }, [fromCurrency, toCurrency, amount]);

    return (
        <section className="currency-converter-section">
            <div className="currency-converter-container">
                <div className="currency-converter-header">
                    <h1 className="currency-converter-header-text">
                        Currency Converter 
                        <span className="money-icon"><GrMoney /></span>
                    </h1>
                </div>
                <div className="currency-converter-body">
                    <div className="form-group">
                        <div className="input-group">
                            <label className="input-label">Amount</label>
                            <input 
                                type="number" 
                                value={amount} 
                                onChange={(e) => setAmount(e.target.value)}
                                disabled={loading}
                                className="input-field"
                                placeholder="Enter amount"
                            />
                        </div>
                        
                        <div className="currency-grid">
                            <div className="input-group">
                                <label className="input-label">From</label>
                                <select 
                                    value={fromCurrency} 
                                    onChange={(e) => setFromCurrency(e.target.value)}
                                    disabled={loading}
                                    className="select-field"
                                >
                                    <option value="USD">USD</option>
                                    <option value="INR">INR</option>
                                    <option value="EUR">EUR</option>
                                </select>
                            </div>
                            
                            <div className="input-group">
                                <label className="input-label">To</label>
                                <select 
                                    value={toCurrency} 
                                    onChange={(e) => setToCurrency(e.target.value)}
                                    disabled={loading}
                                    className="select-field"
                                >
                                    <option value="USD">USD</option>
                                    <option value="INR">INR</option>
                                    <option value="EUR">EUR</option>
                                </select>
                            </div>
                        </div>
                        
                        <button 
                            onClick={handleConvert} 
                            disabled={amount <= 0 || loading}
                            className="convert-button"
                        >
                            {loading ? 'Converting...' : 'Convert'}
                        </button>
                    </div>
                    
                    {error && (
                        <div className="error-container">
                            <p className="error-title">Error</p>
                            <p>{error}</p>
                        </div>
                    )}
                    
                    {convertedAmount > 0 && !error && (
                        <div className="result-container">
                            <p className="result-text">
                                {amount} {fromCurrency} = <span className="result-amount">{convertedAmount}</span> {toCurrency}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Currencies;