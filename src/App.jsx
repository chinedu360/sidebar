import "./App.css";
import { IoHome } from "react-icons/io5";
import { IoAnalyticsSharp } from "react-icons/io5";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import { IoStorefrontOutline } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { CgStack } from "react-icons/cg";
import { BsChatRightFill } from "react-icons/bs";
import { PiSuitcaseSimpleThin } from "react-icons/pi";
import { CgDanger } from "react-icons/cg";

function App() {
  return (
    <>
      <h1>OpenReplay</h1>
      <div className="nav-div">
        <div>
          <h2 className="nav-h2">Dashboard</h2>
          <ul style={{ listStyleType: "none" }}>
            <li className="nav-li">
              <IoHome />
              <span style={{ fontSize: "14px" }}>Home</span>
            </li>
            <li className="nav-li">
              <IoAnalyticsSharp />
              Analytics
            </li>
            <li className="nav-li">
              <HiMiniArrowTrendingUp />
              Sales
            </li>
          </ul>
        </div>
        <div>
          <h2 className="nav-h2">Quick Menu</h2>
          <ul style={{ listStyleType: "none" }}>
            <li className="nav-li">
              <FaUser />
              Users
            </li>
            <li className="nav-li">
              <IoStorefrontOutline />
              Products
            </li>
            <li className="nav-li">
              <FaDollarSign />
              Transactions
            </li>
            <li className="nav-li">
              <IoStatsChart />
              Reports
            </li>
          </ul>
        </div>
        <div>
          <h2 className="nav-h2">Notification</h2>
          <ul style={{ listStyleType: "none" }}>
            <li className="nav-li">
              <IoMdMail />
              Mail
            </li>
            <li className="nav-li">
              <CgStack />
              Feedback
            </li>
            <li className="nav-li">
              <BsChatRightFill />
              Messages
            </li>
          </ul>
        </div>
        <div>
          <h2 className="nav-h2">Staff</h2>
          <ul style={{ listStyleType: "none" }}>
            <li className="nav-li">
              <PiSuitcaseSimpleThin />
              Manage
            </li>
            <li className="nav-li">
              <IoAnalyticsSharp />
              Analytics
            </li>
            <li className="nav-li">
              <CgDanger />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
