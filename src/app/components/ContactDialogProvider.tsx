import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/app/components/ui/dialog';

const CONTACT_EMAIL = 'aryaquanta@gmail.com';
const WHATSAPP_E164 = '6282329630185';
const WHATSAPP_DISPLAY = '+62 823 2963 0185';

type ContactDialogContextValue = { openContact: () => void };

const ContactDialogContext = createContext<ContactDialogContextValue | null>(
  null,
);

export function useContactDialog() {
  const ctx = useContext(ContactDialogContext);
  if (!ctx) {
    throw new Error('useContactDialog must be used within ContactDialogProvider');
  }
  return ctx;
}

function ContactDialogShell({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-gray-200 bg-white sm:max-w-md">
        <DialogHeader className="text-left">
          <DialogTitle className="text-xl font-bold text-[#1A1A1A]">
            Get in touch
          </DialogTitle>
          <p className="pt-1 text-sm font-normal text-gray-500">
            Reach me by email or WhatsApp.
          </p>
        </DialogHeader>
        <ul className="flex flex-col gap-4 pt-2">
          <li>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50/80 p-4 transition-colors hover:border-[#A3E635] hover:bg-[#A3E635]/10"
            >
              <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-[#1A1A1A] shadow-sm">
                <Mail className="size-5" aria-hidden />
              </span>
              <span className="min-w-0 text-left">
                <span className="block text-xs font-bold uppercase tracking-wide text-gray-500">
                  Email
                </span>
                <span className="break-all text-sm font-semibold text-[#1A1A1A]">
                  {CONTACT_EMAIL}
                </span>
              </span>
            </a>
          </li>
          <li>
            <a
              href={`https://wa.me/${WHATSAPP_E164}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50/80 p-4 transition-colors hover:border-[#A3E635] hover:bg-[#A3E635]/10"
            >
              <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm">
                <MessageCircle className="size-5" aria-hidden />
              </span>
              <span className="min-w-0 text-left">
                <span className="block text-xs font-bold uppercase tracking-wide text-gray-500">
                  WhatsApp
                </span>
                <span className="text-sm font-semibold text-[#1A1A1A]">
                  {WHATSAPP_DISPLAY}
                </span>
              </span>
            </a>
          </li>
        </ul>
      </DialogContent>
    </Dialog>
  );
}

export function ContactDialogProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openContact = useCallback(() => setOpen(true), []);

  return (
    <ContactDialogContext.Provider value={{ openContact }}>
      {children}
      <ContactDialogShell open={open} onOpenChange={setOpen} />
    </ContactDialogContext.Provider>
  );
}
