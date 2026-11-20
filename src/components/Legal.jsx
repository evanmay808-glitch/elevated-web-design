import { CONTACT } from "../lib/site";

export const Legal = () => (
  <section className="border-t border-[hsl(var(--border))] bg-[hsl(var(--surface))] py-16 sm:py-20" aria-label="Website policies">
    <div className="mx-auto max-w-4xl px-5">
      <p className="section-eyebrow">The details</p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">A few useful things to know.</h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[hsl(var(--muted))]">How this website works, what happens when you get in touch, and the terms that apply when you use it.</p>

      <article id="privacy" className="legal-copy scroll-mt-28 mt-12 border-t border-[hsl(var(--border))] pt-8">
        <h2 className="text-xl font-bold text-[hsl(var(--fg))]">Privacy notice</h2>
        <p><strong>Last updated: 20 November 2026</strong></p>
        <p>Evans Web Design, operated by {CONTACT.name} in the United Kingdom, respects your privacy. This notice explains what information may be involved when you visit this website or contact us.</p>
        <h3>Information you choose to share</h3>
        <p>If you contact us by email or telephone, we will receive the details you choose to provide, such as your name, contact details and information about your business or project. The website's enquiry links open your own email application; this site does not operate a contact form or store enquiry submissions.</p>
        <h3>Why information is used</h3>
        <p>Information you send is used to respond to your enquiry, discuss or provide requested services, keep relevant business records and meet legal obligations where applicable. We do not sell personal information.</p>
        <h3>Hosting and security</h3>
        <p>This website is hosted using Vercel. The hosting provider may process technical information, such as IP address, browser details and request logs, to deliver, maintain and protect the website. Please refer to Vercel's own privacy information for details of its processing.</p>
        <h3>How long information is kept</h3>
        <p>Messages are kept only for as long as reasonably needed to deal with the enquiry, provide services, maintain appropriate records or meet legal requirements.</p>
        <h3>Your rights</h3>
        <p>UK data protection law may give you rights to request access to, correction or deletion of your personal information, or to object to or restrict certain processing. To ask a question or make a request, email <a className="underline" href={CONTACT.mailto}>{CONTACT.email}</a>. You can also raise a concern with the Information Commissioner's Office (ICO).</p>
      </article>

      <article id="cookies" className="legal-copy scroll-mt-28 mt-12 border-t border-[hsl(var(--border))] pt-8">
        <h2 className="text-xl font-bold text-[hsl(var(--fg))]">Cookie policy</h2>
        <p><strong>Last updated: 20 November 2026</strong></p>
        <p>This website does not currently use advertising or analytics cookies. It uses your browser's local storage to remember whether you have dismissed the cookie notice and the preferences you selected. Local storage is browser storage, not a cookie, and is not used to track you across other websites.</p>
        <p>Our hosting provider may use strictly necessary technologies for security and delivery. If optional analytics or marketing tools are added in future, this policy and the consent controls will be updated before those tools are used.</p>
        <p>You can change or clear your saved choice at any time using <button type="button" className="underline" onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}>Cookie settings</button> in the footer, or by clearing this site's local storage in your browser.</p>
      </article>

      <article id="terms" className="legal-copy scroll-mt-28 mt-12 border-t border-[hsl(var(--border))] pt-8">
        <h2 className="text-xl font-bold text-[hsl(var(--fg))]">Website terms of use</h2>
        <p><strong>Last updated: 20 November 2026</strong></p>
        <p>By using this website, you agree to these terms. If you do not agree, please do not continue to use the website.</p>
        <h3>About this website</h3>
        <p>This website provides information about the web design and related services offered by Evans Web Design. Website content is general information and does not form a binding offer to provide services.</p>
        <h3>Quotes and project agreements</h3>
        <p>Any project scope, price, payment schedule, delivery date, hosting arrangement or ongoing support will be agreed separately in writing before work begins. A written proposal or service agreement for a particular project takes precedence over these general website terms where the two conflict.</p>
        <h3>Intellectual property</h3>
        <p>Unless stated otherwise, the design, text, branding and other material on this website belong to Evans Web Design or are used with permission. You may view the site for personal or business information, but must not copy, republish or commercially exploit its content without permission.</p>
        <h3>Using the website</h3>
        <p>You must not misuse this website, attempt to disrupt its operation, introduce malicious code or try to gain unauthorised access to it or its hosting systems.</p>
        <h3>External websites</h3>
        <p>This website may link to third-party websites, including example projects. Those sites are operated independently and we are not responsible for their content, availability or privacy practices.</p>
        <h3>Availability and liability</h3>
        <p>We aim to keep the website accurate and available, but cannot guarantee uninterrupted access or that every item of information will always be current. Nothing in these terms limits or excludes liability where doing so would be unlawful, including liability for fraud or for death or personal injury caused by negligence.</p>
        <h3>Governing law</h3>
        <p>These terms are governed by the laws of England and Wales, and disputes will be subject to the courts of England and Wales, except where applicable law provides otherwise.</p>
        <h3>Contact</h3>
        <p>Questions about these terms can be sent to <a className="underline" href={CONTACT.mailto}>{CONTACT.email}</a>.</p>
      </article>
      <p className="mt-10 border-t border-[hsl(var(--border))] pt-5 text-xs leading-relaxed text-[hsl(var(--muted))]">These policies are a practical starting point for this website, not a substitute for legal advice. They should be checked against the services, tools and data practices actually used by the business before relying on them as final legal documents.</p>
    </div>
  </section>
);
