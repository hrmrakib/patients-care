import logo from "../assets/TestLogo.svg";
import home from "../assets/home.svg";
import group from "../assets/group.svg";
import calendar from "../assets/calendar.svg";
import chat from "../assets/chat.svg";
import credit from "../assets/credit_card.svg";
import seniorDoctor from "../assets/senior-woman-doctor.png";
import setting from "../assets/settings.svg";
import moreVert from "../assets/more_vert.svg";

// Menu items data
const menuItems = [
  { href: "/overview", icon: home, label: "Overview", isHighlighted: false },
  { href: "/patients", icon: group, label: "Patients", isHighlighted: true },
  {
    href: "/schedule",
    icon: calendar,
    label: "Schedule",
    isHighlighted: false,
  },
  { href: "/message", icon: chat, label: "Message", isHighlighted: false },
  {
    href: "/transactions",
    icon: credit,
    label: "Transactions",
    isHighlighted: false,
  },
];

// User data
const user = {
  name: "Dr. Jose Simmons",
  title: "General Practitioner",
  avatar: seniorDoctor,
};

// Reusable Menu Item Component
const MenuItem = ({ href, icon, label, isHighlighted }) => (
  <a
    href={href}
    className={`flex items-center gap-2 ${
      isHighlighted
        ? "bg-[#01F0D0] px-4 py-3 rounded-[41px]"
        : "hover:bg-gray-100 px-2 py-1 rounded"
    }`}
  >
    <img className='w-4 h-[17px]' src={icon} alt={`${label} icon`} />
    <h3
      className={`font-bold text-[#072635] ${
        isHighlighted ? "" : "hover:text-gray-700"
      }`}
    >
      {label}
    </h3>
  </a>
);

const Navbar = () => {
  return (
    <nav className='bg-white lg:sticky top-3 z-50 flex justify-between items-center px-6 py-2 rounded-[70px]'>
      {/* Logo */}
      <a href='/' className='navbar-logo'>
        <img
          className='w-[120px] lg:w-[210px]'
          src={logo}
          alt='Tech Care logo'
        />
      </a>

      {/* Menu Items */}
      <div className='hidden lg:flex items-center gap-8'>
        {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>

      {/* User Information */}
      <div className='flex items-center'>
        {/* User Profile */}
        <div className='hidden lg:flex gap-3 border-r-2 pr-3 cursor-pointer'>
          <img
            className='w-11 h-11 rounded-full'
            src={user.avatar}
            alt={`${user.name} avatar`}
          />
          <div>
            <h2 className='font-bold text-[#072635]'>{user.name}</h2>
            <p className='text-[#707070]'>{user.title}</p>
          </div>
        </div>

        {/* Action Icons */}
        <div className='flex items-center gap-4 pl-3'>
          <img className='cursor-pointer' src={setting} alt='Settings icon' />
          <img
            className='cursor-pointer'
            src={moreVert}
            alt='More options icon'
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
