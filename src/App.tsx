import "./App.css";
import logo from "./assets/logo.png";
import trophy from "./assets/1.png";
import pic from "./assets/2.png";
import machines from "./assets/3.png";
import { IoIosCall } from "react-icons/io";
import { FiFacebook } from "react-icons/fi";
import { CiGlobe } from "react-icons/ci";
function App() {
  return (
    <main className="bg-gradient-to-b from-slate-50 to-amber-200">
      <header className="w-full text-center h-[20vh]">
        <img src={logo} className="w-full h-full aspect-[3/2] object-contain" />
      </header>
      <section className="w-full flex p-2 flex-col gap-3 sm:flex-row">
        <div className="w-full h-36 sm:w-1/3 sm:h-full">
          <img src={trophy} className="w-full h-full object-contain" />
        </div>
        <div className="w-full sm:w-2/3 mt-5">
          <h4 className="font-bold text-sm text-justify sm:text-2xl">
            {" "}
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h4>
          <ul className="list-disc text-sm p-3 text-justify pl-7 sm:text-lg">
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              {" "}
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.{" "}
            </li>
          </ul>
          <img src={pic} className="w-full object-contain" />
          <p className="text-sm sm:text-lg">
            Government of India has awarded the "National Energy Conservation
            Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I.
            Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
            Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </section>
      <section className="text-sm text-justify p-5 sm:text-lg">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.{" "}
      </section>
      <section className="p-5 border-b-2 border-red-400 text-center">
        <img src={machines} className="w-full h-full object-contain" />
        <p className="text-xs">
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors{" "}
        </p>
      </section>
      <section className="w-full text-center p-5">
        <h4 className="font-bold text-sm mb-5">
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </h4>
        <p className="text-center text-xs">
          CHEMICALS & PROCESS <span className="text-red-600">|</span> POWER{" "}
          <span className="text-red-600">|</span>
          WATER & WASTE WATER <span className="text-red-600">|</span> OILS & GAS{" "}
          <span className="text-red-600">|</span> PHARMA{" "}
          <span className="text-red-600">|</span> SUGARS & DISTILLERIES{" "}
          <span className="text-red-600">|</span> PAPER & PULP{" "}
          <span className="text-red-600">|</span> MARINE & DEFENCE METAL{" "}
          <span className="text-red-600">|</span> MINING FOOD & BEVERAGE{" "}
          <span className="text-red-600">|</span> PETROCHEMICAL & REFINERIES{" "}
          <span className="text-red-600">|</span> SOLAR BUILDING{" "}
          <span className="text-red-600">|</span> HVAC{" "}
          <span className="text-red-600">|</span> FIRE{" "}
          <span className="text-red-600">|</span> FIGHTING{" "}
          <span className="text-red-600">|</span> AGRICULTURE & RESIDENTIAL
        </p>
      </section>
      <footer className="bg-red-500 text-white flex justify-center flex-col items-center sm:flex-row sm:justify-between p-7">
        <div>
          <IoIosCall className="inline" /> Toll free 1800 200 1234
        </div>
        <div>
          <a href="www.facebook.com/criumps">
            {" "}
            <FiFacebook className="inline" /> www.facebook.com/criumps
          </a>
        </div>
        <div>
          <a href="www.crigroups.com">
            <CiGlobe className="inline" />
            www.crigroups.com
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
