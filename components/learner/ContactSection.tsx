"use client";

import LessonRequestForm from './LessonRequestForm';
import {InstagramLink, WhatsAppLink} from './Shell';

export default function ContactSection() {
  return <section id="contact" className="section contact-section" aria-labelledby="contact-heading">
    <div className="section-heading">
      <div><div className="eyebrow">CONTACT THE LEARNER ZONE</div><h2 id="contact-heading">Your first lesson.<br/><span>Let’s make it happen.</span></h2></div>
      <p>Have a question or ready to learn?<br/>Contact us directly or fill in your details below.</p>
    </div>
    <div className="contact-layout">
      <aside className="contact-details" aria-label="Our contact information">
        <div className="contact-card"><span className="small-label">LET’S CHAT</span><h3>WhatsApp</h3><p>Talk to us about lessons, availability and your learning goals.</p><WhatsAppLink/></div>
        <div className="contact-card"><span className="small-label">STAY CONNECTED</span><h3>Instagram</h3><p>Find The Learner Zone and get in touch through our profile.</p><InstagramLink/></div>
        <p className="fine-print">Fill in the form, review your prepared message, then tap Send in WhatsApp. We’ll confirm the lesson details with you.</p>
      </aside>
      <LessonRequestForm/>
    </div>
  </section>;
}
