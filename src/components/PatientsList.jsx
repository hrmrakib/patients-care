import search from "../assets/search.svg";
import more from "../assets/more_horiz.svg";
import useFetchPatients from "../hooks/useFetchPatients";
import usePatient from "../hooks/usePatient";
import { useState } from "react";

const PatientsList = () => {
  const { setCurrentPatientIndex } = usePatient();
  const [tabIndex, setTabIndex] = useState(3);

  const { data: patients, loading, error } = useFetchPatients();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // handle click - to get current user index and set on the context
  const handlePatient = (i) => {
    setCurrentPatientIndex(i);
    setTabIndex(i);
  };

  return (
    <aside
      className='bg-white lg:fixed max-w-[300px] md:w-full mt-8 rounded-[16px] pr-1'
      style={{ height: "calc(100vh - 64px)" }}
    >
      <div className='flex justify-between items-center pt-5 px-3 pb-8'>
        <h2 className='text-[#072635] text-2xl font-bold'>PatientsList</h2>
        <img className='w-[18px] h-[18px]' src={search} alt='search' />
      </div>

      {/* mapping all the patients */}
      <div className='h-[496px] flex flex-col gap-1.5 pb- pr-1 overflow-y-scroll custom-scrollbar'>
        {patients?.map((patient, i) => (
          <div
            key={i}
            onClick={() => handlePatient(i)}
            className={`flex items-center justify-between py-2 pl-2 cursor-pointer hover:bg-[#D8FCF7] ${
              tabIndex === i ? "bg-[#D8FCF7]" : ""
            }`}
          >
            <div className='flex items-center gap-3'>
              <img
                className='size-10 rounded-full'
                src={patient?.profile_picture}
                alt=''
              />
              <div>
                <h2 className='font-bold text-[#072635]'>{patient?.name}</h2>
                <p className='text-[#707070]'>{`${patient?.gender}, ${patient?.age}`}</p>
              </div>
            </div>

            <img className='pr-2.5' src={more} alt='more' />
          </div>
        ))}
      </div>
    </aside>
  );
};

export default PatientsList;
