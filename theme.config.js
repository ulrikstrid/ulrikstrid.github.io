export default {
  github: "https://github.com/ulrikstrid/ulrikstrid.github.io", // link of the project repo
  siteGithub: "https://github.com/ulrikstrid/ulrikstrid.github.io", // link of the docs repo path
  titleSuffix: " – Ulrik Strid",
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // <- customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: "BSD-3 2020 © Ulrik Strid.",
  footerEditOnGitHubLink: true, // will link to the docs repo
  logo: (
    <React.Fragment>
      <span className="mr-2 font-extrabold hidden md:inline">Ulrik Strid</span>
    </React.Fragment>
  ),
  head: (
    <React.Fragment>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Ulrik Strid, a software developer" />
      <meta name="og:description" content="Ulrik Strid, a software developer" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ulrikstrid" />
      <meta name="og:title" content="Ulrik Strid" />
      <meta name="apple-mobile-web-app-title" content="Ulrik Strid" />
    </React.Fragment>
  ),
};
