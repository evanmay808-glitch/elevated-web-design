export const CONTACT = {
  name: "Evan May",
  brand: "Elevated Web Design",
  phoneDisplay: "07716 355201",
  phoneRaw: "07716355201",
  email: "evanmay808@gmail.com",
  instagram: "evanmay59",
  instagramUrl: "https://instagram.com/evanmay59",
  get mailto() {
    const subject = encodeURIComponent("Website enquiry — Elevated Web Design");
    const body = encodeURIComponent(
      "Hi Evan,\n\nI'd like a quote for a website. Here are a few details:\n\n- What I do / business name:\n- What I need:\n- Timeline:\n\nThanks!"
    );
    return `mailto:${this.email}?subject=${subject}&body=${body}`;
  },
  get tel() {
    return `tel:${this.phoneRaw}`;
  },
};

export const PORTFOLIO = [
  {
    title: "Barber Trio",
    tag: "Barbershop",
    url: "https://barber-trio-website.vercel.app/",
    blurb: "A sharp booking-ready site for a modern barbershop.",
  },
  {
    title: "Waste Not Mont Not",
    tag: "Sustainability",
    url: "https://wastenotmontnot.vercel.app/",
    blurb: "Clean, mission-led design for a zero-waste initiative.",
  },
  {
    title: "Castle Place Butcher",
    tag: "Local Retail",
    url: "https://castle-place-butcher.vercel.app/",
    blurb: "Warm, premium storefront for a craft butcher.",
  },
  {
    title: "Bin Shine Pro",
    tag: "Home Services",
    url: "https://bin-shine-pro.vercel.app/",
    blurb: "Bold, conversion-focused site for a cleaning service.",
  },
];