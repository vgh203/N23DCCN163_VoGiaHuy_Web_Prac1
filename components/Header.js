import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-md sticky top-0 z-10">
      <Link href="/">
        <h1 className="text-2xl font-bold text-indigo-600">MyBlog</h1>
      </Link>
      <nav className="space-x-6 hidden md:flex font-medium">
        <Link href="/" className="text-gray-600 hover:text-indigo-600">Home</Link>
        <Link href="#" className="text-gray-600 hover:text-indigo-600">Articles</Link>
        <Link href="#" className="text-gray-600 hover:text-indigo-600">About</Link>
      </nav>
      <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 font-medium transition">
        Subscribe
      </button>
    </header>
  );
}