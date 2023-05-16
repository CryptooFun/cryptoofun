import { createChart, CrosshairMode } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';

function TVCandlesticks({ initData, addData, height = 400 }) {
  const chartContainerRef = useRef();
  const candleSeries = useRef();

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: {
          color: '#000000',
        },
        textColor: '#d1d4dc',
      },
      grid: {
        horzLines: { color: '#111212' },
        vertLines: { color: '#111212' },
      },
      height,
      width: chartContainerRef.current.clientWidth,
      crosshair: {
        mode: CrosshairMode.Normal,
      },
    });
    chart.timeScale().fitContent();

    candleSeries.current = chart.addCandlestickSeries();
    candleSeries.current.setData(initData || []);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, [initData, height]);

  useEffect(() => {
    if (candleSeries.current) {
      candleSeries.current.update(addData);
    }
  }, [addData]);

  return <div ref={chartContainerRef} />;
}

export default TVCandlesticks;
