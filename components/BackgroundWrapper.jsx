const BackgroundWrapper = ({ children }) => {
  return (
    <div className="relative h-screen w-screen">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-neutral-950 bg-opacity-50"></div>

      {/* Background Gradient */}
      <div className="absolute h-[287px] w-full opacity-[0.75] [background:linear-gradient(180deg,_#001826,_rgba(0,_37,_49,_0))]"></div>

      {/* Content */}
      {children}
    </div>
  );
};

export default BackgroundWrapper;
