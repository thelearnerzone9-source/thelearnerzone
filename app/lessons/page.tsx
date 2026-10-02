import Lessons from '@/components/learner/Lessons';
import { pageMetadata } from '@/lib/site';
export const metadata = pageMetadata('/lessons', 'Book a Driving Lesson', 'Plan your driving lessons with The Learner Zone. Share your contact details, area, experience and preferred date, then send your enquiry on WhatsApp.');
export default function Page(){return <Lessons/>}
