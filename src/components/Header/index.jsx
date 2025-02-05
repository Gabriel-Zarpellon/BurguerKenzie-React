import Logo from "../../assets/Logo.png";
import { IoCart } from "react-icons/io5";

export function Header({ setIsOpen, counter }) {
  return (
    <header>
      <div className="container">
        <img src={Logo} alt="Burguer Kenzie Logo" />
        <div>
          <button onClick={() => setIsOpen(true)}>
            <IoCart size={21} />
          </button>
          <span>{counter}</span>
        </div>
      </div>
    </header>
  );
}
