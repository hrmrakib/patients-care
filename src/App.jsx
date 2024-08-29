import DiagnosisHistory from "./components/DiagnosisHistory";
import Navbar from "./components/Navbar";
import PatientsList from "./components/PatientsList";
import ProfileView from "./components/ProfileView";

function App() {
  return (
    <div className='bg-[#F6F7F8] max-h-screen px-3 py-3'>
      <div className='w-[96%] mx-auto'>
        <Navbar />

        <div className='grid grid-cols-4 gap-12 pb-5'>
          <div className='col-span-4 lg:col-span-1'>
            <PatientsList />
          </div>

          <div className='col-span-4 lg:col-span-2'>
            <DiagnosisHistory />
          </div>

          <div className='col-span-4 lg:col-span-1'>
            <ProfileView />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
