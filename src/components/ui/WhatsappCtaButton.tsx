import type { ReactNode } from "react";
import { buildWhatsappLink } from "@/lib/whatsapp";
import WhatsappIcon from "@/components/icons/WhatsappIcon";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";

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
      className={`btn-liquid-cta group inline-flex min-h-11 cursor-pointer items-center justify-center rounded-full font-semibold whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${className}`}
    >
      <span className="btn-liquid-content">
        <WhatsappIcon className="btn-liquid-icon h-[1.1em] w-[1.1em] shrink-0 text-accent transition-colors duration-300 group-hover:text-white" />
        <span className="transition-colors duration-300 group-hover:text-white">
          {children}
        </span>
        <ArrowRightIcon className="btn-liquid-arrow h-4 w-4 shrink-0 transition-colors duration-300 group-hover:text-white" />
      </span>
    </a>
  );
}
