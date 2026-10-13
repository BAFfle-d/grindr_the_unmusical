export default function Contact() {
  return (
    <section id="contact" className="py-14 border-t border-white/10 scroll-mt-16">
      <div className="max-w-3xl mx-auto px-5">
        <h2 className="font-display text-2xl sm:text-3xl uppercase text-zinc-100 mb-6">Contact</h2>

        <p className="text-zinc-400 leading-relaxed mb-4">
          For production inquiries, competition submissions, or the full perusal script, please
          reach out.
        </p>

        {/* TODO: replace with your preferred public contact */}
        <a
          href="mailto:hello@example.com?subject=DING!%20The%20UnMusical%20—%20Production%20Inquiry"
          className="inline-flex items-center min-h-[44px] text-[#FFC629] font-semibold hover:underline underline-offset-4"
        >
          hello@example.com
        </a>
      </div>
    </section>
  );
}
