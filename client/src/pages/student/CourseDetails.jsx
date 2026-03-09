



// import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { AppContext } from "../../context/AppContext";
// import Loading from "../../components/student/Loading";
// import { assets } from "../../assets/assets";
// import humanizeDuration from "humanize-duration";

// const CourseDetails = () => {
//   const { id } = useParams();
//   const {
//     allCourses,
//     calculateRating,
//     calculateChapterTime,
//   } = useContext(AppContext);

//   const [courseData, setCourseData] = useState(null);
//   const [openSections, setOpenSections] = useState({});

//   useEffect(() => {
//     if (!allCourses?.length) return;

//     const foundCourse = allCourses.find(
//       (course) => String(course._id) === String(id)
//     );

//     setCourseData(foundCourse || null);
//   }, [allCourses, id]);

//   if (!courseData) return <Loading />;

//   const toggleSection = (index) => {
//     setOpenSections((prev) => ({
//       ...prev,
//       [index]: !prev[index],
//     }));
//   };

//   return (
//     <div className="relative bg-gray-50 min-h-screen pt-20">
      
//       {/* Top Gradient Background */}
//       <div className="absolute top-0 left-0 w-full h-[260px] bg-gradient-to-b from-cyan-100/60 to-transparent"></div>

//       {/* Main Content */}
//       <div className="max-w-5xl pl-28 pr-6 relative z-10">

//         {/* Course Title */}
//         <h1 className="text-3xl font-bold text-gray-900">
//           {courseData.courseTitle}
//         </h1>

//         {/* Short Description */}
//         <div
//           className="pt-3 text-sm text-gray-600 leading-relaxed max-w-2xl"
//           dangerouslySetInnerHTML={{
//             __html: courseData.courseDescription,
//           }}
//         />

//         {/* Ratings */}
//         <div className="flex items-center gap-2 pt-4 text-xs">
//           <p className="font-semibold text-gray-800">
//             {calculateRating(courseData)}
//           </p>

//           <div className="flex">
//             {[...Array(5)].map((_, index) => (
//               <img
//                 key={index}
//                 src={
//                   index < Math.floor(calculateRating(courseData))
//                     ? assets.star
//                     : assets.star_blank
//                 }
//                 alt="star"
//                 className="w-3.5 h-3.5"
//               />
//             ))}
//           </div>

//           <p className="text-blue-600">
//             ({courseData.courseRatings.length})
//           </p>

//           <p className="text-gray-600">
//             {courseData.enrolledStudents.length} students
//           </p>
//         </div>

//         <p className="text-xs pt-1 text-gray-600">
//           Course by{" "}
//           <span className="text-blue-600 hover:underline cursor-pointer">
//             GreatStack
//           </span>
//         </p>

//         {/* ================= COURSE STRUCTURE ================= */}
//         <div className="pt-12">
//           <h2 className="text-lg font-semibold text-gray-900">
//             Course Structure
//           </h2>

//           <div className="pt-4 space-y-3">
//             {courseData.courseContent.map((chapter, index) => (
//               <div
//                 key={index}
//                 className="border border-gray-300 rounded bg-white max-w-2xl overflow-hidden"
//               >
//                 {/* Chapter Header */}
//                 <div
//                   onClick={() => toggleSection(index)}
//                   className="flex items-center justify-between px-4 py-3 bg-gray-100 border-b border-gray-300 cursor-pointer"
//                 >
//                   <div className="flex items-center gap-2">
//                     <img
//                       src={assets.down_arrow_icon}
//                       alt="arrow"
//                       className={`w-3 h-3 transition-transform duration-300 ${
//                         openSections[index] ? "rotate-180" : ""
//                       }`}
//                     />
//                     <p className="text-sm font-medium text-gray-800">
//                       {chapter.chapterTitle}
//                     </p>
//                   </div>

//                   <p className="text-xs text-gray-600">
//                     {chapter.chapterContent.length} lectures –{" "}
//                     {calculateChapterTime(chapter)}
//                   </p>
//                 </div>

//                 {/* Lectures */}
//                 {openSections[index] && (
//                   <ul className="divide-y divide-gray-200">
//                     {chapter.chapterContent.map((lecture, i) => (
//                       <li
//                         key={i}
//                         className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition"
//                       >
//                         <div className="flex items-start gap-3">
//                           <img
//                             src={assets.play_icon}
//                             alt="play"
//                             className="w-4 h-4 mt-1"
//                           />

