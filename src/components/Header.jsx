import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1 className="header-title">The Pickle Jar</h1>
      <nav className="header-nav">
        <Link href={"/"}>Home </Link>
        <Link href={"/form"}>Form </Link>
        <Link href={"/wouldyourather"}>Comments</Link>
      </nav>
    </header>
  );
}
