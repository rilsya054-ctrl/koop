/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Produk {
  id: string;
  nama: string;
  kuantiti: number;
  harga: number; // Harga Jual Seunit
  kos: number;   // Kos Perolehan Seunit (untuk perakaunan ringkas)
  kategori: string;
  sku: string;
  minimumStok: number;
  tarikhKemasKini: string;
}

export type JenisTransaksi = 'JUAL' | 'RESTOK' | 'DAFTAR' | 'PADAM' | 'EDIT';

export interface Transaksi {
  id: string;
  tarikh: string;
  jenis: JenisTransaksi;
  produkId: string;
  namaProduk: string;
  kuantiti: number;
  jumlah: number; // Kuantiti * Harga (atau Kos)
  untung: number; // Untung kasar jika jenis = JUAL
  nota?: string;
}

export interface KoperasiRingkasan {
  totalProduk: number;
  totalNilaiInventori: number;
  totalKosInventori: number;
  stokSikit: number;
  jumlahJualan: number;
  jumlahKosJualan: number;
  jumlahUntung: number;
}