//                           <div>
//                             <p className="text-sm text-gray-800">
//                               {lecture.lectureTitle}
//                             </p>

//                             {lecture.isPreviewFree && (
//                               <p className="text-blue-600 text-xs">
//                                 Preview
//                               </p>
//                             )}
//                           </div>
//                         </div>

//                         <p className="text-xs text-gray-600 whitespace-nowrap">
//                           {humanizeDuration(
//                             lecture.lectureDuration * 60 * 1000,
//                             { units: ["h", "m"] }
//                           )}
//                         </p>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ================= COURSE DESCRIPTION ================= */}
//         {/* <div className="pt-16 max-w-3xl">
//           <h3 className="text-xl font-semibold text-gray-900">
//             Course Description
//           </h3>

//           <div
//             className="pt-4 text-sm text-gray-600 leading-relaxed space-y-3"
//             dangerouslySetInnerHTML={{
//               __html: courseData.courseDescription,
//             }}
//           />
//         </div> */}

//         {/* ================= COURSE DESCRIPTION ================= */}
// <div className="pt-16 max-w-3xl">
  
//   <h3 className="text-xl font-semibold text-gray-900">
//     Course Description
//   </h3>

//   {/* Sub Title */}
//   <h4 className="pt-6 text-lg font-semibold text-gray-800">
//     {courseData.courseTitle}
//   </h4>

//   {/* Description Content */}
//   <div
//     className="
//       pt-4
//       text-sm 
//       text-gray-600 
//       leading-7
//       space-y-4
//       [&_p]:mb-4
//       [&_ul]:list-disc
//       [&_ul]:pl-5
//       [&_li]:mb-2
//     "
//     dangerouslySetInnerHTML={{
//       __html: courseData.courseDescription,
//     }}
//   />

// </div>

//       </div>
//       {/* right column */}
//       <div>
//         <img src={courseData.courseThumbnail}    alt="" />
//         <div className="pt-5">
//           <div>
//             <img className="w-3.5" src={assets.time_left_clock_icon} alt="time left clock icon" />
//             <p className="text-red-500"><span className="font-medium">5 days</span> left at this price!</p>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseDetails;









// import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { AppContext } from "../../context/AppContext";
// import Loading from "../../components/student/Loading";
// import { assets } from "../../assets/assets";
// import humanizeDuration from "humanize-duration";
// import Footer from "../../components/student/Footer";
// import YouTube from "react-youtube";


// const CourseDetails = () => {
//   const { id } = useParams();
//   const {
//     allCourses,
//     calculateRating,
//     calculateChapterTime,
//     currency,
//     calculateCourseDuration,
//     calculateNoOfLectures
//   } = useContext(AppContext);

//   const [courseData, setCourseData] = useState(null);
//   const [openSections, setOpenSections] = useState({});
//   const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false);
//   const[playerData, setPlayerData] = useState(null);

//   useEffect(() => {
//     if (!allCourses?.length) return;

//     const foundCourse = allCourses.find(
//       (course) => String(course._id) === String(id)
//     );

//     setCourseData(foundCourse || null);
//   }, [allCourses, id]);

//   if (!courseData) return <Loading />;

//   const toggleSection = (index) => {
//     setOpenSections((prev) => ({
//       ...prev,
//       [index]: !prev[index],
//     }));
//   };

//   return (
//     <div className="relative bg-gray-50 min-h-screen pt-20">
      
//       {/* Top Gradient */}
//       <div className="absolute top-0 left-0 w-full h-[260px] bg-gradient-to-b from-cyan-100/60 to-transparent"></div>

//       {/* MAIN CONTAINER */}
//       <div className="max-w-6xl mx-auto px-6 relative z-10">
//         <div className="flex flex-col lg:flex-row gap-12">

//           {/* ================= LEFT SIDE ================= */}
//           <div className="lg:w-2/3">

//             {/* Title */}
//             <h1 className="text-3xl font-bold text-gray-900">
//               {courseData.courseTitle}
//             </h1>

//             {/* Short Description */}
//             <div
//               className="pt-3 text-sm text-gray-600 leading-relaxed"
//               dangerouslySetInnerHTML={{
//                 __html: courseData.courseDescription,
//               }}
//             />

//             {/* Ratings */}
//             <div className="flex items-center gap-2 pt-4 text-xs">
//               <p className="font-semibold text-gray-800">
//                 {calculateRating(courseData)}
//               </p>

