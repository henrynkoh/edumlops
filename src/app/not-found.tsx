import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-primary-600 mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
            <p className="text-lg text-gray-600 max-w-lg mx-auto mb-8">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md bg-primary-600 text-white hover:bg-primary-700 px-8 py-3 text-lg"
            >
              Go to Home
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900 px-8 py-3 text-lg"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 