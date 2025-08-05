// src/utils/aiWriter.ts

export function generateReview(productName: string): string {
  return `
Produk ${productName} adalah salah satu produk yang sedang viral dan banyak dibicarakan akhir-akhir ini. 
Dengan desain yang modern dan fungsi yang lengkap, produk ini cocok untuk berbagai kalangan pengguna, baik di rumah maupun saat bepergian.

Keunggulan utama dari ${productName} antara lain:
- Praktis dan mudah digunakan
- Harga terjangkau
- Tersedia dalam berbagai varian
- Banyak mendapatkan review positif

Jika kamu sedang mencari solusi yang efisien dan hemat, maka ${productName} layak untuk dipertimbangkan.
  `.trim();
}