//               <div className="flex">
//                 {[...Array(5)].map((_, index) => (
//                   <img
//                     key={index}
//                     src={
//                       index < Math.floor(calculateRating(courseData))
//                         ? assets.star
//                         : assets.star_blank
//                     }
//                     alt="star"
//                     className="w-3.5 h-3.5"
//                   />
//                 ))}
//               </div>

//               <p className="text-blue-600">
//                 ({courseData.courseRatings.length})
//               </p>

//               <p className="text-gray-600">
//                 {courseData.enrolledStudents.length} students
//               </p>
//             </div>

//             <p className="text-xs pt-1 text-gray-600">
//               Course by{" "}
//               <span className="text-blue-600 hover:underline cursor-pointer">
//                 GreatStack
//               </span>
//             </p>

//             {/* ================= COURSE STRUCTURE ================= */}
//             <div className="pt-12">
//               <h2 className="text-lg font-semibold text-gray-900">
//                 Course Structure
//               </h2>

//               <div className="pt-4 space-y-3">
//                 {courseData.courseContent.map((chapter, index) => (
//                   <div
//                     key={index}
//                     className="border border-gray-300 rounded bg-white overflow-hidden"
//                   >
//                     {/* Chapter Header */}
//                     <div
//                       onClick={() => toggleSection(index)}
//                       className="flex items-center justify-between px-4 py-3 bg-gray-100 border-b border-gray-300 cursor-pointer"
//                     >
//                       <div className="flex items-center gap-2">
//                         <img
//                           src={assets.down_arrow_icon}
//                           alt="arrow"
//                           className={`w-3 h-3 transition-transform duration-300 ${
//                             openSections[index] ? "rotate-180" : ""
//                           }`}
//                         />
//                         <p className="text-sm font-medium text-gray-800">
//                           {chapter.chapterTitle}
//                         </p>
//                       </div>

//                       <p className="text-xs text-gray-600">
//                         {chapter.chapterContent.length} lectures –{" "}
//                         {calculateChapterTime(chapter)}
//                       </p>
//                     </div>

//                     {/* Lectures */}
//                     {openSections[index] && (
//                       <ul className="divide-y divide-gray-200">
//                         {chapter.chapterContent.map((lecture, i) => (
//                           <li
//                             key={i}
//                             className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition"
//                           >
//                             <div className="flex items-start gap-3">
//                               <img
//                                 src={assets.play_icon}
//                                 alt="play"
//                                 className="w-4 h-4 mt-1"
//                               />
//                               <div>
//                                 <p className="text-sm text-gray-800">
//                                   {lecture.lectureTitle}
//                                 </p>
//                                 {lecture.isPreviewFree && (
//                                   <p 
//                                   onClick={()=>setPlayerData({  

//                                   videoId: lecture.lectureUrl.split('/').pop()

//                                    } )}
                                  
//                                   className="text-blue-600 text-xs">
//                                     Preview
//                                   </p>
//                                 )}
//                               </div>
//                             </div>

//                             <p className="text-xs text-gray-600 whitespace-nowrap">
//                               {humanizeDuration(
//                                 lecture.lectureDuration * 60 * 1000,
//                                 { units: ["h", "m"] }
//                               )}
//                             </p>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* ================= COURSE DESCRIPTION ================= */}
//             <div className="pt-16">
//               <h3 className="text-xl font-semibold text-gray-900">
//                 Course Description
//               </h3>

//               <h4 className="pt-6 text-lg font-semibold text-gray-800">
//                 {courseData.courseTitle}
//               </h4>

//               <div
//                 className="
//                   pt-4
//                   text-sm 
//                   text-gray-600 
//                   leading-7
//                   space-y-4
//                   [&_p]:mb-4
//                   [&_ul]:list-disc
//                   [&_ul]:pl-5
//                   [&_li]:mb-2
//                 "
//                 dangerouslySetInnerHTML={{
//                   __html: courseData.courseDescription,
//                 }}
//               />
//             </div>

//           </div>

//           {/* ================= RIGHT SIDE ================= */}
//           <div className="lg:w-1/3">
//             <div className="bg-white shadow-xl rounded-xl overflow-hidden sticky top-24">

            
//               {
//  playerData ? 
//                     <YouTube videoId={playerData.videoId} opts={{playerVars: {aotoplay :1}}} iframeClassName="w-full aspect-video"/> :

//               <img
//                 src={courseData.courseThumbnail}
//                 alt="thumbnail"
//                 className="w-full object-cover"
//               />
//               }

//               <div className="p-5 space-y-4">

