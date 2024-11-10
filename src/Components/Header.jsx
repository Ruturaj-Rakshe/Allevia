import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/benefits/Logo.png";
import { navigation } from "../Constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HambugerMenu } from "./design/Header";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = ({ isAuthenticated, setIsAuthenticated }) => {
  const location = useLocation(); // Use useLocation hook to access the current route
  const [openNavigation, setOpenNavigation] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b bg-stroke-1 transition-opacity
     ${openNavigation ? "bg-n-8" : "bg-n-8/90"}
     ${isScrolled ? "bg-opacity-90" : ""}`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-{12rem} xl:mr-8" href="/">
          <img src={Logo} width={90} height={10} alt="Logo" />
        </a>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:bg-inherit
        lg:static lg:flex lg:mx-auto`}
        >
          <div
            className="relative z-2 flex flex-col items-center
            justify-center m-auto lg:flex-row"
          >
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative
                font-code text-2xl uppercase text-n-12 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                }
                px-6 py-6 md:py-8 lg:-mr-0.25 lg: lg:text-xs lg:font-semibold ${
                  item.url === location.hash
                    ? "z-2 lg:text-n-12"
                    : "lg:text-n-12/50"
                } lg:leading-5 lg:hover:text-n-12 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
            <HambugerMenu />
          </div>
        </nav>
        {!isAuthenticated ? (
          <>
            <a
              href="signup"
              className="button hidden text-white transition-colors hover:text-n-1 lg:block"
            >
              New Account
            </a>
            <Button
              className="text-white lg:flex lg:ml-4 ml-auto hover:text-n-1"
              href="SignIn"
            >
              Sign In
            </Button>
          </>
        ) : (
          <>
            <Button
              className="text-white lg:flex lg:ml-4 ml-auto hover:text-n-1"
              onClick={Logout}
            >
              Logout
            </Button>
          </>
        )}

        <Button className="ml-3 lg:hidden" px="px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
