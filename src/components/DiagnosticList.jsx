import usePatient from "../hooks/usePatient";

const DiagnosticList = ({ patients }) => {
  // get current index of a patient
  const { currentPatientIndex } = usePatient();

  return (
    <div className='bg-white rounded-2xl'>
      <h2 className='text-2xl text-[#072635] font-bold pt-5 pl-5 mb-5'>
        Diagnostic List
      </h2>

      <div className='relative pb-2 h-[250px] overflow-y-auto max-h-[500px] custom-scrollbar'>
        <table className='w-[98%] rounded-3xl ml-2 mr-1.5 text-sm text-left rtl:text-right text-gray-500'>
          <thead className='sticky top-0 bg-[#F6F7F8] text-xs text-black uppercase text-[14px]'>
            <tr className='rounded-3xl text-[#072635]'>
              <th className='px-6 py-3 font-bold text-[14px] rounded-l-3xl'>
                Problem/Diagnosis
              </th>
              <th className='px-6 py-3 font-medium'>Description</th>
              <th className='px-6 py-3 font-medium rounded-r-3xl'>Status</th>
            </tr>
          </thead>
          <tbody>
            {patients[currentPatientIndex]?.diagnostic_list.map((value, i) => (
              <tr key={i} className='text-[#072635] text-sm rounded-lg'>
                <td className='px-6 py-4 rounded-l-lg'>{value?.name}</td>
                <td className='px-6 py-4'>{value?.description}</td>
                <td className='px-6 py-4 rounded-r-lg'>{value?.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiagnosticList;
