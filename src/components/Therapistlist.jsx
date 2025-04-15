import "./css/therapistlist.css"
import avatar1 from "../assets/images/avatars/a1.jpg";
import avatar2 from "../assets/images/avatars/a2.jpg";
import avatar3 from "../assets/images/avatars/a3.jpg";
import avatar4 from "../assets/images/avatars/a4.jpg";
import avatar5 from "../assets/images/avatars/a5.jpg";
import avatar6 from "../assets/images/avatars/a6.jpg";
import avatar7 from "../assets/images/avatars/a7.jpg";

import { useNavigate } from "react-router-dom"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/scrollbar"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules"
import Header from "./Header"
import Footer from "./Footer"

function Therapistlist() {
  const navigate = useNavigate()

  const handleTherapistAboutClick = (therapist) => {
    navigate("/MindMendor/Therapist/about", { state: { therapist } })
  }
  const handleTherapistHireClick = (therapist) => {
    navigate("/MindMendor/Therapist/hire", { state: { therapist } })
  }

  const therapistItems = [
    {
      image: avatar1,
      name: "Dr. Shreya Pandit",
      proff: "Psychologist",
      bio: "Dr. Shreya Pandit is a licensed psychologist with a passion for helping individuals navigate life's challenges with clarity and resilience. Her approach is evidence-based and tailored to each client's unique needs, drawing from cognitive-behavioral therapy (CBT), mindfulness, and trauma-informed care. With 10 years of experience, she specializes in anxiety, depression, relationships, and trauma, providing a supportive and collaborative space for growth and healing.",
    },
    {
      image: avatar2,
      name: "Dr. Emily Carter",
      proff: "Clinical Psychologist",
      bio: "Dr. Emily Carter is a clinical psychologist with extensive experience in treating mood disorders and anxiety. She employs a combination of psychodynamic therapy and cognitive-behavioral techniques to help her clients achieve lasting change and improved mental health.",
    },
    {
      image: avatar4,
      name: "Michael Rivera",
      proff: "LCSW",
    },
    {
      image: avatar3,
      name: "Dr. Priya Sharma",
      proff: "Psychiatrist",
    },
    {
      image: avatar1,
      name: "Jessica Nguyen",
      proff: "MFT",
    },
    {
      image: avatar5,
      name: "David Thompson",
      proff: "Psychologist",
    },
    {
      image: avatar3,
      name: "Dr. Sofia Alvarez",
      proff: "Behavioral Therapist",
    },
    {
      image: avatar6,
      name: "Alex Chen",
      proff: "LGBTQ+ Affirmative Therapist",
    },
    {
      image: avatar7,
      name: "Dr. Maria DeLuca",
      proff: "Substance Abuse Counselor",
    },


    // ... Add bios for other therapists
  ]

  return (
    <>
      <Header />
      <div className="therpistlist py-8 px-2 md:px-8 mb-10 bg-[#212121] h-screen w-[100%] gap-10 flex flex-wrap justify-center items-center">
        <Swiper
          slidesPerView={3}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            1350: {
              slidesPerView: 3,
              slidesPerGroup: 1,
            },
            1000: {
              slidesPerView: 2,
              slidesPerGroup: 1,
            },
            769: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
          }}
          scrollbar={false}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper container flex flex-wrap justify-center items-center px-2 md:px-10 py-10"
        >
          {therapistItems.map((item, index) => (
            <SwiperSlide className="py-4" key={index}>
              <div className="content flex flex-wrap justify-center items-center">
                <div className="card">
                  <div className="card-content flex flex-wrap flex-col items-center">
                    <div className="image">
                      <img src={item.image || "/placeholder.svg"} alt={item.name} className="" />
                    </div>
                    <div className="media-icons flex flex-col gap-4 items-center justify-center">
                      <i className="fa-brands fa-facebook"></i>
                      <i className="fa-brands fa-twitter"></i>
                      <i className="fa-brands fa-instagram"></i>
                    </div>
                    <div className="name-desc mt-4 flex flex-col gap-2 items-center justify-center">
                      <span className="name">{item.name}</span>
                      <span className="profession">{item.proff}</span>
                    </div>
                    <div className="ratings mt-4 flex gap-2">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>

                    <div className="buttons mt-2 md:mt-5 flex gap-2 justify-around">
                      <button onClick={() => handleTherapistAboutClick(item)} className="about-me">
                        About Me
                      </button>
                      <button onClick={() => handleTherapistHireClick(item)} className="hire-me">Hire Me</button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Footer />
    </>
  )
}

export default Therapistlist


// Comment
// import "./css/therapistlist.css"
// import avatar1 from "../assets/images/avatars/a1.jpg"
// import avatar2 from "../assets/images/avatars/a2.jpg"
// import avatar3 from "../assets/images/avatars/a3.jpg"
// import avatar4 from "../assets/images/avatars/a4.jpg"
// import avatar5 from "../assets/images/avatars/a5.jpg"
// import avatar6 from "../assets/images/avatars/a6.jpg"
// import avatar7 from "../assets/images/avatars/a7.jpg"

// import { useNavigate } from "react-router-dom"

// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react"

// // Import Swiper styles
// import "swiper/css"
// import "swiper/css/scrollbar"
// import "swiper/css/navigation"
// import "swiper/css/pagination"

// import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules"
// import Header from "./Header"
// import Footer from "./Footer"

// function Therapistlist() {
//   const navigate = useNavigate()

//   const handleTherapistAboutClick = (therapist) => {
//     navigate("/MindMendor/Therapist/about", { state: { therapist } })
//   }

//   const therapistItems = [
//     {
//       image: avatar1,
//       name: "Dr. Shreya Pandit",
//       proff: "Psychologist",
//       bio: "Dr. Shreya Pandit is a licensed psychologist with a passion for helping individuals navigate life's challenges with clarity and resilience. Her approach is evidence-based and tailored to each client's unique needs, drawing from cognitive-behavioral therapy (CBT), mindfulness, and trauma-informed care. With 10 years of experience, she specializes in anxiety, depression, relationships, and trauma, providing a supportive and collaborative space for growth and healing.",
//     },
//     {
//       image: avatar2,
//       name: "Dr. Emily Carter",
//       proff: "Clinical Psychologist",
//       bio: "Dr. Emily Carter is a clinical psychologist with extensive experience in treating mood disorders and anxiety. She employs a combination of psychodynamic therapy and cognitive-behavioral techniques to help her clients achieve lasting change and improved mental health.",
//     },
//     {
//       image: avatar4,
//       name: "Michael Rivera",
//       proff: "LCSW",
//       bio: "Michael Rivera is a Licensed Clinical Social Worker specializing in family therapy and child development. With a compassionate approach, he helps families navigate complex dynamics and fosters healthy communication patterns.",
//     },
//     {
//       image: avatar3,
//       name: "Dr. Priya Sharma",
//       proff: "Psychiatrist",
//       bio: "Dr. Priya Sharma is a board-certified psychiatrist with expertise in mood disorders and psychopharmacology. She combines medication management with therapeutic approaches to provide comprehensive mental health care.",
//     },
//     {
//       image: avatar1,
//       name: "Jessica Nguyen",
//       proff: "MFT",
//       bio: "Jessica Nguyen is a Marriage and Family Therapist specializing in couples counseling and relationship issues. She helps partners improve communication, resolve conflicts, and strengthen their emotional bonds.",
//     },
//     {
//       image: avatar5,
//       name: "David Thompson",
//       proff: "Psychologist",
//       bio: "David Thompson is a psychologist focusing on cognitive-behavioral therapy for anxiety and stress management. He empowers clients with practical tools to overcome challenges and achieve personal growth.",
//     },
//     {
//       image: avatar3,
//       name: "Dr. Sofia Alvarez",
//       proff: "Behavioral Therapist",
//       bio: "Dr. Sofia Alvarez is a behavioral therapist specializing in habit formation and lifestyle changes. She helps clients develop positive behaviors and overcome obstacles to achieve their personal and professional goals.",
//     },
//     {
//       image: avatar6,
//       name: "Alex Chen",
//       proff: "LGBTQ+ Affirmative Therapist",
//       bio: "Alex Chen is an LGBTQ+ affirmative therapist dedicated to providing a safe and supportive space for individuals exploring gender identity and sexuality. They offer guidance on coming out, transitioning, and building resilience in the face of discrimination.",
//     },
//     {
//       image: avatar7,
//       name: "Dr. Maria DeLuca",
//       proff: "Substance Abuse Counselor",
//       bio: "Dr. Maria DeLuca is a substance abuse counselor with extensive experience in addiction recovery. She employs a holistic approach to help clients overcome dependencies and build a foundation for lasting sobriety.",
//     },
//   ]

//   return (
//     <>
//       <Header />
//       <div className="therapistlist py-4 sm:py-8 px-4 sm:px-8 mb-10 bg-[#212121] min-h-screen w-full">
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={20}
//           centeredSlides={false}
//           grabCursor={true}
//           keyboard={{
//             enabled: true,
//           }}
//           breakpoints={{
//             640: {
//               slidesPerView: 2,
//               slidesPerGroup: 2,
//             },
//             1024: {
//               slidesPerView: 3,
//               slidesPerGroup: 3,
//             },
//           }}
//           scrollbar={false}
//           navigation={true}
//           pagination={{
//             clickable: true,
//           }}
//           modules={[Keyboard, Scrollbar, Navigation, Pagination]}
//           className="mySwiper container mx-auto"
//         >
//           {therapistItems.map((item, index) => (
//             <SwiperSlide key={index} className="py-4">
//               <div className="content flex flex-wrap justify-center items-center">
//                 <div className="card w-full max-w-sm mx-auto bg-white/10 backdrop-blur-md rounded-lg shadow-lg overflow-hidden">
//                   <div className="card-content flex flex-col items-center p-6">
//                     <div className="image w-32 h-32 rounded-full overflow-hidden mb-4">
//                       <img
//                         src={item.image || "/placeholder.svg"}
//                         alt={item.name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <div className="media-icons flex gap-4 mb-4">
//                       <i className="fa-brands fa-facebook text-xl text-gray-300 hover:text-blue-500 transition-colors"></i>
//                       <i className="fa-brands fa-twitter text-xl text-gray-300 hover:text-blue-400 transition-colors"></i>
//                       <i className="fa-brands fa-instagram text-xl text-gray-300 hover:text-pink-500 transition-colors"></i>
//                     </div>
//                     <div className="name-desc text-center mb-4">
//                       <h3 className="name text-xl font-semibold text-white mb-1">{item.name}</h3>
//                       <p className="profession text-sm text-gray-300">{item.proff}</p>
//                     </div>
//                     <div className="ratings flex gap-1 mb-4">
//                       {[...Array(5)].map((_, i) => (
//                         <i
//                           key={i}
//                           className={`fa-star ${i < 3 ? "fa-solid text-yellow-400" : "fa-regular text-gray-400"}`}
//                         ></i>
//                       ))}
//                     </div>
//                     <div className="buttons flex gap-4">
//                       <button
//                         onClick={() => handleTherapistAboutClick(item)}
//                         className="about-me px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
//                       >
//                         About Me
//                       </button>
//                       <button className="hire-me px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
//                         Hire Me
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//       <Footer />
//     </>
//   )
// }

// export default Therapistlist


