import Link from 'next/link';
import Badge from './Badge';

export default function BlogCard({ post }) {
  return (
    <div className="border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 bg-white flex flex-col h-full">
      <div className="mb-4"><Badge label="Tech" /></div>
      <h2 className="font-bold text-xl mb-3 line-clamp-2 capitalize text-gray-900">
        {post.title}
      </h2>
      <p className="text-gray-500 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
        {post.body}
      </p>
      <div className="flex justify-between items-center pt-4 border-t border-gray-50">
        <span className="text-sm text-gray-400 font-medium">User #{post.userId}</span>
        <Link href={`/blog/${post.id}`} className="text-indigo-600 font-semibold hover:text-indigo-800 text-sm transition">
          Read More &rarr;
        </Link>
      </div>
    </div>
  );
}