import { Navbar } from "./Navbar";
import './LayoutStyles.css'

export const Layout = ({children}) => {
  return (
    <>
    <header>
    <Navbar/>
    </header>
    {children}
    </>
  );
};
