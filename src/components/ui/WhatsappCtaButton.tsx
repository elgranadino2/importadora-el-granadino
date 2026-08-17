import type { ReactNode } from "react";
import { buildWhatsappLink } from "@/lib/whatsapp";
import WhatsappIcon from "@/components/icons/WhatsappIcon";

type WhatsappCtaButtonProps = {
  tag: string;
  children: ReactNode;
  className?: string;
};

export default function WhatsappCtaButton({
  tag,
  children,
  className = "",
}: WhatsappCtaButtonProps) {
  return (
    <a
      href={buildWhatsappLink({ tag })}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-accent font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-accent/90 active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${className}`}
    >
      <WhatsappIcon className="h-[1.1em] w-[1.1em] shrink-0" />
      {children}
    </a>
  );
}
