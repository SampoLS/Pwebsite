import { NavLink, Link } from "react-router-dom";

interface Props {
  title: string;
  icon?: JSX.Element;
  anchor?: boolean;
  arrowIcon?: JSX.Element;
}
const ShowMenuList = (props: Props): JSX.Element => {
  const { title, icon, anchor, arrowIcon } = props;

  // This is top title list
  if (anchor) {
    return (
      <li>
        <Link to="/">{title}</Link>
      </li>
    );
  }

  // This is toggle menu list
  if (icon) {
    return (
      <li>
        <Link to="/">
          {icon}
          <span>{title}</span>
        </Link>
      </li>
    );
  }

  // This is categories list
  if (arrowIcon) {
    if (title === "home") {
      return (
        <li>
          <NavLink to="/">{title}</NavLink>
        </li>
      );
    }
    if (title === "fuck now") {
      return (
        <li>
          <NavLink to={title}>{title}</NavLink>
        </li>
      );
    }
    return (
      <li>
        <NavLink to={title}>
          {title}
          {arrowIcon}
        </NavLink>
      </li>
    );
  }

  return <li>{title}</li>;
};

export default ShowMenuList;
