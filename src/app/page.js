import Image from "next/image";
import PickleJar from "@/../public/images/PickleJar.png";

export default function HomePage() {
  return (
    <>
      <div className="main-content">
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
            Step right up and test your decision-making skills in The Pickle Jar
            your new favorite spot for the classic Would You Rather game!
            <br />
            <br />
            We&apos;ve bottled up a collection of the toughest, funniest, and
            most bizarre dilemmas just for you. Every question is a chance to
            dive into an intriguing hypothetical and see where you stand.{" "}
          </p>
        </div>
      </div>
    </>
  );
}
