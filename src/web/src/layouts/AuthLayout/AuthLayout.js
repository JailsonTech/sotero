import "./styles.css";

export default function AuthLayout({ onSubmit, children }) {
  return (
    <section className="auth-layout">
      <form className="auth-layout__content" onSubmit={onSubmit}>
        {children}
      </form>
    </section>
  );
}
