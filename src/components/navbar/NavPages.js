import React from "react";
import { AiOutlineHome } from "../../assets/icons";
import { IoBarChartOutline } from "../../assets/icons";
import { FcMultipleDevices } from "../../assets/icons";
import { BsPerson } from "../../assets/icons";
import { FiMail } from "../../assets/icons";

const NavPages = () => {
  return (
    <section className="nav-pages">
      <ul>
        <li>
          <button>
            <i>
              <AiOutlineHome />
            </i>
            <span>Home</span>
          </button>
        </li>
        <li>
          <button>
            <i>
              <IoBarChartOutline />
            </i>
            <span>Skills</span>
          </button>
        </li>
        <li>
          <button>
            <i>
              <FcMultipleDevices />
            </i>
            <span>Projects</span>
          </button>
        </li>
        <li>
          <button>
            <i>
              <BsPerson />
            </i>
            <span>About</span>
          </button>
        </li>
        <li>
          <button>
            <i>
              <FiMail />
            </i>
            <span>Contact</span>
          </button>
        </li>
      </ul>
    </section>
  );
};

export default NavPages;
