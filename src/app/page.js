import Image from "next/image";
import PickleJar from "@/../public/images/PickleJar.png";

export default function HomePage() {
  return (
    <>
      <h2 className="home-title">Welcome to the pickle jar</h2>
      <div className="home-container">
        <Image
          src={PickleJar}
          alt="A pickle jar filled with would you rather questions"
          className="home-jar"
          placeholder="blur"
          width={500}
          height={200}
        />
        <p className="home-text">
          fluff fluff fluff fluff fluff fluff fluff fluff fluff fluff fluff
          fluff fluff fluff fluff fluff fluff fluff fluff fluff fluff fluff
          fluff fluff fluff fluff fluff fluff fluff fluff fluff fluff fluff
          fluff fluff fluff fluff{" "}
        </p>
      </div>
    </>
  );
}
