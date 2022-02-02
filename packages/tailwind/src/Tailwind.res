open CssJs
// Functions
let emptyRule = [CssJs.unsafe("", "")]
let merge = CssJs.merge
let style = CssJs.style
let tw = rules => Belt.Array.concatMany(rules)
let twStyle = rules => CssJs.style(. Belt.Array.concatMany(rules))

let minWBreakpoint = (breakpoint, styles) => [
  CssJs.media(. `screen and (min-width: ${Belt.Int.toString(breakpoint)}px)`, tw(styles)),
]

let maxWBreakpoint = (breakpoint, styles) => [
  CssJs.media(. `screen and (max-width: ${Belt.Int.toString(breakpoint)}px)`, tw(styles)),
]

let sm = minWBreakpoint(640)
let md = minWBreakpoint(768)
let lg = minWBreakpoint(1024)
let xl = minWBreakpoint(1280)
let xl2 = minWBreakpoint(1536)
let fontFamilies = fonts => [CssJs.fontFamilies(fonts)]
let fontName = font => [CssJs.fontFamily(#custom(font))]
let contentText = text => [CssJs.contentRule(#text(text))]
// WARNING: This is not a function - create separate section for Atomic types not available in tailwind
let contentRuleNone = [CssJs.contentRule(#none)]
let content = string => [CssJs.contentRule(#text(string))]

// Selectors
let selector = (string, rules) => [CssJs.selector(. string, tw(rules))]
let dividers = rules => [CssJs.selector(. Selectors.ignoreFirstChild, tw(rules))]
let dark = rules => [CssJs.selector(. ".dark &", tw(rules))]
let marker = rules => [CssJs.selector(. "&::marker", tw(rules))]
let active = rules => [CssJs.active(tw(rules))]
let checked = rules => [CssJs.checked(tw(rules))]
let default = rules => [CssJs.default(tw(rules))]
let defined = rules => [CssJs.defined(tw(rules))]
let disabled = rules => [CssJs.disabled(tw(rules))]
let empty = rules => [CssJs.empty(tw(rules))]
let enabled = rules => [CssJs.enabled(tw(rules))]
let first = rules => [CssJs.first(tw(rules))]
let firstChild = rules => [CssJs.firstChild(tw(rules))]
let firstOfType = rules => [CssJs.firstOfType(tw(rules))]
let focus = rules => [CssJs.focus(tw(rules))]
let focusWithin = rules => [CssJs.focusWithin(tw(rules))]
// TODO: host selector

let hover = rules => [CssJs.hover(tw(rules))]
let indeterminate = rules => [CssJs.indeterminate(tw(rules))]
let inRange = rules => [CssJs.inRange(tw(rules))]
let invalid = rules => [CssJs.invalid(tw(rules))]
// TODO: lang selector

let lastChild = rules => [CssJs.lastChild(tw(rules))]
let lastOfType = rules => [CssJs.lastOfType(tw(rules))]
let link = rules => [CssJs.lastOfType(tw(rules))]
//  TODO: Figure out not function
// let not = rules => [CssJs.not__(tw(rules))]
// TODO: Nth selectors

let onlyChild = rules => [CssJs.onlyChild(tw(rules))]
let onlyOfType = rules => [CssJs.onlyOfType(tw(rules))]
let optional = rules => [CssJs.optional(tw(rules))]
let outOfRange = rules => [CssJs.outOfRange(tw(rules))]
let readOnly = rules => [CssJs.readOnly(tw(rules))]
let readWrite = rules => [CssJs.readWrite(tw(rules))]
let required = rules => [CssJs.required(tw(rules))]
// TODO: why right selector is commented out?
let root = rules => [CssJs.root(tw(rules))]
let scope = rules => [CssJs.scope(tw(rules))]
let target = rules => [CssJs.target(tw(rules))]
let valid = rules => [CssJs.valid(tw(rules))]
let visited = rules => [CssJs.visited(tw(rules))]

let after = rules => [CssJs.after(tw(rules))]
let before = rules => [CssJs.before(tw(rules))]
let firstLetter = rules => [CssJs.firstLetter(tw(rules))]
let firstLine = rules => [CssJs.firstLine(tw(rules))]
let selection = rules => [CssJs.selection(tw(rules))]

// Aspect Ratio
let aspectAuto = [CssJs.unsafe("aspect-ration", "auto")]
let aspectSquare = [CssJs.unsafe("aspect-ration", "1 / 1")]
let aspectVideo = [CssJs.unsafe("aspect-ration", "16 / 9")]
let aspectCustom = (~width, ~height) => [CssJs.unsafe("aspect-ration", `${width} / ${height}`)]

// Container
let container = [CssJs.width(#percent(100.))]
let containerSm = [CssJs.maxWidth(#px(640))]
let containerMd = [CssJs.maxWidth(#px(768))]
let containerLg = [CssJs.maxWidth(#px(1024))]
let containerXl = [CssJs.maxWidth(#px(1280))]
let container2Xl = [CssJs.maxWidth(#px(1536))]

// Columns
module Columns = {
  type columnSizes = [
    | #xs3
    | #xs2
    | #xs
    | #sm
    | #md
    | #lg
    | #xl
    | #xl2
    | #xl3
    | #xl4
    | #xl5
    | #xl6
    | #xl7
  ]
  type t = [#1 | #2 | #3 | #4 | #5 | #6 | #7 | #8 | #9 | #10 | #11 | #12 | #auto | columnSizes]

  let toString = t =>
    switch t {
    | #1 => "1"
    | #2 => "2"
    | #3 => "3"
    | #4 => "4"
    | #5 => "5"
    | #6 => "6"
    | #7 => "7"
    | #8 => "8"
    | #9 => "9"
    | #10 => "10"
    | #11 => "11"
    | #12 => "12"
    | #auto => "auto"
    | #xs3 => "16rem"
    | #xs2 => "18rem"
    | #xs => "20rem"
    | #sm => "24rem"
    | #md => "28rem"
    | #lg => "32rem"
    | #xl => "36rem"
    | #xl2 => "42rem"
    | #xl3 => "48rem"
    | #xl4 => "56rem"
    | #xl5 => "64rem"
    | #xl6 => "72rem"
    | #xl7 => "80rem"
    }
}
let columns = val => [CssJs.unsafe("columns", Columns.toString(val))]

module BreakAfter = {
  // Break After
  type t = [#auto | #avoid | #all | #avoidPage | #page | #left | #right | #column]
  let toString = breakType =>
    switch breakType {
    | #auto => "auto"
    | #avoid => "avoid"
    | #all => "all"
    | #avoidPage => "avoid-page"
    | #page => "page"
    | #left => "left"
    | #right => "right"
    | #column => "column"
    }
}

module BreakBefore = BreakAfter

module BreakInside = {
  // Break Inside
  type t = [#auto | #avoid | #avoidPage | #avoidColumn]
  let toString = breakType =>
    switch breakType {
    | #auto => "auto"
    | #avoid => "avoid"
    | #avoidPage => "avoid-page"
    | #avoidColumn => "avoid-column"
    }
}

let breakAfter = breakType => [CssJs.unsafe("break-after", BreakAfter.toString(breakType))]
let breakBefore = breakType => [CssJs.unsafe("break-before", BreakBefore.toString(breakType))]
let breakInside = breakType => [CssJs.unsafe("break-inside", BreakInside.toString(breakType))]

module BoxDecoration = {
  type t = [#clone | #slice]
  let toString = t =>
    switch t {
    | #clone => "clone"
    | #slice => "slice"
    }
}

// Box Decoration Break
let boxDecoration = break => [CssJs.unsafe("box-decoration-break", BoxDecoration.toString(break))]

// Box Sizing
let boxBorder = [boxSizing(#borderBox)]
let boxContent = [boxSizing(#contentBox)]

// Display
let block = [display(#block)]
let inlineBlock = [display(#inlineBlock)]
let inline = [display(#inline)]
let flex = [display(#flex)]
let inlineFlex = [display(#inlineFlex)]
let table = [display(#table)]
let inlineTable = [display(#inlineTable)]
let tableCaption = [display(#tableCaption)]
let tableCell = [display(#tableCell)]
let tableColumn = [display(#tableColumn)]
let tableColumnGroup = [display(#tableColumnGroup)]
let tableFooterGroup = [display(#tableFooterGroup)]
let tableHeaderGroup = [display(#tableHeaderGroup)]
let tableRowGroup = [display(#tableRowGroup)]
let tableRow = [display(#tableRow)]
let flowRoot = [CssJs.unsafe("display", "flow-root")]
let grid = [display(#grid)]
let inlineGrid = [display(#inlineGrid)]
let contents = [display(#contents)]
let listItem = [display(#listItem)]
let hidden = [display(#none)]

// Floats
let floatRight = [CssJs.float(#right)]
let floatLeft = [CssJs.float(#left)]
let floatNone = [CssJs.float(#none)]

// Clear
let clearLeft = [clear(#left)]
let clearRight = [clear(#right)]
let clearBoth = [clear(#both)]
let clearNone = [clear(#none)]

// Isolation
let isolate = [CssJs.unsafe("isolation", "isolate")]
let isolateAuto = [CssJs.unsafe("isolation", "auto")]

// NOTE: Object Fit
let objectContain = [objectFit(#contain)]
let objectCover = [objectFit(#cover)]
let objectFill = [objectFit(#fill)]
let objectNone = [objectFit(#none)]
let objectScaleDown = [objectFit(#scaleDown)]

// NOTE: Object Position
let objectBottom = [objectPosition(#bottom)]
let objectCenter = [objectPosition(#center)]
let objectLeft = [objectPosition(#left)]
let objectLeftBottom = [objectPosition(#hv(#left, #bottom))]
let objectLeftTop = [objectPosition(#hv(#left, #top))]
let objectRight = [objectPosition(#right)]
let objectRightBottom = [objectPosition(#hv(#right, #bottom))]
let objectRightTop = [objectPosition(#hv(#right, #top))]
let objectTop = [objectPosition(#top)]

// NOTE: Overflow
let overflowAuto = [overflow(#auto)]
let overflowHidden = [overflow(#hidden)]
let overflowClip = [CssJs.unsafe("overflow", "clip")]
let overflowVisible = [overflow(#visible)]
let overflowScroll = [overflow(#scroll)]
let overflowXAuto = [overflowX(#auto)]
let overflowYAuto = [overflowY(#auto)]
let overflowXHidden = [overflowX(#hidden)]
let overflowYHidden = [overflowY(#hidden)]
let overflowXClip = [CssJs.unsafe("overflowX", "clip")]
let overflowYClip = [CssJs.unsafe("overflowY", "clip")]
let overflowXVisible = [overflowX(#visible)]
let overflowYVisible = [overflowY(#visible)]
let overflowXScroll = [overflowX(#scroll)]
let overflowYScroll = [overflowY(#scroll)]

// Overscroll Behavior
let overscrollAuto = [CssJs.unsafe("overscrollBehavior", "auto")]
let overscrollContain = [CssJs.unsafe("overscrollBehavior", "contain")]
let overscrollNone = [CssJs.unsafe("overscrollBehavior", "none")]
let overscrollYAuto = [CssJs.unsafe("overscrollBehaviorY", "auto")]
let overscrollYContain = [CssJs.unsafe("overscrollBehaviorY", "contain")]
let overscrollYNone = [CssJs.unsafe("overscrollBehaviorY", "none")]
let overscrollXAuto = [CssJs.unsafe("overscrollBehaviorX", "auto")]
let overscrollXContain = [CssJs.unsafe("overscrollBehaviorX", "contain")]
let overscrollXNone = [CssJs.unsafe("overscrollBehaviorX", "none")]

// Position
let static = [position(#static)]
let fixed = [position(#fixed)]
let absolute = [position(#absolute)]
let relative = [position(#relative)]
let sticky = [position(#sticky)]

// Top / Right / Bottom / Left
type spacing = Theme.Spacing.t
type proportions = Theme.Proportions.t
type inset = [spacing | proportions | #auto]

let inset = value =>
  switch value {
  | #auto => [top(#auto), right(#auto), bottom(#auto), left(#auto)]
  | #...spacing as v => [
      top(Theme.Spacing.toValue(v)),
      right(Theme.Spacing.toValue(v)),
      bottom(Theme.Spacing.toValue(v)),
      left(Theme.Spacing.toValue(v)),
    ]
  | #...proportions as prop => [
      top(Theme.Proportions.toValue(prop)),
      right(Theme.Proportions.toValue(prop)),
      bottom(Theme.Proportions.toValue(prop)),
      left(Theme.Proportions.toValue(prop)),
    ]
  }

let insetX = value =>
  switch value {
  | #auto => [right(#auto), left(#auto)]
  | #...spacing as v => [right(Theme.Spacing.toValue(v)), left(Theme.Spacing.toValue(v))]
  | #...proportions as prop => [
      right(Theme.Proportions.toValue(prop)),
      left(Theme.Proportions.toValue(prop)),
    ]
  }

let insetY = value =>
  switch value {
  | #auto => [top(#auto), bottom(#auto)]
  | #...spacing as v => [top(Theme.Spacing.toValue(v)), bottom(Theme.Spacing.toValue(v))]
  | #...proportions as prop => [
      top(Theme.Proportions.toValue(prop)),
      bottom(Theme.Proportions.toValue(prop)),
    ]
  }

let top = value =>
  switch value {
  | #auto => [top(#auto)]
  | #...spacing as v => [top(Theme.Spacing.toValue(v))]
  | #...proportions as prop => [top(Theme.Proportions.toValue(prop))]
  }

let bottom = value =>
  switch value {
  | #auto => [bottom(#auto)]
  | #...spacing as v => [bottom(Theme.Spacing.toValue(v))]
  | #...proportions as prop => [bottom(Theme.Proportions.toValue(prop))]
  }

let left = value =>
  switch value {
  | #auto => [left(#auto)]
  | #...spacing as v => [left(Theme.Spacing.toValue(v))]
  | #...proportions as prop => [left(Theme.Proportions.toValue(prop))]
  }

let right = value =>
  switch value {
  | #auto => [right(#auto)]
  | #...spacing as v => [right(Theme.Spacing.toValue(v))]
  | #...proportions as prop => [right(Theme.Proportions.toValue(prop))]
  }

// Visibility
let visible = [visibility(#visible)]
let invisible = [visibility(#hidden)]

// Z-Index
let z = index => [CssJs.unsafe("zIndex", Theme.ZIndex.toValue(index))]

let basis = scale => [CssJs.flexBasis(Theme.Spacing.toValue(scale))]
// Flex Direction
let flexRow = [flexDirection(#row)]
let flexRowReverse = [flexDirection(#rowReverse)]
let flexCol = [flexDirection(#column)]
let flexColReverse = [flexDirection(#columnReverse)]

// Flex Wrap
let flexWrap = [CssJs.flexWrap(#wrap)]
let flexWrapReverse = [CssJs.flexWrap(#wrapReverse)]
let flexNowrap = [CssJs.flexWrap(#nowrap)]

// Flex
let flex1 = [CssJs.flex3(~grow=1., ~shrink=1., ~basis=#percent(0.))]
let flexAuto = [CssJs.flex3(~grow=1., ~shrink=1., ~basis=#auto)]
let flexInitial = [CssJs.flex3(~grow=0., ~shrink=1., ~basis=#auto)]
let flexNone = [CssJs.flex(#none)]

// Flex Grow
let grow = [CssJs.flexGrow(1.)]
let grow0 = [CssJs.flexGrow(0.)]

// Flex Shrink
let shrink = [CssJs.flexGrow(1.)]
let shrink0 = [CssJs.flexGrow(0.)]

// Order
let order = (order: Theme.Order.t) => [CssJs.order(Theme.Order.toValue(order))]

// Grid Template Columns
let gridCols = (columns: Theme.GridCols.t) => [
  CssJs.unsafe("gridTemplateColumns", Theme.GridCols.toValue(columns)),
]
// Grid Column Start / End
let col = (val: Theme.Col.t) => Theme.Col.toValue(val)

// Grid Template Rows
let gridRows = (rows: Theme.TemplateRows.t) => [
  CssJs.unsafe("gridTemplateRows", Theme.TemplateRows.toString(rows)),
]

// Grid Row Start / End
let row = (val: Theme.Row.t) => Theme.Row.toValue(val)

// Grid Auto Flow
let gridFlowRow = [gridAutoFlow(#row)]
let gridFlowCol = [gridAutoFlow(#column)]
let gridFlowRowDense = [gridAutoFlow(#rowDense)]
let gridFlowColDense = [gridAutoFlow(#columnDense)]

// Grid Auto Columns
let autoColsAuto = [gridAutoColumns(#auto)]
let autoColsMin = [gridAutoColumns(#minContent)]
let autoColsMax = [gridAutoColumns(#maxContent)]
let autoColsFr = [gridAutoColumns(#minmax(#zero, #fr(1.)))]

// Grid Auto Rows
let autoRowsAuto = [gridAutoRows(#auto)]
let autoRowsMin = [gridAutoRows(#minContent)]
let autoRowsMax = [gridAutoRows(#maxContent)]
let autoRowsFr = [gridAutoRows(#minmax(#zero, #fr(1.)))]

// NOTE: Gap - Utilities for controlling gutters between grid rows and columns.
module Gap = {
  type spacing = Theme.Spacing.t
  type t = [#both(spacing) | #x(spacing) | #y(spacing)]

  let toValue = t =>
    switch t {
    | #both(t) => [CssJs.gap(Theme.Spacing.toValue(t))]
    | #x(t) => [CssJs.columnGap(Theme.Spacing.toValue(t))]
    | #y(t) => [CssJs.rowGap(Theme.Spacing.toValue(t))]
    }
}
let gap = value => Gap.toValue(value)

// Justify Content
let justifyStart = [justifyContent(#flexStart)]
let justifyEnd = [justifyContent(#flexEnd)]
let justifyCenter = [justifyContent(#center)]
let justifyBetween = [justifyContent(#spaceBetween)]
let justifyAround = [justifyContent(#spaceAround)]
let justifyEvenly = [justifyContent(#spaceEvenly)]

// Justify Items
let justifyItemsStart = [justifyItems(#start)]
let justifyItemsEnd = [justifyItems(#end_)]
let justifyItemsCenter = [justifyItems(#center)]
let justifyItemsStretch = [CssJs.unsafe("justifyItems", "stretch")]

// Justify Self
let justifySelfAuto = [justifySelf(#auto)]
let justifySelfStart = [justifySelf(#start)]
let justifySelfEnd = [justifySelf(#end_)]
let justifySelfCenter = [justifySelf(#center)]
let justifySelfStretch = [justifySelf(#stretch)]

// Align Content
let contentCenter = [alignContent(#center)]
let contentStart = [alignContent(#flexStart)]
let contentEnd = [alignContent(#flexEnd)]
let contentBetween = [alignContent(#spaceBetween)]
let contentAround = [alignContent(#spaceAround)]
let contentEvenly = [alignContent(#spaceEvenly)]

// Align Items
let itemsStart = [alignItems(#flexStart)]
let itemsEnd = [alignItems(#flexEnd)]
let itemsCenter = [alignItems(#center)]
let itemsBaseline = [alignItems(#baseline)]
let itemsStretch = [alignItems(#stretch)]

// Align Self
let selfAuto = [alignSelf(#auto)]
let selfStart = [alignSelf(#flexStart)]
let selfEnd = [alignSelf(#flexEnd)]
let selfCenter = [alignSelf(#center)]
let selfStretch = [alignSelf(#stretch)]
let selfBaseline = [alignSelf(#baseline)]

// Place Content
let placeContentCenter = [CssJs.unsafe("placeContent", "center")]
let placeContentStart = [CssJs.unsafe("placeContent", "start")]
let placeContentBetween = [CssJs.unsafe("placeContent", "end")]
let placeContentEnd = [CssJs.unsafe("placeContent", "space-between")]
let placeContentAround = [CssJs.unsafe("placeContent", "space-around")]
let placeContentEvenly = [CssJs.unsafe("placeContent", "space-evenly")]
let placeContentStretch = [CssJs.unsafe("placeContent", "stretch")]

// Place Items
let placeItemsStart = [CssJs.unsafe("placeItems", "start")]
let placeItemsEnd = [CssJs.unsafe("placeItems", "end")]
let placeItemsCenter = [CssJs.unsafe("placeItems", "center")]
let placeItemsStretch = [CssJs.unsafe("placeItems", "stretch")]

// Place Self
let placeSelfAuto = [CssJs.unsafe("placeSelf", "auto")]
let placeSelfStart = [CssJs.unsafe("placeSelf", "start")]
let placeSelfEnd = [CssJs.unsafe("placeSelf", "end")]
let placeSelfCenter = [CssJs.unsafe("placeSelf", "center")]
let placeSelfStretch = [CssJs.unsafe("placeSelf", "stretch")]

// Padding

module Padding = {
  type spacing = Theme.Spacing.t
  type t = [
    | #all(spacing)
    | #t(spacing)
    | #b(spacing)
    | #r(spacing)
    | #l(spacing)
    | #x(spacing)
    | #y(spacing)
  ]
  let toValue = t =>
    switch t {
    | #all(size) => [CssJs.padding(Theme.Spacing.toValue(size))]
    | #t(size) => [paddingTop(Theme.Spacing.toValue(size))]
    | #b(size) => [paddingBottom(Theme.Spacing.toValue(size))]
    | #r(size) => [paddingRight(Theme.Spacing.toValue(size))]
    | #l(size) => [paddingLeft(Theme.Spacing.toValue(size))]
    | #x(size) => [
        paddingLeft(Theme.Spacing.toValue(size)),
        paddingRight(Theme.Spacing.toValue(size)),
      ]
    | #y(size) => [
        paddingTop(Theme.Spacing.toValue(size)),
        paddingBottom(Theme.Spacing.toValue(size)),
      ]
    }
}

let p = (size: Padding.t) => Padding.toValue(size)

module Margin = {
  type t = Padding.t
  let toValue = t =>
    switch t {
    | #all(size) => [CssJs.margin(Theme.Spacing.toValue(size))]
    | #t(size) => [marginTop(Theme.Spacing.toValue(size))]
    | #b(size) => [marginBottom(Theme.Spacing.toValue(size))]
    | #r(size) => [marginRight(Theme.Spacing.toValue(size))]
    | #l(size) => [marginLeft(Theme.Spacing.toValue(size))]
    | #x(size) => [
        marginLeft(Theme.Spacing.toValue(size)),
        marginRight(Theme.Spacing.toValue(size)),
      ]
    | #y(size) => [
        marginTop(Theme.Spacing.toValue(size)),
        marginBottom(Theme.Spacing.toValue(size)),
      ]
    }
}
//  Margin
let m = (size: Margin.t) => Margin.toValue(size)

// Space Between
module SpaceBetween = {
  type spacing = [Theme.Spacing.t]
  type t = [#x(spacing) | #y(spacing)]

  let toValue = (~reverse=false, t) =>
    switch t {
    | #x(size) => [
        CssJs.selector(.
          "& > :not([hidden]) ~ :not([hidden])",
          reverse
            ? [marginLeft(Theme.Spacing.toValue(#0)), marginRight(Theme.Spacing.toValue(size))]
            : [marginLeft(Theme.Spacing.toValue(size)), marginRight(Theme.Spacing.toValue(#0))],
        ),
      ]
    | #y(size) => [
        CssJs.selector(.
          "& > :not([hidden]) ~ :not([hidden])",
          reverse
            ? [marginTop(Theme.Spacing.toValue(#0)), marginBottom(Theme.Spacing.toValue(size))]
            : [marginTop(Theme.Spacing.toValue(size)), marginBottom(Theme.Spacing.toValue(#0))],
        ),
      ]
    }
}

let space = (~reverse=false, axis) => SpaceBetween.toValue(~reverse, axis)

// Width
module Width = {
  type t = [
    | Theme.Spacing.t
    | Theme.Proportions.t
    | #full
    | #screen
    | #auto
    | #min
    | #max
    | #fit
  ]
  let toValue = t =>
    switch t {
    | #min => [CssJs.unsafe("width", "min-content")]
    | #max => [CssJs.unsafe("width", "max-content")]
    | #fit => [CssJs.unsafe("width", "fit-content")]
    | #screen => [CssJs.width(#vw(100.))]
    | #auto => [CssJs.width(#auto)]
    | #full => [CssJs.width(#percent(100.))]
    | #...spacing as sp => [CssJs.width(Theme.Spacing.toValue(sp))]
    | #...proportions as prop => [CssJs.width(Theme.Proportions.toValue(prop))]
    }
}
let w = (width: Width.t) => Width.toValue(width)

type spacingHeight = [spacing | proportions | #screen | #auto]
type spacingWidth = [
  | Theme.Spacing.t
  | Theme.Proportions.t
  | #screen
  | #auto
  | #minContent
  | #maxContent
]

// Min-Width
let minW0 = [minWidth(#px(0))]
let minWFull = [minWidth(#percent(100.))]
let minWMin = [CssJs.unsafe("minWidth", "min-content")]
let minWMax = [CssJs.unsafe("minWidth", "max-content")]
let minWFit = [CssJs.unsafe("minWidth", "fit-content")]

// Max-Width
type widths = Theme.MaxWidth.t
type screens = Theme.Screens.t
type maxWidth = [widths | screens | #minContent | #maxContent]

let maxW = (max: maxWidth) =>
  switch max {
  | #minContent => [CssJs.unsafe("maxWidth", "min-content")]
  | #maxContent => [CssJs.unsafe("maxWidth", "max-content")]
  | #...widths as wd => [maxWidth(Theme.MaxWidth.toValue(wd))]
  | #...screens as sc => [maxWidth(Theme.Screens.toValue(sc))]
  }

let maxWPx = px => [CssJs.maxWidth(#px(px))]

// Height
module Height = {
  type t = [
    | Theme.Spacing.t
    | Theme.Proportions.t
    | #full
    | #screen
    | #auto
    | #min
    | #max
    | #fit
  ]
  let toValue = t =>
    switch t {
    | #min => [CssJs.unsafe("height", "min-content")]
    | #max => [CssJs.unsafe("height", "max-content")]
    | #fit => [CssJs.unsafe("height", "fit-content")]
    | #screen => [CssJs.height(#vw(100.))]
    | #auto => [CssJs.height(#auto)]
    | #full => [CssJs.height(#percent(100.))]
    | #...spacing as sp => [CssJs.height(Theme.Spacing.toValue(sp))]
    | #...proportions as prop => [CssJs.height(Theme.Proportions.toValue(prop))]
    }
}
let h = (height: Height.t) => Height.toValue(height)

// Min-Height
let minH0 = [minHeight(#px(0))]
let minHFull = [minHeight(#percent(100.))]
let minHScreen = [minHeight(#vh(100.))]
let minHMin = [CssJs.unsafe("minHeight", "min-content")]
let minHMax = [CssJs.unsafe("minHeight", "max-content")]
let minHFit = [CssJs.unsafe("minHeight", "fit-content")]
// Max-Height
module MaxHeight = {
  type t = [
    | Theme.Spacing.t
    | #full
    | #screen
    | #min
    | #max
    | #fit
  ]
  let toValue = t =>
    switch t {
    | #min => [CssJs.unsafe("maxHeight", "min-content")]
    | #max => [CssJs.unsafe("maxHeight", "max-content")]
    | #fit => [CssJs.unsafe("maxHeight", "fit-content")]
    | #screen => [CssJs.maxHeight(#vw(100.))]
    | #full => [CssJs.maxHeight(#percent(100.))]
    | #...spacing as sp => [CssJs.maxHeight(Theme.Spacing.toValue(sp))]
    }
}

let maxH = (height: MaxHeight.t) => MaxHeight.toValue(height)

// Font Family
let fontSans = [
  fontFamilies([
    #custom("ui-sans-serif"),
    #custom("system-ui"),
    #custom("-apple-system"),
    #custom("BlinkMacSystemFont"),
    #custom("Segoe UI"),
    #custom("Roboto"),
    #custom("Helvetica Neue"),
    #custom("Arial"),
    #custom("Noto Sans"),
    #sansSerif,
    #custom("Apple Color Emoji"),
    #custom("Segoe UI Emoji"),
    #custom("Segoe UI Symbol"),
    #custom("Noto Color Emoji"),
  ]),
]

let fontSerif = [
  fontFamilies([
    #custom("ui-serif"),
    #custom("Georgia"),
    #custom("Cambria"),
    #custom("Times New Roman"),
    #custom("Times"),
    #serif,
  ]),
]

let fontMono = [
  fontFamilies([
    #custom("ui-monospace"),
    #custom("SFMono-Regular"),
    #custom("Menlo"),
    #custom("Monaco"),
    #custom("Consolas"),
    #custom("Liberation Mono"),
    #custom("Courier New"),
    #monospace,
  ]),
]

// NOTE: Font Size - Utilities for controlling the font size of an element.

module TextSize = {
  type t = Theme.FontSize.t
  let toValue = t =>
    switch t {
    | #xs => [fontSize(Theme.FontSize.toValue(t)), lineHeight(Theme.LineHeight.toValue(#5))]
    | #sm => [fontSize(Theme.FontSize.toValue(t)), lineHeight(Theme.LineHeight.toValue(#5))]
    | #base => [fontSize(Theme.FontSize.toValue(t)), lineHeight(Theme.LineHeight.toValue(#6))]
    | #lg => [fontSize(Theme.FontSize.toValue(t)), lineHeight(Theme.LineHeight.toValue(#7))]
    | #xl => [fontSize(Theme.FontSize.toValue(t)), lineHeight(Theme.LineHeight.toValue(#7))]
    | #xl2 => [fontSize(Theme.FontSize.toValue(t)), lineHeight(Theme.LineHeight.toValue(#8))]
    | #xl3 => [fontSize(Theme.FontSize.toValue(t)), lineHeight(Theme.LineHeight.toValue(#9))]
    | #xl4 => [fontSize(Theme.FontSize.toValue(t)), lineHeight(Theme.LineHeight.toValue(#10))]
    | #xl5 | #xl6 | #xl7 | #xl8 | #xl9 => [
        fontSize(Theme.FontSize.toValue(t)),
        lineHeight(Theme.LineHeight.toValue(#none)),
      ]
    }
}
let textSize = size => TextSize.toValue(size)

// Font Smoothing
let antialiased = [
  CssJs.unsafe("WebkitFontSmoothing", "antialiased"),
  CssJs.unsafe("MozOSXFontSmoothing", "grayscale"),
]
let subpixelAntialiased = [
  CssJs.unsafe("WebkitFontSmoothing", "auto"),
  CssJs.unsafe("MozOSXFontSmoothing", "auto"),
]

// Font Style
let italic = [fontStyle(#italic)]
let notItalic = [fontStyle(#normal)]

// NOTE: Font Weight - Utilities for controlling the font weight of an element.
let fontWeight = weight => [CssJs.fontWeight(Theme.FontWeight.toValue(weight))]

// Font Variant Numeric
let normalNums = [CssJs.unsafe("fontVariantNumeric", "normal")]
let ordinal = [CssJs.unsafe("fontVariantNumeric", "ordinal")]
let slashedZero = [CssJs.unsafe("fontVariantNumeric", "slashed-zero")]
let liningNums = [CssJs.unsafe("fontVariantNumeric", "lining-nums")]
let oldstyleNums = [CssJs.unsafe("fontVariantNumeric", "oldstyle-nums")]
let proportionalNums = [CssJs.unsafe("fontVariantNumeric", "proportional-nums")]
let tabularNums = [CssJs.unsafe("fontVariantNumeric", "tabular-nums")]
let diagonalFractions = [CssJs.unsafe("fontVariantNumeric", "diagonal-fractions")]
let stackedFractions = [CssJs.unsafe("fontVariantNumeric", "stacked-fractions")]

//Letter Spacing
let tracking = wide => [letterSpacing(Theme.LetterSpacing.toValue(wide))]

// Line Height
let leading = value => [lineHeight(Theme.LineHeight.toValue(value))]
let leadingFloat = float => [lineHeight(#abs(float))]

// List Style Type
let listNone = [listStyleType(#none)]
let listDisc = [listStyleType(#disc)]
let listDecimal = [listStyleType(#decimal)]

// List Style Position
let listInside = [listStylePosition(#inside)]
let listOutside = [listStylePosition(#outside)]

// Text Alignment
let textLeft = [textAlign(#left)]
let textCenter = [textAlign(#center)]
let textRight = [textAlign(#right)]
let textJustify = [textAlign(#justify)]

// Placeholder Color
// let placeholder = (~opacity=1., color: colorType) => [
//   CssJs.placeholder([CssJs.color(Theme.Colors.toValue(color, ~opacity))]),
// ]

// Text Color
let textColor = (~opacity=1., color: Theme.Colors.t) =>
  switch color {
  | #inherit => [CssJs.unsafe("color", "inherit")]
  | _ => [CssJs.color(Theme.Colors.toValue(color, ~opacity))]
  }

// Text Decoration
let underline = [textDecorationLine(#underline)]
let overline = [textDecorationLine(#overline)]
let lineThrough = [textDecorationLine(#lineThrough)]
let noUnderline = [textDecorationLine(#none)]

// Text Decoration Color
let decorationColor = color => [CssJs.textDecorationColor(Theme.Colors.toValue(color))]

// Text Decoration Style
let decorationSolid = [CssJs.textDecorationStyle(#solid)]
let decorationDouble = [CssJs.textDecorationStyle(#double)]
let decorationDotted = [CssJs.textDecorationStyle(#dotted)]
let decorationDashed = [CssJs.textDecorationStyle(#dashed)]
let decorationWavy = [CssJs.textDecorationStyle(#wavy)]

module TextDecorationOffset = {
  type t = [#auto | #0 | #1 | #2 | #4 | #8]
  let toString = t =>
    switch t {
    | #auto => "auto"
    | #0 => "0px"
    | #1 => "1px"
    | #2 => "2px"
    | #4 => "4px"
    | #8 => "8px"
    }
}

module TextDecorationThickness = {
  type t = [TextDecorationOffset.t | #fromFont]
  let toString = t =>
    switch t {
    | #auto => "auto"
    | #fromFont => "from-font"
    | #0 => "0px"
    | #1 => "1px"
    | #2 => "2px"
    | #4 => "4px"
    | #8 => "8px"
    }
}

// Text Decoration Thickness
let decorationThickness = thickness => [
  CssJs.unsafe("textDecorationThickness", TextDecorationThickness.toString(thickness)),
]

// Text Underline Offset
let underlineOffset = offset => [
  CssJs.unsafe("textUnderlineOffset", TextDecorationOffset.toString(offset)),
]

// Text Transform
let uppercase = [textTransform(#uppercase)]
let lowercase = [textTransform(#lowercase)]
let capitalize = [textTransform(#capitalize)]
let normalCase = [textTransform(#none)]

// Text Overflow
let truncate = [overflow(#hidden), textOverflow(#ellipsis), whiteSpace(#nowrap)]
let textEllipsis = [textOverflow(#ellipsis)]
let textClip = [textOverflow(#clip)]

// Vertical Alignment
let alignBaseline = [verticalAlign(#baseline)]
let alignTop = [verticalAlign(#top)]
let alignMiddle = [verticalAlign(#middle)]
let alignBottom = [verticalAlign(#bottom)]
let alignTextTop = [CssJs.unsafe("verticalAlign", "text-top")]
let alignTextBottom = [CssJs.unsafe("verticalAlign", "text-bottom")]
let alignSub = [verticalAlign(#sub)]
let alignSuper = [verticalAlign(#super)]

// Whitespace
let whitespaceNormal = [whiteSpace(#normal)]
let whitespaceNowrap = [whiteSpace(#nowrap)]
let whitespacePre = [whiteSpace(#pre)]
let whitespacePreLine = [whiteSpace(#preLine)]
let whitespacePreWrap = [whiteSpace(#preWrap)]

// Word Break
let breakNormal = [overflowWrap(#normal), wordBreak(#normal)]
let breakWords = [overflowWrap(#breakWord)]
let breakAll = [wordBreak(#breakAll)]

// Content
let contentNone = [CssJs.unsafe("content", "none")]

// Background Attachment
let bgFixed = [backgroundAttachment(#fixed)]
let bgLocal = [backgroundAttachment(#local)]
let bgScroll = [backgroundAttachment(#scroll)]

// Background Clip
let bgClipBorder = [backgroundClip(#borderBox)]
let bgClipPadding = [backgroundClip(#paddingBox)]
let bgClipContent = [backgroundClip(#contentBox)]
let bgClipText = [CssJs.unsafe("backgroundClip", "text")]

// Background Color
let bg = (~opacity=1., color: Theme.Colors.t) => [
  backgroundColor(Theme.Colors.toValue(color, ~opacity)),
]

// Background Origin
let bgOriginBorder = [CssJs.backgroundOrigin(#borderBox)]
let bgOriginPadding = [CssJs.backgroundOrigin(#paddingBox)]
let bgOriginContent = [CssJs.backgroundOrigin(#contentBox)]

// Background Position
let bgBottom = [backgroundPosition(#bottom)]
let bgCenter = [backgroundPosition(#center)]
let bgLeft = [backgroundPosition(#left)]
let bgLeftBottom = [backgroundPositions([#left, #bottom])]
let bgLeftTop = [backgroundPositions([#left, #top])]
let bgRight = [backgroundPosition(#right)]
let bgRightBottom = [backgroundPositions([#right, #bottom])]
let bgRightTop = [backgroundPositions([#right, #top])]
let bgTop = [backgroundPosition(#top)]

// Background Repeat
let bgRepeat = [backgroundRepeat(#repeat)]
let bgNoRepeat = [backgroundRepeat(#noRepeat)]
let bgRepeatX = [backgroundRepeat(#repeatX)]
let bgRepeatY = [backgroundRepeat(#repeatY)]
let bgRepeatRound = [backgroundRepeat(#round)]
let bgRepeatSpace = [backgroundRepeat(#space)]

// Background Size
let bgAuto = [backgroundSize(#auto)]
let bgCover = [backgroundSize(#cover)]
let bgContain = [backgroundSize(#contain)]

// Background Image
type colorTuple = (CssJs.Types.Length.t, CssJs.Types.Color.t)

let combineGradientColors = ((percent, color): colorTuple) =>
  `, ${CssJs.Types.Color.toString(color)} ${CssJs.Types.Length.toString(percent)}`

let linGradient = (direction, arrayOfTuples: array<colorTuple>) =>
  `linear-gradient(${direction}${Belt.Array.reduce(arrayOfTuples, ``, (acc, (percent, color)) =>
      acc ++ combineGradientColors((percent, color))
    )})`

let bgNone = [backgroundImage(#none)]
let toT = colorList => CssJs.Types.Gradient.toString(CssJs.linearGradient(deg(0.), colorList))
let toTr = colorList => linGradient("to top right", colorList)
let toR = colorList => CssJs.Types.Gradient.toString(CssJs.linearGradient(deg(90.), colorList))
let toBr = colorList => linGradient("to bottom right", colorList)
let toB = colorList => CssJs.Types.Gradient.toString(CssJs.linearGradient(deg(180.), colorList))
let toBl = colorList => linGradient("to bottom left", colorList)
let toL = colorList => CssJs.Types.Gradient.toString(CssJs.linearGradient(deg(270.), colorList))
let toTl = colorList => linGradient("to top left", colorList)

let bgGradientToT = (colorList: array<colorTuple>) => [
  CssJs.unsafe("backgroundImage", toT(colorList)),
]
let bgGradientToTr = (colorList: array<colorTuple>) => [
  CssJs.unsafe("backgroundImage", toTr(colorList)),
]
let bgGradientToR = (colorList: array<colorTuple>) => [
  CssJs.unsafe("backgroundImage", toR(colorList)),
]
let bgGradientToBr = (colorList: array<colorTuple>) => [
  CssJs.unsafe("backgroundImage", toBr(colorList)),
]
let bgGradientToB = (colorList: array<colorTuple>) => [
  CssJs.unsafe("backgroundImage", toB(colorList)),
]
let bgGradientToBl = (colorList: array<colorTuple>) => [
  CssJs.unsafe("backgroundImage", toBl(colorList)),
]
let bgGradientToL = (colorList: array<colorTuple>) => [
  CssJs.unsafe("backgroundImage", toL(colorList)),
]
let bgGradientToTl = (colorList: array<colorTuple>) => [
  CssJs.unsafe("backgroundImage", toTl(colorList)),
]

// Border Radius
module BorderRadius = {
  type borderRadius = Theme.BorderRadius.t
  type t = [
    | #all(borderRadius)
    | #t(borderRadius)
    | #b(borderRadius)
    | #r(borderRadius)
    | #l(borderRadius)
    | #tr(borderRadius)
    | #tl(borderRadius)
    | #br(borderRadius)
    | #bl(borderRadius)
  ]
  let toValue = t =>
    switch t {
    | #all(radius) => [borderRadius(Theme.BorderRadius.toValue(radius))]
    | #t(radius) => [
        borderTopLeftRadius(Theme.BorderRadius.toValue(radius)),
        borderTopRightRadius(Theme.BorderRadius.toValue(radius)),
      ]
    | #b(radius) => [
        borderBottomRightRadius(Theme.BorderRadius.toValue(radius)),
        borderBottomLeftRadius(Theme.BorderRadius.toValue(radius)),
      ]

    | #r(radius) => [
        borderTopRightRadius(Theme.BorderRadius.toValue(radius)),
        borderBottomRightRadius(Theme.BorderRadius.toValue(radius)),
      ]
    | #l(radius) => [
        borderTopLeftRadius(Theme.BorderRadius.toValue(radius)),
        borderBottomLeftRadius(Theme.BorderRadius.toValue(radius)),
      ]
    | #tr(radius) => [borderTopRightRadius(Theme.BorderRadius.toValue(radius))]
    | #tl(radius) => [borderTopLeftRadius(Theme.BorderRadius.toValue(radius))]
    | #br(radius) => [borderBottomRightRadius(Theme.BorderRadius.toValue(radius))]
    | #bl(radius) => [borderBottomLeftRadius(Theme.BorderRadius.toValue(radius))]
    }
}
let rounded = size => BorderRadius.toValue(size)

// Border Width
module BorderWidth = {
  type width = Theme.BorderWidth.t
  type t = [#all(width) | #t(width) | #b(width) | #l(width) | #r(width)]
  let toValue = t =>
    switch t {
    | #all(width) => [borderWidth(Theme.BorderWidth.toValue(width))]
    | #t(width) => [borderTopWidth(Theme.BorderWidth.toValue(width))]
    | #b(width) => [borderBottomWidth(Theme.BorderWidth.toValue(width))]
    | #l(width) => [borderLeftWidth(Theme.BorderWidth.toValue(width))]
    | #r(width) => [borderRightWidth(Theme.BorderWidth.toValue(width))]
    }
}

let border = width => BorderWidth.toValue(width)
module BorderColor = {
  type color = Theme.Colors.t
  type t = [#all(color) | #x(color) | #y(color) | #t(color) | #b(color) | #l(color) | #r(color)]
  let toValue = t =>
    switch t {
    | #all(color) => [borderColor(Theme.Colors.toValue(~opacity=1., color))]
    | #x(color) => [
        borderLeftColor(Theme.Colors.toValue(~opacity=1., color)),
        borderRightColor(Theme.Colors.toValue(~opacity=1., color)),
      ]
    | #y(color) => [
        borderTopColor(Theme.Colors.toValue(~opacity=1., color)),
        borderBottomColor(Theme.Colors.toValue(~opacity=1., color)),
      ]
    | #t(color) => [borderTopColor(Theme.Colors.toValue(~opacity=1., color))]
    | #b(color) => [borderBottomColor(Theme.Colors.toValue(~opacity=1., color))]
    | #l(color) => [borderLeftColor(Theme.Colors.toValue(~opacity=1., color))]
    | #r(color) => [borderRightColor(Theme.Colors.toValue(~opacity=1., color))]
    }
}
// Border Color
let borderColor = (color: BorderColor.t) => BorderColor.toValue(color)

// Border Style
let borderSolid = [borderStyle(#solid)]
let borderDashed = [borderStyle(#dashed)]
let borderDotted = [borderStyle(#dotted)]
let borderDouble = [borderStyle(#double)]
let borderHidden = [borderStyle(#hidden)]
let borderNone = [borderStyle(#none)]

// Divide Width
module Divide = {
  type width = Theme.BorderWidth.t
  type color = Theme.Colors.t
  type t = [#x(width, color, bool) | #y(width, color, bool)]

  let toValue = t =>
    switch t {
    | #x(width, color, reverse) =>
      reverse
        ? [
            borderRightWidth(Theme.BorderWidth.toValue(width)),
            borderLeftWidth(Theme.BorderWidth.toValue(#0)),
            CssJs.borderColor(Theme.Colors.toValue(color)),
          ]
        : [
            borderLeftWidth(Theme.BorderWidth.toValue(width)),
            borderRightWidth(Theme.BorderWidth.toValue(#0)),
            CssJs.borderColor(Theme.Colors.toValue(color)),
          ]
    | #y(width, color, reverse) =>
      reverse
        ? [
            CssJs.borderColor(Theme.Colors.toValue(color)),
            borderTopWidth(Theme.BorderWidth.toValue(#0)),
            borderBottomWidth(Theme.BorderWidth.toValue(width)),
          ]
        : [
            CssJs.borderColor(Theme.Colors.toValue(color)),
            borderTopWidth(Theme.BorderWidth.toValue(width)),
            borderBottomWidth(Theme.BorderWidth.toValue(#0)),
          ]
    }
}
let divide = t => Divide.toValue(t)

// Divide Style
let divideSolid = [borderStyle(#solid)]
let divideDashed = [borderStyle(#dashed)]
let divideDotted = [borderStyle(#dotted)]
let divideDouble = [borderStyle(#double)]
let divideNone = [borderStyle(#none)]

// Outline
let outlineWidth = width => [CssJs.outlineWidth(Theme.BorderWidth.toValue(width))]
let outlineColor = color => [CssJs.outlineColor(Theme.Colors.toValue(color))]
let outlineOffset = offset => [outlineOffset(Theme.BorderWidth.toValue(offset))]

// Outline style
let outlineSolid = [CssJs.outlineStyle(#solid)]
let outlineDashed = [CssJs.outlineStyle(#dashed)]
let outlineDotted = [CssJs.outlineStyle(#dotted)]
let outlineDouble = [CssJs.outlineStyle(#double)]
let outlineHidden = [CssJs.outlineStyle(#hidden)]
let outlineNone = [
  CssJs.outline(#px(2), #solid, Theme.Colors.toValue(#transparent)),
  CssJs.outlineOffset(#px(2)),
]

// Ring
module Ring = {
  type color = Theme.Colors.t
  type width = [#0 | #1 | #2 | #3 | #4 | #8]
  type offsetWidth = [#0 | #1 | #2 | #4 | #8]
  let toWidth = width =>
    switch width {
    | #0 => "0"
    | #1 => "1"
    | #2 => "2"
    | #3 => "3"
    | #4 => "4"
    | #8 => "8"
    }
  let toRingShadow = (~inset: bool, ~color: color, ~width: width, ~offsetWidth: offsetWidth) =>
    `${inset ? "inset" : ""} 0 0 0 calc(${toWidth(width)}px + ${toWidth(
        offsetWidth,
      )} ${Types.Color.toString(Theme.Colors.toValue(color))}`

  let toOffsetShadow = (~inset: bool, ~offsetWidth: offsetWidth, ~offsetColor: color) =>
    `${inset ? "inset" : ""} 0 0 0 ${toWidth(offsetWidth)} ${Types.Color.toString(
        Theme.Colors.toValue(offsetColor),
      )}`

  let toValue = (
    ~inset,
    ~color: color,
    ~width: width,
    ~offsetWidth: offsetWidth,
    ~offsetColor: color,
    (),
  ) => [
    CssJs.unsafe(
      "boxShadow",
      `${toOffsetShadow(~inset, ~offsetWidth, ~offsetColor)}, ${toRingShadow(
          ~inset,
          ~color,
          ~width,
          ~offsetWidth,
        )}`,
    ),
  ]
}

let ringOffsetShadow = (~inset, ~offsetWidth, ~offsetColor, ()) =>
  CssJs.Shadow.box(
    ~inset,
    ~x=#px(0),
    ~y=#px(0),
    ~blur=#px(0),
    ~spread=#px(offsetWidth),
    offsetColor,
  )

let ringShadow = (~inset, ~spread, ~color, ()) =>
  CssJs.Shadow.box(~inset, ~x=#px(0), ~y=#px(0), ~blur=#px(0), ~spread=#px(spread), color)

let whiteShadow = CssJs.Shadow.box(~x=#px(0), ~y=#px(0), Theme.Colors.toValue(#white))

// TODO: Ring utility issues on focus
let ring = (
  ~inset=false,
  ~offsetWidth=0,
  ~offsetColor=Theme.Colors.toValue(#white),
  ~width=#3,
  ~color: Theme.Colors.t,
  (),
) => {
  [
    boxShadows([
      ringOffsetShadow(~inset, ~offsetWidth, ~offsetColor, ()),
      ringShadow(
        ~inset,
        ~spread=Theme.RingWidth.toValue(width) + offsetWidth,
        ~color=Theme.Colors.toValue(color),
        (),
      ),
      whiteShadow,
    ]),
  ]
}

// Box Shadow
module BoxShadow = {
  type color = Theme.Colors.t
  type t = [
    | #sm(color)
    | #default(color)
    | #md(color)
    | #lg(color)
    | #xl(color)
    | #xl2(color)
    | #inner(color)
    | #none
  ]
  let toValue = t =>
    switch t {
    | #sm(color) => [
        CssJs.unsafe(
          "boxShadow",
          `0 1px 2px 0 ${Types.Color.toString(Theme.Colors.toValue(color))}`,
        ),
      ]
    | #default(color) => [
        CssJs.unsafe(
          "boxShadow",
          `0 1px 3px 0 ${Types.Color.toString(
              Theme.Colors.toValue(color),
            )}, 0 1px 2px -1px ${Types.Color.toString(Theme.Colors.toValue(color))}`,
        ),
      ]
    | #md(color) => [
        CssJs.unsafe(
          "boxShadow",
          `0 4px 6px -1px ${Types.Color.toString(
              Theme.Colors.toValue(color),
            )}, 0 2px 4px -2px ${Types.Color.toString(Theme.Colors.toValue(color))}`,
        ),
      ]
    | #lg(color) => [
        CssJs.unsafe(
          "boxShadow",
          `0 10px 15px -3px ${Types.Color.toString(
              Theme.Colors.toValue(color),
            )}, 0 4px 6px -4px ${Types.Color.toString(Theme.Colors.toValue(color))}`,
        ),
      ]
    | #xl(color) => [
        CssJs.unsafe(
          "boxShadow",
          `0 20px 25px -5px ${Types.Color.toString(
              Theme.Colors.toValue(color),
            )}, 0 8px 10px -6px ${Types.Color.toString(Theme.Colors.toValue(color))}`,
        ),
      ]
    | #xl2(color) => [
        CssJs.unsafe(
          "boxShadow",
          `0 25px 50px -12px ${Types.Color.toString(Theme.Colors.toValue(color))}`,
        ),
      ]
    | #inner(color) => [
        CssJs.unsafe(
          "boxShadow",
          `inset 0 2px 4px 0 ${Types.Color.toString(Theme.Colors.toValue(color))}`,
        ),
      ]
    | #none => [CssJs.unsafe("boxShadow", "0 0 #0000")]
    }
}
let shadow = (type_: BoxShadow.t) => BoxShadow.toValue(type_)

// Opacity
let opacity = (value: Theme.Opacity.t) => [opacity(Theme.Opacity.toValue(value))]

// Mix Blend Mode
module MixBlendMode = {
  type t = [
    | #normal
    | #multiply
    | #screen
    | #overlay
    | #darken
    | #lighten
    | #colorDodge
    | #colorBurn
    | #hardLight
    | #softLight
    | #difference
    | #exclusion
    | #hue
    | #saturation
    | #color
    | #luminosity
  ]

  let toString = t =>
    switch t {
    | #normal => "normal"
    | #multiply => "multiply"
    | #screen => "screen"
    | #overlay => "overlay"
    | #darken => "darken"
    | #lighten => "lighten"
    | #colorDodge => "colorDodge"
    | #colorBurn => "colorBurn"
    | #hardLight => "hardLight"
    | #softLight => "softLight"
    | #difference => "difference"
    | #exclusion => "exclusion"
    | #hue => "hue"
    | #saturation => "saturation"
    | #color => "color"
    | #luminosity => "luminosity"
    }
}
let mixBlend = mode => [CssJs.unsafe("mixBlendMode", MixBlendMode.toString(mode))]
let bgBlend = mode => [CssJs.unsafe("backgroundBlendMode", MixBlendMode.toString(mode))]

module Blur = {
  type t = [#none | #sm | #default | #md | #lg | #xl | #xl2 | #xl3]
  let toString = t =>
    switch t {
    | #none => "blur(0)"
    | #sm => "blur(4px)"
    | #default => "blur(8px)"
    | #md => "blur(12px)"
    | #lg => "blur(16px)"
    | #xl => "blur(24px)"
    | #xl2 => "blur(40px)"
    | #xl3 => "blur(64px)"
    }
}
let blur = size => [CssJs.unsafe("filter", Blur.toString(size))]

module Brightness = {
  type t = [#0 | #50 | #75 | #90 | #95 | #100 | #105 | #110 | #125 | #150 | #200]
  let toString = t =>
    switch t {
    | #0 => "brightness(0)"
    | #50 => "brightness(0.5)"
    | #75 => "brightness(0.75)"
    | #90 => "brightness(0.9)"
    | #95 => "brightness(0.95)"
    | #100 => "brightness(1)"
    | #105 => "brightness(1.05)"
    | #110 => "brightness(1.1)"
    | #125 => "brightness(1.25)"
    | #150 => "brightness(1.5)"
    | #200 => "brightness(2)"
    }
}

let brightness = value => [CssJs.unsafe("filter", Brightness.toString(value))]

module Contrast = {
  type t = [#0 | #50 | #75 | #100 | #125 | #150 | #200]
  let toString = t =>
    switch t {
    | #0 => "contrast(0)"
    | #50 => "contrast(0.5)"
    | #75 => "contrast(0.75)"
    | #100 => "contrast(1)"
    | #125 => "contrast(1.25)"
    | #150 => "contrast(1.5)"
    | #200 => "contrast(2)"
    }
}

let contrast = value => [CssJs.unsafe("filter", Contrast.toString(value))]

module DropShadow = {
  type t = [#sm | #default | #md | #lg | #xl | #xl2 | #none]
  let toString = t =>
    switch t {
    | #sm => "drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))"
    | #default => "drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))"
    | #md => "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))"
    | #lg => "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))"
    | #xl => "drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))"
    | #xl2 => "drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))"
    | #none => "drop-shadow(0 0 #0000)"
    }
}

let dropShadow = shadow => [CssJs.unsafe("filter", DropShadow.toString(shadow))]

let grayscale0 = [CssJs.unsafe("filter", "grayscale(0)")]
let grayscale = [CssJs.unsafe("filter", "grayscale(100%)")]

module HueRotate = {
  type t = [#0 | #15 | #30 | #60 | #90 | #180]
  let toString = t =>
    switch t {
    | #0 => "hue-rotate(0deg)"
    | #15 => "hue-rotate(15deg)"
    | #30 => "hue-rotate(30deg)"
    | #60 => "hue-rotate(60deg)"
    | #90 => "hue-rotate(90deg)"
    | #180 => "hue-rotate(180deg)"
    }
}

let hueRotate = rotation => [CssJs.unsafe("filter", HueRotate.toString(rotation))]

let invert0 = [CssJs.unsafe("filter", "invert(0)")]
let invert = [CssJs.unsafe("filter", "invert(100%)")]

module Saturate = {
  type t = [#0 | #50 | #100 | #150 | #200]
  let toString = t =>
    switch t {
    | #0 => "saturate(0)"
    | #50 => "saturate(50)"
    | #100 => "saturate(100)"
    | #150 => "saturate(150)"
    | #200 => "saturate(200)"
    }
}

let saturate = val => [CssJs.unsafe("filter", Saturate.toString(val))]

let sepia0 = [CssJs.unsafe("filter", "sepia(0)")]
let sepia = [CssJs.unsafe("filter", "sepia(100%)")]

let backdropBlur = size => [CssJs.unsafe("backdropFilter", Blur.toString(size))]
let backdropBrightness = val => [CssJs.unsafe("backdropFilter", Brightness.toString(val))]
let backdropContrast = val => [CssJs.unsafe("backdropFilter", Contrast.toString(val))]

let backdropGrayscale0 = [CssJs.unsafe("backdropFilter", "grayscale(0)")]
let backdropGrayscale = [CssJs.unsafe("backdropFilter", "grayscale(100%)")]

let backdropHueRotate = rotation => [CssJs.unsafe("backdropFilter", HueRotate.toString(rotation))]

let backdropInvert0 = [CssJs.unsafe("backdropFilter", "invert(0)")]
let backdropInvert = [CssJs.unsafe("backdropFilter", "invert(100%)")]

let backdropOpacity = opacity => [
  CssJs.unsafe("backdropFilter", `opacity(${Belt.Float.toString(Theme.Opacity.toValue(opacity))})`),
]

let backdropSaturate = val => [CssJs.unsafe("backdropFilter", Saturate.toString(val))]
let backdropSepia0 = [CssJs.unsafe("backdropFilter", "sepia(0)")]
let backdropSepia = [CssJs.unsafe("backdropFilter", "sepia(100%)")]

// INFO: TABELS
// NOTE: Border Collapse - Utilities for controlling whether table borders should collapse or be separated.
let borderCollapse = [CssJs.borderCollapse(#collapse)]
let borderSeparate = [CssJs.borderCollapse(#separate)]

// NOTE: Table Layout - Utilities for controlling the table layout algorithm.
let tableAuto = [tableLayout(#auto)]
let tableFixed = [tableLayout(#fixed)]

// NOTE: Cursor - Utilities for controlling the cursor style when hovering over an element.
module Cursor = {
  type t = [
    | #auto
    | #default
    | #pointer
    | #wait
    | #text
    | #move
    | #help
    | #notAllowed
    | #none
    | #contextMenu
    | #progress
    | #cell
    | #crosshair
    | #verticalText
    | #alias
    | #copy
    | #noDrop
    | #grab
    | #grabbing
    | #allScroll
    | #colResize
    | #rowResize
    | #nResize
    | #eResize
    | #sResize
    | #wResize
    | #neResize
    | #nwResize
    | #seResize
    | #swResize
    | #ewResize
    | #nsResize
    | #neswResize
    | #nwseResize
    | #zoomIn
    | #zoomOut
  ]

  let toString = t =>
    switch t {
    | #auto => "auto"
    | #default => "default"
    | #pointer => "pointer"
    | #wait => "wait"
    | #text => "text"
    | #move => "move"
    | #help => "help"
    | #notAllowed => "notAllowed"
    | #none => "none"
    | #contextMenu => "contextMenu"
    | #progress => "progress"
    | #cell => "cell"
    | #crosshair => "crosshair"
    | #verticalText => "verticalText"
    | #alias => "alias"
    | #copy => "copy"
    | #noDrop => "noDrop"
    | #grab => "grab"
    | #grabbing => "grabbing"
    | #allScroll => "allScroll"
    | #colResize => "colResize"
    | #rowResize => "rowResize"
    | #nResize => "nResize"
    | #eResize => "eResize"
    | #sResize => "sResize"
    | #wResize => "wResize"
    | #neResize => "neResize"
    | #nwResize => "nwResize"
    | #seResize => "seResize"
    | #swResize => "swResize"
    | #ewResize => "ewResize"
    | #nsResize => "nsResize"
    | #neswResize => "neswResize"
    | #nwseResize => "nwseResize"
    | #zoomIn => "zoomIn"
    | #zoomOut => "zoomOut"
    }
}
let cursor = (val: Cursor.t) => [cursor(val)]
let caretColor = (color: Theme.Colors.t) => [
  CssJs.unsafe("caretColor", Types.Color.toString(Theme.Colors.toValue(color))),
]

let pointerEventsNone = [pointerEvents(#none)]
let pointerEventsAuto = [pointerEvents(#auto)]

let resizeNone = [resize(#none)]
let resizeY = [resize(#vertical)]
let resizeX = [resize(#horizontal)]
let resize = [resize(#both)]

let scrollAuto = [CssJs.scrollBehavior(#auto)]
let scrollSmooth = [CssJs.scrollBehavior(#smooth)]
let scrollM = spacing => [
  CssJs.unsafe("scrollMargin", Types.Length.toString(Theme.Spacing.toValue(spacing))),
]
let scrollMx = spacing => [
  CssJs.unsafe("scrollMarginLeft", Types.Length.toString(Theme.Spacing.toValue(spacing))),
  CssJs.unsafe("scrollMarginRight", Types.Length.toString(Theme.Spacing.toValue(spacing))),
]
let scrollMy = spacing => [
  CssJs.unsafe("scrollMarginTop", Types.Length.toString(Theme.Spacing.toValue(spacing))),
  CssJs.unsafe("scrollMarginBottom", Types.Length.toString(Theme.Spacing.toValue(spacing))),
]
let scrollMt = spacing => [
  CssJs.unsafe("scrollMarginTop", Types.Length.toString(Theme.Spacing.toValue(spacing))),
]
let scrollMr = spacing => [
  CssJs.unsafe("scrollMarginRight", Types.Length.toString(Theme.Spacing.toValue(spacing))),
]
let scrollMb = spacing => [
  CssJs.unsafe("scrollMarginBottom", Types.Length.toString(Theme.Spacing.toValue(spacing))),
]
let scrollMl = spacing => [
  CssJs.unsafe("scrollMarginLeft", Types.Length.toString(Theme.Spacing.toValue(spacing))),
]

let scrollP = spacing => [
  CssJs.unsafe("scrollPadding", Types.Length.toString(Theme.Spacing.toValue(spacing))),
]
let scrollPx = spacing => [
  CssJs.unsafe("scrollPaddingLeft", Types.Length.toString(Theme.Spacing.toValue(spacing))),
  CssJs.unsafe("scrollPaddingRight", Types.Length.toString(Theme.Spacing.toValue(spacing))),
]
let scrollPy = spacing => [
  CssJs.unsafe("scrollPaddingTop", Types.Length.toString(Theme.Spacing.toValue(spacing))),
  CssJs.unsafe("scrollPaddingBottom", Types.Length.toString(Theme.Spacing.toValue(spacing))),
]
let scrollPt = spacing => [
  CssJs.unsafe("scrollPaddingTop", Types.Length.toString(Theme.Spacing.toValue(spacing))),
]
let scrollPr = spacing => [
  CssJs.unsafe("scrollPaddingRight", Types.Length.toString(Theme.Spacing.toValue(spacing))),
]
let scrollPb = spacing => [
  CssJs.unsafe("scrollPaddingBottom", Types.Length.toString(Theme.Spacing.toValue(spacing))),
]
let scrollPl = spacing => [
  CssJs.unsafe("scrollPaddingLeft", Types.Length.toString(Theme.Spacing.toValue(spacing))),
]

let snapStart = [CssJs.unsafe("scrollSnapAlign", "start")]
let snapEnd = [CssJs.unsafe("scrollSnapAlign", "end")]
let snapCenter = [CssJs.unsafe("scrollSnapAlign", "center")]
let snapAlignNone = [CssJs.unsafe("scrollSnapAlign", "none")]

let snapNormal = [CssJs.unsafe("scrollSnapStop", "normal")]
let snapAlways = [CssJs.unsafe("scrollSnapStop", "always")]
type snapStrictness = [#mandatory | #proximity]
module SnapType = {
  type t = [#none | #x | #y | #both]
  let toString = (~snapStrictness, t) =>
    switch t {
    | #none => "none"
    | #x => `x ${snapStrictness}`
    | #y => `y ${snapStrictness}`
    | #both => `both ${snapStrictness}`
    }
}
let snap = (~snapStrictness, snapType) => [
  CssJs.unsafe("scrollSnapType", SnapType.toString(~snapStrictness, snapType)),
]

module TouchAction = {
  type t = [
    | #auto
    | #none
    | #panX
    | #panLeft
    | #panRight
    | #panY
    | #panUp
    | #panDown
    | #pinchZoom
    | #mainpulation
  ]
  let toString = t =>
    switch t {
    | #auto => "auto"
    | #none => "none"
    | #panX => "panX"
    | #panLeft => "panLeft"
    | #panRight => "panRight"
    | #panY => "panY"
    | #panUp => "panUp"
    | #panDown => "panDown"
    | #pinchZoom => "pinchZoom"
    | #mainpulation => "manipulation"
    }
}

let touch = action => [CssJs.unsafe("touchAction", TouchAction.toString(action))]

// NOTE: User Select - Utilities for controlling whether the user can select text in an element.
let selectNone = [userSelect(#none)]
let selectText = [userSelect(#text)]
let selectAll = [userSelect(#all)]
let selectAuto = [userSelect(#auto)]

module WillChange = {
  type t = [#auto | #scrollPosition | #contents | #transform]
  let toString = t =>
    switch t {
    | #auto => "auto"
    | #scrollPosition => "scrollPosition"
    | #contents => "contents"
    | #transform => "transform"
    }
}

let willChange = value => [CssJs.unsafe("will-change", WillChange.toString(value))]
let fill = color => [CssJs.unsafe("fill", Types.Color.toString(Theme.Colors.toValue(color)))]
let stroke = color => [CssJs.unsafe("stroke", Types.Color.toString(Theme.Colors.toValue(color)))]
module StrokeWidth = {
  type t = [#0 | #1 | #2]
  let toString = t =>
    switch t {
    | #0 => "0"
    | #1 => "1"
    | #2 => "2"
    }
}
let strokeWidth = width => [CssJs.unsafe("strokeWidth", StrokeWidth.toString(width))]

type rulesArray = array<CssJs.rule>

// Screen Readers
let srOnly = [
  position(#absolute),
  width(#px(1)),
  height(#px(1)),
  padding(#px(0)),
  margin(#px(-1)),
  overflow(#hidden),
  CssJs.unsafe("clip", "rect(0, 0, 0, 0)"),
  whiteSpace(#nowrap),
  borderWidth(#px(0)),
]

let noSrOnly = [
  position(#static),
  width(#auto),
  height(#auto),
  padding(#px(0)),
  margin(#px(0)),
  overflow(#visible),
  CssJs.unsafe("clip", "auto"),
  whiteSpace(#normal),
]

// NOTE: Transform - Utilities for controlling transform behaviour.
let transform = (
  ~twTranslateX=0.,
  ~twTranslateY=0.,
  ~twRotate=#deg(0.),
  ~twSkewX=#deg(0.),
  ~twSkewY=#deg(0.),
  ~twScaleX=1.,
  ~twScaleY=1.,
  (),
) => [
  CssJs.transforms([
    CssJs.translateX(#percent(twTranslateX)),
    CssJs.translateY(#percent(twTranslateY)),
    CssJs.rotate(twRotate),
    CssJs.skewX(twSkewX),
    CssJs.skewY(twSkewY),
    CssJs.scaleX(twScaleX),
    CssJs.scaleY(twScaleY),
  ]),
]

let transformGpu = (
  ~twTranslateX=#percent(0.),
  ~twTranslateY=#percent(0.),
  ~twRotate=#deg(0.),
  ~twSkewX=#deg(0.),
  ~twSkewY=#deg(0.),
  ~twScaleX=1.,
  ~twScaleY=1.,
  (),
) => [
  CssJs.transforms([
    CssJs.translate3d(twTranslateX, twTranslateY, #percent(0.)),
    CssJs.rotate(twRotate),
    CssJs.skewX(twSkewX),
    CssJs.skewY(twSkewY),
    CssJs.scaleX(twScaleX),
    CssJs.scaleY(twScaleY),
  ]),
]
let transformNone = [CssJs.transform(#none)]

// NOTE: Transform Origin - Utilities for specifying the origin for an element's transformations.
let originCenter = [CssJs.unsafe("transformOrigin", "center")]
let originRight = [CssJs.unsafe("transformOrigin", "right")]
let originLeft = [CssJs.unsafe("transformOrigin", "left")]

let originTop = [CssJs.unsafe("transformOrigin", "top")]
let originTopLeft = [CssJs.unsafe("transformOrigin", "top left")]
let originTopRight = [CssJs.unsafe("transformOrigin", "top right")]

let originBottom = [CssJs.unsafe("transformOrigin", "bottom")]
let originBottomRight = [CssJs.unsafe("transformOrigin", "bottom right")]
let originBottomLeft = [CssJs.unsafe("transformOrigin", "bottom left")]

// Interactivity
let accentColor = color => [
  CssJs.unsafe("accentColor", Types.Color.toString(Theme.Colors.toValue(color))),
]

let appearanceNone = [CssJs.unsafe("appearance", "none")]

// INFO: TRANSITIONS AND ANIMATIONS
// NOTE: Transition Property - Utilities for controlling which CSS properties transition.
let timingFunction = #cubicBezier(0.4, 0., 0.2, 1.)
let transitionNone = [transitionProperty("none")]
let transitionAll = [transition("all", ~duration=Theme.Duration.toValue(#150), ~timingFunction)]
let transition = [
  transition(
    "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
    ~duration=Theme.Duration.toValue(#150),
    ~timingFunction,
  ),
]
let transitionColors = [
  CssJs.transition(
    "color, background-color, border-color, text-decoration-color, fill, stroke",
    ~duration=Theme.Duration.toValue(#150),
    ~timingFunction,
  ),
]
let transitionOpacity = [
  CssJs.transition("opacity", ~duration=Theme.Duration.toValue(#150), ~timingFunction),
]
let transitionShadow = [
  CssJs.transition("boxShadow", ~duration=Theme.Duration.toValue(#150), ~timingFunction),
]

let transitionTransform = [
  CssJs.transition("transform", ~duration=Theme.Duration.toValue(#150), ~timingFunction),
]

// NOTE: Transition Duration - Utilities for controlling the duration of CSS transitions.
let duration = miliseconds => [transitionDuration(Theme.Duration.toValue(miliseconds))]

// NOTE: Transition Timing Function - Utilities for controlling the easing of CSS transitions.
let easeLinear = [transitionTimingFunction(Theme.TimingFunction.toValue(#linear))]
let easeIn = [transitionTimingFunction(#cubicBezier(0.4, 0., 1., 1.))]
let easeOut = [transitionTimingFunction(#cubicBezier(0., 0., 0.2, 1.))]
let easeInOut = [transitionTimingFunction(#cubicBezier(0.4, 0., 0.2, 1.))]

// NOTE: Transition Delay - Utilities for controlling the delay of CSS transitions.
let delay = miliseconds => [transitionDelay(Theme.Duration.toValue(miliseconds))]

// NOTE: Animation - Utilities for animating elements with CSS animations.
let animateNone = [animationValue(#value("none"))]
let animateSpin = [
  animation(
    Theme.KeyFrames.spin,
    ~duration=1000,
    ~delay=0,
    ~timingFunction=#linear,
    ~iterationCount=#infinite,
  ),
]

let animatePing = [
  animation(
    Theme.KeyFrames.ping,
    ~duration=1000,
    ~timingFunction=#cubicBezier(0., 0., 0.2, 1.),
    ~delay=0,
    ~iterationCount=#infinite,
  ),
]

let animatePulse = [
  animation(
    Theme.KeyFrames.pulse,
    ~duration=2000,
    ~timingFunction=#cubicBezier(0.4, 0., 0.6, 1.),
    ~delay=0,
    ~iterationCount=#infinite,
  ),
]

let animateBounce = [
  animation(Theme.KeyFrames.bounce, ~duration=1000, ~delay=0, ~iterationCount=#infinite),
]

let scale = val => [CssJs.transform(#scale(Theme.Scale.toValue(val), Theme.Scale.toValue(val)))]
let scaleX = val => [CssJs.transform(#scaleX(Theme.Scale.toValue(val)))]
let scaleY = val => [CssJs.transform(#scaleY(Theme.Scale.toValue(val)))]
let rotate = val => [CssJs.transform(#rotate(Theme.Rotate.toValue(val)))]
let translateX = val => [CssJs.transform(#translateX(Theme.Spacing.toValue(val)))]
let translateY = val => [CssJs.transform(#translateY(Theme.Spacing.toValue(val)))]
let skewX = val => [CssJs.skewX(Theme.Skew.toValue(val))]
let skewY = val => [CssJs.skewY(Theme.Skew.toValue(val))]

module Typography = {
  let round = float => float_of_string(Js.Float.toFixedWithPrecision(~digits=7, float))

  let em = (px, base) => #em(round(px /. base))

  let toRem = px => #rem(px /. 16.)

  let leading = (px, base) => [CssJs.lineHeight(#abs(round(px /. base)))]

  // let mt = (px, base) => [CssJs.marginTop(em(px, base))]
  // let mr = (px, base) => [CssJs.marginRight(em(px, base))]
  // let ml = (px, base) => [CssJs.marginLeft(em(px, base))]
  // let mb = (px, base) => [CssJs.marginBottom(em(px, base))]
  // let my = (px, base) => [CssJs.marginBottom(em(px, base)), CssJs.marginTop(em(px, base))]
  // let mx = (px, base) => [CssJs.marginLeft(em(px, base)), CssJs.marginRight(em(px, base))]

  // let pt = (px, base) => [CssJs.paddingTop(em(px, base))]
  // let pr = (px, base) => [CssJs.paddingRight(em(px, base))]
  // let pl = (px, base) => [CssJs.paddingLeft(em(px, base))]
  // let pb = (px, base) => [CssJs.paddingBottom(em(px, base))]
  // let py = (px, base) => [CssJs.paddingBottom(em(px, base)), CssJs.paddingTop(em(px, base))]
  // let px = (px, base) => [CssJs.paddingLeft(em(px, base)), CssJs.paddingRight(em(px, base))]

  let w = (px, base) => [CssJs.width(em(px, base))]
  let h = (px, base) => [CssJs.height(em(px, base))]
  let square = (px, base) => [CssJs.width(em(px, base)), CssJs.height(em(px, base))]
  let rect = (~w, ~h, ~base) => [CssJs.width(em(w, base)), CssJs.height(em(h, base))]

  type mathOperations = [#sub(float, float) | #add(float, float)]

  let top = (px, base) => [CssJs.top(em(px, base))]
  let right = (px, base) => [CssJs.right(em(px, base))]
  let bottom = (px, base) => [CssJs.bottom(em(px, base))]
  let left = (px, base) => [CssJs.left(em(px, base))]

  let topCalc = (mathOperation, ~base) =>
    switch mathOperation {
    | #add(a, b) => [CssJs.top(#em(round(a /. base) +. round(b /. base)))]

    | #sub(a, b) => [CssJs.top(#em(round(a /. base) -. round(b /. base)))]
    }

  let rightCalc = (mathOperation, ~base) =>
    switch mathOperation {
    | #add(a, b) => [CssJs.right(#em(round(a /. base) +. round(b /. base)))]

    | #sub(a, b) => [CssJs.right(#em(round(a /. base) -. round(b /. base)))]
    }

  let bottomCalc = (mathOperation, ~base) =>
    switch mathOperation {
    | #add(a, b) => [CssJs.bottom(#em(round(a /. base) +. round(b /. base)))]

    | #sub(a, b) => [CssJs.bottom(#em(round(a /. base) -. round(b /. base)))]
    }

  let leftCalc = (mathOperation, ~base) =>
    switch mathOperation {
    | #add(a, b) => [CssJs.left(#em(round(a /. base) +. round(b /. base)))]

    | #sub(a, b) => [CssJs.left(#em(round(a /. base) -. round(b /. base)))]
    }
  // INFO: Represents the width, or more precisely the advance measure, of the glyph "0" (zero, the Unicode character U+0030) in the element's font.
  let maxW = characters => [CssJs.maxWidth(#ch(Belt.Int.toFloat(characters)))]

  let fontSize = px => [CssJs.fontSize(toRem(px))]
}
