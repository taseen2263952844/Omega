import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CoursesPage } from './pages/CoursesPage';
import { CourseDetailsPage } from './pages/CourseDetailsPage';
import { AboutPage } from './pages/AboutPage';
import { TeachersPage } from './pages/TeachersPage';
import { GalleryPage } from './pages/GalleryPage';
import { NoticesPage } from './pages/NoticesPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedCourseId, setSelectedCourseId] = useState<string | undefined>(undefined);

  // Sync with browser hash on initial load and hash change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (!hash) {
        setCurrentPage('home');
        return;
      }

      if (hash.startsWith('courses/')) {
        const cId = hash.replace('courses/', '');
        setCurrentPage('course-details');
        setSelectedCourseId(cId);
      } else {
        const validPages: PageId[] = [
          'home',
          'courses',
          'course-details',
          'about',
          'teachers',
          'gallery',
          'notices',
          'contact',
          'faq',
          'login',
          'register'
        ];
        if (validPages.includes(hash as PageId)) {
          setCurrentPage(hash as PageId);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId, courseId?: string) => {
    setCurrentPage(page);
    setSelectedCourseId(courseId);

    if (page === 'course-details' && courseId) {
      window.location.hash = `courses/${courseId}`;
    } else if (page === 'home') {
      window.location.hash = '';
    } else {
      window.location.hash = page;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-blue-900 selection:text-white">
      {/* Main Responsive Header */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Page Canvas */}
      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
        {currentPage === 'courses' && <CoursesPage onNavigate={navigateTo} />}
        {currentPage === 'course-details' && (
          <CourseDetailsPage courseId={selectedCourseId} onNavigate={navigateTo} />
        )}
        {currentPage === 'about' && <AboutPage onNavigate={navigateTo} />}
        {currentPage === 'teachers' && <TeachersPage onNavigate={navigateTo} />}
        {currentPage === 'gallery' && <GalleryPage onNavigate={navigateTo} />}
        {currentPage === 'notices' && <NoticesPage onNavigate={navigateTo} />}
        {currentPage === 'contact' && <ContactPage onNavigate={navigateTo} />}
        {currentPage === 'faq' && <FaqPage onNavigate={navigateTo} />}
        {currentPage === 'login' && <LoginPage onNavigate={navigateTo} />}
        {currentPage === 'register' && <RegisterPage onNavigate={navigateTo} />}
      </main>

      {/* Institutional Navy Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
