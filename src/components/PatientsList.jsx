import search from "../assets/search.svg";
import more from "../assets/more_horiz.svg";
import useFetchPatients from "../hooks/useFetchPatients";
import usePatient from "../hooks/usePatient";
import { useState } from "react";

// Reusable Patient Card Component
const PatientCard = ({ patient, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={`flex items-center justify-between py-2 pl-2 cursor-pointer hover:bg-[#D8FCF7] ${
      isActive ? "bg-[#D8FCF7]" : ""
    }`}
  >
    <div className='flex items-center gap-3'>
      <img
        className='size-10 rounded-full'
        src={patient.profile_picture}
        alt={`${patient.name}'s profile`}
      />
      <div>
        <h2 className='font-bold text-[#072635]'>{patient.name}</h2>
        <p className='text-[#707070]'>{`${patient.gender}, ${patient.age}`}</p>
      </div>
    </div>
    <img className='pr-2.5' src={more} alt='More options' />
  </div>
);

const PatientsList = () => {
  const { setCurrentPatientIndex } = usePatient();
  const [tabIndex, setTabIndex] = useState(3);
  const { data: patients, loading, error } = useFetchPatients();

  const handlePatientClick = (index) => {
    setCurrentPatientIndex(index);
    setTabIndex(index);
  };

  if (loading) return <p className='text-center text-gray-500'>Loading...</p>;
  if (error) return <p className='text-center text-red-500'>Error: {error}</p>;

  return (
    <aside className='bg-white lg:fixed w-full lg:max-w-[300px] mt-8 rounded-[16px] pr-1 pb-2'>
      {/* Header Section */}
      <div className='flex justify-between items-center pt-5 px-3 pb-8'>
        <h2 className='text-[#072635] text-2xl font-bold'>Patients List</h2>
        <img
          className='w-[18px] h-[18px] cursor-pointer'
          src={search}
          alt='Search icon'
        />
      </div>

      {/* Patient Cards */}
      <div className='h-[496px] flex flex-col gap-1.5 overflow-y-scroll custom-scrollbar'>
        {patients?.map((patient, index) => (
          <PatientCard
            key={index}
            patient={patient}
            isActive={tabIndex === index}
            onClick={() => handlePatientClick(index)}
          />
        ))}
      </div>
    </aside>
  );
};

export default PatientsList;
