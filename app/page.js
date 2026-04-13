import Header from '@/components/Header';
import BlogCard from '@/components/BlogCard';

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto py-12 px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">Latest Articles</h2>
          <p className="mt-4 text-gray-500 text-lg">Discover our newest blog posts and tutorials.</p>
        </div>
        
        {/* Lưới Grid chuẩn Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, 12).map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}