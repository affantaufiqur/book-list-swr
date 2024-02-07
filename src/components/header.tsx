type HeaderProps = {
  text: string;
  highlightedText: string;
};

export default function Header({ highlightedText, text }: HeaderProps) {
  const highlightText = (fullText: string, highlightedText: string) => {
    const parts = fullText.split(highlightedText);
    return parts.map((part, index) => (
      <span key={index}>
        {index > 0 && (
          <span className="text-purple-primary">{highlightedText}</span>
        )}
        {part}
      </span>
    ));
  };

  return (
    <div className="rounded-md bg-purple-secondary p-16">
      <header className="text-3xl font-semibold">
        {highlightText(text, highlightedText)}
      </header>
    </div>
  );
}
