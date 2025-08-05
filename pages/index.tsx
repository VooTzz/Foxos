// src/pages/index.tsx

import Link from 'next/link';
import Head from 'next/head';
import posts from '@/data/posts.json';

type Post = {
  slug: string;
  judul: string;
  excerpt: string;
};

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Foxas — Blog Rekomendasi Produk Viral</title>
      </Head>

      <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>🦊 Rekomendasi Produk dari Foxas</h1>
        {posts.map((post: Post) => (
          <div key={post.slug} style={{ marginBottom: '40px' }}>
            <h2>{post.judul}</h2>
            <p>{post.excerpt}</p>
            <Link href={`/produk/${post.slug}`}>
              <button style={{ marginTop: '10px' }}>Baca Selengkapnya →</button>
            </Link>
          </div>
        ))}
      </main>
    </>
  );
}
