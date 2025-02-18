import { Box, useColorModeValue } from '@chakra-ui/react';
import { createChart } from 'lightweight-charts';
import { useEffect, useRef } from 'react';

export function TokenChart() {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      const chart = createChart(chartContainerRef.current, {
        layout: {
          background: { color: '#1a1a1a' },
          textColor: '#d1d4dc',
        },
        grid: {
          vertLines: { color: 'rgba(42, 46, 57, 0.5)' },
          horzLines: { color: 'rgba(42, 46, 57, 0.5)' },
        },
        timeScale: {
          borderColor: 'rgba(197, 203, 206, 0.8)',
        },
        crosshair: {
          mode: 0,
        },
        width: chartContainerRef.current.clientWidth,
        height: 400,
      });

      const candlestickSeries = chart.addCandlestickSeries({
        upColor: '#66BB6A',
        downColor: '#ef5350',
        borderVisible: false,
        wickUpColor: '#66BB6A',
        wickDownColor: '#ef5350',
      });

      // Placeholder data - will be replaced with real data
      const data = [
        { time: '2024-02-01', open: 10, high: 15, low: 8, close: 12 },
        { time: '2024-02-02', open: 12, high: 18, low: 11, close: 15 },
        // Add more data points...
      ];

      candlestickSeries.setData(data);
      chartRef.current = chart;

      const handleResize = () => {
        chart.applyOptions({
          width: chartContainerRef.current.clientWidth,
        });
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        chart.remove();
      };
    }
  }, []);

  return (
    <Box
      ref={chartContainerRef}
      w="100%"
      h="400px"
      bg="darkBg.900"
      borderRadius="lg"
      overflow="hidden"
    />
  );
} 