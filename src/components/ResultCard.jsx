import React, { useState, useEffect } from 'react';
import './ResultCard.css';

function Skeleton() {
  return (
    <div className="skeleton-wrap">
      <div className="skel" style={{ width: '45%', height: '18px' }} />
      <div className="skel" style={{ width: '70%', height: '56px', marginTop: '8px' }} />
      <div className="skel" style={{ width: '100%', height: '90px', marginTop: '20px' }} />
    </div>
  );
}

function EmptyState() {
  const bars = [15, 28, 40, 28, 15, 22, 36];
  return (
    <div className="empty-state">
      <div className="wave-visual" aria-hidden="true">
        {bars.map((h, i) => (
          <div key={i} className="wv-bar" style={{ height: `${h}px` }} />
        ))}
      </div>
      <p>Fill in the form to calculate your net balance</p>
    </div>
  );
}

function ResultDisplay({ result, onCopy, copied }) {
  return (
    <div className="result-inner fade-in">
      <p className="net-label">Net Balance After Tax</p>
      <div className="balance-row">
        <span className="big-balance">{result.net.toFixed(2)}</span>
        <button
          className="copy-btn"
          onClick={onCopy}
          title="Copy to clipboard"
          aria-label="Copy balance"
        >
          {copied ? '✅' : '📋'}
        </button>
      </div>

      <div className="breakdown">
        <div className="bd-row">
          <span>Recharge Amount:</span>
          <strong className="bd-val">Rs. {result.amount.toFixed(2)}</strong>
        </div>
        <div className="bd-row tax">
          <span>FED Tax (13.5%):</span>
          <strong className="bd-val">- Rs. {result.tax.toFixed(2)}</strong>
        </div>
        <hr className="bd-hr" />
        <div className="bd-row carrier">
          <span>Carrier:</span>
          <strong className="bd-val">{result.carrier}</strong>
        </div>
      </div>
    </div>
  );
}

function ResultCard({ result }) {
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [currentResult, setCurrentResult] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!result) return;
    setShowResult(false);
    setShowSkeleton(true);

    const timer = setTimeout(() => {
      setCurrentResult(result);
      setShowSkeleton(false);
      setShowResult(true);
    }, 850);

    return () => clearTimeout(timer);
  }, [result]);

  const handleCopy = () => {
    if (!currentResult) return;
    navigator.clipboard.writeText(currentResult.net.toFixed(2)).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="glass-card result-card">
      {!result && !showSkeleton && <EmptyState />}
      {showSkeleton && <Skeleton />}
      {showResult && currentResult && (
        <ResultDisplay result={currentResult} onCopy={handleCopy} copied={copied} />
      )}
    </div>
  );
}

export default ResultCard;
