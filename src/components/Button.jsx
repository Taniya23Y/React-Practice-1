import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, children, px, white, href, onClick }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <Button className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </Button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderButton() : renderLink();
};

export default Button;
