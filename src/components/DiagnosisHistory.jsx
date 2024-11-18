import expandIcon from "../assets/expand_more.svg";
import bloodPressureIcon from "../assets/HeartBPM.svg";
import respiratoryRateIcon from "../assets/respiratory_rate.svg";
import temperatureIcon from "../assets/temperature.svg";
import arrowUpIcon from "../assets/ArrowUp.svg";
import arrowDownIcon from "../assets/ArrowDown.svg";

import BloodPressureChart from "./BloodPressureChart";
import DiagnosticList from "./DiagnosticList";

import useFetchPatients from "../hooks/useFetchPatients";
import usePatient from "../hooks/usePatient";

const DiagnosisHistory = () => {
  const { currentPatientIndex } = usePatient();
  const { data: patients, loading, error } = useFetchPatients();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Access current patient's diagnosis history
  const currentPatient = patients?.[currentPatientIndex];
  const diagnosisHistory = currentPatient?.diagnosis_history?.[0];

  // Reusable component for data cards
  const DataCard = ({
    bgColor,
    icon,
    title,
    value,
    unit,
    levels,
    isArrowUp,
  }) => (
    <div className={`flex flex-col p-3 rounded-xl ${bgColor}`}>
      <img className='w-[96px] h-[96px]' src={icon} alt={title} />
      <p className='text-[#072635] font-medium mt-3'>{title}</p>
      <h2 className='text-[30px] text-[#072635] font-bold'>
        {value} {unit}
      </h2>
      <div className='flex items-center gap-3 mt-4'>
        {levels && (
          <>
            <img
              className='w-[10px] h-[5px]'
              src={isArrowUp ? arrowUpIcon : arrowDownIcon}
              alt='trend arrow'
            />
            <span className='text-[#072635]'>{levels}</span>
          </>
        )}
      </div>
    </div>
  );

  return (
    <div>
      <div className='bg-white mt-5 lg:mt-8 rounded-[16px] px-5'>
        <h2 className='text-2xl text-[#072635] font-bold pt-5 mb-5'>
          Diagnosis History
        </h2>

        {/* Blood Pressure Chart */}
        <div className='bg-[#F4F0FE] rounded-xl grid grid-cols-5 gap-5 py-5'>
          <div className='col-span-5 lg:col-span-3'>
            <div className='flex items-center justify-between mb-5 pl-5'>
              <h2 className='text-lg text-[#072635] font-bold'>
                Blood Pressure
              </h2>
              <p className='text-sm text-[#072635] flex items-center gap-3'>
                <span>Last 6 months</span>
                <img className='cursor-pointer' src={expandIcon} alt='expand' />
              </p>
            </div>
            <div className='h-52 w-full'>
              <BloodPressureChart patients={patients} />
            </div>
          </div>

          {/* Blood Pressure Data */}
          <div className='col-span-5 lg:col-span-2 px-4'>
            {["systolic", "diastolic"].map((type) => (
              <div key={type}>
                <div className='flex items-center gap-2 mt-3'>
                  <span
                    className={`w-4 h-4 ${
                      type === "systolic" ? "bg-[#E66FD2]" : "bg-[#8C6FE6]"
                    } border border-gray-100 rounded-full`}
                  ></span>
                  <h3 className='text-[#072635] font-bold'>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </h3>
                </div>
                <h2 className='text-2xl text-[#072635] font-bold my-2.5'>
                  {diagnosisHistory?.blood_pressure?.[type]?.value}
                </h2>
                <div className='flex items-center gap-3 pb-3 border-b-2 border-b-[#CBC8D4]'>
                  <img
                    className='w-[10px] h-[5px]'
                    src={type === "systolic" ? arrowUpIcon : arrowDownIcon}
                    alt='trend arrow'
                  />
                  <span className='text-[#072635]'>
                    {diagnosisHistory?.blood_pressure?.[type]?.levels}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Diagnosis Metrics */}
        <div className='grid grid-cols-3 gap-5 my-8 pb-5'>
          <DataCard
            bgColor='bg-[#E0F3FA]'
            icon={respiratoryRateIcon}
            title='Respiratory Rate'
            value={diagnosisHistory?.respiratory_rate?.value}
            unit='bpm'
            levels={diagnosisHistory?.respiratory_rate?.levels}
          />
          <DataCard
            bgColor='bg-[#FFE6E9]'
            icon={temperatureIcon}
            title='Temperature'
            value={diagnosisHistory?.temperature?.value}
            unit='°F'
            levels={diagnosisHistory?.temperature?.levels}
          />
          <DataCard
            bgColor='bg-[#E0F3FA]'
            icon={bloodPressureIcon}
            title='Heart Rate'
            value={diagnosisHistory?.heart_rate?.value}
            unit='bpm'
            levels={diagnosisHistory?.heart_rate?.levels}
            isArrowUp={false}
          />
        </div>
      </div>

      {/* Diagnostic Table List */}
      <DiagnosticList patients={patients} />
    </div>
  );
};

export default DiagnosisHistory;
