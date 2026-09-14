"use client";
import { useState } from "react";
import DrivingScene from "./DrivingScene";

export default function HeroCar() {
  const [explore, setExplore] = useState(false);
  return <div className={`hero-car ${explore ? 'exploring' : ''}`}>
    {explore ? <DrivingScene/> : <picture>
      <source media="(max-width:700px)" srcSet="/images/indian-learner-swift-768.webp"/>
      <img src="/images/indian-learner-swift.webp" width="1536" height="1024" fetchPriority="high" alt="Pearl white Maruti Suzuki Swift learner car with a red L plate and Indian registration, on a practice road"/>
    </picture>}
    <button className="hero-car-toggle" aria-pressed={explore} onClick={() => setExplore(!explore)}>{explore ? 'Back to learner car' : 'Explore the practice ground in 3D'} <span aria-hidden="true">↗</span></button>
  </div>;
}
