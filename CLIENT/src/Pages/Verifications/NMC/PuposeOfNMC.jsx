import React from "react";
import avatar_2 from "../../../Assets/certificate attestation/avatar_2.webp";

function PuposeOfNMC() {
  return (
    <>
        <div className="max-w-[1240px] mx-auto place-content-center py-10">
        <div className="flex lg:px-16 mx-3">
            <h2 className="md:text-5xl text-3xl pb-5  font-HeadingFont font-extrabold text-black ">
            What is the purpose of <br />
            <b className="text-green-500 "> NMC UK third party <br/>verification for nurses? </b></h2>
          <img
            className="lg:hidden grid  w-[100px]  md:w-[150px] mt-[-30px] md:mt-[-50px]"
            src={avatar_2}
            alt="avatar_2"
          />
        </div>
        <div className="flex">
          <div className="lg:w-2/3 ml-3 lg:px-20 ">
            <div className="text-md md:text-xl lg:text-lg text-start text-gray-500 font-poppins lg:p-0">
                <p className="text-md md:text-lg text-gray-500 font-poppins lg:p-0 px-2">
                    The ultimate goal of NMC UK third-party verification is migration to the UK. The sole way for nurses to further their careers in the UK is through NMC UK verification, regardless of where they are from. Above all, the council must confirm your identity and background before allowing you to immigrate to the UK; NMC verification is required for it. With the assistance of a third-party organisation, the procedure entails verifying the nurses' personal, educational, and background information. Only when it has been confirmed that the candidate's credentials and educational background meet the requirements set forth by NMC will the verification procedure be deemed successful. Nurses will be able to proceed with the migration procedure only after this.
                </p>
            </div>
          </div>
          <div className="hidden lg:flex  lg:w-[200px] h-full  lg:mr-10 xl:mt-[-150px] mt-[-50px] my-8">
            <img src={avatar_2} alt="avatar_2" />
          </div>
        </div>
      </div>
    </>
  )
}

export default PuposeOfNMC