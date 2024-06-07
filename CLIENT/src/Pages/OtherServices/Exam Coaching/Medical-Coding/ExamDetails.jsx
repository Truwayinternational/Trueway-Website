import React from 'react'

function ExamDetails() {

  const tableData = [
    { col1: 'Duration', col2: '4 Hours' },
    { col1: 'Attempts', col2: 'Unlimited, with additional payment for multiple attempts' },
    { col1: 'Passing Marks', col2: 'Minimum 70%' },
    { col1: 'Format', col2: '100 multiple-choice questions' },
    { col1: 'Booking', col2: 'Online, with exam centres in Chennai, Coimbatore, Bangalore, and Trivandrum' },
    { col1: 'Results', col2: 'Available within 2 to 3 days' },
    { col1: 'Age Limit', col2: 'Freshers must be under 30, but there is no age restriction for experienced professionals.' },
];

  return (
    <>
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='flex flex-col lg:mx-4 lg:px-8'>
                <h3 className='md:text-5xl text-3xl py-10  font-HeadingFont font-extrabold text-black text-center px-4'><b className='text-green-500'> Medical Coding </b>Exam Details</h3>
            </div>
            <div className='w-full lg:px-20 px-4 '>
                <p className='text-md md:text-lg text-center text-gray-500 font-poppins lg:p-0'>
                After completing the course, students will take an open-book exam with the following features:
                </p>
            </div>
        </div>

        {/* exam details table */}
        <div className="flex justify-center  mx-auto  lg:w-2/3 px-4 overflow-x-auto mb-10">
          <table className="w-full border-2 divide-y divide-gray-200">
            <tbody className="bg-green-50 divide-y divide-gray-200">
            {tableData.map((row, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-md text-gray-900 font-bold">{row.col1}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.col2}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
        
        {/* footer paragraph */}
        <div className='max-w-4xl mx-auto place-content-center mb-10'>
            <div className='w-full lg:px-20 px-4 '>
                <p className='text-md md:text-lg text-center text-gray-500 font-poppins lg:p-0'>
                To enrol in our new batch starting in April, contact our customer care number at <b>8327626262.</b> Take the first step towards a promising career in medical coding with Trueway International.
                <br/><br/>
                Contact  us today for 30 Minutes Free Consultation
                </p>
            </div>
        </div>
    </>
  )
}

export default ExamDetails