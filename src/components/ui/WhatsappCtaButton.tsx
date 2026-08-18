import type { ReactNode } from "react";
import { buildWhatsappLink } from "@/lib/whatsapp";
import WhatsappIcon from "@/components/icons/WhatsappIcon";

type WhatsappCtaButtonProps = {
  tag: string;
  linea?: string;
  ciudad?: string;
  children: ReactNode;
  className?: string;
};

export default function WhatsappCtaButton({
  tag,
  linea,
  ciudad,
  children,
  className = "",
}: WhatsappCtaButtonProps) {
  return (
    <a
      href={buildWhatsappLink({ tag, linea, ciudad })}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-shine-sweep inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full bg-accent font-semibold whitespace-nowrap text-white shadow-[0_4px_16px_rgba(11,122,62,0.3)] transition-all duration-200 hover:scale-[1.03] hover:bg-accent/95 hover:shadow-[0_6px_24px_rgba(11,122,62,0.45)] active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${className}`}
    >
      <WhatsappIcon className="h-[1.1em] w-[1.1em] shrink-0" />
      {children}
    </a>
  );
}
