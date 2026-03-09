// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { AppContextProvider } from './context/AppContext.jsx'
// import { BrowserRouter } from 'react-router-dom'

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <AppContextProvider>
//       <App />
//     </AppContextProvider>
//   </BrowserRouter>,
// )

import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";

export const AppContext = createContext();

// export const AppContextProvider = ({ children }) => {

//   const currency = import.meta.env.VITE_CURRENCY 
//   const navigate = useNavigate()
//   const [user, setUser] = useState(null);
//   const [allCourses, setAllCourses] = useState([])

//  const [isEducator, setIsEducator] = useState(true)


//   //Fetch all courses and set in context
//   const fetchAllCourses = async () => {
//     setAllCourses(dummyCourses)
//  }

// //function to calculate average ratings of course
// const calculateRating = (course) => {
//   if (course.courseRatings.length === 0) {
//     return 0;
//   }

//   let totalRating = 0;

//   course.courseRatings.forEach((rating) => {
//     totalRating += rating.rating;
//   });

//   return totalRating / course.courseRatings.length;
// };


// // Function to calculate course chapter Time
// const calculateChapterTime = (chapter) => {
//   let time = 0;

//   chapter.chapterContent.map((lecture) => { 
//     time += lecture.lectureDuration;
// });
//   return humanizeDuration(time * 60 * 1000, { units: ['h', 'm'], round: true });
//   };


//   // Function to calculate total course duration
//   const calculateCourseDuration = (course) => {
//   let time = 0;

//   course.courseContent.map((chapter) => chapter.chapterContent.map((lecture) => {
//     time += lecture.lectureDuration;
// }));
   
//   return humanizeDuration(time * 60 * 1000, { units: ['h', 'm'], round: true });
 

//   // function to calculate total no. of lectures in the course
//   const calculateNoOfLectures = (course) => {
//     let totalLectures = 0;
//     course.courseContent.forEach(chapter => {
//       if(Array.isArray(chapter.chapterContent)){
//         totalLectures += chapter.chapterContent.length;
//       }
//     });
//     return totalLectures; 

//   }

//  useEffect(() => {
//  fetchAllCourses();
//  },[]);


//   const value = {
//     user,
//     setUser,
//     currency,
//     allCourses,
//     navigate,
//     calculateRating,
//     isEducator,
//     setIsEducator,
//     calculateNoOfLectures,
//     calculateCourseDuration,
//     calculateChapterTime
//   };

//   return (
//     <AppContext.Provider value={value}>
//       {children}
//     </AppContext.Provider>
//   );
// };





export const AppContextProvider = ({ children }) => {

  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(true);
   const [enrolledCourses, setenrolledCourses] = useState([]);


  // Fetch courses
  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };

  // Calculate average rating
  const calculateRating = (course) => {
    if (!course.courseRatings?.length) return 0;

    let totalRating = 0;
    course.courseRatings.forEach((rating) => {
      totalRating += rating.rating;
    });

    return totalRating / course.courseRatings.length;
  };

  // Calculate chapter time
  const calculateChapterTime = (chapter) => {
    let time = 0;

    chapter.chapterContent.forEach((lecture) => {
      time += lecture.lectureDuration;
    });

    return humanizeDuration(time * 60 * 1000, {
      units: ["h", "m"],
      round: true,
    });
  };

  // ✅ FIXED — properly closed
  const calculateCourseDuration = (course) => {
    let time = 0;

    course.courseContent.forEach((chapter) => {
      chapter.chapterContent.forEach((lecture) => {
        time += lecture.lectureDuration;
      });
    });

    return humanizeDuration(time * 60 * 1000, {
      units: ["h", "m"],
      round: true,
    });
  };

  // Calculate number of lectures
  const calculateNoOfLectures = (course) => {
    let totalLectures = 0;

    course.courseContent.forEach((chapter) => {
      if (Array.isArray(chapter.chapterContent)) {
        totalLectures += chapter.chapterContent.length;
      }
    });

    return totalLectures;
  };

  //Fetch User Enrolled Courses
  const fetchUserEnrolledCourses = async()=>{
    setenrolledCourses(dummyCourses)
  }

  useEffect(() => {
    fetchAllCourses();
    fetchUserEnrolledCourses()
  }, []);

  const value = {
    user,
    setUser,
    currency,
    allCourses,
    navigate,
    calculateRating,
    isEducator,
    setIsEducator,
    calculateNoOfLectures,
    calculateCourseDuration,
    calculateChapterTime,
    enrolledCourses,
    fetchUserEnrolledCourses
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};