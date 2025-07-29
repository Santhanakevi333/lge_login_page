import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import windmill from "./assets/windmill.jpg";
import windmill2 from "./assets/windmill2.jpg";
import windmill3 from "./assets/windmill3.jpg";
import windmill4 from "./assets/windmill4.jpg";
import windmill5 from "./assets/windmill5.jpg";
import logo1 from "./assets/logo.2-bg.png";
import linkedin from "./assets/linkedin1-logo.png";
import youtube from "./assets/youtube.png";
import Twitter from "./assets/x-logo.png";
import website from "./assets/website.jpg";
import century1 from "./assets/century1.jpeg";
import century2 from "./assets/century2.jpeg";
import century3 from "./assets/century3.jpeg";
import century4 from "./assets/century4.jpeg";
import century5 from "./assets/century5.jpeg";
import century6 from "./assets/century6.jpeg";
import century7 from "./assets/century7.jpeg";
import century8 from "./assets/century8.jpeg";
import century9 from "./assets/century9.jpeg";
import century10 from "./assets/century10.jpeg";
import century11 from "./assets/century11.jpeg";
import century12 from "./assets/century12.jpeg";
import century13 from "./assets/century13.jpeg";
import century14 from "./assets/century14.jpg";
import century15 from "./assets/century15.jpg";
import century16 from "./assets/century16.jpg";
import century17 from "./assets/century17.jpg";
import century18 from "./assets/century18.jpg";
import century20 from "./assets/century20.jpg";
import century21 from "./assets/century21.jpg";
import century22 from "./assets/century22.jpg";
import century23 from "./assets/century23.jpg";
import carbonfb from "./assets/saved_co2.png";
import savewater from "./assets/saved_h2o.jpg"
import { useNavigate } from "react-router-dom";
import qrcode from "./assets/qrcode.png";


