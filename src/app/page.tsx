import image1 from "../../public/20241101_181708.png";
import image2 from "../../public/file (1).png";
import image3 from "../../public/Programing-Icons/icons8-html-5-60.png";
import image4 from "../../public/Programing-Icons/icons8-css3-60.png";
import image5 from "../../public/Programing-Icons/icons8-typescript-60.png";
import image6 from "../../public/Programing-Icons/icons8-python-60.png";
import image7 from "../../public/Programing-Icons/icons8-javascript-60.png";
import image8 from "../../public/Programing-Icons/icons8-react-60.png";
import image9 from "../../public/Programing-Icons/Next-icon.webp";
import image10 from "../../public/Programing-Icons/icons8-tailwind-css-60.png";
import image11 from "../../public/Programing-Icons/icons8-visual-studio-code-2019-60.png";
import image12 from "../../public/Programing-Icons/icons8-figma-60.png";
import image13 from "../../public/projects/Governor-Image.jpg";
import image14 from "../../public/projects/Amazone image.webp";
import image15 from "../../public/projects/login.jpg";
import image16 from "../../public/projects/age-calculations.jpg";
import image17 from "../../public/projects/resume-builder.jpg";
import image18 from "../../public/projects/Portfolio (2).jpg";
import Image from "next/image";
import Link from "next/link";
export default function page() {
  return (
    <>
      <div className="bg-black">
        {/* Home Section */}
        <div
          className="w-full h-[530px] flex relative md:justify-between overflow-hidden"
        >
          <div className="text-white w-[800px] px-[5%] py-52 sm:px-[7%] md:px-[10%]  z-10">
            <p className=" md:text-[1.5rem]">UI/UX Designer</p>
            <h1 className="text-xl sm:text-3xl md:text-[2.5rem] font-bold leading-tight md:leading-snug">
              Hi, i'm <span>Mohsin</span>,<br /> Ali From Pakistan, <br />A
              FullStack <span>Web-Developer.</span>
            </h1>
          </div>
          <Image
            src={image1}
            alt="Image"
            className="w-[400px] absolute right-[-150px] md:right-[-100px] lg:static lg:w-[600px] h-full"
          ></Image>
        </div>
        {/* About Section */}

        <div
          id="About"
          className=" lg:flex lg:justify-between place-items-center lg:place-items-start px-[5%] sm:px-[7%] md:px-[10%] w-full h-full lg:h-[600px] overflow-hidden mt-8 md:mt-16 "
        >
          <div className="w-[350px] sm:w-[400px] lg:w-[45%] xl:w-[40%] 2xl:w-[35%] bg-[#262626] rounded-lg mt-8">
            <Image
              src={image2}
              alt="Image"
              className="w-full h-[400px] sm:h-[500px] bg-cover object-fill px-5"
            />
          </div>

          <div className="lg:w-[50%] xl:w-[55%] 2xl:w-[60%]">
            <h1 className="text-white text-[3rem] text-center lg:text-left font-bold mt-5">
              About Me
            </h1>
            <p className="text-[#adadad] text-[1.1rem] italic mt-2 lg:mt-0 capitalize">
              I am a UI/UX Designer and FullStack Web Developer, with a passion
              for creating visually appealing and user-friendly interfaces. My
              favorite part of programming is the problem-solving aspect. i love
              the feeling of finally figuring out a solution to a problem. my
              core stack is
              <span> React, Next.js, and Node.js.</span> i am also familiar with
              <span> Typescript.</span> i am always looking to learn new
              technologies. <br />
              when i'm not cooding, i enjoy playing video games, watching movies
              and surfing over web to keep myself updated.
            </p>
            <h2 className="text-[2rem] font-bold py-2">
              <span>My BackPack</span>
            </h2>
            <ul>
              <li className="italic text-white text-[1.1rem]">
                <p>Technologies I Used!</p>
              </li>
            </ul>

            <div className="flex flex-wrap gap-4 mt-2">
              <div className="box1">
                <Image src={image3} alt="html" className="w-full h-full" />
              </div>
              <div className="box1">
                <Image src={image4} alt="Css3" className="w-full h-full" />
              </div>
              <div className="box1">
                <Image
                  src={image5}
                  alt="typescript"
                  className="w-full h-full"
                />
              </div>
              <div className="box1">
                <Image src={image6} alt="pythone" className="w-full h-full" />
              </div>
              <div className="box1">
                <Image
                  src={image7}
                  alt="javascript"
                  className="w-full h-full"
                />
              </div>
              <div className="box1">
                <Image src={image8} alt="React" className="w-full h-full" />
              </div>
              <div className="box1">
                <Image src={image9} alt="Next.js" className="w-full h-full" />
              </div>
              <div className="box1">
                <Image src={image10} alt="tailwind" className="w-full h-full" />
              </div>
              <div className="box1">
                <Image src={image11} alt="vs code" className="w-full h-full" />
              </div>
              <div className="box1">
                <Image src={image12} alt="figma" className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
        {/* Services Section */}

        <div
          id="Services"
          className="w-full h-full lg:h-[650px] place-items-center lg:place-items-start overflow-hidden mt-14 px-[5%] sm:px-[7%] md:px-[10%] text-white "
        >
          <div>
            <h1 className="text-[3rem] mt-3 font-bold text-center md:text-left">
              My Services
            </h1>
            <div className="sm:flex justify-between flex-wrap ">
              <div className="box w-full sm:w-[48%] md:w-[30%] lg:w-[31%] cursor-pointer">
                <h2 className="pt-10 md:pt-8 text-2xl font-semibold">
                  Web Development
                </h2>
                <p className="text-sm lg:text-base mx-2 mt-3 capitalize">
                  I specialize in creating responsive, and dynamic websites
                  tailored to yours needs.
                </p>
                <span className="absolute bottom-6 left-[50%] translate-x-[-50%] cursor-pointer">
                  Learn more
                </span>
              </div>
              <div className="box w-full sm:w-[48%] md:w-[30%] lg:w-[31%] cursor-pointer">
                <h2 className="pt-10 md:pt-8 text-2xl font-semibold">
                  UI/UX Design
                </h2>
                <p className="text-sm lg:text-base mx-2 mt-3 capitalize">
                  craft visually appealing and user-friendly interfaces for your
                  projects.
                </p>
                <span className="absolute bottom-6 left-[50%] translate-x-[-50%] cursor-pointer">
                  Learn more
                </span>
              </div>
              <div className="box w-full sm:w-[48%] md:w-[30%] lg:w-[31%] cursor-pointer">
                <h2 className="pt-10 md:pt-8 text-2xl font-semibold">
                  SEO Optimization
                </h2>
                <p className="text-sm lg:text-base mx-2 mt-3 capitalize">
                  optimize your website to rank higher on search engines,
                  increase traffic and improve performance.
                </p>
                <span className="absolute bottom-6 left-[50%] translate-x-[-50%] cursor-pointer">
                  Learn more
                </span>
              </div>
              <div className="box w-full sm:w-[48%] md:w-[30%] lg:w-[31%] cursor-pointer">
                <h2 className="pt-10 md:pt-8 text-2xl font-semibold">
                  Web Hosting
                </h2>
                <p className="text-sm lg:text-base mx-2 mt-3 capitalize">
                  host your website on a secure and fast server.
                </p>
                <span className="absolute bottom-6 left-[50%] translate-x-[-50%] cursor-pointer">
                  Learn more
                </span>
              </div>
              <div className="box w-full sm:w-[48%] md:w-[30%] lg:w-[31%] cursor-pointer">
                <h2 className="pt-10 md:pt-8 text-2xl font-semibold">
                  Maintenence
                </h2>
                <p className="text-sm lg:text-base mx-2 mt-3 capitalize">
                  Keep your website up to date and secure.
                </p>
                <span className="absolute bottom-6 left-[50%] translate-x-[-50%] cursor-pointer">
                  Learn more
                </span>
              </div>
              <div className="box w-full sm:w-[48%] md:w-[30%] lg:w-[31%] cursor-pointer">
                <h2 className="pt-10 md:pt-8 text-2xl font-semibold">
                  E-Commerce
                </h2>
                <p className="text-sm lg:text-base mx-2 mt-3 capitalize">
                  Build an online store to sell your products.
                </p>
                <span className="absolute bottom-6 left-[50%] translate-x-[-50%] cursor-pointer">
                  Learn more
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Project Section */}

        <div
          id="Projects"
          className="w-full h-full lg:h-[1150px] overflow-hidden place-items-center lg:place-items-start px-[5%] sm:px-[7%] md:px-[10%] mt-10 md:mt-0 text-white"
        >
          <h1 className="mt-10 font-bold">My Projects</h1>
          <div className="sm:flex justify-between flex-wrap overflow-hidden mt-3">
            <div className="work w-full h-[500px] md:h-[400px] sm:w-[48%] md:w-[30%] mt-10 relative rounded-xl overflow-hidden">
              <Image
                src={image13}
                alt="image"
                className="w-full h-full object-fill rounded-xl"
              />
              <div
                className="project-contet w-full h-0 absolute left-0 top-0 flex justify-center items-center flex-col px-10 gap-5 text-center text-base overflow-hidden duration-500"
                style={{
                  background: "linear-gradient(rgba(0, 0, 0, 0.5), #ff0000)",
                }}
              >
                <h2 className="text-3xl">Governor Website Clone</h2>
                <p>
                  This Governor Website is full Resposive, Build in Next.js,
                  Click The Link Button, See The website and Send me also
                  Feedbacks.
                </p>
                <Link
                  href="https://governor-website-clone.vercel.app"
                  className="text-[#ff004f] bg-white w-[70px] h-[70px] rounded-full flex justify-center items-center text-2xl mt-8 duration-500 hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0 0 64 64"
                  >
                    <path d="M 40 10 C 38.896 10 38 10.896 38 12 C 38 13.104 38.896 14 40 14 L 47.171875 14 L 30.585938 30.585938 C 29.804938 31.366938 29.804938 32.633063 30.585938 33.414062 C 30.976938 33.805063 31.488 34 32 34 C 32.512 34 33.023063 33.805062 33.414062 33.414062 L 50 16.828125 L 50 24 C 50 25.104 50.896 26 52 26 C 53.104 26 54 25.104 54 24 L 54 12 C 54 10.896 53.104 10 52 10 L 40 10 z M 18 12 C 14.691 12 12 14.691 12 18 L 12 46 C 12 49.309 14.691 52 18 52 L 46 52 C 49.309 52 52 49.309 52 46 L 52 34 C 52 32.896 51.104 32 50 32 C 48.896 32 48 32.896 48 34 L 48 46 C 48 47.103 47.103 48 46 48 L 18 48 C 16.897 48 16 47.103 16 46 L 16 18 C 16 16.897 16.897 16 18 16 L 30 16 C 31.104 16 32 15.104 32 14 C 32 12.896 31.104 12 30 12 L 18 12 z"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="work w-full h-[500px] md:h-[400px] sm:w-[48%] md:w-[30%] mt-10 relative rounded-xl overflow-hidden">
              <Image
                src={image14}
                alt="image"
                className="w-full h-full object-fill rounded-xl"
              />
              <div
                className="project-contet w-full h-0 absolute left-0 top-0 flex justify-center items-center flex-col px-10 gap-5 text-center text-base overflow-hidden duration-500"
                style={{
                  background: "linear-gradient(rgba(0, 0, 0, 0.5), #ff0000)",
                }}
              >
                <h2 className="text-3xl">Amazone Website Clone</h2>
                <p>
                  This Amazone Ecommerce Website , Build in Core Html, and Css,
                  Click The Link Button, See The website and Send me also
                  Feedbacks.
                </p>
                <Link
                  href="https://amazon-in-clone.vercel.app/"
                  className="text-[#ff004f] bg-white w-[70px] h-[70px] rounded-full flex justify-center items-center text-2xl mt-8 duration-500 hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0 0 64 64"
                  >
                    <path d="M 40 10 C 38.896 10 38 10.896 38 12 C 38 13.104 38.896 14 40 14 L 47.171875 14 L 30.585938 30.585938 C 29.804938 31.366938 29.804938 32.633063 30.585938 33.414062 C 30.976938 33.805063 31.488 34 32 34 C 32.512 34 33.023063 33.805062 33.414062 33.414062 L 50 16.828125 L 50 24 C 50 25.104 50.896 26 52 26 C 53.104 26 54 25.104 54 24 L 54 12 C 54 10.896 53.104 10 52 10 L 40 10 z M 18 12 C 14.691 12 12 14.691 12 18 L 12 46 C 12 49.309 14.691 52 18 52 L 46 52 C 49.309 52 52 49.309 52 46 L 52 34 C 52 32.896 51.104 32 50 32 C 48.896 32 48 32.896 48 34 L 48 46 C 48 47.103 47.103 48 46 48 L 18 48 C 16.897 48 16 47.103 16 46 L 16 18 C 16 16.897 16.897 16 18 16 L 30 16 C 31.104 16 32 15.104 32 14 C 32 12.896 31.104 12 30 12 L 18 12 z"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="work w-full h-[500px] md:h-[400px] sm:w-[48%] md:w-[30%] mt-10 relative rounded-xl overflow-hidden">
              <Image
                src={image15}
                alt="image"
                className="w-full h-full object-fill rounded-xl"
              />
              <div
                className="project-contet w-full h-0 absolute left-0 top-0 flex justify-center items-center flex-col px-10 gap-5 text-center text-base overflow-hidden duration-500"
                style={{
                  background: "linear-gradient(rgba(0, 0, 0, 0.5), #ff0000)",
                }}
              >
                <h2 className="text-3xl">Login Page</h2>
                <p>
                  This Login Page is full Resposive, Build in Core Html, and
                  Css, Click The Link Button, See The website and Send me also
                  Feedbacks.
                </p>
                <Link
                  href="https://login-page-gules-kappa.vercel.app"
                  className="text-[#ff004f] bg-white w-[70px] h-[70px] rounded-full flex justify-center items-center text-2xl mt-8 duration-500 hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0 0 64 64"
                  >
                    <path d="M 40 10 C 38.896 10 38 10.896 38 12 C 38 13.104 38.896 14 40 14 L 47.171875 14 L 30.585938 30.585938 C 29.804938 31.366938 29.804938 32.633063 30.585938 33.414062 C 30.976938 33.805063 31.488 34 32 34 C 32.512 34 33.023063 33.805062 33.414062 33.414062 L 50 16.828125 L 50 24 C 50 25.104 50.896 26 52 26 C 53.104 26 54 25.104 54 24 L 54 12 C 54 10.896 53.104 10 52 10 L 40 10 z M 18 12 C 14.691 12 12 14.691 12 18 L 12 46 C 12 49.309 14.691 52 18 52 L 46 52 C 49.309 52 52 49.309 52 46 L 52 34 C 52 32.896 51.104 32 50 32 C 48.896 32 48 32.896 48 34 L 48 46 C 48 47.103 47.103 48 46 48 L 18 48 C 16.897 48 16 47.103 16 46 L 16 18 C 16 16.897 16.897 16 18 16 L 30 16 C 31.104 16 32 15.104 32 14 C 32 12.896 31.104 12 30 12 L 18 12 z"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="work w-full h-[500px] md:h-[400px] sm:w-[48%] md:w-[30%] mt-10 relative rounded-xl overflow-hidden">
              <Image
                src={image16}
                alt="image"
                className="w-full h-full object-fill rounded-xl"
              />
              <div
                className="project-contet w-full h-0 absolute left-0 top-0 flex justify-center items-center flex-col px-10 gap-5 text-center text-base overflow-hidden duration-500"
                style={{
                  background: "linear-gradient(rgba(0, 0, 0, 0.5), #ff0000)",
                }}
              >
                <h2 className="text-3xl">Age Finder</h2>
                <p>
                  This Age Finder Website taking one Input and Give You output,
                  Build in Html, Css, and JavaScript, Click The Link Button, See
                  The website and Send me also Feedbacks.
                </p>
                <Link
                  href="https://age-finder-ecru.vercel.app/"
                  className="text-[#ff004f] bg-white w-[70px] h-[70px] rounded-full flex justify-center items-center text-2xl mt-8 duration-500 hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0 0 64 64"
                  >
                    <path d="M 40 10 C 38.896 10 38 10.896 38 12 C 38 13.104 38.896 14 40 14 L 47.171875 14 L 30.585938 30.585938 C 29.804938 31.366938 29.804938 32.633063 30.585938 33.414062 C 30.976938 33.805063 31.488 34 32 34 C 32.512 34 33.023063 33.805062 33.414062 33.414062 L 50 16.828125 L 50 24 C 50 25.104 50.896 26 52 26 C 53.104 26 54 25.104 54 24 L 54 12 C 54 10.896 53.104 10 52 10 L 40 10 z M 18 12 C 14.691 12 12 14.691 12 18 L 12 46 C 12 49.309 14.691 52 18 52 L 46 52 C 49.309 52 52 49.309 52 46 L 52 34 C 52 32.896 51.104 32 50 32 C 48.896 32 48 32.896 48 34 L 48 46 C 48 47.103 47.103 48 46 48 L 18 48 C 16.897 48 16 47.103 16 46 L 16 18 C 16 16.897 16.897 16 18 16 L 30 16 C 31.104 16 32 15.104 32 14 C 32 12.896 31.104 12 30 12 L 18 12 z"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="work w-full h-[500px] md:h-[400px] sm:w-[48%] md:w-[30%] mt-10 relative rounded-xl overflow-hidden">
              <Image
                src={image17}
                alt="image"
                className="w-full h-full object-fill rounded-xl"
              />
              <div
                className="project-contet w-full h-0 absolute left-0 top-0 flex justify-center items-center flex-col px-10 gap-5 text-center text-base overflow-hidden duration-500"
                style={{
                  background: "linear-gradient(rgba(0, 0, 0, 0.5), #ff0000)",
                }}
              >
                <h2 className="text-3xl">Resume Builder</h2>
                <p>
                  This Resume Builder Taking Inputs and Generate a Professional
                  Resume , Build in Core Html, Css, and JavaScript, Click The
                  Link Button, See The website and Send me also Feedbacks.
                </p>
                <Link
                  href="https://hackathone-milestone-5-two.vercel.app/"
                  className="text-[#ff004f] bg-white w-[70px] h-[70px] rounded-full flex justify-center items-center text-2xl mt-8 duration-500 hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0 0 64 64"
                  >
                    <path d="M 40 10 C 38.896 10 38 10.896 38 12 C 38 13.104 38.896 14 40 14 L 47.171875 14 L 30.585938 30.585938 C 29.804938 31.366938 29.804938 32.633063 30.585938 33.414062 C 30.976938 33.805063 31.488 34 32 34 C 32.512 34 33.023063 33.805062 33.414062 33.414062 L 50 16.828125 L 50 24 C 50 25.104 50.896 26 52 26 C 53.104 26 54 25.104 54 24 L 54 12 C 54 10.896 53.104 10 52 10 L 40 10 z M 18 12 C 14.691 12 12 14.691 12 18 L 12 46 C 12 49.309 14.691 52 18 52 L 46 52 C 49.309 52 52 49.309 52 46 L 52 34 C 52 32.896 51.104 32 50 32 C 48.896 32 48 32.896 48 34 L 48 46 C 48 47.103 47.103 48 46 48 L 18 48 C 16.897 48 16 47.103 16 46 L 16 18 C 16 16.897 16.897 16 18 16 L 30 16 C 31.104 16 32 15.104 32 14 C 32 12.896 31.104 12 30 12 L 18 12 z"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="work w-full h-[500px] md:h-[400px] sm:w-[48%] md:w-[30%] mt-10 relative rounded-xl overflow-hidden">
              <Image
                src={image18}
                alt="image"
                className="w-full h-full object-fill rounded-xl"
              />
              <div
                className="project-contet w-full h-0 absolute left-0 top-0 flex justify-center items-center flex-col px-10 gap-5 text-center text-base overflow-hidden duration-500"
                style={{
                  background: "linear-gradient(rgba(0, 0, 0, 0.5), #ff0000)",
                }}
              >
                <h2 className="text-3xl">Portfolio</h2>
                <p>
                  This Portfolio is full Resposive, If you Want To Build Your
                  Portfolio than Please Contact me, This Portfolio Build in
                  Next.js, Click The Link Button, See The website and Send me
                  also Feedbacks.
                </p>
                <Link
                  href="#"
                  className="text-[#ff004f] bg-white w-[70px] h-[70px] rounded-full flex justify-center items-center text-2xl mt-8 duration-500 hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0 0 64 64"
                  >
                    <path d="M 40 10 C 38.896 10 38 10.896 38 12 C 38 13.104 38.896 14 40 14 L 47.171875 14 L 30.585938 30.585938 C 29.804938 31.366938 29.804938 32.633063 30.585938 33.414062 C 30.976938 33.805063 31.488 34 32 34 C 32.512 34 33.023063 33.805062 33.414062 33.414062 L 50 16.828125 L 50 24 C 50 25.104 50.896 26 52 26 C 53.104 26 54 25.104 54 24 L 54 12 C 54 10.896 53.104 10 52 10 L 40 10 z M 18 12 C 14.691 12 12 14.691 12 18 L 12 46 C 12 49.309 14.691 52 18 52 L 46 52 C 49.309 52 52 49.309 52 46 L 52 34 C 52 32.896 51.104 32 50 32 C 48.896 32 48 32.896 48 34 L 48 46 C 48 47.103 47.103 48 46 48 L 18 48 C 16.897 48 16 47.103 16 46 L 16 18 C 16 16.897 16.897 16 18 16 L 30 16 C 31.104 16 32 15.104 32 14 C 32 12.896 31.104 12 30 12 L 18 12 z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full h-11 mt-8 flex justify-center items-center">
            <button className="h-full w-52 rounded-xl text-lg font-medium bg-[#ff004f] cursor-pointer border-none outline-none duration-300 hover:bg-[#b80e4a] active:bg-[#ff004f]">
              See More
            </button>
          </div>
        </div>
        {/* Contact Section */}

        <div
          id="Contact"
          className="w-full h-[900px] md:h-[550px] px-[5%] md:px-[7%] lg:px-[10%] text-white overflow-hidden mt-10 md:mt-0 "
        >
          <h1 className="text-[3rem] font-bold mb-12">Contact Me</h1>
          <div className="md:flex justify-between">
            <div className="w-full md:w-[35%]">
              <p className="my-8 text-lg">
                <svg
                  className="inline-block mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="#ff004f"
                >
                  <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                </svg>{" "}
                m0826352@gmail.com
              </p>
              <p className="my-8 text-lg">
                <svg
                  className="inline-block mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="#ff004f"
                >
                  <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                </svg>{" "}
                0310-3653227
              </p>
              <div className="flex gap-4 mt-14">
                <Link
                  href="https://www.linkedin.com/in/muhammad-mohsin-m0826/"
                  target="_blank"
                  className="duration-500 hover:translate-y-[-10px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#0078d4"
                      d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
                    ></path>
                    <path
                      d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
                      opacity=".05"
                    ></path>
                    <path
                      d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
                      opacity=".07"
                    ></path>
                    <path
                      fill="#fff"
                      d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
                    ></path>
                  </svg>
                </Link>

                <Link
                  href="https://github.com/Mohsin2635"
                  target="_blank"
                  className="duration-500 hover:translate-y-[-10px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="white"
                  >
                    <path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 31.66536 35.956939 38.122519 29 40.251953 L 29 35.136719 C 29 33.226635 27.899316 31.588619 26.308594 30.773438 A 10 8 0 0 0 32.4375 18.720703 C 32.881044 17.355414 33.376523 14.960672 32.199219 13.076172 C 29.929345 13.076172 28.464667 14.632086 27.765625 15.599609 A 10 8 0 0 0 24 15 A 10 8 0 0 0 20.230469 15.59375 C 19.529731 14.625773 18.066226 13.076172 15.800781 13.076172 C 14.449711 15.238817 15.28492 17.564557 15.732422 18.513672 A 10 8 0 0 0 21.681641 30.779297 C 20.3755 31.452483 19.397283 32.674042 19.097656 34.15625 L 17.783203 34.15625 C 16.486203 34.15625 15.98225 33.629234 15.28125 32.740234 C 14.58925 31.851234 13.845172 31.253859 12.951172 31.005859 C 12.469172 30.954859 12.144453 31.321484 12.564453 31.646484 C 13.983453 32.612484 14.081391 34.193516 14.650391 35.228516 C 15.168391 36.160516 16.229687 37 17.429688 37 L 19 37 L 19 40.251953 C 12.043061 38.122519 7 31.66536 7 24 C 7 14.593391 14.593385 7 24 7 z"></path>
                  </svg>
                </Link>

                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="duration-500 hover:translate-y-[-10px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#3F51B5"
                      d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                    ></path>
                    <path
                      fill="#FFF"
                      d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"
                    ></path>
                  </svg>
                </Link>

                <Link
                  href="https://www.twitter.com/"
                  target="_blank"
                  className="duration-500 hover:translate-y-[-10px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="SkyBlue"
                      d="M46.105,11.02c-1.551,0.687-3.219,1.145-4.979,1.362c1.789-1.062,3.166-2.756,3.812-4.758	c-1.674,0.981-3.529,1.702-5.502,2.082C37.86,8.036,35.612,7,33.122,7c-4.783,0-8.661,3.843-8.661,8.582	c0,0.671,0.079,1.324,0.226,1.958c-7.196-0.361-13.579-3.782-17.849-8.974c-0.75,1.269-1.172,2.754-1.172,4.322	c0,2.979,1.525,5.602,3.851,7.147c-1.42-0.043-2.756-0.438-3.926-1.072c0,0.026,0,0.064,0,0.101c0,4.163,2.986,7.63,6.944,8.419	c-0.723,0.198-1.488,0.308-2.276,0.308c-0.559,0-1.104-0.063-1.632-0.158c1.102,3.402,4.299,5.889,8.087,5.963	c-2.964,2.298-6.697,3.674-10.756,3.674c-0.701,0-1.387-0.04-2.065-0.122C7.73,39.577,12.283,41,17.171,41	c15.927,0,24.641-13.079,24.641-24.426c0-0.372-0.012-0.742-0.029-1.108C43.483,14.265,44.948,12.751,46.105,11.02"
                    ></path>
                  </svg>
                </Link>
              </div>
              <div>
                <Link href="https://hakathone-milestone1-2.vercel.app/">
                  <button
                    className="w-[200px] h-12 bg-[#ff004f] rounded-xl mt-12 text-xl border-none cursor-pointer duration-500 hover:bg-[#b80e4a]
                active:bg-[#ff004f]"
                  >
                    My Resume
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-[60%] mt-8 md:mt-0">
              <form className="flex flex-col gap-6">
                <input
                  className="w-full h-[50px] rounded-md pl-5 bg-[#262626]
                text-lg outline-none border-none"
                  type="text"
                  name="Name"
                  placeholder="Enter Your Name"
                  required
                />
                <input
                  className="w-full h-[50px] rounded-md pl-5 bg-[#262626]
                text-lg outline-none border-none"
                  type="email"
                  name="Email"
                  placeholder="Enter Your Email"
                  required
                />
                <textarea
                  className="w-full h-[150px] rounded-md pt-4 pl-5 bg-[#262626]
                text-lg outline-none border-none"
                  name="Message"
                  placeholder="Enter Your Message"
                ></textarea>
                <button
                  type="submit"
                  className="w-[200px] h-[45px] text-base rounded-lg bg-[#ff004f] border-none duration-500 hover:bg-[#b80e4a] active:bg-[#ff004f]"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* Footer Section */}
        <div className="w-full h-14 text-white flex justify-center items-center bg-[#262626]">
          <p className="inline-block">
            Copyright © Mohsin Made{" "}
            <span className="inline-block ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#ff004f"
              >
                <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
              </svg>
            </span>{" "}
            This Porfolio 2024,
          </p>
        </div>
      </div>
    </>
  );
}
