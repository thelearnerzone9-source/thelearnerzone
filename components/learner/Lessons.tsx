"use client";

import {Header, Footer, PageIntro, InstagramLink, WhatsAppLink} from './Shell';
import {Calendar, ShieldCheck, MapPin} from 'lucide-react';
import LessonRequestForm from './LessonRequestForm';

export default function Lessons() {
  return <>
    <Header/>
    <main>
      <PageIntro kicker="YOUR FIRST REAL-WORLD MILE" title="Let’s get you behind the wheel." description="Fill in the enquiry form or contact The Learner Zone on WhatsApp and Instagram."/>
      <div className="booking-layout">
        <div>
          <div className="notice">
            <strong>Send your request on WhatsApp.</strong>
            <p>Your details are filled into a WhatsApp message for The Learner Zone. Review the message and tap Send to request a lesson.</p>
          </div>
          <LessonRequestForm/>
        </div>
        <aside className="booking-aside">
          <span className="eyebrow">CONTACT THE LEARNER ZONE</span>
          <h2>Your pace.<br/><span>Your progress.</span></h2>
          <div className="contact-card"><h3>Chat on WhatsApp</h3><p>Ask about driving lessons, availability and getting started.</p><WhatsAppLink/></div>
          <div className="contact-card"><h3>Find us on Instagram</h3><p>Visit our profile to connect with The Learner Zone.</p><InstagramLink/></div>
          <div><ShieldCheck size={25}/><h3>A direct request</h3><p>Your completed form becomes a WhatsApp message for The Learner Zone.</p></div>
          <div><MapPin size={25}/><h3>Start somewhere comfortable</h3><p>Share a suitable pickup area and quiet practice location.</p></div>
          <div><Calendar size={25}/><h3>Know what to expect</h3><p>Confirm the price, duration, availability and cancellation policy before booking.</p></div>
        </aside>
      </div>
    </main>
    <Footer/>
  </>;
}
