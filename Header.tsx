// src/components/Header.tsx

import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ padding: '15px 20px', background: '#222', color: '#fff' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link href="/" style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.2rem' }}>
          🦊 Foxas
        </Link>
        <div>
          <Link href="/" style={{ marginLeft: '20px', color: '#fff' }}>
            Beranda
          </Link>
        </div>
      </nav>
    </header>
  );
}
