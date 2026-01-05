const Button = ({
  children,
  link,
  styles,
  buttonStyles,
  handleClick,
}: {
  children: string;
  link?: string;
  styles?: string;
  buttonStyles?: string;
  handleClick?: () => void;
}) => {
  return link ? (
    <a href={link || ""} className={`${styles} gradient-container`}>
      <button className={`${buttonStyles} gradient-button`} onClick={handleClick}>{children}</button>
    </a>
  ) : (
    <div className={`${styles} gradient-container`}>
      <button className={`${buttonStyles} gradient-button`} onClick={handleClick}>{children}</button>
    </div>
  );
};

export default Button;
