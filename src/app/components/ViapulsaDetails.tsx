import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ViapulsaDetails() {
  return (
    <div className="space-y-16 text-gray-700 leading-relaxed max-w-3xl mx-auto pb-12">
      {/* Project Overview */}
      <section className="font-serif">
        <p className="text-xl md:text-2xl mb-12 text-gray-800 leading-normal">
          Viapulsa is a service company that converts cellular credit to cash or an e-wallet.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-gray-200 font-sans text-sm">
          <div>
            <h4 className="text-gray-500 uppercase tracking-widest mb-1 text-xs">Industry</h4>
            <p className="font-bold text-[#1A1A1A]">Telecommunication</p>
          </div>
          <div>
            <h4 className="text-gray-500 uppercase tracking-widest mb-1 text-xs">Role</h4>
            <p className="font-bold text-[#1A1A1A]">Product Designer</p>
          </div>
          <div>
            <h4 className="text-gray-500 uppercase tracking-widest mb-1 text-xs">Timeline</h4>
            <p className="font-bold text-[#1A1A1A]">Mar - Apr 2024</p>
          </div>
          <div>
            <h4 className="text-gray-500 uppercase tracking-widest mb-1 text-xs">Impact</h4>
            <p className="font-bold bg-[#A3E635] text-[#1A1A1A] inline-block px-2 py-0.5 rounded">40% Surge</p>
          </div>
        </div>
      </section>

      {/* Understanding the Problem */}
      <section>
        <h3 className="text-3xl font-bold text-[#1A1A1A] mb-6 font-sans tracking-tight">Understanding the problem</h3>
        
        <div className="space-y-10 mt-6 font-serif text-lg">
          <div>
            <h4 className="text-xl font-bold text-[#1A1A1A] mb-3 font-sans">Hypothesis</h4>
            <p>
              During the redesign process of the Viapulsa application, the product design team did not conduct direct testing with users and only focused on user interface design and focus group discussions. As a result, I concluded that the complaints stemmed from unresolved issues related to real user problems.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-[#1A1A1A] mb-3 font-sans">Internal User Interview</h4>
            <p className="mb-4">
              We conducted interviews with the customer service team to identify the most common complaints following the redesign. Our findings revealed the following insights:
            </p>
            <ul className="list-disc list-outside space-y-3 pl-5 text-gray-700">
              <li><strong className="text-[#1A1A1A]">80% of users</strong> found the new user interface confusing and encountered numerous steps before accessing key features.</li>
              <li>Many users experienced <strong className="text-[#1A1A1A]">login errors</strong>, even when their phone number or email was entered correctly.</li>
              <li>Users struggled with unclear instructions and an excessive number of input fields, which resulted in errors and disrupted the conversion process.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-[#1A1A1A] mb-3 font-sans mt-12">Usability Testing</h4>
            <p className="mb-6">
              To understand the problem more deeply we decided to conduct Usability Testing with 5 external users on the flows of Registration and Convert Credit:
            </p>
            <ul className="list-disc list-outside space-y-3 pl-5 text-gray-700 mb-10">
              <li>The registration process is lengthy and includes unnecessary fields.</li>
              <li>Users often encounter bugs when entering phone numbers, prompting registrants to sign up again causing frustration.</li>
              <li>The Convert button is rarely used, while flashy promotional banners distract users.</li>
              <li>Most users directly upload evidence without transferring credit first because the credit transfer guide is still confusing.</li>
            </ul>

            <div className="flex flex-col gap-8">
              <ImageWithFallback src="https://framerusercontent.com/images/oPkChooN1IcabVYCEgN1Bmo88.png" className="w-full rounded-lg shadow-sm" alt="Usability Testing Findings 1" />
              <ImageWithFallback src="https://framerusercontent.com/images/SohGvkav1rsJRKxky2JSNeF6Jr8.png" className="w-full rounded-lg shadow-sm" alt="Usability Testing Findings 2" />
              <ImageWithFallback src="https://framerusercontent.com/images/xnwxdSmzLqptCZnpk6t5vCWWGg.png" className="w-full rounded-lg shadow-sm" alt="Usability Testing Findings 3" />
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-[#1A1A1A] mb-3 font-sans mt-12">Benchmark with Tukar Pulsa</h4>
            <ul className="list-disc list-outside space-y-3 pl-5 text-gray-700 mb-8">
              <li>Simple log in and registration using only Google SSO.</li>
              <li>Prominent promotional banners displaying provider rates encourage immediate transactions.</li>
              <li>Users only need to fill in a few fields to convert credits.</li>
              <li>Credit transfer instructions are obvious.</li>
            </ul>
            <ImageWithFallback src="https://framerusercontent.com/images/gTGuRSYfm6smRxPfagm6lMYgtrw.png" className="w-full rounded-lg shadow-sm" alt="Benchmark UI Tukar Pulsa" />
          </div>
        </div>
      </section>

      <hr className="border-gray-200 my-16" />

      {/* Ideation */}
      <section>
        <h3 className="text-3xl font-bold text-[#1A1A1A] mb-6 font-sans tracking-tight">Ideation</h3>
        <p className="text-2xl font-serif italic text-gray-600 mb-12 border-l-4 border-[#A3E635] pl-6 py-2 bg-white rounded-r-xl shadow-sm">
          "How might we increase monthly revenue, reduce complaints, and ensure the redesign drives business growth and customer satisfaction?"
        </p>

        <div className="mb-16">
          <h4 className="text-lg font-bold text-gray-500 uppercase tracking-widest mb-6 font-sans">Guest Access</h4>
          <ImageWithFallback src="https://framerusercontent.com/images/g8Xv3i3FYv11ZkL5JjoyQ9nQmvA.png" className="w-full rounded-lg shadow-sm" alt="Guest Access Wireframes" />
        </div>

        <div className="mb-16">
          <h4 className="text-lg font-bold text-gray-500 uppercase tracking-widest mb-6 font-sans">High-Fidelity Design</h4>
          <ImageWithFallback src="https://framerusercontent.com/images/xcGCeKwt8T5ggpRSV8xTGO3TR2U.png" className="w-full rounded-lg shadow-sm" alt="High Fidelity Screens Showcase" />
        </div>

        <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6 mt-16 font-sans tracking-tight">Login & Register Improvements</h3>
        <div className="space-y-6 mb-10 font-serif text-lg">
          <p>
            <strong className="text-[#1A1A1A] font-sans">Streamlined Onboarding:</strong> Users are directed to log in immediately without first needing to fill in their phone number.
          </p>
          <p>
            <strong className="text-[#1A1A1A] font-sans">Explore Freely:</strong> We offer Guest access, allowing users to explore and conduct transactions quickly and easily.
          </p>
          <p>
            <strong className="text-[#1A1A1A] font-sans">Simplify Layout:</strong> Restructure the layout and eliminate unnecessary information, such as upcoming products like Data Packages and Game Vouchers.
          </p>
          <p>
            <strong className="text-[#1A1A1A] font-sans">Dynamic Rate Pricing:</strong> Provide real-time rates to ensure users have clear information.
          </p>
        </div>
        <ImageWithFallback src="https://framerusercontent.com/images/KXiiAQafgs5CkIVsStzf8G5GSmM.png" className="w-full rounded-lg shadow-sm" alt="Login and Home Screen Implementation" />
      </section>

      {/* The new Journey */}
      <section>
        <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6 font-sans tracking-tight mt-16">The New Journey Concept</h3>
        <p className="mb-8 font-serif text-lg">Making the conversion flow easier and less frustrating for users.</p>
        <ul className="space-y-6 mb-12 font-serif text-lg">
          <li className="flex gap-4">
            <span className="text-[#1A1A1A] font-bold bg-[#A3E635] rounded-full w-6 h-6 flex items-center justify-center shrink-0">✓</span>
            <div>
              <strong className="text-[#1A1A1A] font-sans">Simplified User Flow:</strong> Offering only the essential fields needed by the user streamlines the process.
            </div>
          </li>
          <li className="flex gap-4">
            <span className="text-[#1A1A1A] font-bold bg-[#A3E635] rounded-full w-6 h-6 flex items-center justify-center shrink-0">✓</span>
            <div>
              <strong className="text-[#1A1A1A] font-sans">Real-Time Rates:</strong> Transparent rates foster trust among users.
            </div>
          </li>
          <li className="flex gap-4">
            <span className="text-[#1A1A1A] font-bold bg-[#A3E635] rounded-full w-6 h-6 flex items-center justify-center shrink-0">✓</span>
            <div>
              <strong className="text-[#1A1A1A] font-sans">Clear Instructions:</strong> Using concise and straightforward language minimizes user errors.
            </div>
          </li>
          <li className="flex gap-4">
            <span className="text-[#1A1A1A] font-bold bg-[#A3E635] rounded-full w-6 h-6 flex items-center justify-center shrink-0">✓</span>
            <div>
              <strong className="text-[#1A1A1A] font-sans">Reduced Cognitive Load:</strong> Displaying only one transfer method from each provider simplifies decision-making.
            </div>
          </li>
        </ul>
        <ImageWithFallback src="https://framerusercontent.com/images/1uMhKtjNxN7OkFxd7vqQ1G75FE0.png" className="w-full rounded-lg shadow-sm" alt="Convert Flow Implementation" />
      </section>

      <hr className="border-gray-200 my-16" />

      {/* Key Results */}
      <section>
        <h3 className="text-3xl font-bold text-[#1A1A1A] mb-10 font-sans tracking-tight">Key Results</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 font-sans">
          <div>
            <h4 className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-4">Task Completion Time</h4>
            <div className="flex items-baseline gap-3">
              <span className="line-through text-gray-400 text-lg">4 mins</span>
              <span className="text-3xl font-bold text-[#1A1A1A] bg-[#A3E635] px-2 rounded-lg">2m 25s</span>
            </div>
          </div>

          <div>
            <h4 className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-4">User Satisfaction</h4>
            <div className="flex items-baseline gap-3">
              <span className="line-through text-gray-400 text-lg">6/10</span>
              <span className="text-3xl font-bold text-[#1A1A1A] bg-[#A3E635] px-2 rounded-lg">9/10</span>
            </div>
          </div>

          <div>
            <h4 className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-4">Error Rate</h4>
            <p className="text-sm leading-relaxed text-gray-600">Errors were minimal; users mainly needed a brief adjustment period compared to the previous 30% error rate.</p>
          </div>

          <div>
            <h4 className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-4">Drop-Offs</h4>
            <p className="text-sm leading-relaxed text-[#1A1A1A] font-bold bg-[#A3E635] inline-block px-2 rounded">0% Abandonment rate.</p>
            <p className="text-sm text-gray-600 mt-2">Improved from the previous 30% drop-off mid-way.</p>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="pt-16 mt-16 border-t border-gray-200">
        <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 font-sans tracking-tight">Reflection & Learning</h3>
        <p className="text-lg font-serif leading-relaxed text-gray-600">
          Collaboration among divisions is essential for gaining deep insights and ensuring that the right solutions are created for users. I also recognize the significance of an iterative process in developing optimal solutions for both users and businesses.
        </p>
      </section>
    </div>
  );
}
