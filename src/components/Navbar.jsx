import logo from "../assets/TestLogo.svg";
import home from "../assets/home.svg";
import group from "../assets/group.svg";
import calendar from "../assets/calendar.svg";
import chat from "../assets/chat.svg";
import credit from "../assets/credit_card.svg";
import seniorDoctor from "../assets/senior-woman-doctor.png";
import setting from "../assets/settings.svg";
import moreVert from "../assets/more_vert.svg";

const Navbar = () => {
  return (
    <nav className='bg-white lg:sticky top-3 z-50 flex justify-between items-center px-6 py-2 rounded-[70px]'>
      {/* logo */}
      <a href='/'>
        <img className='w-[120px] lg:w-[210px]' src={logo} alt='Tech Care' />
      </a>

      {/* menu item */}
      <div className='hidden lg:flex items-center gap-8 *:text-[072635]'>
        <a href='/overview' className='flex items-center gap-2'>
          <img className='w-4 h-[17px]' src={home} alt='home' />
          <h3 className='font-bold text-[#072635]'>Overview</h3>
        </a>
        <a
          href='/patients'
          className='bg-[#01F0D0] px-4 py-3 rounded-[41px] flex items-center gap-2'
        >
          <img className='w-6 h-[17px]' src={group} alt='group' />
          <h3 className='font-bold text-[#072635]'>Patients</h3>
        </a>
        <a href='/schedule' className='flex items-center gap-2'>
          <img className='w-[15px] h-[17px]' src={calendar} alt='calendar' />
          <h3 className='font-bold text-[#072635]'>Schedule</h3>
        </a>
        <a href='/message' className='flex items-center gap-2'>
          <img className='' src={chat} alt='message' />
          <h3 className='font-bold text-[#072635]'>Message</h3>
        </a>
        <a href='/transactions' className='flex items-center gap-2'>
          <img className='' src={credit} alt='credit' />
          <h3 className='font-bold text-[#072635]'>Transactions</h3>
        </a>
      </div>

      {/* user information */}
      <div className='flex items-center'>
        <div className='hidden lg:flex gap-3 border-r-2 pr-3 cursor-pointer'>
          <img
            className='w-11 h-11 rounded-full'
            src={seniorDoctor}
            alt='women doctor'
          />

          <div>
            <h2 className='font-bold text-[#072635]'>Dr. Jose Simmons</h2>
            <p className='text-[#707070]'>General Practitioner</p>
          </div>
        </div>

        <div className='flex items-center gap-4 pl-3'>
          <img className='cursor-pointer' src={setting} alt='setting' />
          <img className='cursor-pointer' src={moreVert} alt='more' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
