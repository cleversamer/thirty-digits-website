import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Button = ({
  onClick,
  type,
  isExternal = false,
  href,
  className,
  style,
  target,
  children,
}) => {
  const onClickHandler = () => {
    if (onClick) {
      onClick();
    }
  };

  if (type === "link") {
    if (isExternal) {
      return (
        <a
          href={href}
          className={className}
          style={style}
          target={target === "_blank" ? "_blank" : undefined}
          rel="noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <NavLink
        to={href}
        className={className}
        style={style}
        onClick={onClickHandler}
      >
        {children}
      </NavLink>
    );
  }

  return (
    <button
      className={className}
      type={type}
      style={style}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: "",
  type: "button",
  href: "",
  onClick: () => {},
  target: "",
  style: {},
  children: "",
  isExternal: false,
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(["button", "link", "submit", "reset"]),
  href: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.string,
  style: PropTypes.object,
  // children: PropTypes.string,
  isExternal: PropTypes.bool,
};

export default Button;
