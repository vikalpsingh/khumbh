export const hindiPrefix = "/hi";

export function isHindiPath(pathname: string) {
  return pathname === hindiPrefix || pathname.startsWith(`${hindiPrefix}/`);
}

export function localizedHref(href: string, hindi: boolean) {
  if (!hindi) return href.replace(/^\/hi(?=\/|$)/, "") || "/";
  if (href === "/") return "/hi";
  return href.startsWith("/hi") ? href : `/hi${href}`;
}

export function languageSwitchHref(pathname: string) {
  return isHindiPath(pathname)
    ? pathname.replace(/^\/hi(?=\/|$)/, "") || "/"
    : localizedHref(pathname, true);
}
