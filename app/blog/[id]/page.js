import Header from '@/components/Header';
import Link from 'next/link';

async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export default async function BlogDetail({ params }) {
  // Ở Next.js 15, params phải được truy cập qua await
  const resolvedParams = await params; 
  const post = await getPost(resolvedParams.id);

  if (!post) {
    return <div className="text-center p-20 text-2xl font-bold text-red-500">Post not found!</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-4xl mx-auto py-12 px-6">
        <Link href="/" className="inline-flex items-center text-indigo-600 font-semibold mb-8 hover:-translate-x-2 transition-transform duration-300">
          &larr; Back to Blog
        </Link>
        
        <article className="bg-white p-10 md:p-14 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex gap-4 mb-6 text-sm text-gray-400 font-medium">
            <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-xs font-bold uppercase">Tech</span>
            <span className="flex items-center">ID: {post.id}</span>
            <span className="flex items-center">User: {post.userId}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 capitalize leading-tight">
            {post.title}
          </h1>
          
          <div className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
            {post.body}
            <br/><br/>
            {post.body}
          </div>
        </article>
      </main>
    </div>
  );
}