// src/pages/tambah.tsx

import { useState } from 'react';
import Head from 'next/head';
import { generateReview } from '@/utils/aiWriter';

export default function TambahArtikel() {
  const [productName, setProductName] = useState('');
  const [hasil, setHasil] = useState({
    slug: '',
    judul: '',
    excerpt: '',
    konten: '',
    affiliate: '',
  });

  function slugify(text: string) {
    return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
  }

  function handleGenerate() {
    if (!productName) return;
    const konten = generateReview(productName);
    const slug = slugify(productName);
    const judul = productName;
    const excerpt = konten.split('.').slice(0, 2).join('.') + '.';
    setHasil({
      slug,
      judul,
      excerpt,
      konten,
      affiliate: 'https://shope.ee/isi-link-affiliate',
    });
  }

  return (
    <>
      <Head>
        <title>Tambah Artikel Otomatis | Foxas</title>
      </Head>

      <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1>🧠 Generate Artikel Otomatis</h1>

        <input
          type="text"
          placeholder="Masukkan nama produk"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          style={{
            padding: '10px',
            width: '100%',
            maxWidth: '400px',
            marginTop: '10px',
          }}
        />

        <br />
        <button
          onClick={handleGenerate}
          style={{
            marginTop: '10px',
            padding: '10px 20px',
            background: '#ff6a00',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Generate Artikel
        </button>

        {hasil.konten && (
          <div style={{ marginTop: '30px' }}>
            <h2>📦 Hasil JSON Artikel</h2>
            <pre
              style={{
                background: '#f4f4f4',
                padding: '20px',
                borderRadius: '8px',
                whiteSpace: 'pre-wrap',
              }}
            >
              {JSON.stringify(hasil, null, 2)}
            </pre>
          </div>
        )}
      </main>
    </>
  );
}
