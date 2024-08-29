import expand from "../assets/expand_more.svg";
import BloodPressureChart from "./BloodPressureChart";
import ArrowUp from "../assets/ArrowUp.svg";
import ArrowDown from "../assets/ArrowDown.svg";
import respiratoryRate from "../assets/respiratory_rate.svg";
import temperature from "../assets/temperature.svg";
import heartBPM from "../assets/HeartBPM.svg";
import DiagnosticList from "./DiagnosticList";
import useFetchPatients from "../hooks/useFetchPatients";
import usePatient from "../hooks/usePatient";

const DiagnosisHistory = () => {
  // get current index of a patient
  const { currentPatientIndex } = usePatient();

  // get patients data from a custom hook
  const { data: patients, loading, error } = useFetchPatients();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className='bg-white mt-28 lg:mt-8 rounded-[16px] px-5'>
        <h2 className='text-2xl text-[#072635] font-bold pt-5 mb-5'>
          DiagnosisHistory
        </h2>

        {/* chartbox area */}
        <div className='bg-[#F4F0FE] rounded-xl grid grid-cols-5 gap-5 py-5'>
          <div className='col-span-5 lg:col-span-3'>
            <div className='flex items-center justify-between mb-5 pl-5'>
              <h2 className='text-lg text-[#072635] font-bold'>
                Blood Pressure
              </h2>
              <p className='text-sm text-[#072635] flex items-center gap-3'>
                <span>Last 6 months</span>
                <img className='cursor-pointer' src={expand} alt='expand' />
              </p>
            </div>

            {/* rechart - linechart */}
            <div className='h-52 w-full'>
              <BloodPressureChart patients={patients} />
            </div>
          </div>
          <div className='col-span-5 lg:col-span-2 pr-4'>
            <div className='flex items-center gap-2'>
              <span className='w-4 h-4 bg-[#E66FD2] border border-gray-100 rounded-full'></span>
              <h3 className='text-[#072635] font-bold'>Systolic</h3>
            </div>
            <h2 className='text-2xl text-[#072635] font-bold my-2.5'>
              {
                patients[currentPatientIndex]?.diagnosis_history[0]
                  ?.blood_pressure?.systolic?.value
              }
            </h2>
            <div className='flex items-center gap-3 pb-3 border-b-2 border-b-[#CBC8D4]'>
              <img
                className='w-[10px] h-[5px]'
                src={ArrowUp}
                alt='arrow down'
              />
              <span className='text-[#072635]'>
                {
                  patients[currentPatientIndex]?.diagnosis_history[0]
                    ?.blood_pressure?.systolic?.levels
                }
              </span>
            </div>

            <div className='flex items-center gap-2 mt-2'>
              <span className='w-4 h-4 bg-[#8C6FE6] border border-gray-100 rounded-full'></span>
              <h3 className='text-[#072635] font-bold'>Diastolic</h3>
            </div>
            <h2 className='text-2xl text-[#072635] font-bold my-2.5'>
              {
                patients[currentPatientIndex]?.diagnosis_history[0]
                  ?.blood_pressure?.diastolic?.value
              }
            </h2>
            <div className='flex items-center gap-3 pb-3 border-b-2 border-b-[#CBC8D4]'>
              <img
                className='w-[10px] h-[5px]'
                src={ArrowDown}
                alt='arrow down'
              />
              <span className='text-[#072635]'>
                {
                  patients[currentPatientIndex]?.diagnosis_history[0]
                    ?.blood_pressure?.diastolic?.levels
                }
              </span>
            </div>
          </div>
        </div>

        {/* Respiratory, Temparature, Heart Rate */}

        <div className='grid grid-cols-3 gap-5 my-8 pb-5'>
          <div className='bg-[#E0F3FA] col-span-3 lg:col-span-1 flex flex-col p-3 rounded-xl'>
            <img
              className='w-[96px] h-[96px]'
              src={respiratoryRate}
              alt='respiratory rate'
            />
            <p className='text-[#072635] font-medium mt-3'>Respiratory Rate</p>
            <h2 className='text-[30px] text-[#072635] font-bold'>
              {
                patients[currentPatientIndex]?.diagnosis_history[0]
                  ?.respiratory_rate?.value
              }{" "}
              bpm
            </h2>

            <p className='text-sm text-[#072635] mt-4'>
              {
                patients[currentPatientIndex]?.diagnosis_history[0]
                  ?.respiratory_rate?.levels
              }
            </p>
          </div>

          <div className='bg-[#FFE6E9] col-span-3 lg:col-span-1 flex flex-col p-3 rounded-xl'>
            <img
              className='w-[96px] h-[96px]'
              src={temperature}
              alt='respiratory rate'
            />
            <p className='text-[#072635] font-medium mt-3'>Temperature</p>
            <h2 className='text-[30px] text-[#072635] font-bold'>
              {
                patients[currentPatientIndex]?.diagnosis_history[0]?.temperature
                  ?.value
              }
              °F
            </h2>

            <p className='text-sm text-[#072635] mt-4'>
              {
                patients[currentPatientIndex]?.diagnosis_history[0]?.temperature
                  ?.levels
              }
            </p>
          </div>

          <div className='bg-[#E0F3FA] col-span-3 lg:col-span-1 flex flex-col p-3 rounded-xl'>
            <img
              className='w-[96px] h-[96px]'
              src={heartBPM}
              alt='respiratory rate'
            />
            <p className='text-[#072635] font-medium mt-3'>Heart Rate</p>
            <h2 className='text-[30px] text-[#072635] font-bold'>
              {
                patients[currentPatientIndex]?.diagnosis_history[0]?.heart_rate
                  ?.value
              }{" "}
              bpm
            </h2>

            <div className='flex items-center gap-3 mt-4'>
              <img
                className='w-[10px] h-[5px]'
                src={ArrowDown}
                alt='arrow down'
              />
              <span className='text-[#072635]'>
                {
                  patients[currentPatientIndex]?.diagnosis_history[0]
                    ?.heart_rate?.levels
                }
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Diagnostic Table List */}
      <DiagnosticList patients={patients} />
    </div>
  );
};

export default DiagnosisHistory;
