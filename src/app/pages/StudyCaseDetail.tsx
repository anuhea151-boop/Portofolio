import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Phone } from 'lucide-react';
import { STUDY_CASES } from '../components/SelectedStudyCase';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { TabletMockup } from '../components/TabletMockup';

export function StudyCaseDetail() {
  const { id } = useParams();
  const caseId = id ? parseInt(id, 10) : 0;
  
  const studyCase = STUDY_CASES.find(c => c.id === caseId);

  if (!studyCase) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans text-gray-900">
      {/* Header */}
      <header className="py-8 px-6 md:px-12 max-w-5xl mx-auto flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#1A1A1A] transition-colors text-sm font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 pt-8 pb-32">
        {/* Article Header */}
        <header className="mb-14 text-center">
          <div className="flex flex-wrap gap-2 mb-6 justify-center">
            {studyCase.tags.map((tag, i) => (
              <span key={i} className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${i === 0 ? 'bg-[#A3E635] text-[#1A1A1A]' : 'bg-gray-200 text-gray-700 border border-gray-300'}`}>
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 leading-tight tracking-tight">
            {studyCase.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
            {studyCase.description}
          </p>
        </header>

        {/* Cover Image */}
        <div className="mb-14">
          {studyCase.isTablet ? (
            <div className="flex justify-center rounded-[40px] bg-gray-200 px-6 py-10 md:px-10 md:py-14">
              <TabletMockup
                src={studyCase.image}
                alt={studyCase.title}
                className="w-full max-w-3xl"
              />
            </div>
          ) : (
            <ImageWithFallback
              src={studyCase.image}
              alt={studyCase.title}
              className="h-auto w-full rounded-[40px] object-cover shadow-sm"
            />
          )}
        </div>

        {/* Content Section */}
        <article className="prose prose-lg md:prose-xl max-w-none text-gray-800">
          {typeof studyCase.details === 'string' ? (
            <p>{studyCase.details}</p>
          ) : (
            studyCase.details
          )}
        </article>

        {/* CTA Banner Down Below */}
        <section className="mt-24 pt-16 border-t border-gray-200">
          <div className="bg-[#1A1A1A] p-10 md:p-14 rounded-[40px] shadow-xl flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-[#A3E635] rounded-full flex items-center justify-center mb-6">
               <Phone className="w-7 h-7 text-[#1A1A1A]" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Have A Project In Mind?</h3>
            <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed max-w-xl">
              Ready to elevate your digital presence? Let's discuss your organization's goals and map out a solution together.
            </p>
            <a href="mailto:hello@example.com" className="group flex items-center justify-center gap-2 bg-[#F9FAFB] text-[#1A1A1A] px-8 py-4 rounded-full font-bold hover:bg-[#A3E635] transition-colors cursor-pointer text-lg">
              Book a Call
              <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
