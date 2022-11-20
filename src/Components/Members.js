import ram from "../Assets/ram.avif";
import apoorv from "../Assets/apoorv.jpg";
import ravi from "../Assets/ravi.jpg";
import sakshi from "../Assets/sakshi.jpg";
import { motion as m } from "framer-motion";
const Members = () => {
  let members = [
    {
      id: 0,
      img: (
        <img
          src={ram}
          className="h-[75px] rounded-full absolute right-3"
          alt="img"
        />
      ),
      name: "ram kumar",
      work: "Dentist",
      joined: "11-OCT-2019",
      words:
        "This a just great words are less to express my fellings, but coaches here have made me achive my dream physique.",
    },
    {
      id: 1,
      img: (
        <img
          src={ravi}
          className="h-[75px] rounded-full absolute right-3"
          alt="img"
        />
      ),
      name: "ravi Deshmukh",
      work: "Engineer",
      joined: "1-jAN-2020",
      words:
        "People here are just great at what they do. They helped me put a real expectations and helped me to work on it.",
    },
    {
      id: 2,
      img: (
        <img
          src={sakshi}
          className="h-[75px] rounded-full absolute right-3"
          alt="img"
        />
      ),
      name: "Sakshi yadav",
      work: "House-Wife",
      joined: "12-APR-2022",
      words:
        "I remain occupied in my daily household work which lead to back pain and mental stress. But sunidha (COACH) here helped me a lot to work on my back pain and my mental stress.",
    },
    {
      id: 3,
      img: (
        <img
          src={apoorv}
          className="h-[75px] rounded-full absolute right-3"
          alt="img"
        />
      ),
      name: "Apoorv Pandey",
      work: "Engineer",
      joined: "03-OCT-2022",
      words: "Just awesome site to achive fitness goals.",
    },
  ];

  return (
    <m.div
      whileInView={{ x: "0%" }}
      initial={{ x: "-100%" }}
      transition={{ duration: 0.45, ease: "easeOut", staggerChildren: 0.3 }}
      exit={{ opacity: 1, x: "-100%" }}
      className="text-white bg-gradient-to-b from-black to-gray-900 p-8 lg:p-20"
    >
      <h1 className="text-center my-4 text-2xl md:text-3xl lg:text-5xl">
        MEET OTHERS WHO ARE JUST LIKE YOU
      </h1>
      <p className="text-center my-4 md:text-xl text-gray-400">
        We are team and we will work together to get to your goals as fast as
        possible. Depending on your subcription we will schedule differnt time
        during the day for your workout based on your lesiure.
      </p>
      <h1 className="text-center my-4 text-xl">SO !! ARE YOU READY </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map(({ id, img, name, work, joined, words }) => (
          <m.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            exit={{ opacity: 0 }}
            key={id}
            className=" p-4  relative"
          >
            <h1>{img}</h1>
            <div className="flex items-center">
              <h1 className="text-xl font-bold">{name}</h1>
              {"-"}
              <h2 className="text-xl font-semibold text-amber-600">{work}</h2>
            </div>
            <h4 className="my-4 flex">
              {joined} <p className="ml-2 text-gray-400">Currently</p>{" "}
            </h4>
            <p>"{words}"</p>
          </m.div>
        ))}
      </div>
    </m.div>
  );
};

export default Members;
