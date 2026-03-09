// import React, { useContext, useState ,useEffect} from 'react'
// import { AppContext } from '../../context/AppContext';
// import { useParams } from 'react-router-dom';
// import { assets } from '../../assets/assets';
// import humanizeDuration from 'humanize-duration';

// const Player = () => {
//   const {enrolledCourses , calculateChapterTime} = useContext(AppContext)
//   const {courseId} = useParams()
//   const [courseData ,setCourseData] = useState(null)
//   const [openSections ,setOpenSections] = useState({})
//    const [playerData ,setPlayerData] = useState(null)

// const getCourseData = () => {
//   enrolledCourses.map((course) => {
//     if (course._id === courseId) {
//       setCourseData(course)
//     }
//   })
// }

//  const toggleSection = (index) => {

//     setOpenSections((prev) => ({
//       ...prev,
//       [index]: !prev[index],
//     }));

//   };

// useEffect(() => {
//   getCourseData()
// }, [])

//   return (
    
//     <>
//     <div className='p-4 sm:p-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:px-36'>
//       {/* left-column */}
//         <div className='text-gray-800'>
//           <h2 className='text-xl font-semibold'>Course Structure</h2>
//            <div className="pt-12">
          
//                         <h2 className="text-lg font-semibold text-gray-900">
//                           Course Structure
//                         </h2>
          
//                         <div className="pt-4 space-y-3">
          
//                           {courseData && courseData.courseContent.map((chapter, index) => (
          
//                             <div
//                               key={index}
//                               className="border border-gray-300 rounded bg-white overflow-hidden"
//                             >
          
//                               {/* Header */}
//                               <div
//                                 onClick={() => toggleSection(index)}
//                                 className="flex items-center justify-between px-4 py-3 bg-gray-100 border-b border-gray-300 cursor-pointer"
//                               >
          
//                                 <div className="flex items-center gap-2">
          
//                                   <img
//                                     src={assets.down_arrow_icon}
//                                     alt="arrow"
//                                     className={`w-3 h-3 transition-transform duration-300 ${
//                                       openSections[index] ? "rotate-180" : ""
//                                     }`}
//                                   />
          
//                                   <p className="text-sm font-medium text-gray-800">
//                                     {chapter.chapterTitle}
//                                   </p>
          
//                                 </div>
          
//                                 <p className="text-xs text-gray-600">
//                                   {chapter.chapterContent.length} lectures –{" "}
//                                   {calculateChapterTime(chapter)}
//                                 </p>
          
//                               </div>
          
//                               {/* Lectures */}
//                               {openSections[index] && (
          
//                                 <ul className="divide-y divide-gray-200">
          
//                                   {chapter.chapterContent.map((lecture, i) => (
          
//                                     <li
//                                       key={i}
//                                       className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition"
//                                     >
          
//                                       <div className="flex items-start gap-3">
          
//                                         <img
//                                           src={false ? assets.blue_tick_icon : assets.play_icon}
//                                           alt="play icon"
//                                           className="w-4 h-4 mt-1"
//                                         />
          
//                                         <div>
          
//                                           <p className="text-sm text-gray-800">
//                                             {lecture.lectureTitle}
//                                           </p>
          
//                                           {lecture.lectureUrl && (
          
//                                             <p
//                                               className="text-blue-600 text-xs cursor-pointer"
//                                               onClick={(e) => {
          
//                                                 e.stopPropagation();
          
//                                                 setPlayerData({
//                                                   ...lecture , chapter : index + 1, lecture : i + 1
//                                                 });
          
//                                               }}
//                                             >
//                                               Watch
//                                             </p>
          
//                                           )}
          
//                                         </div>
          
//                                       </div>
          
//                                       <p className="text-xs text-gray-600 whitespace-nowrap">
//                                         {humanizeDuration(
//                                           lecture.lectureDuration * 60 * 1000,
//                                           { units: ["h", "m"] }
//                                         )}
//                                       </p>
          
//                                     </li>
          
//                                   ))}
          
//                                 </ul>
          
//                               )}
          
//                             </div>
          
//                           ))}
          
//                         </div>
          
//                       </div>
          
//                       {/* DESCRIPTION */}
//                       <div className="pt-16">
          
//                         <h3 className="text-xl font-semibold text-gray-900">
//                           Course Description
//                         </h3>
          
//                         <h4 className="pt-6 text-lg font-semibold text-gray-800">
//                           {courseData.courseTitle}
//                         </h4>
          
