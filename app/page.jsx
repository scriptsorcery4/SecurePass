import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward, IoLogoGithub } from "react-icons/io";
export default function Home() {
  return (
    <>
      <div className="max-w-6xl mx-auto p-4 space-y-12">
        <div className="h-20 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <Image src={"/icon.png"} width={48} height={48} />
            <h1 className="text-xl font-bold">SecurePass</h1>
          </div>
          <button className="btn btn-secondary">TRY NOW</button>
        </div>
        <div className="flex md:flex-row gap-14 flex-col items-center">
          <div className="basis-1/2 flex flex-col gap-2">
            <h1 className="md:text-4xl text-3xl font-black">
              Create a Strong Password in an Instant!
            </h1>
            <p className="text-base-content/80 text-[15px]">
              Make your security a priority. Generate unique passwords tailored
              to your needs – quickly and effortlessly!
            </p>
            <div className="flex gap-2">
              <Link href={"/app"} className="btn btn-secondary">
                TRY NOW{" "}
                <IoIosArrowForward size={17} className="mt-[-3px] -ml-0.5" />
              </Link>
              <a
                href="https://github.com/scriptsorcery4"
                target="_blank"
                className="btn btn-ghost"
              >
                SEE OTHER
                <IoLogoGithub size={25} className="mt-[-2.5px]" />
              </a>
            </div>
          </div>
          <div className="basis-1/2 aspect-square">
            <video
              autoPlay
              loop
              muted
              className="video w-full h-full aspect-square rounded-lg border shadow-xl overflow-hidden"
            >
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="h-4"></div>
        <div className="flex md:flex-row flex-col justify-between text-center">
          <div>
            <h1 className="text-xl font-black">1000+ Users</h1>
            <p className="text-base-content/80">Join a thriving community!</p>
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div>
            <h1 className="text-xl font-black">1500+ Generated Passwords</h1>
            <p className="text-base-content/80">Secure your online presence!</p>
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div>
            <h1 className="text-xl font-black">99% Customer Satisfaction</h1>
            <p className="text-base-content/80">Trusted by our clients!</p>
          </div>
        </div>
        <div className="h-4"></div>
        <div className="flex md:flex-row flex-col gap-14 items-center">
          <div className="basis-1/2">
            <Image src={"/f1.png"} width={440} height={440} />
          </div>
          <div className="basis-1/2 space-y-4">
            <div>
              <h1 className="text-2xl font-black">Customize Your Password!</h1>
              <p className="text-base-content/80 text-[15px]">
                Select your desired character options for enhanced security.
                Choose from letters, numbers, and special characters to create
                the perfect password!
              </p>
            </div>
            <Link href={"/app"} className="btn btn-secondary">
              TRY NOW
            </Link>
          </div>
        </div>
        <div className="flex gap-14 md:flex-row flex-col-reverse items-center">
          <div className="basis-1/2 space-y-4 ">
            <div>
              <h1 className="text-2xl font-black">
                Include Special Characters?
              </h1>
              <p className="text-base-content/80 text-[15px]">
                Enhance your password security by choosing to include special
                characters. Select from symbols like @, #, $, and more to create
                a stronger password!
              </p>
            </div>
            <Link href={"/app"} className="btn btn-secondary">
              TRY NOW
            </Link>
          </div>
          <div className="basis-1/2">
            <Image src={"/f2.png"} width={440} height={440} />
          </div>
        </div>
        <div className="h-2"></div>
        <div className="flex flex-col gap-8 items-center w-full">
          <div className="text-center">
            <h1 className="text-2xl font-black">Frequently Asked Questions</h1>
            <p className="md:w-[440px] text-base-content/80 text-[14px]">
              Find answers to common questions about our password generator and
              security practices.
            </p>
          </div>
          <div className="w-full flex flex-col gap-2 items-center">
            <div className="collapse max-w-4xl collapse-arrow bg-[#f4f4f4]">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">
              Why should I use a password generator?
              </div>
              <div className="collapse-content">
                <p>Using a password generator helps create strong, unique passwords that enhance your online security.</p>
              </div>
            </div>
            <div className="collapse max-w-4xl collapse-arrow bg-[#f4f4f4]">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
              How do special characters improve password security?
              </div>
              <div className="collapse-content">
                <p>Special characters add complexity, making it harder for attackers to guess or crack your password.</p>
              </div>
            </div>
            <div className="collapse max-w-4xl collapse-arrow bg-[#f4f4f4]">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
              Can I customize my password length?
              </div>
              <div className="collapse-content">
                <p>Yes, you can choose the length of your password to meet your security needs.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-8"></div>
      </div>
      <div className="py-8 bg-[#fafafa] flex justify-center items-center">
        © 2024 SecurePass. All rights reserved.
      </div>
    </>
  );
}
