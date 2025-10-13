import PropTypes from "prop-types";
import styles from "./Text.module.css";

const Text = ({ as: Component, variant, children, bold, muted, className }) => {
  const classes = [
    styles[variant],
    bold ? styles.bold : null,
    muted ? styles.muted : null,
    className
  ]
    .filter(Boolean)
    .join(" ");

  return <Component className={classes}>{children}</Component>;
};

Text.propTypes = {
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.elementType,
  ]),
  variant: PropTypes.oneOf([
    "body",
    "heading",
    "subheading",
    "caption",
  ]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  bold: PropTypes.bool,
  muted: PropTypes.bool,
};

Text.defaultProps = {
  as: "p",
  variant: "body",
  className: "",
};

export default Text;
