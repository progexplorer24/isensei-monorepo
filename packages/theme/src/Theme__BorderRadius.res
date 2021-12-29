type t = [#none | #sm | #default | #md | #lg | #xl | #xl2 | #xl3 | #full]

let none = #px(0)
let sm = #rem(0.125)
let default = #rem(0.25)
let md = #rem(0.375)
let lg = #rem(0.5)
let xl = #rem(0.75)
let _2xl = #rem(1.)
let _3xl = #rem(1.5)
let full = #px(9999)

let toRadius = (borderRadius): CssJs.Types.Length.t =>
  switch borderRadius {
  | #none => none
  | #sm => sm
  | #default => default
  | #md => md
  | #lg => lg
  | #xl => xl
  | #xl2 => _2xl
  | #xl3 => _3xl
  | #full => full
  }
