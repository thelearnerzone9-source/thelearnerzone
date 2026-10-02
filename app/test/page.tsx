import MockTest from '@/components/learner/MockTest';
import { pageMetadata } from '@/lib/site';
export const metadata = pageMetadata('/test', 'Free Driving Practice Test for India', 'Check your knowledge of Indian driving basics with a free practice quiz. Answer beginner-friendly questions and review explanations for each answer.');
export default function Page(){return <MockTest/>}
