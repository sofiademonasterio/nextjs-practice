export default function Layout({ children }) {
  return (
    <div>
      <marquee style={{ color: "purple", background: "white" }}>
        Layout anidado
      </marquee>
      {children}
    </div>
  );
}
