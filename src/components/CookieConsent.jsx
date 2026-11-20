import { useEffect, useState } from "react";

const STORAGE_KEY = "evans-web-design-cookie-preferences";
const defaultPreferences = { necessary: true, analytics: false, marketing: false };

export const CookieConsent = () => {
  const [choice, setChoice] = useState(null);
  const [show, setShow] = useState(false);
  const [manage, setManage] = useState(false);
  const [preferences, setPreferences] = useState(defaultPreferences);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setChoice(parsed);
        setPreferences({ ...defaultPreferences, ...parsed });
      } else {
        setShow(true);
      }
    } catch {
      setShow(true);
    }

    const openSettings = () => { setShow(true); setManage(true); };
    window.addEventListener("open-cookie-settings", openSettings);
    return () => window.removeEventListener("open-cookie-settings", openSettings);
  }, []);

  const save = (next) => {
    const value = { ...defaultPreferences, ...next, savedAt: new Date().toISOString() };
    try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value)); } catch {}
    setChoice(value);
    setPreferences(value);
    setShow(false);
    setManage(false);
  };

  if (!show && choice) return null;

  return (
    <aside className="cookie-panel" role="dialog" aria-modal="false" aria-labelledby="cookie-title">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-lg">
          <p className="section-eyebrow">Your privacy</p>
          <h2 id="cookie-title" className="mt-1 text-lg font-semibold">A quick note about cookies</h2>
          <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--muted))]">
            This site doesn't currently use advertising or analytics cookies. We use your browser's local storage to remember this choice. You can accept, reject optional categories or manage your preferences.
          </p>
        </div>
        <button type="button" onClick={() => save(defaultPreferences)} className="self-end text-sm text-[hsl(var(--muted))] underline sm:self-start" aria-label="Close cookie notice">Close</button>
      </div>
      {manage && (
        <div className="mt-4 space-y-3 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--bg))] p-4">
          <label className="flex items-center justify-between gap-4 text-sm"><span><strong className="block">Necessary storage</strong><span className="text-xs text-[hsl(var(--muted))]">Remembers your privacy choice.</span></span><input type="checkbox" checked disabled /></label>
          <label className="flex items-center justify-between gap-4 text-sm"><span><strong className="block">Analytics</strong><span className="text-xs text-[hsl(var(--muted))]">Optional measurement tools, if introduced.</span></span><input type="checkbox" checked={preferences.analytics} onChange={e => setPreferences(p => ({ ...p, analytics: e.target.checked }))} /></label>
          <label className="flex items-center justify-between gap-4 text-sm"><span><strong className="block">Marketing</strong><span className="text-xs text-[hsl(var(--muted))]">Optional advertising tools, if introduced.</span></span><input type="checkbox" checked={preferences.marketing} onChange={e => setPreferences(p => ({ ...p, marketing: e.target.checked }))} /></label>
        </div>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        <button type="button" onClick={() => save({ ...defaultPreferences, analytics: true, marketing: true })} className="btn-accent rounded-full px-4 py-2.5 text-sm">Accept all</button>
        <button type="button" onClick={() => save(defaultPreferences)} className="btn-ghost rounded-full px-4 py-2.5 text-sm">Reject optional</button>
        {manage ? (
          <button type="button" onClick={() => save(preferences)} className="btn-ghost rounded-full px-4 py-2.5 text-sm">Save choices</button>
        ) : (
          <button type="button" onClick={() => setManage(true)} className="btn-ghost rounded-full px-4 py-2.5 text-sm">Manage preferences</button>
        )}
      </div>
    </aside>
  );
};