//                         <div
//                           className="pt-4 text-sm text-gray-600 leading-7 space-y-4"
//                           dangerouslySetInnerHTML={{
//                             __html: courseData.courseDescription,
//                           }}
//                         />
          
//                       </div>
          
//                     </div>
//         </div>

//       {/* right-column */}
//         <div></div>
//     </div>
    
    
//     </>
//   )
// }

// export default Player









// import React, { useContext, useState, useEffect } from "react";
// import { AppContext } from "../../context/AppContext";
// import { useParams } from "react-router-dom";
// import { assets } from "../../assets/assets";
// import humanizeDuration from "humanize-duration";
// import YouTube from "react-youtube";
// import Footer from "../../components/student/Footer";


// const Player = () => {
// const { enrolledCourses, calculateChapterTime } = useContext(AppContext);
// const { courseId } = useParams();

// const [courseData, setCourseData] = useState(null);
// const [openSections, setOpenSections] = useState({});
// const [playerData, setPlayerData] = useState(null);

// const getCourseData = () => {
// const course = enrolledCourses.find((course) => course._id === courseId);
// setCourseData(course);
// };

// const toggleSection = (index) => {
// setOpenSections((prev) => ({
// ...prev,
// [index]: !prev[index],
// }));
// };

// useEffect(() => {
// getCourseData();
// }, [enrolledCourses]);

// return (
// <> <div className="p-4 sm:p-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:px-36">

//     {/* LEFT COLUMN */}
//     <div className="text-gray-800">

//       <h2 className="text-xl font-semibold">Course Structure</h2>

//       <div className="pt-12">

//         <div className="pt-4 space-y-3">

//           {courseData?.courseContent?.map((chapter, index) => (

//             <div
//               key={index}
//               className="border border-gray-300 rounded bg-white overflow-hidden"
//             >

//               {/* CHAPTER HEADER */}
//               <div
//                 onClick={() => toggleSection(index)}
//                 className="flex items-center justify-between px-4 py-3 bg-gray-100 border-b border-gray-300 cursor-pointer"
//               >

//                 <div className="flex items-center gap-2">

//                   <img
//                     src={assets.down_arrow_icon}
//                     alt="arrow"
//                     className={`w-3 h-3 transition-transform duration-300 ${
//                       openSections[index] ? "rotate-180" : ""
//                     }`}
//                   />

//                   <p className="text-sm font-medium text-gray-800">
//                     {chapter.chapterTitle}
//                   </p>

//                 </div>

//                 <p className="text-xs text-gray-600">
//                   {chapter.chapterContent.length} lectures –{" "}
//                   {calculateChapterTime(chapter)}
//                 </p>

//               </div>

//               {/* LECTURES */}
//               {openSections[index] && (

//                 <ul className="divide-y divide-gray-200">

//                   {chapter.chapterContent.map((lecture, i) => (

//                     <li
//                       key={i}
//                       className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition"
//                     >

//                       <div className="flex items-start gap-3">

//                         <img
//                           src={
//                             false
//                               ? assets.blue_tick_icon
//                               : assets.play_icon
//                           }
//                           alt="play"
//                           className="w-4 h-4 mt-1"
//                         />

//                         <div>

//                           <p className="text-sm text-gray-800">
//                             {lecture.lectureTitle}
//                           </p>

//                           {lecture.lectureUrl && (
//                             <p
//                               className="text-blue-600 text-xs cursor-pointer"
//                               onClick={(e) => {
//                                 e.stopPropagation();
//                                 setPlayerData({
//                                   ...lecture,
//                                   chapter: index + 1,
//                                   lecture: i + 1,
//                                 });
//                               }}
//                             >
//                               Watch
//                             </p>
//                           )}

//                         </div>

//                       </div>

//                       <p className="text-xs text-gray-600 whitespace-nowrap">
//                         {humanizeDuration(
//                           lecture.lectureDuration * 60 * 1000,
//                           { units: ["h", "m"] }
//                         )}
//                       </p>

//                     </li>

//                   ))}

//                 </ul>

//               )}

//             </div>

//           ))}

//         </div>

//       </div>

//       {/* DESCRIPTION */}
//       <div className="pt-16">

//         <h3 className="text-xl font-semibold text-gray-900">
//           Course Description
//         </h3>

//         <h4 className="pt-6 text-lg font-semibold text-gray-800">
//           {courseData?.courseTitle}
//         </h4>

//         <div
//           className="pt-4 text-sm text-gray-600 leading-7 space-y-4"
//           dangerouslySetInnerHTML={{
//             __html: courseData?.courseDescription || "",
//           }}
//         />

//       </div>

//     </div>

