import LeftSideLandingPage from "./LeftSideLandingPage";
import Signup from "./Signup";
const HomePage = () => {
  return (
    <div className='min-h-screen bg-[#eeeeee] font-sans lg:flex'>
      {/* ================= LEFT SIDE ================= */}
      <LeftSideLandingPage />

      {/* ================= RIGHT SIDE ================= */}
      <Signup />
    </div>
  );
};

export default HomePage;
