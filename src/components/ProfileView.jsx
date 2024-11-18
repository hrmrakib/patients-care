import birthIcon from "../assets/BirthIcon.svg";
import femaleIcon from "../assets/FemaleIcon.svg";
import phoneIcon from "../assets/PhoneIcon.svg";
import insuranceIcon from "../assets/InsuranceIcon.svg";
import useFetchPatients from "../hooks/useFetchPatients";
import LabResults from "./LabResults";
import usePatient from "../hooks/usePatient";

const ProfileField = ({ icon, label, value }) => (
  <div className='flex items-center gap-3 mt-3'>
    <img src={icon} alt={`${label} icon`} />
    <div>
      <p className='text-sm text-[#072635]'>{label}</p>
      <p className='text-sm font-bold text-[#072635]'>{value || "N/A"}</p>
    </div>
  </div>
);

const ProfileView = () => {
  const { currentPatientIndex } = usePatient();
  const { data: patients, loading, error } = useFetchPatients();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const patient = patients[currentPatientIndex];

  if (!patient) return <p>No patient data available</p>;

  return (
    <div>
      {/* Profile Section */}
      <div className='bg-white mt-5 rounded-[16px] px-3'>
        <div className='flex flex-col justify-center items-center pt-5'>
          <img
            className='w-[150px] h-[150px] rounded-full'
            src={patient.profile_picture}
            alt='Profile'
          />
          <h2 className='text-2xl text-[#072635] font-bold mt-2.5'>
            {patient.name}
          </h2>
        </div>

        {/* Profile Fields */}
        <ProfileField
          icon={birthIcon}
          label='Date Of Birth'
          value={patient.date_of_birth}
        />
        <ProfileField icon={femaleIcon} label='Gender' value={patient.gender} />
        <ProfileField
          icon={phoneIcon}
          label='Contact Info.'
          value={patient.phone_number}
        />
        <ProfileField
          icon={phoneIcon}
          label='Emergency Contacts'
          value={patient.emergency_contact}
        />
        <ProfileField
          icon={insuranceIcon}
          label='Insurance Provider'
          value={patient.insurance_type}
        />

        {/* Button Section */}
        <div className='flex items-center justify-center mt-8 pb-8'>
          <button
            className='bg-[#01F0D0] w-[220px] h-[41px] rounded-[41px]'
            type='button'
          >
            Show All Information
          </button>
        </div>
      </div>

      {/* Lab Results Section */}
      <LabResults />
    </div>
  );
};

export default ProfileView;
