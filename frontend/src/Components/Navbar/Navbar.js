import React from "react";
//import { Link } from "react-router-dom";
//import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import NavbarHome from "./NavbarHome";
import NavbarLogin from "./NavbarLogin";

function Navbar() {
  //const [clicked, setclicked] = useState(false);
  //const [loggedIn, setloggedIn] = useState(false);
  // const name = ["Home", "Diet", "Blog"];
  // const link_to = ["/", "/diet", "/blog"];
  // const userInfo = localStorage.key("userInfo");
  // const survey = localStorage.key("survey");
  // console.log(userInfo);
  // if (userInfo) {
  //   setloggedIn(true);
  // }

  return (
    <>{localStorage.getItem("userInfo") ? <NavbarLogin /> : <NavbarHome />}</>
  );

  // return (
  //   <>
  //     <nav className="NavbarItems">
  //       <div className="NavbarLogo">
  //         <i className="fab fa-react"></i>Smart Diet
  //       </div>
  //       <div className="Menu-icon" onClick={() => setclicked(!clicked)}>
  //         <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
  //       </div>

  //       <ul className={clicked ? "NavbarPages_mob active" : "NavbarPages"}>
  //         {/* <Nav name={name} linkto={link_to} /> */}
  //         <li>
  //           <Link className="nav-links" to="/">
  //             Home
  //           </Link>
  //         </li>
  //         {() => {
  //           if (localStorage.getItem("userInfo")) {
  //             return (
  //               <div>
  //                 <li>
  //                   <Link className="nav-links" to="/diet">
  //                     Diet
  //                   </Link>
  //                 </li>
  //                 <li>
  //                   <Link className="nav-links" to="/blog">
  //                     Blog
  //                   </Link>
  //                 </li>
  //               </div>
  //             );
  //           }
  //         }}
  //         {/* <li>
  //           <Link className="nav-links" to="/diet">
  //             Diet
  //           </Link>
  //         </li>
  //         <li>
  //           <Link className="nav-links" to="/blog">
  //             Blog
  //           </Link>
  //         </li> */}

  //         {localStorage.getItem("userInfo") ? (
  //           <li>
  //             <Link
  //               className="nav-links"
  //               to="/"
  //               onClick={() => {
  //                 //localStorage.removeItem("userInfo");
  //                 localStorage.clear();
  //               }}
  //             >
  //               Logout
  //             </Link>
  //           </li>
  //         ) : (
  //           <li>
  //             <Link className="nav-links" to="/signup">
  //               Signup
  //             </Link>
  //           </li>
  //         )}
  //       </ul>
  //     </nav>
  //   </>
  // );
}

export default Navbar;
