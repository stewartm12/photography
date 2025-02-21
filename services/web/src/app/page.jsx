import Link from 'next/link';

export default async function Home() {
  return (
    <div>
      <span>PICS BY TORI</span>
      <Link href="/categories">Categories </Link>
    </div>
  );
}
