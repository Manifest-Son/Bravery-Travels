import useStore from '../../store/Store';
import './Header.css';
import { Link} from "react-router-dom";
import avartarImg from '../../assets/paul.jpg'

function App() {
  const { isLoggedIn, showDropdown, login, logout, toggleDropdown } = useStore();

  return (
    <div className="App">
      {!isLoggedIn ? (
        <div className="header_user">
          <button>
        <Link to="/signup">Sign Up</Link>
      </button>
          <button onClick={login}><Link to="/login">Log In</Link> </button>
        </div>
      ) : (
        <div className="profile-container">
          <div className="avatar" onClick={toggleDropdown}>
            <img src={avartarImg} alt="Profile Avatar" />
          </div>
          {showDropdown && (
            <div className="dropdown-menu">
              <div className="dropdown-item">Profile</div>
              <div className="dropdown-item" onClick={logout}>
                Log Out
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
