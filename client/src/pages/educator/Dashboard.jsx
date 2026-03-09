import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { assets, dummyDashboardData } from '../../assets/assets'
import Loding from '../../components/student/Loading'

const Dashboard = () => {
  const{currency} = useContext(AppContext)
  const [dashboardData , setDashboardData] = useState(null)
  const fetchDashboardData = async () =>{
    setDashboardData(dummyDashboardData)
  }
  useEffect(()=>{
    fetchDashboardData()
  },[])
  return dashboardData ? (
    <div className='min-h-screen flex flex-col items-start justify-between gap-8 md:p-8 md:pb-0 p-4 pt-8 pb-0'>
      <div className='space-y-5'>
        <div className='flex flex-wrap gap-5 items-center'>
          {/* <div className='flex items-center gap-3 shadow-card border border-blue-500 p-4 w-56 rounded-md'>
            <img src={assets.patients_icon} alt="" />
            <p className='text-2xl font-medium text-gray-600'>{dashboardData.enrolledStudentsData.length}</p>
            <p className='text-base text-gray-500'>Total Enrolments</p>

          </div> */}
          {/* 1st col start  */}
          <div className='flex items-center gap-4 border border-blue-500 p-4 w-64 rounded-md shadow-md 
transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer hover:scale-105'>
  <img src={assets.patients_icon} alt="" />
  <div className='flex flex-col'>
    <p className='text-2xl font-medium text-gray-600'>
      {dashboardData.enrolledStudentsData.length}
    </p>
    <p className='text-base text-gray-500'>
      Total Enrolments
    </p>
  </div>
</div>
          {/* 1st col end */}
            {/* <div className='flex items-center gap-3 shadow-card border border-blue-500 p-4 w-56 rounded-md'>
            <img src={assets.appointments_icon} alt="" />
            <p className='text-2xl font-medium text-gray-600'>{dashboardData.totalCourses}</p>
            <p className='text-base text-gray-500'>Total Courses </p>

          </div> */}
          {/* 2nd col start */}
          <div className='flex items-center gap-4 border border-blue-500 p-4 w-64 rounded-md shadow-md 
transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer hover:scale-105'>
  <img src={assets.appointments_icon} alt="" />
  <div className='flex flex-col'>
    <p className='text-2xl font-medium text-gray-600'>
      {dashboardData.totalCourses}
    </p>
    <p className='text-base text-gray-500'>
      Total Courses
    </p>
  </div>
</div>
          {/* 2nd col end */}
        
            {/* <div className='flex items-center gap-3 shadow-card border border-blue-500 p-4 w-56 rounded-md'>
            <img src={assets.earning_icon} alt="" />
            <p className='text-xl font-medium text-gray-600'>{currency}{dashboardData.totalEarnings}</p>
            <p className='text-base text-gray-500'>Total Earnings</p>

          </div> */}


{/* 3rd col start  */}
      <div className='flex items-center gap-4 border border-blue-500 p-4 w-64 rounded-md shadow-md 
transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer hover:scale-105'>
  <img src={assets.earning_icon} alt="" />
  <div className='flex flex-col'>
    <p className='text-2xl font-medium text-gray-600'>
      {currency}{dashboardData.totalEarnings}
    </p>
    <p className='text-base text-gray-500'>
      Total Earnings
    </p>
  </div>
</div>    
{/* 3rd col end */}
          </div>
          <div>
            <h2 className='pb-4 text-2xl font-medium'>Latest Enrolments</h2>
            <div className='flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20'>
            <table className="table-fixed md:table-auto w-full overflow-hidden">
  <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left">
    <tr >
      <th className="px-4 py-3 font-semibold text-center hidden sm:table-cell">#</th>
      <th className="px-4 py-3 font-bold">Student Name</th>
      <th className="px-4 py-3 font-bold">Course Title</th>
    </tr>
  </thead>
  <tbody className="text-sm text-gray-500">
  {dashboardData.enrolledStudentsData.map((item, index) => (
    <tr key={index} className="border-b border-gray-500/20 transition duration-200 hover:bg-gray-100 cursor-pointer">
      <td className="px-4 py-3 text-center hidden sm:table-cell">
        {index + 1}
      </td>

      <td className="md:px-4 px-2 py-3 flex items-center space-x-3">
        <img
          src={item.student.imageUrl}
          alt="Profile"
          className="w-9 h-9 rounded-full"
        />
        <span className="truncate">
          {item.student.name}
        </span>
      </td>

      <td className="px-4 py-3 truncate">
        {item.courseTitle}
      </td>
    </tr>
  ))}
</tbody>

</table>

            </div>
          </div>

      </div>
       
    </div>
  ) : <Loding/>
}

export default Dashboard