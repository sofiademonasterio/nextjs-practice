import Link from "next/link";
import styles from "./Navigation.module.css";
import SignUpModal from "./SignUpModal";
import Button from "../react-booststrap";
import LoginModal from "./LoginModal";

const links = [
  {
    label: "About",
    route: "/about",
  },
  {
    label: "Posts",
    route: "/posts",
  },
];

export default function Navigation() {
  return (
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div class="col-md-3 mb-2 mb-md-0">
        <a
          href="/"
          class="d-inline-flex link-body-emphasis text-decoration-none"
        >
          <svg
            class="bi"
            width="40"
            height="32"
            role="img"
            aria-label="Bootstrap"
          >
            <use href="#bootstrap" />
          </svg>
        </a>
      </div>
      <nav class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <a href="/" class="nav-link px-2 link-primary">
          Home
        </a>
        {links.map(({ label, route }) => (
          <Link href={route} class="nav-link px-2 link-primary">
            {label}
          </Link>
        ))}
      </nav>
      <div class="col-md-3 text-end">
        <LoginModal />
        <SignUpModal />
      </div>
    </header>
  );
}
