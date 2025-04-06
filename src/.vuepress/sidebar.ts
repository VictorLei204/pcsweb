import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/guides/": [
    "/intro",
    "/",
    {
      text: "指南",
      icon: "laptop-code",
      link: "/guides/",
      prefix: "/guides/",
      collapsible: true,
      children: [
        "windows-install",
        "unlock-bitlocker",
        "c-drive-cleanup",
        "vmware-usage",
        "wsl",
        "conda",
        "markdown-converter",
        "spyder-usage",
      ],
    },
    "/contact",
  ],
  "/": ["/", "intro", "/guides/", "contact"],
});
