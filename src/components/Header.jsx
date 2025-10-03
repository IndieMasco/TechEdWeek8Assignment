//TODO: set up the navigation in here
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <Link href={"/"}>Home </Link>
        <Link href={"/form"}>Form </Link>
        <Link href={"/wouldyourather"}>Comments</Link>
      </nav>
    </header>
  );
}
