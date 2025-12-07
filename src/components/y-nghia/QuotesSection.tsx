const quotes = [
  {
    text: "Không có gì quý hơn độc lập, tự do",
    author: "Chủ tịch Hồ Chí Minh",
  },
  {
    text: "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công",
    author: "Chủ tịch Hồ Chí Minh",
  },
];

export default function QuotesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--timeless-navy)] mb-8">
            2. Lời Dạy Của Bác
          </h2>
          <div className="space-y-6">
            {quotes.map((quote, index) => (
              <blockquote
                key={index}
                className="border-l-4 border-l-[var(--antique-gold)] pl-6 py-4 bg-[var(--antique-parchment)]/30 rounded-r-lg"
              >
                <p className="text-lg italic text-[var(--timeless-navy)] mb-2">
                  &ldquo;{quote.text}&rdquo;
                </p>
                <cite className="text-sm text-[var(--text-muted)] not-italic">
                  — {quote.author}
                </cite>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
