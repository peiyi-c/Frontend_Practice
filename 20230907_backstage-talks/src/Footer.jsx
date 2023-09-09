import { Link } from "react-scroll";

import "./Footer.scss";

export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__description">
          <p>
            Backstage Talks is a magazine of casual, but in depth dialogues on
            design and business. Our decisions shape and influence this complex
            world—to have a chance to make the right ones, we need to talk.
          </p>
          <span className="footer__description__copyright">
            © 2023&nbsp;
            <a href="http://milk.sk/" className="link2">
              Published by Büro Milk
            </a>
          </span>
          <p className="footer__description__privacy">
            <a
              href="https://backstagetalks.com/privacy-policy.php"
              className="link2"
            >
              Privacy Policy
            </a>
          </p>
        </div>
        <div className="footer__description__link">
          <p>
            <a className="link" href="mailto:info@backstagetalks.com">
              info@backstagetalks.com
            </a>
          </p>
        </div>
        <div className="footer__issues">
          <ul role="list">
            <li>
              <Link
                activeClass="active"
                to="issue-7"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Issue #7
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="issue-6"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Issue #6
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="issue-5"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Issue #5
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="issue-4"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Issue #4
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="issue-3"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Issue #3
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="issue-2"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Issue #2
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="issue-1"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Issue #1
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
