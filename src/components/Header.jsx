//TODO: set up the navigation in here
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/wouldyourather"}>Would You Rather?</Link>
      </nav>
    </header>
  );
}
