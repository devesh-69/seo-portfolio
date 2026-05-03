import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip);

/**
 * TrafficChart — mini area chart showing traffic growth curve.
 * Used inside CaseStudies SiteCard.
 * @param {Object} props
 * @param {number[]} props.data - array of monthly traffic values
 * @param {string[]} props.labels - month labels
 * @param {string} props.label - dataset label
 */
export default function TrafficChart({ data, labels, label = 'Organic Clicks', hideXAxis = false }) {
  const isDark = document.documentElement.classList.contains('dark');

  const chartData = {
    labels,
    datasets: [
      {
        label,
        data,
        fill: true,
        tension: 0.4,
        borderColor: isDark ? '#F97316' : '#D97706',
        backgroundColor: isDark
          ? 'rgba(249, 115, 22, 0.12)'
          : 'rgba(217, 119, 6, 0.08)',
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: isDark ? '#F97316' : '#D97706',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        backgroundColor: isDark ? '#262626' : '#FFFFFF',
        titleColor: isDark ? '#F5EDE4' : '#111111',
        bodyColor: isDark ? '#D1D5DB' : '#4B5563',
        borderColor: isDark ? '#3F3F46' : '#E5E7EB',
        borderWidth: 1,
        cornerRadius: 8,
        padding: 10,
        displayColors: false,
        titleFont: { family: 'Inter', size: 12, weight: '600' },
        bodyFont: { family: 'Inter', size: 11 },
      },
    },
    scales: {
      x: {
        display: !hideXAxis,
        grid: { display: false },
        ticks: {
          color: isDark ? '#9CA3AF' : '#9CA3AF',
          font: { family: 'Inter', size: 10 },
          maxRotation: 0,
        },
        border: { display: false },
      },
      y: {
        display: false,
        grid: { display: false },
      },
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
  };

  return (
    <div className="h-full w-full">
      <Line data={chartData} options={options} />
    </div>
  );
}
