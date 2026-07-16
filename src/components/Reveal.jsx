import { useScrollReveal } from '../hooks/useScrollReveal';

// Wraps a section's content so it fades/rises in once scrolled to, reusing
// the existing fadeIn keyframe and delay-100/200/300 utility classes.
const Reveal = ({ children, className = '', delay, as: Tag = 'div', ...rest }) => {
  const [ref, isVisible] = useScrollReveal();
  const delayClass = delay ? ` delay-${delay}` : '';
  const revealClass = isVisible ? ` animate-fade-in${delayClass}` : '';

  return (
    <Tag ref={ref} className={`scroll-reveal ${className}${revealClass}`} {...rest}>
      {children}
    </Tag>
  );
};

export default Reveal;
