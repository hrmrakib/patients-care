import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import usePatient from "../hooks/usePatient";

const BloodPressureChart = ({ patients }) => {
  // Retrieve the current patient index from context
  const { currentPatientIndex } = usePatient();

  // Helper function to generate chart data dynamically
  const generateChartData = () => {
    if (!patients[currentPatientIndex]?.diagnosis_history) return [];

    return patients[currentPatientIndex].diagnosis_history
      .slice(0, 6)
      .map((entry) => ({
        name: `${entry?.month?.slice(0, 3)}, ${entry?.year}`,
        diastolic: entry?.blood_pressure?.diastolic?.value || 0,
        systolic: entry?.blood_pressure?.systolic?.value || 0,
      }));
  };

  const data = generateChartData();

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' tick={{ fontSize: 11 }} interval={0} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type='monotone'
          dataKey='systolic'
          stroke='#C26EB4'
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
        <Line
          type='monotone'
          dataKey='diastolic'
          stroke='#7E6CAB'
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default BloodPressureChart;
