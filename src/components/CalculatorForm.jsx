import React, { useState } from 'react';
import { detectCarrier } from '../utils/carriers';
import './CalculatorForm.css';

const CARRIERS = ['Jazz', 'Zong', 'Telenor', 'Ufone'];
const FED_TAX_RATE = 0.135;

function CalculatorForm({ onCalculate }) {
  const [mobile, setMobile] = useState('');
  const [carrier, setCarrier] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleMobileChange = (e) => {
    const val = e.target.value;
    setMobile(val);
    const detected = detectCarrier(val);
    if (detected) setCarrier(detected);
    if (errors.mobile) setErrors(prev => ({ ...prev, mobile: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!mobile || mobile.length !== 11 || !mobile.startsWith('0')) {
      newErrors.mobile = 'Enter a valid 11-digit Pakistani number';
    }
    if (!carrier) {
      newErrors.carrier = 'Please select or enter a valid mobile number';
    }
    const amt = parseFloat(amount);
    if (!amount || isNaN(amt) || amt <= 0) {
      newErrors.amount = 'Enter a valid recharge amount';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    if (navigator.vibrate) navigator.vibrate(50);

    // Simulate calculation delay (skeleton effect)
    setTimeout(() => {
      onCalculate({
        mobile,
        carrier,
        amount: parseFloat(amount),
        taxRate: FED_TAX_RATE,
      });
      setLoading(false);
    }, 850);
  };

  return (
    <div className="glass-card fade-in-delay">
      <form onSubmit={handleSubmit} noValidate>
        {/* Mobile Number */}
        <div className="field">
          <label className="field-label" htmlFor="mobile">Mobile Number</label>
          <input
            id="mobile"
            className={`neu-input ${errors.mobile ? 'input-error' : ''}`}
            type="tel"
            value={mobile}
            onChange={handleMobileChange}
            placeholder="03XXXXXXXXX"
            maxLength={11}
            autoComplete="off"
          />
          {errors.mobile && <p className="err-msg">{errors.mobile}</p>}
        </div>

        {/* Carrier */}
        <div className="field">
          <label className="field-label" htmlFor="carrier">Carrier</label>
          <select
            id="carrier"
            className={`neu-input ${errors.carrier ? 'input-error' : ''}`}
            value={carrier}
            onChange={(e) => {
              setCarrier(e.target.value);
              if (errors.carrier) setErrors(prev => ({ ...prev, carrier: '' }));
            }}
          >
            <option value="">Auto-detect or select…</option>
            {CARRIERS.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          {errors.carrier && <p className="err-msg">{errors.carrier}</p>}
        </div>

        {/* Amount */}
        <div className="field">
          <label className="field-label" htmlFor="amount">Recharge Amount</label>
          <div className="amt-wrap">
            <span className="amt-prefix">Rs.</span>
            <input
              id="amount"
              className={`neu-input amt-input ${errors.amount ? 'input-error' : ''}`}
              type="number"
              min="1"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
                if (errors.amount) setErrors(prev => ({ ...prev, amount: '' }));
              }}
              placeholder="100"
            />
          </div>
          {errors.amount && <p className="err-msg">{errors.amount}</p>}
        </div>

        <button
          type="submit"
          className={`calc-btn ${loading ? 'loading' : ''}`}
          disabled={loading}
        >
          {loading ? 'Processing…' : '⚡ Calculate Balance'}
        </button>
      </form>
    </div>
  );
}

export default CalculatorForm;
