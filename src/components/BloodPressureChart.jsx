import React from "react";
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
  // get current index of a patient (from a context)
  const { currentPatientIndex } = usePatient();

  // dynamically set data based on user interaction
  const data = [
    {
      name: `
        ${patients[currentPatientIndex]?.diagnosis_history
          ?.slice(0, 5)[0]
          ?.month?.slice(0, 3)},
        ${
          patients[currentPatientIndex]?.diagnosis_history?.slice(0, 5)[0]?.year
        }
      `,
      uv: patients[currentPatientIndex]?.diagnosis_history?.slice(0, 5)[0]
        ?.blood_pressure?.diastolic?.value,
      pv: patients[currentPatientIndex]?.diagnosis_history?.slice(0, 5)[0]
        ?.blood_pressure?.systolic?.value,
      amt: 2400,
    },
    {
      name: `
        ${patients[currentPatientIndex]?.diagnosis_history
          ?.slice(0, 5)[1]
          ?.month?.slice(0, 3)},
        ${
          patients[currentPatientIndex]?.diagnosis_history?.slice(0, 5)[1]?.year
        }
      `,
      uv: patients[currentPatientIndex]?.diagnosis_history?.slice(0, 5)[1]
        ?.blood_pressure?.diastolic?.value,
      pv: patients[currentPatientIndex]?.diagnosis_history?.slice(0, 5)[1]
        ?.blood_pressure?.systolic?.value,
      amt: 2210,
    },
    {
      name: `
        ${patients[currentPatientIndex]?.diagnosis_history
          ?.slice(0, 5)[2]
          ?.month?.slice(0, 3)},
        ${
          patients[currentPatientIndex]?.diagnosis_history?.slice(0, 5)[2]?.year
        }
      `,
      uv: patients[currentPatientIndex]?.diagnosis_history?.slice(0, 5)[2]
        ?.blood_pressure?.diastolic?.value,
      pv: patients[currentPatientIndex]?.diagnosis_history?.slice(0, 5)[2]
        ?.blood_pressure?.systolic?.value,
      amt: 2290,
    },
    {
      name: `
        ${patients[currentPatientIndex]?.diagnosis_history
          ?.slice(0, 5)[3]
          ?.month?.slice(0, 3)},
        ${
          patients[currentPatientIndex]?.diagnosis_history?.slice(0, 5)[3]?.year
        }
      `,
      uv: patients[currentPatientIndex]?.diagnosis_history?.slice(0, 5)[3]
        ?.blood_pressure?.diastolic?.value,
      pv: patients[currentPatientIndex]?.diagnosis_history?.slice(0, 5)[3]
        ?.blood_pressure?.systolic?.value,
      amt: 2000,
    },
    {
      name: `
        ${patients[currentPatientIndex]?.diagnosis_history
          ?.slice(0, 5)[4]
          ?.month?.slice(0, 3)},
        ${
          patients[currentPatientIndex]?.diagnosis_history?.slice(0, 5)[4]?.year
        }
      `,
      uv: patients[currentPatientIndex]?.diagnosis_history?.slice(0, 5)[4]
        ?.blood_pressure?.diastolic?.value,
      pv: patients[currentPatientIndex]?.diagnosis_history?.slice(0, 5)[4]
        ?.blood_pressure?.systolic?.value,
      amt: 2081,
    },
    {
      name: `
        ${patients[currentPatientIndex]?.diagnosis_history
          ?.slice(0, 6)[5]
          ?.month?.slice(0, 3)},
        ${
          patients[currentPatientIndex]?.diagnosis_history?.slice(0, 6)[4]?.year
        }
      `,
      uv: patients[currentPatientIndex]?.diagnosis_history?.slice(0, 6)[4]
        ?.blood_pressure?.diastolic?.value,
      pv: patients[currentPatientIndex]?.diagnosis_history?.slice(0, 6)[4]
        ?.blood_pressure?.systolic?.value,
      amt: 2081,
    },
  ];

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <LineChart width={500} height={300} data={data.slice(0, 6)}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' tick={{ fontSize: 11 }} interval={0} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type='monotone'
          dataKey='pv'
          stroke='#C26EB4'
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
        <Line type='monotone' strokeWidth={2} dataKey='uv' stroke='#7E6CAB' />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default BloodPressureChart;
