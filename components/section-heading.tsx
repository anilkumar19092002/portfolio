import { MotionInView } from './motion-in-view';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
}) {
  return (
    <MotionInView className={align === 'center' ? 'mx-auto max-w-4xl text-center' : 'max-w-4xl'}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-6 text-[#f4f1e8]">{title}</h2>
      <p className={`mt-7 max-w-2xl text-base leading-7 text-white/[0.58] md:text-lg ${align === 'center' ? 'mx-auto' : ''}`}>
        {description}
      </p>
    </MotionInView>
  );
}
