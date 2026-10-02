"use client";

import {useEffect, useRef, useState, type FormEvent} from 'react';
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group';
import {ArrowRight, Download, CheckCircle2, MessageCircle} from 'lucide-react';
import {whatsappUrl} from '@/lib/contact';

type Plan = {name: string; phone: string; city: string; experience: string; transmission: string; date: string; notes: string};
type ErrorField = 'name' | 'phone' | 'city' | 'date';
const initial: Plan = {name: '', phone: '', city: '', experience: 'Complete beginner', transmission: 'Manual', date: '', notes: ''};

export default function LessonRequestForm() {
  const [ready, setReady] = useState(false);
  const [plan, setPlan] = useState<Plan>(initial);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<{field?: ErrorField; message: string} | null>(null);
  const [minDate, setMinDate] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const d = new Date();
    setMinDate(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`);
    try {
      const saved = localStorage.getItem('tlz-lesson-plan');
      if (saved) {
        const p = JSON.parse(saved);
        if (p && typeof p === 'object' && !Array.isArray(p)) {
          const restored = {...initial};
          for (const key of Object.keys(initial) as (keyof Plan)[]) {
            if (typeof p[key] === 'string') restored[key] = p[key];
          }
          if (!['Manual', 'Automatic'].includes(restored.transmission)) restored.transmission = initial.transmission;
          if (!['Complete beginner', 'Some experience', 'Returning to driving'].includes(restored.experience)) restored.experience = initial.experience;
          setPlan(restored);
        }
      }
    } catch { /* The form remains usable when browser storage is unavailable. */ }
    setReady(true);
  }, []);

  function update<K extends keyof Plan>(key: K, value: Plan[K]) {
    setPlan(current => ({...current, [key]: value}));
    setStatus('');
    setError(null);
  }

  function invalid(field: ErrorField, message: string) {
    setError({field, message});
    formRef.current?.querySelector<HTMLInputElement>(`#lesson-${field}`)?.focus();
    return false;
  }

  function validate() {
    setStatus('');
    setError(null);
    if (!plan.name.trim()) return invalid('name', 'Enter your name so we know who to contact.');
    const phoneDigits = plan.phone.replace(/\D/g, '');
    if (!/^\+?[\d()\s-]+$/.test(plan.phone.trim()) || !/^(?:91|0)?[6-9]\d{9}$/.test(phoneDigits)) {
      return invalid('phone', 'Enter a valid 10-digit Indian mobile number, optionally with +91.');
    }
    if (!plan.city.trim()) return invalid('city', 'Enter a city or area for your lesson.');
    if (plan.date && (!/^\d{4}-\d{2}-\d{2}$/.test(plan.date) || plan.date < minDate)) {
      return invalid('date', 'Choose today or a future date.');
    }
    return true;
  }

  const message = `New lesson request — The Learner Zone\n\nName: ${plan.name.trim()}\nPhone: ${plan.phone.trim()}\nArea: ${plan.city.trim()}\nExperience: ${plan.experience}\nTransmission: ${plan.transmission}\nPreferred date: ${plan.date || 'Flexible'}\nGoals: ${plan.notes.trim() || 'Not specified'}`;

  function sendWhatsApp(event: FormEvent<HTMLFormElement>) {
    if (!validate()) {
      event.preventDefault();
      return;
    }
    setStatus('Your message is ready. Tap Send in WhatsApp to deliver your lesson request.');
  }

  function save() {
    if (!validate()) return;
    try {
      localStorage.setItem('tlz-lesson-plan', JSON.stringify(plan));
      setStatus('Details saved on this device. Continue to WhatsApp to send your request.');
    } catch {
      setError({message: 'This browser cannot save your details. You can still send your request on WhatsApp.'});
    }
  }

  function download() {
    if (!validate()) return;
    const text = `${message}\n\nThis is a copy of your request. Confirm availability and your booking with The Learner Zone.`;
    const url = URL.createObjectURL(new Blob([text], {type: 'text/plain'}));
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my-driving-lesson-plan.txt';
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function fieldError(field: ErrorField) {
    return {'aria-invalid': error?.field === field || undefined, 'aria-describedby': error?.field === field ? 'booking-error' : undefined};
  }

  return (
    <form id="lesson-request" aria-labelledby="enquiry-heading" ref={formRef} className="booking-form" action={whatsappUrl} method="get" target="_blank" rel="noopener noreferrer" onSubmit={sendWhatsApp} noValidate={ready}>
      <div className="booking-form-heading"><span className="eyebrow">YOUR CONTACT DETAILS</span><h3 id="enquiry-heading">Request a driving lesson</h3><p>Share your details and we’ll help you plan your next step.</p></div>
      <input type="hidden" name="text" value={message}/>
      <label htmlFor="lesson-name">Your name
        <input id="lesson-name" value={plan.name} onChange={e => update('name', e.target.value)} placeholder="Your full name" maxLength={100} autoComplete="name" required {...fieldError('name')}/>
      </label>
      <label htmlFor="lesson-phone">WhatsApp or phone number
        <input id="lesson-phone" type="tel" value={plan.phone} onChange={e => update('phone', e.target.value)} placeholder="10-digit mobile number" maxLength={20} inputMode="tel" autoComplete="tel" required {...fieldError('phone')}/>
      </label>
      <label htmlFor="lesson-city">City or area
        <input id="lesson-city" value={plan.city} onChange={e => update('city', e.target.value)} placeholder="Where would you like to learn?" maxLength={100} required {...fieldError('city')}/>
      </label>
      <fieldset>
        <legend id="experience-label">Your experience</legend>
        <RadioGroup value={plan.experience} onValueChange={v => update('experience', v)} aria-labelledby="experience-label">
          {['Complete beginner', 'Some experience', 'Returning to driving'].map(v => <label className="radio-label" key={v}><RadioGroupItem value={v}/>{v}</label>)}
        </RadioGroup>
      </fieldset>
      <fieldset>
        <legend id="transmission-label">Transmission</legend>
        <RadioGroup className="inline-radio" value={plan.transmission} onValueChange={v => update('transmission', v)} aria-labelledby="transmission-label">
          {['Manual', 'Automatic'].map(v => <label className="radio-label" key={v}><RadioGroupItem value={v}/>{v}</label>)}
        </RadioGroup>
      </fieldset>
      <label htmlFor="lesson-date">Preferred date <span className="optional">Optional</span>
        <input id="lesson-date" type="date" min={minDate} value={plan.date} onChange={e => update('date', e.target.value)} {...fieldError('date')}/>
      </label>
      <label htmlFor="lesson-notes">What would you like help with? <span className="optional">Optional</span>
        <textarea id="lesson-notes" maxLength={1000} rows={4} placeholder="For example: I’m nervous about starting, or I’d like to practise parking." value={plan.notes} onChange={e => update('notes', e.target.value)}/>
      </label>
      {error && <p id="booking-error" role="alert">{error.message}</p>}
      {status && <div className="saved-notice" role="status"><CheckCircle2 size={20} aria-hidden="true"/><span>{status}</span></div>}
      <div className="test-actions">
        <button className="button lime" type="submit" disabled={!ready}><MessageCircle size={16} aria-hidden="true"/> Continue to WhatsApp</button>
        <button className="button outline" type="button" onClick={save} disabled={!ready}>Save details <ArrowRight size={16} aria-hidden="true"/></button>
        <button type="button" className="button outline" onClick={download} disabled={!ready}><Download size={16} aria-hidden="true"/> Download</button>
      </div>
      <p className="fine-print">WhatsApp opens with your contact details and lesson preferences. Your request reaches us after you tap Send. We’ll confirm availability with you.</p>
      <noscript><p className="fine-print">Enable JavaScript to fill in this form, or use our WhatsApp contact link to message us directly.</p></noscript>
    </form>
  );
}
