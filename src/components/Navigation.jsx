import { Link } from "react-router-dom";
import { routes } from "../constants/routesConstants";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={`/${routes.landing}`}>Landing</Link>
        </li>
        <li>
          <Link to={`/${routes.home}`}>Home</Link>
        </li>
        <li>
          <Link to={`/${routes.dashboard}`}>Dashboard</Link>
        </li>
        <li>
          <Link to={`/${routes.analitycs}`}>Analitycs</Link>
        </li>
        <li>
          <Link to={`/${routes.admin}`}>Admin</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;