import { Routes, Route } from 'react-router-dom';
import { ContactDialogProvider } from './components/ContactDialogProvider';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectTicker } from './components/ProjectTicker';
import { SelectedStudyCase } from './components/SelectedStudyCase';
import { Experience } from './components/Experience';
import { StudyCaseDetail } from './pages/StudyCaseDetail';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProjectTicker />
      <SelectedStudyCase />
      <Experience />
    </>
  );
}

export default function App() {
  return (
    <ContactDialogProvider>
      <main className="bg-[#F9FAFB] min-h-screen relative overflow-x-hidden selection:bg-[#A3E635] selection:text-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-study/:id" element={<StudyCaseDetail />} />
        </Routes>

        {/* Simple Footer */}
        <footer className="py-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Porto. All rights reserved.</p>
        </footer>
      </main>
    </ContactDialogProvider>
  );
}
