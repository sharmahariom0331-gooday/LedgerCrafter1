import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "918952008952";
  const message = encodeURIComponent("Hi! I'm interested in your services. Please help me.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[hsl(142,70%,45%)] text-primary-foreground px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-[hsl(142,70%,40%)] transition-all duration-200 animate-pulse-soft"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="font-medium hidden sm:inline">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;
