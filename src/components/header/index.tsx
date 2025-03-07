import Link from "next/link";

export function Header() {
  return (
    <header>
      <Link href="/">Header</Link>
      <Link href="/dashboard">DASHBOARD</Link>
      <Link href="/contatos">CONTATOS</Link>
      <Link href="/posts">POSTS</Link>
    </header>
  );
}