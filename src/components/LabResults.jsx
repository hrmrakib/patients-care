import search from "../assets/search.svg";
import download from "../assets/download.svg";
import useFetchPatients from "../hooks/useFetchPatients";
import usePatient from "../hooks/usePatient";

const LabResults = () => {
  // get current index of a patient
  const { currentPatientIndex } = usePatient();

  // get patients data from a custom hook
  const { data: patients, loading, error } = useFetchPatients();

  // loading and error state
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <aside className='bg-white mt-8 mb-10 lg:mb-0 rounded-[16px]'>
      <div className='flex justify-between pt-5 px-3 pb-7'>
        <h2 className='text-[#072635] text-2xl font-bold'>Tab Results</h2>
        <img src={search} alt='search' />
      </div>

      {/* mapping tab_results */}
      <div className='h-[220px] flex flex-col gap-1 p-3 overflow-y-auto custom-scrollbar'>
        {patients[currentPatientIndex].lab_results?.map((result, i) => (
          <div
            key={i}
            className='flex items-center justify-between py-2 pl-2 cursor-pointer hover:bg-[#F6F7F8]'
          >
            <h2 className='font-bold text-[#072635]'>{result}</h2>

            <img className='pr-2.5 w-7 h-7' src={download} alt='download' />
          </div>
        ))}
      </div>
    </aside>
  );
};

export default LabResults;
