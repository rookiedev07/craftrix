import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Imp Links */}
        <div>
          <h3 className="text-lg font-semibold text-white border-b-2 border-orange-500 inline-block pb-1">
            Imp. Links
          </h3>
          <ul className="mt-4 space-y-2">
            <li className="hover:text-orange-400 cursor-pointer">→ Mumbai University</li>
            <li className="hover:text-orange-400 cursor-pointer">→ Director of Higher Education Maharashtra</li>
            <li className="hover:text-orange-400 cursor-pointer">→ Maharashtra State Board</li>
            <li className="hover:text-orange-400 cursor-pointer">→ UGC</li>
            <li className="hover:text-orange-400 cursor-pointer">→ NAAC</li>
            <li className="hover:text-orange-400 cursor-pointer">→ RTI</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white border-b-2 border-orange-500 inline-block pb-1">
            Contact Us
          </h3>
          <div className="mt-4 space-y-3">
            <p className="flex items-center gap-3"><FaPhoneAlt className="text-orange-400" /> 077100 58545</p>
            <p className="flex items-center gap-3"><FaEnvelope className="text-orange-400" /> admin@trcac.org.in</p>
            <p className="flex items-start gap-3"><FaMapMarkerAlt className="text-orange-400 mt-1" /> 
              Thakur Ramnarayan Educational Campus, S.V. Road, Dahisar (East), Mumbai-400068.
            </p>
          </div>
        </div>

        {/* About + Social */}
        <div>
          <h3 className="text-lg font-semibold text-white">Thakur Ramnarayan College of Arts and Commerce (TRCAC)</h3>
          <p className="text-orange-400 mt-2">Start your future today!</p>

          <div className="flex space-x-4 mt-4">
            <a href="https://www.instagram.com/trcacmumbai?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-pink-500 transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} TRCAC. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
