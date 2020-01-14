import Link from 'next/link'

interface Links {
    href: string;
    label: string;
    key?: string;
}

const links: Links[] = [
  { href: '', label: 'Github',
      key: ''
  }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link
});

const appLinks = [
    { href: '/', label: 'Home', key: '' },
    { href: 'characters', label: 'Characters', key: '' },
    { href: 'comics', label: 'Comics', key: '' },
    { href: 'creators', label: 'Creators', key: '' },
    { href: 'events', label: 'Events', key: '' },
    { href: 'series', label: 'Series', key: '' },
    { href: 'stories', label: 'Stories', key: '' }
].map(link => {
    link.key = `nav-link-${link.href}-${link.label}`;
    return link
});

const Nav = () => (
  <nav>
    <ul>
        {appLinks.map(({key, href, label}) => (
            <li key={key}>
                <Link href={href}>
                    <a>{label}</a>
                </Link>
            </li>
        ))}
      <ul>
        {links.map(
          ({ key, href, label }) => (
            <li key={key}>
              <Link href={href}>
                <a>{label}</a>
              </Link>
            </li>
          )
        )}
      </ul>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
);

export default Nav;