//     {/* RIGHT COLUMN (VIDEO PLAYER) */}
//     <div className="md:mt-10">
// {playerData ? (
//     <div>
//       <YouTube
//         videoId={playerData.lectureUrl.split('/').pop()}
//         iframeClassName="w-full aspect-video"
//       />

//       <div className="flex justify-between items-center mt-1">
//         <p>
//           {playerData.chapter}.{playerData.lecture} {playerData.lectureTitle}
//         </p>

//         <button className="text-blue-600">
//           {false ? "Completed" : "Mark Complete"}
//         </button>
//       </div>
//     </div>
//   ) :
//   <img src={courseData ? courseData.courseThumbnail : ' '} alt=""/>}
    
//     </div>

//   </div>
//  <Footer/>
// </>


// );
// };

// export default Player;






import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { useParams } from "react-router-dom";
import { assets } from "../../assets/assets";
import humanizeDuration from "humanize-duration";
import YouTube from "react-youtube";
import Footer from "../../components/student/Footer";
import Rating from "../../components/student/Rating";

const Player = () => {

const { enrolledCourses, calculateChapterTime } = useContext(AppContext);
const { courseId } = useParams();

const [courseData, setCourseData] = useState(null);
const [openSections, setOpenSections] = useState({});
const [playerData, setPlayerData] = useState(null);

const getCourseData = () => {
const course = enrolledCourses.find((course) => course._id === courseId);
setCourseData(course);
};

const toggleSection = (index) => {
setOpenSections((prev) => ({
...prev,
[index]: !prev[index],
}));
};

useEffect(() => {
getCourseData();
}, [enrolledCourses]);

return (
<>

<div className="p-4 sm:p-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:px-36">

{/* LEFT COLUMN */}

<div className="text-gray-800">

<h2 className="text-xl font-semibold">Course Structure</h2>

<div className="pt-12">
<div className="pt-4 space-y-3">

{courseData?.courseContent?.map((chapter, index) => (

<div
key={index}
className="border border-gray-300 rounded bg-white overflow-hidden"
>

{/* CHAPTER HEADER */}

<div
onClick={() => toggleSection(index)}
className="flex items-center justify-between px-4 py-3 bg-gray-100 border-b border-gray-300 cursor-pointer"
>

<div className="flex items-center gap-2">

<img
src={assets.down_arrow_icon}
alt="arrow"
className={`w-3 h-3 transition-transform duration-300 ${
openSections[index] ? "rotate-180" : ""
}`}
/>

<p className="text-sm font-medium text-gray-800">
{chapter.chapterTitle}
</p>

</div>

<p className="text-xs text-gray-600">
{chapter.chapterContent.length} lectures –{" "}
{calculateChapterTime(chapter)}
</p>

</div>

{/* LECTURES */}
{openSections[index] && (

<ul className="divide-y divide-gray-200">

{chapter.chapterContent.map((lecture, i) => (

<li
key={i}
className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition"
>

<div className="flex items-start gap-3">

<img
src={assets.play_icon}
alt="play"
className="w-4 h-4 mt-1"
/>

<div>

<p className="text-sm text-gray-800">
{lecture.lectureTitle}
</p>

{lecture.lectureUrl && (

<p
className="text-blue-600 text-xs cursor-pointer"
onClick={(e) => {
e.stopPropagation();
setPlayerData({
...lecture,
chapter: index + 1,
lecture: i + 1,
});
}}
>
Watch
</p>
)}

</div>

</div>

<p className="text-xs text-gray-600 whitespace-nowrap">
{humanizeDuration(
lecture.lectureDuration * 60 * 1000,
{ units: ["h", "m"] }
)}
</p>

</li>

))}

</ul>

)}

</div>

))}

</div>
</div>
<div className="flex items-center gap-2 py-3 mt-10">

<h1 className="text-xl font-bold">Rate this Course:</h1>
<Rating initialRating={0}/>

</div>

</div>

{/* RIGHT COLUMN (VIDEO PLAYER) */}

<div className="md:mt-10">

{playerData ? (

<div>

<YouTube
videoId={playerData.lectureUrl.split("/").pop()}
iframeClassName="w-full aspect-video"
/>

<div className="flex justify-between items-center mt-1">

<p>
{playerData.chapter}.{playerData.lecture} {playerData.lectureTitle}
</p>

<button className="text-blue-600">
{false ? "Completed" : "Mark Complete"}
</button>

</div>

</div>

) : (

<img
src={courseData ? courseData.courseThumbnail : ""}
alt=""
/>

)}

</div>

</div>

<Footer />

</>
);
};

export default Player;

