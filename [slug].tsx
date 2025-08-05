// src/pages/produk/[slug].tsx

import { useRouter } from 'next/router';
import Head from 'next/head';
import posts from '@/data/posts.json';

type Post = {
  slug: string;
  judul: string;
  konten: string;
  affiliate: string;
};

export default function ProdukDetail() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return <p>Loading...</p>;

  const post = (posts as Post[]).find((item) => item.slug === slug);

  if (!post) {
    return <p>Produk tidak ditemukan.</p>;
  }

  return (
    <>
      <Head>
        <title>{post.judul} — Foxas</title>
      </Head>

      <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1>{post.judul}</h1>
        <p style={{ margin: '20px 0' }}>{post.konten}</p>

        <a href={post.affiliate} target="_blank" rel="noopener noreferrer">
          <button style={{ padding: '10px 20px', background: '#ff6a00', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
            🔗 Beli Sekarang
          </button>
        </a>
      </main>
    </>
  );
}