const Login = () => {
  
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();
  const [showImage, setShowImage] = useState(null);
  const [savedCO2, setSavedCO2] = useState("");
  const [savedH2O, setSavedH2O] = useState("");
  const [popupImageIndex, setPopupImageIndex] = useState(null);

  const centuryImages = [century1, century2, century3, century4, century5, century6, century7,
    century8, century9, century10, century11, century12, century13,
    century14, century15, century16, century17, century18, century20, century21, century22, century23]

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    fade: true,
    // centerMode: false,
  }


  // c02 h20 
  useEffect(() => {
    fetch("http://172.16.7.118:8003/api/tamilnadu/wind/api.main.php")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Data:", data);
        if (Array.isArray(data) && data.length > 0) {
          const co2Raw = data[0].saved_co2;
          const h2oRaw = data[0].saved_h2o;

          const co2Numeric = parseFloat(co2Raw);
          const h2oNumeric = parseFloat(h2oRaw);

          setSavedCO2(co2Raw);
          setSavedH2O(h2oRaw);

        } else {
          console.warn("API returned empty or non-array data.");
        }
      })
      .catch(err => {
        console.error("Error fetching generation data", err);
      })
  }, []);

  
  // emailpassword

  const handleEmailPasswordLogin = async () => {
    if (!loginEmail || !loginPassword) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      const response = await fetch("http://localhost/login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        navigate("/dashboard");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login.");
    }
  };


  return (
    <div className="h-screen w-full bg-white flex flex-col md:flex-row overflow-y-auto">

      <div className="relative w-full md:w-1/2 h-[40vh] md:h-full bg-green-800 overflow-hidden 
                      rounded-bl-[50%] rounded-br-[50%] md:rounded-bl-none md:rounded-br-[70%] 
                      md:rounded-tr-[70%] transition-all duration-300 ease-in-out">
        {/* slider fills */}
        <div className="absolute inset-0 z-0">
          <Slider {...sliderSettings}>

            {[windmill, windmill2, windmill3, windmill4, windmill5].map((img, index) => (
              <div key={index} >
                <img src={img} alt={`slide-${index}`}
                  className="w-full h-[40vh] md:h-screen object-cover mix-blend-overlay opacity-60" />
              </div>
            ))}
          </Slider>
        </div>

        <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
          <h1 className="text-white text-lg sm:text-xl md:text-4xl font-bold  text-center font-serif leading-tight">
            STATE LEVEL WIND POWER FORECASTING
            <br className="hidden md:block" />
            <span className="block sm:text-base md:text-xl font-bold font-serif mt-2">
              SINGLE  <span className="md:text-5xl shadow-2xl text-white-700">QCA</span>  TAMILNADU...!!!
            </span>
          </h1>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 h-[60vh] md:h-full bg-white flex flex-col justify-between p-6">
        <div className="w-full max-w-md mx-auto">
          <div className="mb-5 text-center">
            <img src={logo1} alt="Company Logo" className="mx-auto" />
            <h2 className="text-2xl font-serif text-green-700 font-bold mt-10">
              Login To Your Account!!
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Secure access wind forecasting dashboard
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Enter email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
                className="w-full border-gray-400 hover:outline-green-600 p-3 border rounded-xl bg-white" />

              <input
                type="password"
                placeholder="Enter Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
                className="w-full border-gray-400 hover:outline-green-600 p-3 border rounded-xl mt-3 bg-white " />

              <button type="button"
                onClick={handleEmailPasswordLogin}
                className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold mt-2">
                Login with Email
              </button>

            </div>

          </div>

          {/* Footer */}
          {/* ✅ Must be present for reCAPTCHA */}
          <div id="recaptcha-container"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between bg-white px-4 md:px-10 py-6">
          {/* Left side: CO2 & H2O */}
          <div className="flex flex-col items-start gap-6 w-full md:w-1/2">
            {/* Saved CO₂ */}
            <div className="flex items-center gap-4">
              <img src={carbonfb} alt="CO₂" className="w-12 h-12 md:w-20 md:h-20 object-contain" />
              <p className="text-sm font-bold">
                Saved CO₂: <span className="text-green-700 text-sm md:text-xl">{savedCO2}</span>
              </p>
            </div>

            {/* Saved H₂O */}
            <div className="flex items-center gap-4">
              <img src={savewater} alt="H₂O" className="w-12 h-12 md:w-20 md:h-20 object-contain" />
              <p className="text-sm font-bold">
                Saved H₂O: <span className="text-green-700 text-sm md:text-xl">{savedH2O}</span>
              </p>
            </div>
          </div>

          {/* Right side: Slider */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <Slider {...sliderSettings} className="w-full max-w-md mx-auto">
              {[century1, century2, century3, century4, century5, century6, century7, century8, century9
                , century10, century11, century12, century13, century14, century15, century16, century17, century18, century20, century21, century22, century23
              ].map((img, index) => (
                <div key={index} className="flex justify-center items-center">
                  <img
                    src={img}
                    alt={`slide-${index}`}
                    onClick={() => setPopupImageIndex(index)}
                    className="w-full h-auto max-h-[300px] object-contain mix-blend-multiply rounded-xl"
                  />
                </div>
              ))}
            </Slider>
            {popupImageIndex !== null && (
              <div className="fixed inset-0 backdrop-blur-md z-50 flex items-center justify-center">
                <div className="relative max-w-4xl w-full p-4">
                  <button onClick={() => setPopupImageIndex(null)} className="absolute top-2 right-14 md:right-26
      text-red-400 text-4xl font-bold hover:text-red-600">&times;</button>

                  <img src={centuryImages[popupImageIndex]}
                    alt="popup" className="w-[90%] max-h-[80vh] object-contain rounded-xl" />
                  {/* navigation */}
                  <div className="absolute top-1/2 left-4 md:left-5 transform -translate-y-1/2">
                    <button className="text-white text-3xl  bg-opacity-40 px-2 rounded hover:bg-opacity-70" onClick={() => setPopupImageIndex((prev) => (prev > 0 ? prev - 1 : centuryImages.length - 1))}> ◀</button>

                  </div>
                  <div className="absolute top-1/2 right-14 md:right-27 transform -translate-y-1/2">
                    <button className="text-white text-3xl bg-opacity-40 px-2 rounded hover:bg-opacity-70" onClick={() => setPopupImageIndex((prev) => (prev < centuryImages.length - 1 ? prev + 1 : 0))}> ▶</button>
                  </div>
                </div>
              </div>

            )}
            {showImage && (
              <div className="fixed inset-0 z-50 backdrop-blur-md flex items-center justify-center">
                <div relative p-4>
                  <button onClick={() => setShowImage(null)}
                    className="absolute top-2 right-2 text-red-400 text-4xl font-bold hover:text-red-600"
                  >&times; </button>
                  <img src={showImage} alt="Qr preview" className="max-w-md object-contain rounded-lg" />
                </div>
              </div>
            )}
          </div>
        </div>



        <div className="w-full min-h-[40px] border-t border-b border-green-200 py-1 overflow-x-hidden bg-white">
          <div className="whitespace-nowrap animate-marquee text-green-800 font-bold text-sm md:text-base tracking-wide px-4">
            🔔 Leap Green Energy proudly secures the Excellence in Performance Award for the fifth consecutive year in the Wind category at the prestigious CII Performance Excellence Awards on June 2025
            🌱 Save Water | 🌬️ Save Wind | ⚡ Empower Future...!!!
          </div>
        </div>


        <div className="flex flex-col md:flex-row justify-between items-center mt-6 px-4 py-4 border-t border-gray-200 text-gray-500 text-xs md:text-sm relative gap-4">
          {/* QR Code (top right corner) */}
          <div className="absolute top-8 left-77 md:static">
            <a
              href="ttps://play.google.com/store/apps/details?id=com.leapgreenenergy.windpowerforecast"
              // target="_blank"
              rel="noopener noreferrer">
              <img src={qrcode} alt="Get it on Google Play"
                onClick={() => {
                  setShowImage(qrcode); setPopupImageIndex(null);
                }} className="h-14 md:h-20 cursor-pointer hover:scale-105 transition" />
            </a>
          </div>




          {/* Footer Text */}
          <div className="text-center font-bold text-green-900 md:text-xl z-10">
            Leap Green Energy &copy; {new Date().getFullYear()}. All rights reserved.
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-3 items-center z-10">
            <a href="https://www.linkedin.com/company/leapgreenenergy/posts/?feedView=all"
              target="blank" rel="noopener noreferrer" title="Visit our Linkedin">
              <img src={linkedin} className="h-7 md:h-7 hover:scale-110 transition-transform duration-200" />
            </a>
            <a href="https://x.com/leapgreenenergy" target="blank" rel="noopener noreferrer" title="Follow us on X">
              <img src={Twitter} className="h-7 md:h-9 hover:scale-110 transition-transform duration-200" />
            </a>
            <a href="http://www.leapgreenenergy.com/" target="blank" rel="noopener noreferrer" title="Visit our Website">
              <img src={website} className="h-7 md:h-9 hover:scale-110 transition-transform duration-200" />
            </a>
            <a href="https://youtube.com/@leapgreenenergy" target="blank" rel="noopener noreferrer" title="Watch us on YouTube">
              <img src={youtube} className="h-7 md:h-9 hover:scale-110 transition-transform duration-200" />
            </a>
          </div>
        </div>

      </div>

    </div>

  );
};



export default Login;


