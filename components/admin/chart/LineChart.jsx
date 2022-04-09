import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import chartOptions from "./chartOptions";

const LineChart = ({chartData}) => {
    return <Line 
        data={chartData}
        options={chartOptions}
    />;
}

export default LineChart;