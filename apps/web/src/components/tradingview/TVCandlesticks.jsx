import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;

export default function TradingViewWidget({ symbol }) {
  const onLoadScriptRef = useRef();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise(resolve => {
        const script = document.createElement('script');
        script.id = 'tradingview-widget-loading-script';
        script.src = 'https://s3.tradingview.com/tv.js';
        script.type = 'text/javascript';
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById('tradingview_51965') &&
        'TradingView' in window
      ) {
        new window.TradingView.widget({
          autosize: false,
          width: 1100,
          height: 440,
          symbol: `${symbol}USDT`,
          interval: 'D',
          timezone: 'Etc/UTC',
          theme: 'dark',
          style: '1',
          locale: 'en',
          toolbar_bg: '#5C5C5C',
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: 'tradingview_51965',
        });
      }
    }
  }, [symbol]);

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview_51965"></div>
    </div>
  );
}
