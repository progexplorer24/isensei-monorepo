// Generated by ReScript, PLEASE EDIT WITH CARE

import * as CssJs$IsenseiMonorepo from "../../css/src/CssJs.mjs";

function addReset(param) {
  CssJs$IsenseiMonorepo.$$global("*,\n  *::before,\n  *::after", [CssJs$IsenseiMonorepo.boxSizing("borderBox")]);
  CssJs$IsenseiMonorepo.$$global(":root", [
        CssJs$IsenseiMonorepo.unsafe("tabSize", "4"),
        CssJs$IsenseiMonorepo.unsafe("MozTabSize", "4")
      ]);
  CssJs$IsenseiMonorepo.$$global("html", [
        CssJs$IsenseiMonorepo.lineHeight({
              NAME: "abs",
              VAL: 1.5
            }),
        CssJs$IsenseiMonorepo.unsafe("WebkitTextSizeAdjust", "100%")
      ]);
  CssJs$IsenseiMonorepo.$$global("body", [
        CssJs$IsenseiMonorepo.margin("zero"),
        CssJs$IsenseiMonorepo.fontSize("inherit_"),
        CssJs$IsenseiMonorepo.lineHeight("inherit_"),
        CssJs$IsenseiMonorepo.fontFamilies([
              "systemUi",
              {
                NAME: "custom",
                VAL: "-apple-system"
              },
              {
                NAME: "custom",
                VAL: "Segoe UI"
              },
              {
                NAME: "custom",
                VAL: "Roboto"
              },
              {
                NAME: "custom",
                VAL: "Helvetica"
              },
              {
                NAME: "custom",
                VAL: "Arial"
              },
              "sansSerif",
              {
                NAME: "custom",
                VAL: "Apple Color Emoji"
              },
              {
                NAME: "custom",
                VAL: "Segoe UI Emoji"
              }
            ])
      ]);
  CssJs$IsenseiMonorepo.$$global("hr", [
        CssJs$IsenseiMonorepo.height("zero"),
        CssJs$IsenseiMonorepo.unsafe("color", "inherit")
      ]);
  CssJs$IsenseiMonorepo.$$global("abbr[title]", [
        CssJs$IsenseiMonorepo.textDecoration("underline"),
        CssJs$IsenseiMonorepo.textDecorationStyle("dotted")
      ]);
  CssJs$IsenseiMonorepo.$$global("b, strong", [CssJs$IsenseiMonorepo.fontWeight("bolder")]);
  CssJs$IsenseiMonorepo.$$global("code,\n  kbd,\n  samp,\n  pre", [
        CssJs$IsenseiMonorepo.fontFamilies([
              {
                NAME: "custom",
                VAL: "ui-monospace"
              },
              {
                NAME: "custom",
                VAL: "SFMono-Regular"
              },
              {
                NAME: "custom",
                VAL: "Consolas"
              },
              {
                NAME: "custom",
                VAL: "Liberation Mono"
              },
              {
                NAME: "custom",
                VAL: "Menlo"
              },
              "monospace"
            ]),
        CssJs$IsenseiMonorepo.fontSize({
              NAME: "em",
              VAL: 1
            })
      ]);
  CssJs$IsenseiMonorepo.$$global("small", [CssJs$IsenseiMonorepo.fontSize({
              NAME: "percent",
              VAL: 80
            })]);
  CssJs$IsenseiMonorepo.$$global("sub,\n  sup", [
        CssJs$IsenseiMonorepo.fontSize({
              NAME: "percent",
              VAL: 75
            }),
        CssJs$IsenseiMonorepo.lineHeight("zero"),
        CssJs$IsenseiMonorepo.position("relative"),
        CssJs$IsenseiMonorepo.verticalAlign("baseline")
      ]);
  CssJs$IsenseiMonorepo.$$global("sub", [CssJs$IsenseiMonorepo.bottom({
              NAME: "em",
              VAL: -0.25
            })]);
  CssJs$IsenseiMonorepo.$$global("sup", [CssJs$IsenseiMonorepo.top({
              NAME: "em",
              VAL: -0.5
            })]);
  CssJs$IsenseiMonorepo.$$global("table", [
        CssJs$IsenseiMonorepo.textIndent("zero"),
        CssJs$IsenseiMonorepo.unsafe("borderColor", "inherit")
      ]);
  CssJs$IsenseiMonorepo.$$global("button,\n  input,\n  optgroup,\n  select,\n  textarea", [
        CssJs$IsenseiMonorepo.fontFamily("inherit_"),
        CssJs$IsenseiMonorepo.fontSize({
              NAME: "percent",
              VAL: 100
            }),
        CssJs$IsenseiMonorepo.lineHeight({
              NAME: "abs",
              VAL: 1.15
            }),
        CssJs$IsenseiMonorepo.margin("zero")
      ]);
  CssJs$IsenseiMonorepo.$$global("button,\n  select", [CssJs$IsenseiMonorepo.textTransform("none")]);
  CssJs$IsenseiMonorepo.$$global("button,\n  [type='button'],\n  [type='reset'],\n  [type='submit']", [CssJs$IsenseiMonorepo.unsafe("WebkitAppearance", "button")]);
  CssJs$IsenseiMonorepo.$$global("::-moz-focus-inner", [
        CssJs$IsenseiMonorepo.borderStyle("none"),
        CssJs$IsenseiMonorepo.padding("zero")
      ]);
  CssJs$IsenseiMonorepo.$$global(":-moz-focusring", [CssJs$IsenseiMonorepo.unsafe("outline", "1px dotted ButtonText")]);
  CssJs$IsenseiMonorepo.$$global(":-moz-ui-invalid", [CssJs$IsenseiMonorepo.boxShadow("none")]);
  CssJs$IsenseiMonorepo.$$global("legend", [CssJs$IsenseiMonorepo.padding("zero")]);
  CssJs$IsenseiMonorepo.$$global("progress", [CssJs$IsenseiMonorepo.verticalAlign("baseline")]);
  CssJs$IsenseiMonorepo.$$global("::-webkit-inner-spin-button,\n  ::-webkit-outer-spin-button", [CssJs$IsenseiMonorepo.height("auto")]);
  CssJs$IsenseiMonorepo.$$global("[type='search']", [
        CssJs$IsenseiMonorepo.unsafe("WebkitAppearance", "textfield"),
        CssJs$IsenseiMonorepo.outlineOffset({
              NAME: "px",
              VAL: -2
            })
      ]);
  CssJs$IsenseiMonorepo.$$global("::-webkit-search-decoration", [CssJs$IsenseiMonorepo.unsafe("WebkitAppearance", "none")]);
  CssJs$IsenseiMonorepo.$$global("::-webkit-file-upload-button", [
        CssJs$IsenseiMonorepo.unsafe("WebkitAppearance", "button"),
        CssJs$IsenseiMonorepo.unsafe("font", "inherit")
      ]);
  CssJs$IsenseiMonorepo.$$global("summary", [CssJs$IsenseiMonorepo.display("listItem")]);
  CssJs$IsenseiMonorepo.$$global("blockquote,\n  dl,\n  dd,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  hr,\n  figure,\n  p,\n  pre", [CssJs$IsenseiMonorepo.margin("zero")]);
  CssJs$IsenseiMonorepo.$$global("button", [
        CssJs$IsenseiMonorepo.backgroundColor("transparent"),
        CssJs$IsenseiMonorepo.backgroundImage("none"),
        CssJs$IsenseiMonorepo.focus([
              CssJs$IsenseiMonorepo.outlineStyle("dotted"),
              CssJs$IsenseiMonorepo.outlineWidth({
                    NAME: "px",
                    VAL: 1
                  }),
              CssJs$IsenseiMonorepo.unsafe("outline", "5px auto -webkit-focus-ring-color")
            ])
      ]);
  CssJs$IsenseiMonorepo.$$global("button", [
        CssJs$IsenseiMonorepo.margin("zero"),
        CssJs$IsenseiMonorepo.padding("zero")
      ]);
  CssJs$IsenseiMonorepo.$$global("ol,\n  ul", [
        CssJs$IsenseiMonorepo.margin("zero"),
        CssJs$IsenseiMonorepo.padding("zero"),
        CssJs$IsenseiMonorepo.listStyleType("none")
      ]);
  CssJs$IsenseiMonorepo.$$global("*,\n  ::before,\n  ::after", [
        CssJs$IsenseiMonorepo.boxSizing("borderBox"),
        CssJs$IsenseiMonorepo.borderWidth("zero"),
        CssJs$IsenseiMonorepo.borderStyle("solid"),
        CssJs$IsenseiMonorepo.borderColor({
              NAME: "hex",
              VAL: "e5e7eb"
            })
      ]);
  CssJs$IsenseiMonorepo.$$global("hr", [CssJs$IsenseiMonorepo.borderTopWidth({
              NAME: "px",
              VAL: 1
            })]);
  CssJs$IsenseiMonorepo.$$global("img", [CssJs$IsenseiMonorepo.borderStyle("solid")]);
  CssJs$IsenseiMonorepo.$$global("textarea", [CssJs$IsenseiMonorepo.resize("vertical")]);
  CssJs$IsenseiMonorepo.$$global("input::placeholder,\n  textarea::placeholder", [
        CssJs$IsenseiMonorepo.opacity(1),
        CssJs$IsenseiMonorepo.color({
              NAME: "hex",
              VAL: "9ca3af"
            })
      ]);
  CssJs$IsenseiMonorepo.$$global("button,\n  [role=\"button\"]", [CssJs$IsenseiMonorepo.cursor("pointer")]);
  CssJs$IsenseiMonorepo.$$global("table", [CssJs$IsenseiMonorepo.borderCollapse("collapse")]);
  CssJs$IsenseiMonorepo.$$global("h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6", [
        CssJs$IsenseiMonorepo.fontSize("inherit_"),
        CssJs$IsenseiMonorepo.fontWeight("inherit_")
      ]);
  CssJs$IsenseiMonorepo.$$global("a", [
        CssJs$IsenseiMonorepo.unsafe("color", "inherit"),
        CssJs$IsenseiMonorepo.textDecoration("inherit_")
      ]);
  CssJs$IsenseiMonorepo.$$global("button,\n  input,\n  optgroup,\n  select,\n  textarea", [
        CssJs$IsenseiMonorepo.padding("zero"),
        CssJs$IsenseiMonorepo.lineHeight("inherit_"),
        CssJs$IsenseiMonorepo.unsafe("color", "inherit")
      ]);
  CssJs$IsenseiMonorepo.$$global("pre,\n  code,\n  kbd,\n  samp", [CssJs$IsenseiMonorepo.fontFamilies([
              {
                NAME: "custom",
                VAL: "ui-monospace"
              },
              {
                NAME: "custom",
                VAL: "SFMono-Regular"
              },
              {
                NAME: "custom",
                VAL: "Menlo"
              },
              {
                NAME: "custom",
                VAL: "Monaco"
              },
              {
                NAME: "custom",
                VAL: "Consolas"
              },
              {
                NAME: "custom",
                VAL: "Liberation Mono"
              },
              {
                NAME: "custom",
                VAL: "Courier New"
              },
              "monospace"
            ])]);
  CssJs$IsenseiMonorepo.$$global("img,\n  svg,\n  video,\n  canvas,\n  audio,\n  iframe,\n  embed,\n  object", [
        CssJs$IsenseiMonorepo.display("block"),
        CssJs$IsenseiMonorepo.verticalAlign("middle")
      ]);
  CssJs$IsenseiMonorepo.$$global("img,\n  video", [
        CssJs$IsenseiMonorepo.maxWidth({
              NAME: "percent",
              VAL: 100
            }),
        CssJs$IsenseiMonorepo.height("auto")
      ]);
  
}

export {
  addReset ,
  
}
/* CssJs-IsenseiMonorepo Not a pure module */
