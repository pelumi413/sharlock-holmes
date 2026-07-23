interface FooterProps {
  isDark: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDark }) => {
// ... Keep the exact same inner markup unchanged but swap the wrapper line below:
  return (
    <footer className={`border-t pt-20 pb-10 transition-colors duration-500 ${isDark ? 'bg-[#050505] border-neutral-900' : 'bg-white border-neutral-200'}`}>
      {/* ... Rest of your footer contents remain identical */}
    </footer>
  );
};

export default Footer;