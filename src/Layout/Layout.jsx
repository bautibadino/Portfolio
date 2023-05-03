import { Navbar } from "./Navbar";


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