//                 <div className="flex items-center gap-2 text-red-500 text-sm">

//                    <img
//                     className="w-4"
//                     src={assets.time_left_clock_icon}
//                     alt="time left"
//                   />
                 

                  

//                   <p>
//                     <span className="font-semibold">5 days</span> left at this price!
//                   </p>
//                 </div>
//                 <div className="flex gap-3 items-center pt-2" > 
//                   <p className="text-gray-800 md:text-4xl text-2xl font-semibold">{currency}{(courseData.coursePrice - courseData.discount * courseData.coursePrice /100).toFixed(2)}</p>
//                   <p className="md:text-lg text-gray-500 line-through">{currency}{courseData.coursePrice}</p>
//                   <p className="md:text-lg text-gray-500">{courseData.discount} % off</p>

//                 </div>
//                 <div className="flex items-center text-sm md:text-default gap-4 pt-2 md:pt-4 text-gray-500">
//                   <div className="flex items-center gap-1">
//                       <img src={assets.star} alt="star icon" />
//                       <p>{calculateRating(courseData)}</p>


//                   </div>
//                   <div className="h-4 w-px bg-gray-500/40"></div>

//   <div className="flex items-center gap-1">
//                       <img src={assets.time_clock_icon} alt="clock icon" />
//                       <p>{calculateCourseDuration(courseData)}</p>
//                     </div>
//                     <div className="h-4 w-px bg-gray-500/40"></div>
//                     <div className="flex items-center gap-1">
//                       <img src={assets.lesson_icon} alt="clock icon" />
//                       <p>{calculateNoOfLectures(courseData)} lessons</p>


//                   </div>
                   
//                 </div>



//                 <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded-lg font-medium">
//                  {isAlreadyEnrolled ? 'Already Enrolled' : 'Enroll Now'}
//                 </button>
//                 <div className="pt-6">
//                   <p className="md:text-xl text-lg font-medium text-gray-800">what's in the course?</p>
//                   <ul className="ml-4 pt-2 text-sm md:text-default list-disc text-gray-500">
//                     <li>Lifetime acess with free updates.</li>
//                     <li>Step-by-Step ,hands-on project guidance.</li>
//                     <li>Downloadable resources and source code.</li>
//                     <li>Quizzes to test your Knowledge.</li>
//                     <li>Certificate of completion.</li>
//                   </ul>
//                 </div>

                

//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//       <Footer/>
//     </div>
//   );
// };

// export default CourseDetails;








import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/student/Loading";
import { assets } from "../../assets/assets";
import humanizeDuration from "humanize-duration";
import Footer from "../../components/student/Footer";
import YouTube from "react-youtube";

