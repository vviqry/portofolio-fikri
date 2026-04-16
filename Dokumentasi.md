# Dokumentasi Migrasi Portofolio (HTML/Bootstrap ➡️ Next.js + Aceternity UI)

Dokumen ini berisi rangkuman langkah-langkah, arsitektur, dan eksekusi command yang dilakukan untuk merombak total portofolio statis versi lama menjadi aplikasi web modern yang dinamis menggunakan **Next.js 14**, **Tailwind CSS**, dan **Aceternity UI** (Framer Motion).

---

## 1. Persiapan & Backup

Sebelum inisialisasi Next.js, semua *file* statis lama diamankan ke dalam folder arsip agar *root directory* bersih.

```bash
# Membuat direktori arsip
mkdir old-portfolio

# Memindahkan semua aset dan file lama ke dalam arsip
mv *.html *.css *.js old-portfolio/
```

Beberapa aset penting seperti gambar, logo svg, dan PDF CV nantinya di-*copy* ke folder `public/` milik Next.js.

```bash
# Contoh pemindahan aset gambar & sertifikat ke public Next.js
Copy-Item "old-portfolio\*.png" -Destination "public\" -Force
Copy-Item "old-portfolio\*.jpg" -Destination "public\" -Force
Copy-Item "old-portfolio\*.pdf" -Destination "public\" -Force
```

---

## 2. Instalasi Next.js & Dependencies

Membangun fondasi utama Next.js (App Router) beserta dependencies wajib untuk styling dan animasi.

```bash
# Inisialisasi Next.js di Root (.)
npx create-next-app@latest .
# (Memilih TypeScript, Tailwind CSS, App Router, ESLint)

# Install Framer Motion, clsx, tailwind-merge (untuk Aceternity JS)
npm install framer-motion clsx tailwind-merge

# Install React Icons & Next Themes (untuk Dark Mode)
npm install react-icons next-themes
```

---

## 3. Arsitektur Komponen (Tailwind & Konfigurasi)

Melakukan setup tema utama portofolio. Skema warna yang digunakan terinspirasi dari desain *purplish dark* premium. 

1. **`tailwind.config.ts`**: Menambahkan custom colors (`black-100`, `purple`, `blue-100`), setup keyframes animasi (seperti `spotlight`, `scroll`, dan `spin`), dll.
2. **`globals.css`**: Konfigurasi global, reset styling lama, background grid *dot* / *dark mode*, serta import font Tailwind standar.
3. **`layout.tsx`**: Menambahkan `<ThemeProvider>` yang secara default langsung mode `dark` untuk efek elegan. Serta atribut `suppressHydrationWarning` untuk menangkal error plugin browser.

---

## 4. Pengembangan Fitur (Tahap per Tahap)

### A. Fitur Bahasa Transisi (Context API)
Karena portofolio lama memiliki Toggle Bahasa (ID/EN) otomatis menggunakan vanila JS, sistem ini di-porting ke React Hook:
- File `src/context/LanguageContext.tsx`: Menggunakan React Context, tersinkronisasi murni di sisi Client (dengan pengecekan local storage agar bahasa tidak berkedip setelah reload).
- File data bahasa disimpan di `src/data/translations.ts`.

### B. Navbar & Hero Section
- **FloatingNav**: Navbar posisinya diubah menjadi *Fixed Top* yang menempel secara *full-width* di atas. Saat di-*scroll*, navbar menerima properti backdrop-blur transparan dengan logic pengecekan sumbu-y via `useMotionValueEvent` Framer Motion. Tombol *Download CV* dirancang *inline*. Layar kecil disulap menjadi *Hamburger Dropdown Menu*.
- **Hero / Spotlight**: Integrasi `<Spotlight/>` Aceternity memberikan tembakan cahaya warna putih, ungu, biru di background. Text Generator efek merender efek hero mengetik teks. Tersedia CTA "Learn More" untuk otomatis *scroll* ke section About.

### C. About Section
Section statis ini diganti menjadi interaktif. Profil Fikri muncul di sebelah kiri beserta Badge dinamis "1+ Years of Experience" dan tombol ganda "Download CV" responsif.

### D. Tools & Tech Stack
Menggunakan pola **Infinite Moving Cards** atau *Grid Component*. Seluruh 16 Tech Stack *Tools* ditampung di `src/components/TechStack.tsx`. Grid ini responsif mengecil proporsional di tablet/handphone. Menggunakan kumpulan SVG icons HD dari Devicon.

### E. Portfolio / Projects Section
Fitur *filter array* di-render menggunakan *React State* (`activeFilter`). 
Section ini merender **15 card portofolio gahar (termasuk Juice Stop)**. Setiap card dilapisi `hover:scale` ringan untuk transisi mouse. Deretan *tech-stack/tags* yang ada di dalam *card map*, terbuat kecil (*badge*) ala startup elit. Link demo langsung tersambung via "Live Site" dan "Source Code GitHub".

### F. Integarsi Web3Forms / Contact Layout
Web3Forms dikembalikan persis menggunakan fitur API lama Anda. Disusun cantik di dalam `src/components/Contact.tsx`.
```tsx
const formData = new FormData(event.currentTarget);
formData.append("access_key", "63a8c4c6-596a-4d3f-98e0-57f309c132d5");
const response = await fetch("https://api.web3forms.com/submit", {...});
```
*Loading state* `isSubmitting` ditambahkan agar UI memberikan feedback yang berkelas saat pengunjung mengirim e-mail. Terakhir, seluruh jejak Footer seperti Link Linkedin, Github tertancap sempurna.

---

## 5. Deployment / Publishing (Finalisasi)

Karena Next.js merupakan fondasi utama Vercel, kita dapat mem-build dan melakukan Git Push langsung agar Vercel mendeteksi environment otomatis.

```bash
# Testing Build di local (Pastikan semua bebas error / Warning ESLint Type)
npm run build 

# Uji jalankan di localhost
npm run dev

# Memasukkan Dokumentasi AI ke .gitignore supaya environment clean
# Menambahkan stage git, lalu Commit ke Repo untuk Auto Deploy
git add .
git commit -m "feat/upgrade: Modern Portfolio Rewrite with Next.js & Aceternity UI 🚀"
git push origin main
```

---

Sekali *push*, branch `main` pada repo GitHub otomatis akan memicu eksekusi *Actions* di Vercel, memproses instalasi build Next.js dan menjemur live portofolio yang dinamis, ringan, dan kuat.
