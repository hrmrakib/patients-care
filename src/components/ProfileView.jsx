import birthIcon from "../assets/BirthIcon.svg";
import femaleIcon from "../assets/FemaleIcon.svg";
import phoneIcon from "../assets/PhoneIcon.svg";
import insuranceIcon from "../assets/InsuranceIcon.svg";
import useFetchPatients from "../hooks/useFetchPatients";
import LabResults from "./LabResults";
import usePatient from "../hooks/usePatient";

const ProfileView = () => {
  // get current index of a patient
  const { currentPatientIndex } = usePatient();

  // get patients data from a custom hook
  const { data: patients, loading, error } = useFetchPatients();

  // loading and error state
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {/* Profile view with necessary data */}
      <div className='bg-white mt-5 rounded-[16px] px-3'>
        <div className='flex flex-col justify-center items-center pt-5'>
          <img
            className='w-[200px] h-[200px] rounded-full'
            src={patients[currentPatientIndex]?.profile_picture}
            alt='profile'
          />
          <h2 className='text-2xl text-[#072635] font-bold mt-2.5'>
            {patients[currentPatientIndex]?.name}
          </h2>
        </div>

        <div className='flex items-center gap-3 mt-5'>
          <img src={birthIcon} alt='birth icon' />
          <div>
            <p className='text-sm text-[#072635]'>Date Of Birth</p>
            <p className='text-sm font-bold text-[#072635]'>
              {patients[currentPatientIndex]?.date_of_birth}
            </p>
          </div>
        </div>

        <div className='flex items-center gap-3 mt-3'>
          <img src={femaleIcon} alt='female icon' />
          <div>
            <p className='text-sm text-[#072635]'>Gender</p>
            <p className='text-sm font-bold text-[#072635]'>
              {patients[currentPatientIndex]?.gender}
            </p>
          </div>
        </div>

        <div className='flex items-center gap-3 mt-3'>
          <img src={phoneIcon} alt='female icon' />
          <div>
            <p className='text-sm text-[#072635]'>Contact Info.</p>
            <p className='text-sm font-bold text-[#072635]'>
              {patients[currentPatientIndex]?.phone_number}
            </p>
          </div>
        </div>

        <div className='flex items-center gap-3 mt-3'>
          <img src={phoneIcon} alt='female icon' />
          <div>
            <p className='text-sm text-[#072635]'>Emergency Contacts</p>
            <p className='text-sm font-bold text-[#072635]'>
              {patients[currentPatientIndex]?.emergency_contact}
            </p>
          </div>
        </div>

        <div className='flex items-center gap-3 mt-3'>
          <img src={insuranceIcon} alt='female icon' />
          <div>
            <p className='text-sm text-[#072635]'>Insurance Provider</p>
            <p className='text-sm font-bold text-[#072635]'>
              {patients[currentPatientIndex]?.insurance_type}
            </p>
          </div>
        </div>

        <div className='flex items-center justify-center mt-8 pb-8'>
          <button
            className='bg-[#01F0D0] w-[220px] h-[41px] rounded-[41px]'
            type='button'
          >
            Show All Information
          </button>
        </div>
      </div>

      {/* Lab Results  */}
      <LabResults />
    </div>
  );
};

export default ProfileView;
