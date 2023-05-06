export default function Layout({ children }) {
  return (
    <div>
      <marquee style={{ color: "purple", background: "white" }}>
        Nested Layout
      </marquee>
      {children}
    </div>
  );
}
