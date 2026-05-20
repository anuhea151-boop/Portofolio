import { useContactDialog } from '@/app/components/ContactDialogProvider';

export function Navbar() {
  const { openContact } = useContactDialog();

  return (
    <nav className="flex justify-center p-8 w-full fixed top-0 z-50 pointer-events-none">
      <div className="bg-white/80 backdrop-blur-md border border-gray-100 px-6 py-3 rounded-full flex items-center gap-8 pointer-events-auto shadow-[0_8px_32px_rgba(15,23,42,0.06),0_2px_8px_rgba(15,23,42,0.04)]">
        <div className="font-extrabold text-xl tracking-tighter">PORTO.</div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600 cursor-pointer">
          <span className="hover:text-black transition-colors">Home</span>
          <span className="hover:text-black transition-colors">Projects</span>
          <span className="hover:text-black transition-colors">About</span>
        </div>
        <button
          type="button"
          onClick={openContact}
          className="bg-black text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-gray-800 transition-colors"
        >
          Contact
        </button>
      </div>
    </nav>
  );
}
