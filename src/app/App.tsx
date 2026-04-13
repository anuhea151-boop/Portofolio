import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectTicker } from './components/ProjectTicker';
import { SelectedStudyCase } from './components/SelectedStudyCase';
import { Experience } from './components/Experience';

export default function App() {
  return (
    <main className="bg-[#F9FAFB] min-h-screen relative overflow-x-hidden selection:bg-[#A3E635] selection:text-black">
      <Navbar />
      <Hero />
      <ProjectTicker />
      <SelectedStudyCase />
      <Experience />
      
      {/* Simple Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Porto. All rights reserved.</p>
      </footer>
    </main>
  );
}
