import Link from "next/link";

export const metadata = {
  title: "The Wild Oasis",
};

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/cabins">Cabin</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </ul>
  );
}
