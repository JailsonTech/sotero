import Loader from "../Loader";
import "./styles.css";

export default function Button({
  children,
  className = "",
  onClick,
  type = "button",
  variant = "default",
  isLoading = false,
}) {
  return (
    <button
      type={type}
      className={`button button--${variant} ${className}`}
      onClick={onClick}
    >
      {isLoading ? (
        <div className="button__loader">
          <Loader color="#E9E9EA" isLoading={true} />
        </div>
      ) : (
        children
      )}
    </button>
  );
}
