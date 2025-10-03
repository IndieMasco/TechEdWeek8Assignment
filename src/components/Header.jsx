import Link from "next/link";
import Image from "next/image";
import PickleJar from "@/../public/images/PickleJar.png";
import { Piedra } from "next/font/google";

const lugra = Piedra({
  weight: "400",
});

export default function Header() {
  return (
    <div className="nav-container">
      <div className="title-logo">
        <Image
          src={PickleJar}
          alt="A pickle jar filled with would you rather questions"
          className="header-logo"
        />
        <div className={`${lugra.className}`}>
          <h1 className="header-title">The Pickle Jar</h1>
        </div>
      </div>
      <nav>
        <Link className="header-nav" href={"/"}>
          Home{" "}
        </Link>
        <Link className="header-nav" href={"/form"}>
          Form{" "}
        </Link>
        <Link className="header-nav" href={"/wouldyourather"}>
          Comments
        </Link>
      </nav>
    </div>
  );
}
