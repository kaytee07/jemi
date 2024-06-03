import Navbar from '@/components/Navbar'
import { navItems } from '@/data'
import React from 'react'

const AboutUs = () => {
  return (
      <main>
        <Navbar logo="JEMI" navItems={navItems}/>
        <div className="md:mx-[10rem] max-sm:px-10 py-5">
          <h2 className="heading text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            About Us
          </h2>
          <div className="flex mt-7  flex-col gap-5 justify-evenly ">
            <h3 className="scroll-m-20 text-black text-2xl font-semibold tracking-tight">
              What we believe
            </h3>
            <p className="leading-7">
              Jesus Elevation Ministries International is a non-denominational 
              church dedicated to winning souls for Christ, establishing missions, and taking Christ-centered actions.
            </p>
          </div>
          <div className="flex mt-7  flex-col gap-5 justify-evenly ">
            <h3 className="scroll-m-20 text-black text-2xl font-semibold tracking-tight">
              Aims And Objectives
            </h3>
            <ul className="list-disc">
              <li>To preach the gospel worldwide, especially in rural areas.</li>
              <li>Organizing crusades, personal evangelism, revival meetings, and camp meetings.</li>
              <li>Promoting the gospel through local language, internet, radio, television, and distribution of tracts.</li>
              <li>Teaching believers to live by the Word of God (Luke 4:4).</li>
              <li>Promoting unity as the body of Christ, with Christ as the foundation.</li>
              <li>Encouraging believers to observe and be doers of the Word, and to fellowship with the Holy Spirit (Philippians 4:19).</li>
              <li>Helping believers mature in the Lord and recognize their calling, and providing leadership training through Bible schools, seminars, and conferences.</li>
            </ul>
          </div>
          <div className="flex mt-7  flex-col gap-5 justify-evenly ">
            <h3 className="scroll-m-20 text-black text-2xl font-semibold tracking-tight">
              Our Vision
            </h3>
            <ul className="list-disc">
              <li>To preach the gospel in all nations and rural areas.</li>
              <li>Training believers for mission work (Matthew 9:37-38):<br/>
                - Missionaries <br/>
                - Child evangelism <br/>
                - Training for men, women, and youth
              </li>
              <li>Caring for the elderly and orphans, and addressing the needs of prisoners.</li>
              <li>Establishing Bible schools, nursery schools, and vocational centers for the handicapped.</li>
            </ul>
          </div>
    </div>
      </main>
  )
}

export default AboutUs