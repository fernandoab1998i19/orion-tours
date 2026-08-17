export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/59175542604"
      target="_blank"
      rel="noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp shadow-glow-green transition-transform duration-300 hover:scale-110 sm:size-16"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp/60" />
      <svg
        viewBox="0 0 32 32"
        className="relative size-7 fill-primary-foreground sm:size-8"
        aria-hidden="true"
      >
        <path d="M16.04 3C9.42 3 4.05 8.37 4.05 14.99c0 2.35.68 4.54 1.86 6.39L4 29l7.79-1.84a11.9 11.9 0 0 0 4.25.78h.01c6.62 0 11.99-5.37 11.99-11.99C28.04 8.37 22.66 3 16.04 3Zm0 21.79h-.01c-1.3 0-2.58-.35-3.7-1.01l-.27-.16-4.62 1.09 1.11-4.5-.18-.29a9.77 9.77 0 0 1-1.5-5.22c0-5.4 4.4-9.79 9.8-9.79 2.62 0 5.07 1.02 6.92 2.87a9.7 9.7 0 0 1 2.87 6.93c0 5.4-4.4 9.79-9.79 9.79Zm5.37-7.33c-.29-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.67.15-.2.29-.77.96-.94 1.16-.17.2-.35.22-.64.07-.29-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.73-1.63-2.03-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.67-1.6-.91-2.19-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.2 3.02c.15.2 2.06 3.15 5 4.42.7.3 1.24.48 1.67.62.7.22 1.34.19 1.84.12.56-.08 1.74-.71 1.98-1.4.24-.68.24-1.27.17-1.4-.07-.13-.27-.2-.56-.35Z" />
      </svg>
    </a>
  );
}
