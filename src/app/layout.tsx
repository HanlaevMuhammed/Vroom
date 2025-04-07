import Link from "next/link";
import "./globals.css";
import ThemeToggle from "@/app/components/ThemeToggle";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
        {/* Навигация */}
        <nav className="p-4 bg-gray-100 dark:bg-gray-900 text-black dark:text-white flex gap-4 justify-between items-center">
          <div className="flex gap-4">
            <Link href="/" className="hover:underline">🏠 Главная</Link>
            <Link href="/favorites" className="hover:underline">❤️ Избранное</Link>
          </div>
          <ThemeToggle />
        </nav>

        {/* Основной контент */}
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