const CourseDetails = () => {

  const { id } = useParams();

  const {
    allCourses,
    calculateRating,
    calculateChapterTime,
    currency,
    calculateCourseDuration,
    calculateNoOfLectures
  } = useContext(AppContext);

  const [courseData, setCourseData] = useState(null);
  const [openSections, setOpenSections] = useState({});
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false);

  // video player state
  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {

    if (!allCourses?.length) return;

    const foundCourse = allCourses.find(
      (course) => String(course._id) === String(id)
    );

    setCourseData(foundCourse || null);

  }, [allCourses, id]);

  if (!courseData) return <Loading />;

  const toggleSection = (index) => {

    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));

  };

  return (
    <div className="relative bg-gray-50 min-h-screen pt-20">

      {/* Gradient */}
      <div className="absolute top-0 left-0 w-full h-[260px] bg-gradient-to-b from-cyan-100/60 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* LEFT SIDE */}
          <div className="lg:w-2/3">

            <h1 className="text-3xl font-bold text-gray-900">
              {courseData.courseTitle}
            </h1>

            <div
              className="pt-3 text-sm text-gray-600 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: courseData.courseDescription,
              }}
            />

            {/* Ratings */}
            <div className="flex items-center gap-2 pt-4 text-xs">

              <p className="font-semibold text-gray-800">
                {calculateRating(courseData)}
              </p>

              <div className="flex">
                {[...Array(5)].map((_, index) => (

                  <img
                    key={index}
                    src={
                      index < Math.floor(calculateRating(courseData))
                        ? assets.star
                        : assets.star_blank
                    }
                    alt="star"
                    className="w-3.5 h-3.5"
                  />

                ))}
              </div>

              <p className="text-blue-600">
                ({courseData.courseRatings.length})
              </p>

              <p className="text-gray-600">
                {courseData.enrolledStudents.length} students
              </p>

            </div>

            <p className="text-xs pt-1 text-gray-600">
              Course by{" "}
              <span className="text-blue-600 hover:underline cursor-pointer">
                GreatStack
              </span>
            </p>

            {/* COURSE STRUCTURE */}
            <div className="pt-12">

              <h2 className="text-lg font-semibold text-gray-900">
                Course Structure
              </h2>

              <div className="pt-4 space-y-3">

                {courseData.courseContent.map((chapter, index) => (

                  <div
                    key={index}
                    className="border border-gray-300 rounded bg-white overflow-hidden"
                  >

                    {/* Header */}
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

                    {/* Lectures */}
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

                                {lecture.isPreviewFree && (

                                  <p
                                    className="text-blue-600 text-xs cursor-pointer"
                                    onClick={(e) => {

                                      e.stopPropagation();

                                      setPlayerData({
                                        videoId: lecture.lectureUrl.split("/").pop(),
                                      });

                                    }}
                                  >
                                    Preview
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

            {/* DESCRIPTION */}
            <div className="pt-16">

              <h3 className="text-xl font-semibold text-gray-900">
                Course Description
              </h3>

              <h4 className="pt-6 text-lg font-semibold text-gray-800">
                {courseData.courseTitle}
              </h4>

              <div
                className="pt-4 text-sm text-gray-600 leading-7 space-y-4"
                dangerouslySetInnerHTML={{
                  __html: courseData.courseDescription,
                }}
              />

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="lg:w-1/3">

            <div className="bg-white shadow-xl rounded-xl overflow-hidden sticky top-24">

              {/* VIDEO / THUMBNAIL */}
              {playerData ? (

                <YouTube
                  videoId={playerData.videoId}
                  opts={{
                    width: "100%",
                    height: "390",
                    playerVars: {
                      autoplay: 1,
                    },
                  }}
                  iframeClassName="w-full aspect-video"
                />

              ) : (

                <img
                  src={courseData.courseThumbnail}
                  alt="thumbnail"
                  className="w-full aspect-video object-cover"
                />

              )}

              <div className="p-5 space-y-4">

                {/* Price Timer */}
                <div className="flex items-center gap-2 text-red-500 text-sm">

                  <img
                    className="w-4"
                    src={assets.time_left_clock_icon}
                    alt="time left"
                  />

                  <p>
                    <span className="font-semibold">5 days</span> left at this price!
                  </p>

                </div>

                {/* Price */}
                <div className="flex gap-3 items-center pt-2">

                  <p className="text-gray-800 md:text-4xl text-2xl font-semibold">
                    {currency}
                    {(courseData.coursePrice - courseData.discount * courseData.coursePrice / 100).toFixed(2)}
                  </p>

                  <p className="md:text-lg text-gray-500 line-through">
                    {currency}{courseData.coursePrice}
                  </p>

                  <p className="md:text-lg text-gray-500">
                    {courseData.discount}% off
                  </p>

                </div>

                {/* Course Info */}
                <div className="flex items-center text-sm gap-4 pt-4 text-gray-500">

                  <div className="flex items-center gap-1">
                    <img src={assets.star} alt="star" />
                    <p>{calculateRating(courseData)}</p>
                  </div>

                  <div className="h-4 w-px bg-gray-400"></div>

                  <div className="flex items-center gap-1">
                    <img src={assets.time_clock_icon} alt="time" />
                    <p>{calculateCourseDuration(courseData)}</p>
                  </div>

                  <div className="h-4 w-px bg-gray-400"></div>

                  <div className="flex items-center gap-1">
                    <img src={assets.lesson_icon} alt="lesson" />
                    <p>{calculateNoOfLectures(courseData)} lessons</p>
                  </div>

                </div>

                {/* Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded-lg font-medium">
                  {isAlreadyEnrolled ? "Already Enrolled" : "Enroll Now"}
                </button>

                {/* Course Includes */}
                <div className="pt-6">

                  <p className="text-lg font-medium text-gray-800">
                    what's in the course?
                  </p>

                  <ul className="ml-4 pt-2 text-sm list-disc text-gray-500">

                    <li>Lifetime access with free updates</li>
                    <li>Step-by-step hands-on projects</li>
                    <li>Downloadable resources</li>
                    <li>Quizzes to test knowledge</li>
                    <li>Certificate of completion</li>

                  </ul>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

      <Footer/>

    </div>
  );
};

export default CourseDetails;