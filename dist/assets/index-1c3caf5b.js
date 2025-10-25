import { r as reactExports, a as reactDomExports, b as React } from "./vendor-77be6284.js";
import { B as BrowserRouter, R as Routes, a as Route } from "./router-ce7e530a.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = reactExports, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, g) {
  var b, d = {}, e = null, h = null;
  void 0 !== g && (e = "" + g);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h = a.ref);
  for (b in a)
    m$1.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      void 0 === d[b] && (d[b] = a[b]);
  return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
var jsxRuntimeExports = jsxRuntime.exports;
const Fragment = jsxRuntimeExports.Fragment;
const jsx = jsxRuntimeExports.jsx;
const jsxs = jsxRuntimeExports.jsxs;
var client = {};
var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}
const Header = () => {
  return /* @__PURE__ */ jsx("header", { className: "header", children: /* @__PURE__ */ jsxs("nav", { className: "nav", children: [
    /* @__PURE__ */ jsx("div", { className: "nav-brand", children: /* @__PURE__ */ jsx("h1", { children: "OptiLife" }) }),
    /* @__PURE__ */ jsxs("div", { className: "nav-links", children: [
      /* @__PURE__ */ jsx("a", { href: "#services", children: "Servicii" }),
      /* @__PURE__ */ jsx("a", { href: "#about", children: "Despre Noi" }),
      /* @__PURE__ */ jsx("a", { href: "#contact", children: "Contact" })
    ] })
  ] }) });
};
const Hero = () => {
  return /* @__PURE__ */ jsxs("section", { className: "hero-section", children: [
    /* @__PURE__ */ jsxs("div", { className: "hero-content", children: [
      /* @__PURE__ */ jsx("h1", { children: "Better vision. Better focus. Better performance." }),
      /* @__PURE__ */ jsx("h2", { children: "Workplace Eye Care Solutions" }),
      /* @__PURE__ */ jsx("p", { children: "OptiLife aduce optica la biroul tău: screening ocular, probă rame și ochelari pentru angajați. Rapid, simplu, fără drumuri." }),
      /* @__PURE__ */ jsxs("div", { className: "hero-cta", children: [
        /* @__PURE__ */ jsx("button", { className: "cta-button primary", children: "Programează o vizită" }),
        /* @__PURE__ */ jsx("button", { className: "cta-button secondary", children: "Află mai multe" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "hero-image", children: /* @__PURE__ */ jsx("img", { src: "/pexels-pavel-danilyuk-5996650.jpg", alt: "Eye exam" }) })
  ] });
};
const Services = () => {
  return /* @__PURE__ */ jsx("section", { id: "services", className: "services-section", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("h2", { children: "Serviciile Noastre" }),
    /* @__PURE__ */ jsxs("div", { className: "services-grid", children: [
      /* @__PURE__ */ jsxs("div", { className: "service-card", children: [
        /* @__PURE__ */ jsx("img", { src: "/eye-exams.jpg", alt: "Eye exams" }),
        /* @__PURE__ */ jsx("h3", { children: "Screening Ocular" }),
        /* @__PURE__ */ jsx("p", { children: "Examinări complete ale vederii pentru toți angajații" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "service-card", children: [
        /* @__PURE__ */ jsx("img", { src: "/image.png", alt: "Glasses fitting" }),
        /* @__PURE__ */ jsx("h3", { children: "Probă Rame și Ochelari" }),
        /* @__PURE__ */ jsx("p", { children: "Consultanță personalizată pentru alegerea ochelarilor" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "service-card", children: [
        /* @__PURE__ */ jsx("img", { src: "/pexels-shkrabaanthony-6749761.jpg", alt: "Mobile service" }),
        /* @__PURE__ */ jsx("h3", { children: "Servicii Mobile" }),
        /* @__PURE__ */ jsx("p", { children: "Venim la biroul tău pentru confortul maxim" })
      ] })
    ] })
  ] }) });
};
const About = () => {
  return /* @__PURE__ */ jsx("section", { id: "about", className: "about-section", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "about-content", children: [
    /* @__PURE__ */ jsxs("div", { className: "about-text", children: [
      /* @__PURE__ */ jsx("h2", { children: "Despre OptiLife" }),
      /* @__PURE__ */ jsx("p", { children: "OptiLife este primul serviciu de optică mobilă din România, dedicat companiilor care își doresc să îngrijească sănătatea ochilor angajaților lor." }),
      /* @__PURE__ */ jsx("p", { children: "Cu experiență în domeniul opticii și o echipă de specialiști calificați, oferim soluții complete de îngrijire oculară la locul de muncă." }),
      /* @__PURE__ */ jsxs("div", { className: "about-features", children: [
        /* @__PURE__ */ jsxs("div", { className: "feature", children: [
          /* @__PURE__ */ jsx("h4", { children: "Rapid" }),
          /* @__PURE__ */ jsx("p", { children: "Servicii eficiente în timp minim" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "feature", children: [
          /* @__PURE__ */ jsx("h4", { children: "Simplu" }),
          /* @__PURE__ */ jsx("p", { children: "Proces simplificat pentru companii" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "feature", children: [
          /* @__PURE__ */ jsx("h4", { children: "Fără drumuri" }),
          /* @__PURE__ */ jsx("p", { children: "Venim la biroul tău" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "about-image", children: /* @__PURE__ */ jsx("img", { src: "/what-to-expect-when-seeing-your-optometrist-for-an-eye-exam-hero-1.jpg", alt: "About OptiLife" }) })
  ] }) }) });
};
const Contact = () => {
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "contact-section", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("h2", { children: "Contactează-ne" }),
    /* @__PURE__ */ jsxs("div", { className: "contact-content", children: [
      /* @__PURE__ */ jsxs("div", { className: "contact-info", children: [
        /* @__PURE__ */ jsxs("div", { className: "contact-item", children: [
          /* @__PURE__ */ jsx("h3", { children: "Telefon" }),
          /* @__PURE__ */ jsx("p", { children: "0770.792.790" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "contact-item", children: [
          /* @__PURE__ */ jsx("h3", { children: "Email" }),
          /* @__PURE__ */ jsx("p", { children: "office@optilife.ro" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "contact-item", children: [
          /* @__PURE__ */ jsx("h3", { children: "Zone de acoperire" }),
          /* @__PURE__ */ jsx("p", { children: "București, Ilfov, Ploiești, Brașov" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "contact-form", children: /* @__PURE__ */ jsxs("form", { children: [
        /* @__PURE__ */ jsx("div", { className: "form-group", children: /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Numele companiei", required: true }) }),
        /* @__PURE__ */ jsx("div", { className: "form-group", children: /* @__PURE__ */ jsx("input", { type: "email", placeholder: "Email", required: true }) }),
        /* @__PURE__ */ jsx("div", { className: "form-group", children: /* @__PURE__ */ jsx("input", { type: "tel", placeholder: "Telefon", required: true }) }),
        /* @__PURE__ */ jsx("div", { className: "form-group", children: /* @__PURE__ */ jsx("textarea", { placeholder: "Mesajul tău", rows: "5", required: true }) }),
        /* @__PURE__ */ jsx("button", { type: "submit", className: "submit-button", children: "Trimite mesajul" })
      ] }) })
    ] })
  ] }) });
};
const Footer = () => {
  return /* @__PURE__ */ jsx("footer", { className: "footer", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxs("div", { className: "footer-content", children: [
      /* @__PURE__ */ jsxs("div", { className: "footer-section", children: [
        /* @__PURE__ */ jsx("h3", { children: "OptiLife" }),
        /* @__PURE__ */ jsx("p", { children: "Better vision. Better focus. Better performance." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footer-section", children: [
        /* @__PURE__ */ jsx("h4", { children: "Contact" }),
        /* @__PURE__ */ jsx("p", { children: "0770.792.790" }),
        /* @__PURE__ */ jsx("p", { children: "office@optilife.ro" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footer-section", children: [
        /* @__PURE__ */ jsx("h4", { children: "Servicii" }),
        /* @__PURE__ */ jsx("p", { children: "Screening ocular" }),
        /* @__PURE__ */ jsx("p", { children: "Probă rame și ochelari" }),
        /* @__PURE__ */ jsx("p", { children: "Servicii mobile" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "footer-bottom", children: /* @__PURE__ */ jsx("p", { children: "© 2024 OptiLife. Toate drepturile rezervate." }) })
  ] }) });
};
function App() {
  return /* @__PURE__ */ jsx(BrowserRouter, { children: /* @__PURE__ */ jsxs("div", { className: "App", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(Routes, { children: /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(Services, {}),
      /* @__PURE__ */ jsx(About, {}),
      /* @__PURE__ */ jsx(Contact, {})
    ] }) }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] }) });
}
const index = "";
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(App, {}) })
);
