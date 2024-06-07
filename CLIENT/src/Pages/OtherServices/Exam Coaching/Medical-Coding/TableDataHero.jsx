import React from 'react'

const TableDataHero = () => {

    const tableData = [
        { col1: 'Course Duration', col2: '3 months' },
        { col1: 'Class Schedule', col2: '2 hours daily (7 PM to 9 PM), three times a week on alternate days' },
        { col1: 'Methodology', col2: '1-hour guidelines followed by 1-hour revision' },
        { col1: 'Platform', col2: 'Google Meet or MS Teams' },
        { col1: 'Additional Resources', col2: 'Recorded demo classes and hard copies of all study materials' },
        { col1: 'Certification', col2: 'CPC Certification from AAPC, valid for one year with annual employer renewal' },
    ];

  return (
    <div className="flex justify-center  mx-auto  lg:w-2/3 px-4 overflow-x-auto">
      <table className="w-full border-2 divide-y divide-gray-200">
       {/* table heading is deleted */}
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
  );
};
export default TableDataHero