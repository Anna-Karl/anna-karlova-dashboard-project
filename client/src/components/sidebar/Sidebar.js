import { Link } from "react-router-dom";
import { AiOutlineBarChart, AiOutlineProfile, AiOutlineRead, AiOutlineBars } from "react-icons/ai";
import "./Sidebar.scss";


export default function Sidebar() {
  return (
    <aside className="sidebar">
        <nav className="menu">
          <ul>
            <li className="item">
              <Link to="/products">
                <AiOutlineBars />
              </Link>
            </li>
            <li className="item">
              <Link to="/products/1">
                <AiOutlineProfile />
              </Link>
            </li>
            <li className="item">
              <Link to="/reviews">
                <AiOutlineRead />
              </Link>
            </li>
            <li className="item">
              <Link to="/dashboard">
                <AiOutlineBarChart />
              </Link>
            </li>
			    </ul>
        </nav>
    </aside>
  );
}
