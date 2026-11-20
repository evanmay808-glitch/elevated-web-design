import { useEffect, useState } from "react";

const STORAGE_KEY = "evans-web-design-cookie-choice";

export const CookieConsent = () => {
  const [choice, setChoice] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "accepted" || saved === "declined") setChoice(saved);
      else setShow(true);
    } catch {
      setShow(true);
    }

    const openSettings = () => setShow(true);
    window.addEventListener("open-cookie-settings", openSettings);
    return () => window.removeEventListener("open-cookie-settings", openSettings);
  }, []);

  const saveChoice = (nextChoice) => {
    try { window.localStorage.setItem(STORAGE_KEY, nextChoice); } catch {}
    setChoice(nextChoice);
    setShow(false);
  };

  if (!show && choice) return null;

  return (
    <div className="cookie-backdrop" role="presentation">
      <section className="cookie-panel" role="dialog" aria-modal="true" aria-labelledby="cookie-title">
        <p className="section-eyebrow">Your privacy</p>
        <h2 id="cookie-title" className="mt-2 text-xl font-semibold">A quick note about cookies</h2>
        <p className="mt-3 text-sm leading-relaxed text-[hsl(var(--muted))]">
          This site doesn't currently use advertising or analytics cookies. We use a small amount of browser storage to remember your choice. You can accept or decline optional cookies.
        </p>
        <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <button type="button" onClick={() => saveChoice("declined")} className="btn-ghost rounded-full px-5 py-3 text-sm">Decline</button>
          <button type="button" onClick={() => saveChoice("accepted")} className="btn-accent rounded-full px-5 py-3 text-sm">Accept</button>
        </div>
      </section>
    </div>
  );
};
