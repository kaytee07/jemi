import Navbar from "@/components/Navbar";
import { navItems } from "@/data";

const history = () => {

    return(
    <main>
        <Navbar logo="JEMI" navItems={navItems}/>
        <div className="md:mx-[10rem] max-sm:px-10 py-5">
          <h2 className="heading text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Church History
          </h2>
          <div className="flex mt-7  flex-col gap-5 justify-evenly ">
           <div className="md:flex md:flex-row md:justify-evenly">
                <p className="leading-7 md:w-[40%] text-justify">
                Jesus Elevation Ministries International was born out of a profound calling, 
                vision and unwavering faith on June 3, 2010, by our beloved founder, Matilda Gbadoku.
                What began as a small gathering of devoted believers has blossomed into a thriving spiritual family, 
                united by a shared passion for Christ and a commitment to His teachings.
                </p>
                <img className="md:w-[50%]" src="/images/history0.jpg" alt="history" />
            </div>
            <div className="md:flex md:flex-row md:flex-row-reverse md:justify-evenly">
                <p className="leading md:w-[40%] text-justify">
                From the very beginning, our church has been dedicated to spreading the Gospel of Jesus Christ, 
                nurturing the spiritual growth of our members, and serving our community with unwavering love and compassion.
                Our journey has been marked by countless miracles and testimonies of lives t
                ransformed by the power of God&apos;s love.
                </p>
                <img className="md:w-[50%]" src="/images/history1.jpg" alt="history" />
            </div>
            <div className="md:flex md:flex-row md:justify-evenly">
                <p className="leading md:w-[40%] text-justify">
                Each step forward has been guided by faith, prayer, and the tireless 
                dedication of our founder and congregation. We have seen hearts healed, 
                families restored, and hope rekindled 
                in countless souls.As we continue to grow, we remain steadfast in our mission,
                inspired by the vision that Matilda Gbadoku set forth, and driven by a deep desire to bring the light of Christ to every corner of the world.
                </p>
                <img className="md:w-[50%]" src="/images/history2.jpg" alt="history" />
             </div>
            <p></p>
          </div>
        </div>
    </main>
    )
}   

export default history