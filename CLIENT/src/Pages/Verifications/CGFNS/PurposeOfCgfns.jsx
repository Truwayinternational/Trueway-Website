import React from "react";
import avatar_2 from "../../../Assets/certificate attestation/avatar_2.webp";

function PurposeOfCgfns() {
  return (
    <>
      <div className="max-w-[1240px] mx-auto place-content-center py-10">
        <div className="flex lg:px-16 mx-3">
            <h2 className="md:text-5xl text-3xl pb-5  font-HeadingFont font-extrabold text-black ">
            What is the purpose of <br />
            <b className="text-green-500 "> CGFNS Council Verification </b><br/> for nurses? </h2>
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
                    Migration to New Zealand is practical and possible only with CGFNS; that is the significance of this verification. To kickstart your process for New Zealand migration, you have to start with CGFNS verification. Nursing credential evaluation, licensure recognition, etc. are happening at this stage. The required documents of the candidate will be collected and sent to CGFNS for further verification and validation. Within 15 days, the candidate will receive an email with the verification done if his or her certificates are correct and genuine. Then only the candidate can do the further process and end up with migration.
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

export default PurposeOfCgfns