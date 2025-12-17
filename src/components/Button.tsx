/* eslint-disable */
// @ts-nocheck

const Button = ({ children }: { children: any }) => {
  return (
    <button className="gradient-button">
      <span className="gradient-text">{children}</span>
    </button>
  );
};

export default Button;
