/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Produk, Transaksi } from './types';

export const KATEGORI_PILIHAN = [
  'Makanan Sedia Dimakan',
  'Minuman Belas',
  'Snek & Biskut',
  'Mi & Makanan Segera',
  'Bahan Mentah & Kering'
];

export const PRODUK_CONTOH: Produk[] = [
  {
    id: 'prod-1',
    nama: 'Nasi Lemak Bungkus (Telur & Sambal)',
    kuantiti: 15,
    harga: 2.50,
    kos: 1.80,
    kategori: 'Makanan Sedia Dimakan',
    sku: 'KOOP-NL01',
    minimumStok: 10,
    tarikhKemasKini: '2026-06-15T08:30:00Z'
  },
  {
    id: 'prod-2',
    nama: 'Milo Kotak 200ml',
    kuantiti: 8, // Stok rendah (< 10)
    harga: 2.20,
    kos: 1.60,
    kategori: 'Minuman Belas',
    sku: 'KOOP-ML02',
    minimumStok: 12,
    tarikhKemasKini: '2026-06-14T15:00:00Z'
  },
  {
    id: 'prod-3',
    nama: 'Karipap Kentang (Seketul)',
    kuantiti: 30,
    harga: 0.60,
    kos: 0.40,
    kategori: 'Makanan Sedia Dimakan',
    sku: 'KOOP-KP03',
    minimumStok: 15,
    tarikhKemasKini: '2026-06-15T07:15:00Z'
  },
  {
    id: 'prod-4',
    nama: 'Air Mineral 500ml',
    kuantiti: 45,
    harga: 1.00,
    kos: 0.50,
    kategori: 'Minuman Belas',
    sku: 'KOOP-AM04',
    minimumStok: 10,
    tarikhKemasKini: '2026-06-15T09:00:00Z'
  },
  {
    id: 'prod-5',
    nama: 'Keropok Lekor Terengganu (Pek)',
    kuantiti: 4, // Stok kritikal (< 5)
    harga: 3.50,
    kos: 2.50,
    kategori: 'Snek & Biskut',
    sku: 'KOOP-KL05',
    minimumStok: 10,
    tarikhKemasKini: '2026-06-12T11:45:00Z'
  },
  {
    id: 'prod-6',
    nama: 'Roti Gardenia Coklat 50g',
    kuantiti: 25,
    harga: 1.20,
    kos: 0.90,
    kategori: 'Snek & Biskut',
    sku: 'KOOP-RG06',
    minimumStok: 10,
    tarikhKemasKini: '2026-06-15T08:00:00Z'
  },
  {
    id: 'prod-7',
    nama: 'Maggi Cup Ayam',
    kuantiti: 12,
    harga: 1.80,
    kos: 1.30,
    kategori: 'Mi & Makanan Segera',
    sku: 'KOOP-MC07',
    minimumStok: 8,
    tarikhKemasKini: '2026-06-13T16:20:00Z'
  }
];

export const TRANSAKSI_CONTOH: Transaksi[] = [
  {
    id: 'tx-1',
    tarikh: '2026-06-15T08:45:00Z',
    jenis: 'JUAL',
    produkId: 'prod-1',
    namaProduk: 'Nasi Lemak Bungkus (Telur & Sambal)',
    kuantiti: 10,
    jumlah: 25.00, // 10 * 2.50
    untung: 7.00,  // 25.00 - (1.80 * 10) = 7.00
    nota: 'Jualan rehat sesi pagi'
  },
  {
    id: 'tx-2',
    tarikh: '2026-06-15T09:10:00Z',
    jenis: 'JUAL',
    produkId: 'prod-3',
    namaProduk: 'Karipap Kentang (Seketul)',
    kuantiti: 20,
    jumlah: 12.00, // 20 * 0.60
    untung: 4.00,  // 12.00 - (0.40 * 20) = 4.00
    nota: 'Dibeli oleh kelab sukan'
  },
  {
    id: 'tx-3',
    tarikh: '2026-06-15T10:00:00Z',
    jenis: 'RESTOK',
    produkId: 'prod-2',
    namaProduk: 'Milo Kotak 200ml',
    kuantiti: 24,
    jumlah: 38.40, // 24 * 1.60
    untung: 0,
    nota: 'Restok mingguan pembekal'
  },
  {
    id: 'tx-4',
    tarikh: '2026-06-14T11:20:00Z',
    jenis: 'JUAL',
    produkId: 'prod-5',
    namaProduk: 'Keropok Lekor Terengganu (Pek)',
    kuantiti: 6,
    jumlah: 21.00, // 6 * 3.50
    untung: 6.00,  // 21.00 - (2.50 * 6) = 6.00
    nota: 'Bancian jualan petang'
  },
  {
    id: 'tx-5',
    tarikh: '2026-06-15T10:30:00Z',
    jenis: 'JUAL',
    produkId: 'prod-4',
    namaProduk: 'Air Mineral 500ml',
    kuantiti: 12,
    jumlah: 12.00,
    untung: 6.00, // 12.00 - (0.50 * 12)
    nota: 'Acara larian sekolah'
  },
  {
    id: 'tx-6',
    tarikh: '2026-06-15T11:00:00Z',
    jenis: 'DAFTAR',
    produkId: 'prod-6',
    namaProduk: 'Roti Gardenia Coklat 50g',
    kuantiti: 25,
    jumlah: 22.50, // 25 * 0.90
    untung: 0,
    nota: 'Pendaftaran kemasukan produk baru'
  }
];
