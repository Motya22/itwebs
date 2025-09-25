import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-foreground text-background py-5">
      <nav className="px-4">
        <ul className="flex justify-center items-center flex-wrap gap-x-5">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/ssr"}>SSR</Link>
          </li>
          <li>
            <Link href={"/csr"}>CSR</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
