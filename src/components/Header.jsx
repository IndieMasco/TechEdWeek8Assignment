import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>The Pickle Jar</h1>
      <nav>
        <Link href={"/"}>Home </Link>
        <Link href={"/form"}>Form </Link>
        <Link href={"/wouldyourather"}>Comments</Link>
      </nav>
    </header>
  );
}
