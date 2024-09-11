import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-center gap-8 text-lg font-medium p-8">
      <Link href="/">HOME</Link>
      <Link href="/about">ABOUT</Link>
      <Link href="/contact">CONTACT</Link>
    </header>
  );
}
