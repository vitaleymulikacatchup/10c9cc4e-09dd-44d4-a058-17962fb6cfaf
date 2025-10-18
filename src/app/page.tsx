"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import SplitAbout from "@/components/sections/about/SplitAbout";
import ContactCenterForm from "@/components/sections/contact/ContactCenterForm";
import FooterBase from "@/components/sections/footer/FooterBase";

const assetMap = [
  { "id": "hero-background", "url": "https://images.pexels.com/photos/7991505/pexels-photo-7991505.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A woman in a black dress sits alone in a dimly lit theater with red seats." },
  { "id": "about-image", "url": "https://images.pexels.com/photos/26835684/pexels-photo-26835684.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Close-up of a detailed transformer cosplay costume capturing intricate mechanical design." },
  { "id": "contact-image", "url": "https://images.pexels.com/photos/18477700/pexels-photo-18477700.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A clown in a red costume and makeup using an orange vintage rotary telephone indoors." }
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <NavbarStyleApple
            navItems={[
              { name: "Home", id: "home" },
              { name: "About Us", id: "about" },
              { name: "Contact", id: "contact" },
              { name: "Terms", id: "terms" }
            ]}
            logoSrc="/brand/logo.svg"
            logoAlt="Manga Movie Theatre"
          />
        </div>
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Welcome to Manga Movie Theatre"
            description="Experience the best of manga in a cozy, dark setting."
            imageSrc="https://images.pexels.com/photos/7991505/pexels-photo-7991505.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            buttons={[
              { text: "Explore Now", href: "about" }
            ]}
          />
        </div>
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            title="About Us"
            description="We feature a selection of classic and contemporary manga movies, curated to provide an unforgettable viewing experience."
            bulletPoints={[
              { title: "Our Mission", description: "Bringing the magic of manga to the big screen." },
              { title: "Our Story", description: "A passion project for manga enthusiasts." }
            ]}
            imageSrc="https://images.pexels.com/photos/26835684/pexels-photo-26835684.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          />
        </div>
      </div>

      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenterForm
            title="Get in Touch"
            description="Feel free to drop us a message for enquiries or feedback."
            inputs={[
              { name: "name", type: "text", placeholder: "Name", required: true },
              { name: "email", type: "email", placeholder: "Email", required: true }
            ]}
            textarea={{ name: "message", placeholder: "Type your message...", rows: 5, required: true }}
            onSubmit={(data) => console.log(data)}
          />
        </div>
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              {
                title: "Quick Links",
                items: [
                  { label: "About Us", href: "about" },
                  { label: "Contact", href: "contact" }
                ]
              },
              {
                title: "Legal",
                items: [
                  { label: "Terms of Service", href: "terms" }
                ]
              }
            ]}
            logoSrc="/brand/logo.svg"
            logoWidth={120}
            logoHeight={40}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
