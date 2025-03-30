import Link from "next/link";
import "./globals.css";

export default function Layout({ children }) {
  return (
    <html lang="ru">
      <body className="bg-gray-100 text-gray-900">
        {/* Навигация */}
        <nav className="p-4 bg-gray-800 text-white flex gap-4">
          <Link href="/" className="hover:underline">🏠 Главная</Link>
          <Link href="/favorites" className="hover:underline">❤️ Избранное</Link>
        </nav>

        {/* Основной контент */}
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}

