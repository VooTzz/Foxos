// src/components/Footer.tsx

export default function Footer() {
  return (
    <footer style={{ padding: '20px', background: '#f2f2f2', textAlign: 'center', marginTop: '40px' }}>
      <p>© {new Date().getFullYear()} Foxas — Semua hak dilindungi</p>
    </footer>
  );
}
