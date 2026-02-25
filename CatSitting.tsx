const CatSitting = () => (
  <svg viewBox="0 0 110 130" fill="none" className="w-full h-full">
    {/* Head + ears outline tuned to match the reference silhouette */}
    <path
      d="M28 68
         C20 62 14 52 14 42
         C14 34 16 29 20 23
         C16 10 19 2 24 3
         C26 2 37 8 46 17
         C49 16 52 16 55 16
         C58 16 61 16 64 17
         C70 8 82 2 86 3
         C90 2 94 10 90 23
         C94 29 96 34 96 42
         C96 52 90 62 82 68"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Left ear inner fold */}
    <path d="M31.5 13.5 C33.5 15 35 16.5 35.5 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    {/* Right ear inner fold */}
    <path d="M78.5 13.5 C76.5 15 75 16.5 74.5 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />

    {/* Eyes */}
    <circle cx="40" cy="46" r="6" fill="currentColor" />
    <circle cx="42.5" cy="43.5" r="2.2" fill="white" />
    <circle cx="70" cy="46" r="6" fill="currentColor" />
    <circle cx="72.5" cy="43.5" r="2.2" fill="white" />

    {/* Tiny smile */}
    <path d="M50 56 C52 58.5 58 58.5 60 56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />

    {/* Whiskers left */}
    <line x1="26" y1="46" x2="4" y2="42" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="26" y1="50" x2="3" y2="50" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="26" y1="54" x2="4" y2="58" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />

    {/* Whiskers right */}
    <line x1="84" y1="46" x2="106" y2="42" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="84" y1="50" x2="107" y2="50" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="84" y1="54" x2="106" y2="58" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />

    {/* Body */}
    <path
      d="M28 68 C26 72 24 78 24 86
         C24 96 30 104 40 106
         C44 107 48 107 50 107
         C52 107 56 107 60 107
         C62 107 66 107 70 106
         C80 104 86 96 86 86
         C86 78 84 72 82 68"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Paw dividers */}
    <path d="M42 96 C42 100 44 106 46 107" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <path d="M55 96 C55 100 55 104 55 107" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <path d="M68 96 C68 100 66 106 64 107" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />

    {/* Tail */}
    <path
      d="M86 90 C92 86 98 78 98 70 C98 64 94 62 92 64 C90 66 90 70 92 74"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export default CatSitting;
