// TODO: Write feature request for rescript-vscode - Let users decide what modules to expose in your API
module Screens = {
  type t = [#screenSm | #screenMd | #screenLg | #screenXl | #screenXl2]

  let toValue = size =>
    switch size {
    | #screenSm => #px(640)
    | #screenMd => #px(768)
    | #screenLg => #px(1024)
    | #screenXl => #px(1280)
    | #screenXl2 => #px(1536)
    }
}

module Spacing = {
  type t = [
    | #px1
    | #full
    | #px(int)
    | #rem(float)
    | #0
    | #"0_5"
    | #1
    | #"1_5"
    | #2
    | #"2_5"
    | #3
    | #"3_5"
    | #4
    | #5
    | #6
    | #7
    | #8
    | #9
    | #10
    | #11
    | #12
    | #14
    | #16
    | #18
    | #20
    | #24
    | #28
    | #32
    | #36
    | #40
    | #44
    | #48
    | #52
    | #56
    | #60
    | #64
    | #72
    | #80
    | #96
  ]

  let toValue = value =>
    switch value {
    | #px1 => #px(1)
    | #full => #percent(100.)
    | #0 => #px(0)
    | #"0_5" => #rem(0.125)
    | #1 => #rem(0.25)
    | #"1_5" => #rem(0.375)
    | #2 => #rem(0.5)
    | #"2_5" => #rem(0.625)
    | #3 => #rem(0.75)
    | #"3_5" => #rem(0.875)
    | #4 => #rem(1.)
    | #5 => #rem(1.25)
    | #6 => #rem(1.5)
    | #7 => #rem(1.75)
    | #8 => #rem(2.)
    | #9 => #rem(2.25)
    | #10 => #rem(2.5)
    | #11 => #rem(2.75)
    | #12 => #rem(3.)
    | #14 => #rem(3.5)
    | #16 => #rem(4.)
    | #18 => #rem(4.5)
    | #20 => #rem(5.)
    | #24 => #rem(6.)
    | #28 => #rem(7.)
    | #32 => #rem(8.)
    | #36 => #rem(9.)
    | #40 => #rem(10.)
    | #44 => #rem(11.)
    | #48 => #rem(12.)
    | #52 => #rem(13.)
    | #56 => #rem(14.)
    | #60 => #rem(15.)
    | #64 => #rem(16.)
    | #72 => #rem(18.)
    | #80 => #rem(20.)
    | #96 => #rem(24.)
    | #px(int) => #px(int)
    | #rem(float) => #rem(float)
    }
}

module SpacingNegative = {
  type t = [
    | #px1
    | #px(int)
    | #rem(float)
    | #0
    | #"0_5"
    | #1
    | #"1_5"
    | #2
    | #"2_5"
    | #3
    | #"3_5"
    | #4
    | #5
    | #6
    | #7
    | #8
    | #9
    | #10
    | #11
    | #12
    | #14
    | #16
    | #18
    | #20
    | #24
    | #28
    | #32
    | #36
    | #40
    | #44
    | #48
    | #52
    | #56
    | #60
    | #64
    | #72
    | #80
    | #96
  ]

  let toValue = value =>
    switch value {
    | #px1 => #px(-1)
    | #"0_5" => #rem(-0.125)
    | #1 => #rem(-0.25)
    | #"1_5" => #rem(-0.375)
    | #2 => #rem(-0.5)
    | #"2_5" => #rem(-0.625)
    | #3 => #rem(-0.75)
    | #"3_5" => #rem(-0.875)
    | #4 => #rem(-1.)
    | #5 => #rem(-1.25)
    | #6 => #rem(-1.5)
    | #7 => #rem(-1.75)
    | #8 => #rem(-2.)
    | #9 => #rem(-2.25)
    | #10 => #rem(-2.5)
    | #11 => #rem(-2.75)
    | #12 => #rem(-3.)
    | #14 => #rem(-3.5)
    | #16 => #rem(-4.)
    | #18 => #rem(-4.5)
    | #20 => #rem(-5.)
    | #24 => #rem(-6.)
    | #28 => #rem(-7.)
    | #32 => #rem(-8.)
    | #36 => #rem(-9.)
    | #40 => #rem(-10.)
    | #44 => #rem(-11.)
    | #48 => #rem(-12.)
    | #52 => #rem(-13.)
    | #56 => #rem(-14.)
    | #60 => #rem(-15.)
    | #64 => #rem(-16.)
    | #72 => #rem(-18.)
    | #80 => #rem(-20.)
    | #96 => #rem(-24.)
    | #px(v) => #px(v)
    | #rem(v) => #rem(v)
    }
}

module Proportions = {
  type t = [
    | #v1By2
    | #v1By3
    | #v2By3
    | #v1By4
    | #v2By4
    | #v3By4
    | #v1By5
    | #v2By5
    | #v3By5
    | #v4By5
    | #v1By6
    | #v2By6
    | #v3By6
    | #v4By6
    | #v5By6
    | #v1By12
    | #v2By12
    | #v3By12
    | #v4By12
    | #v5By12
    | #v6By12
    | #v7By12
    | #v8By12
    | #v9By12
    | #v10By12
    | #v11By12
  ]

  let toValue = value =>
    switch value {
    | #v1By2 => #percent(50.)

    | #v1By3 => #percent(33.333333)
    | #v2By3 => #percent(66.666667)

    | #v1By4 => #percent(25.)
    | #v2By4 => #percent(50.)
    | #v3By4 => #percent(75.)

    | #v1By5 => #percent(20.)
    | #v2By5 => #percent(40.)
    | #v3By5 => #percent(60.)
    | #v4By5 => #percent(80.)

    | #v1By6 => #percent(16.666667)
    | #v2By6 => #percent(33.333333)
    | #v3By6 => #percent(50.)
    | #v4By6 => #percent(66.666667)
    | #v5By6 => #percent(83.333333)

    | #v1By12 => #percent(8.333333)
    | #v2By12 => #percent(16.666667)
    | #v3By12 => #percent(25.)
    | #v4By12 => #percent(33.333333)
    | #v5By12 => #percent(41.666667)
    | #v6By12 => #percent(50.)
    | #v7By12 => #percent(58.333333)
    | #v8By12 => #percent(66.666667)
    | #v9By12 => #percent(75.)
    | #v10By12 => #percent(83.333333)
    | #v11By12 => #percent(91.666667)
    }
}

module Opacity = {
  type t = [
    | #0
    | #5
    | #10
    | #15
    | #20
    | #25
    | #30
    | #35
    | #40
    | #45
    | #50
    | #55
    | #60
    | #65
    | #70
    | #75
    | #80
    | #85
    | #90
    | #95
    | #100
  ]

  let toValue = opacity =>
    switch opacity {
    | #0 => 0.
    | #5 => 0.05
    | #10 => 0.1
    | #15 => 0.15
    | #20 => 0.20
    | #25 => 0.25
    | #30 => 0.3
    | #35 => 0.35
    | #40 => 0.40
    | #45 => 0.45
    | #50 => 0.50
    | #55 => 0.55
    | #60 => 0.60
    | #65 => 0.65
    | #70 => 0.70
    | #75 => 0.75
    | #80 => 0.80
    | #85 => 0.85
    | #90 => 0.90
    | #95 => 0.95
    | #100 => 1.
    }
}

module BorderRadius = {
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

  let toValue = t =>
    switch t {
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
}

module BorderWidth = {
  type t = [#1 | #0 | #2 | #4 | #8]

  let toValue = t =>
    switch t {
    | #0 => #px(0)
    | #1 => #px(1)
    | #2 => #px(2)
    | #4 => #px(4)
    | #8 => #px(8)
    }
}

module RingWidth = {
  type t = [#1 | #0 | #2 | #3 | #4 | #8]

  let toValue = t =>
    switch t {
    | #0 => 0
    | #1 => 1
    | #2 => 2
    | #3 => 3
    | #4 => 4
    | #8 => 8
    }
}

module BoxShadow = {
  open CssJs
  type t = [#sm | #default | #md | #lg | #xl | #xl2 | #inner]

  type boxShadows = array<Shadow.t<Shadow.box>>
  let sm: boxShadows = [
    Shadow.box(~x=#px(0), ~y=#px(1), ~blur=#px(3), ~spread=#px(0), #rgba(0, 0, 0, #num(0.1))),
    Shadow.box(~x=#px(0), ~y=#px(1), ~blur=#px(2), ~spread=#px(0), #rgba(0, 0, 0, #num(0.05))),
  ]

  let default: boxShadows = [
    Shadow.box(~x=#px(0), ~y=#px(1), ~blur=#px(3), ~spread=#px(0), #rgba(0, 0, 0, #num(0.1))),
    Shadow.box(~x=#px(0), ~y=#px(1), ~blur=#px(2), ~spread=#px(0), #rgba(0, 0, 0, #num(0.06))),
  ]

  let md: boxShadows = [
    Shadow.box(~x=#px(0), ~y=#px(4), ~blur=#px(6), ~spread=#px(-1), #rgba(0, 0, 0, #num(0.1))),
    Shadow.box(~x=#px(0), ~y=#px(2), ~blur=#px(4), ~spread=#px(-1), #rgba(0, 0, 0, #num(0.06))),
  ]
  let lg: boxShadows = [
    Shadow.box(~x=#px(0), ~y=#px(10), ~blur=#px(15), ~spread=#px(-3), #rgba(0, 0, 0, #num(0.1))),
    Shadow.box(~x=#px(0), ~y=#px(4), ~blur=#px(6), ~spread=#px(-2), #rgba(0, 0, 0, #num(0.05))),
  ]
  let xl: boxShadows = [
    Shadow.box(~x=#px(0), ~y=#px(20), ~blur=#px(25), ~spread=#px(-5), #rgba(0, 0, 0, #num(0.1))),
    Shadow.box(~x=#px(0), ~y=#px(10), ~blur=#px(10), ~spread=#px(-5), #rgba(0, 0, 0, #num(0.04))),
  ]
  let _2xl: boxShadows = [
    Shadow.box(~x=#px(0), ~y=#px(25), ~blur=#px(50), ~spread=#px(-12), #rgba(0, 0, 0, #num(0.25))),
  ]

  let inner: boxShadows = [
    Shadow.box(
      ~x=#px(0),
      ~y=#px(2),
      ~blur=#px(4),
      ~spread=#px(0),
      ~inset=true,
      #rgba(0, 0, 0, #num(0.06)),
    ),
  ]
  let none = #none

  let toValue = t =>
    switch t {
    | #sm => sm
    | #default => default
    | #md => md
    | #lg => lg
    | #xl => xl
    | #xl2 => _2xl
    | #inner => inner
    }
}

module MaxWidth = {
  type t = [
    | #none
    | #zero
    | #0
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
    | #full
    | #prose
    | #screenSm
    | #screenMd
    | #screenLg
    | #screenXl
    | #screen2Xl
  ]

  let toValue = width =>
    switch width {
    | #none => #none
    | #zero | #0 => #rem(0.)
    | #xs => #rem(20.)
    | #sm => #rem(24.)
    | #md => #rem(28.)
    | #lg => #rem(32.)
    | #xl => #rem(36.)
    | #xl2 => #rem(42.)
    | #xl3 => #rem(48.)
    | #xl4 => #rem(56.)
    | #xl5 => #rem(64.)
    | #xl6 => #rem(72.)
    | #xl7 => #rem(80.)
    | #full => #percent(100.)
    | #prose => #ch(65.)
    | #screenSm => #px(640)
    | #screenMd => #px(768)
    | #screenLg => #px(1024)
    | #screenXl => #px(1280)
    | #screen2Xl => #px(1536)
    }
}

module ZIndex = {
  type t = [#0 | #10 | #20 | #30 | #40 | #50 | #auto]

  let toValue = index =>
    switch index {
    | #0 => "0"
    | #10 => "10"
    | #20 => "20"
    | #30 => "30"
    | #40 => "40"
    | #50 => "50"
    | #auto => "auto"
    }
}

module Order = {
  type t = [
    | #none
    | #1
    | #2
    | #3
    | #4
    | #5
    | #6
    | #7
    | #8
    | #9
    | #10
    | #11
    | #12
    | #first
    | #last
  ]

  let toValue = order =>
    switch order {
    | #none => 0
    | #first => 9999
    | #last => -9999
    | #1 => 1
    | #2 => 2
    | #3 => 3
    | #4 => 4
    | #5 => 5
    | #6 => 6
    | #7 => 7
    | #8 => 8
    | #9 => 9
    | #10 => 10
    | #11 => 11
    | #12 => 12
    }
}

module Duration = {
  type t = [#75 | #100 | #150 | #200 | #300 | #500 | #700 | #1000]

  let toValue = duration =>
    switch duration {
    | #75 => 75
    | #100 => 100
    | #150 => 150
    | #200 => 200
    | #300 => 300
    | #500 => 500
    | #700 => 700
    | #1000 => 1000
    }
}

module TimingFunction = {
  type t = [#linear | #easeIn | #easeOut | #easeInOut]

  let toValue = timing =>
    switch timing {
    | #linear => #linear
    | #easeIn => #cubicBezier(0.4, 0., 1., 1.)
    | #easeOut => #cubicBezier(0., 0., 0.2, 1.)
    | #easeInOut => #cubicBezier(0.4, 0., 0.2, 1.)
    }
}

module KeyFrames = {
  type t = [#spin | #ping | #pulse | #bounce]

  let spin = CssJs.keyframes(. [
    (0, [CssJs.transform(#rotate(#deg(0.)))]),
    (100, [CssJs.transform(#rotate(#deg(360.)))]),
  ])

  let ping = CssJs.keyframes(. [
    (0, [CssJs.transform(#scale(1., 1.)), CssJs.opacity(1.)]),
    (75, [CssJs.transform(#scale(2., 2.)), CssJs.opacity(0.)]),
    (100, [CssJs.transform(#scale(2., 2.)), CssJs.opacity(0.)]),
  ])

  let pulse = CssJs.keyframes(. [
    (0, [CssJs.opacity(1.)]),
    (50, [CssJs.opacity(0.5)]),
    (100, [CssJs.opacity(1.)]),
  ])

  let bounce = CssJs.keyframes(. [
    (
      0,
      [
        CssJs.transform(#translateY(#percent(-25.))),
        CssJs.animationTimingFunction(#cubicBezier(0.8, 0., 1., 1.)),
      ],
    ),
    (
      50,
      [
        CssJs.transform(#translateY(#percent(0.))),
        CssJs.animationTimingFunction(#cubicBezier(0., 0., 0.2, 1.)),
      ],
    ),
    (
      100,
      [
        CssJs.transform(#translateY(#percent(-25.))),
        CssJs.animationTimingFunction(#cubicBezier(0.8, 0., 1., 1.)),
      ],
    ),
  ])

  let toValue = animation =>
    switch animation {
    | #spin => spin
    | #ping => ping
    | #pulse => pulse
    | #bounce => bounce
    }
}

module Skew = {
  type t = [#0 | #1 | #2 | #3 | #6 | #12]

  let toValue = degrees =>
    switch degrees {
    | #0 => #deg(0.)
    | #1 => #deg(1.)
    | #2 => #deg(2.)
    | #3 => #deg(3.)
    | #6 => #deg(6.)
    | #12 => #deg(12.)
    }
}

module Scale = {
  type t = [#0 | #50 | #75 | #90 | #95 | #100 | #105 | #110 | #125 | #150]

  let toValue = scale =>
    switch scale {
    | #0 => 0.
    | #50 => 0.5
    | #75 => 0.75
    | #90 => 0.90
    | #95 => 0.95
    | #100 => 1.00
    | #105 => 1.05
    | #110 => 1.10
    | #125 => 1.25
    | #150 => 1.50
    }
}

module Rotate = {
  type t = [
    | #0
    | #1
    | #2
    | #3
    | #6
    | #12
    | #45
    | #90
    | #180
  ]

  let toValue = rotate =>
    switch rotate {
    | #0 => #deg(0.)
    | #1 => #deg(1.)
    | #2 => #deg(2.)
    | #3 => #deg(3.)
    | #6 => #deg(6.)
    | #12 => #deg(12.)
    | #45 => #deg(45.)
    | #90 => #deg(90.)
    | #180 => #deg(180.)
    }
}

module FontSize = {
  type t = [#xs | #sm | #base | #lg | #xl | #xl2 | #xl3 | #xl4 | #xl5 | #xl6 | #xl7 | #xl8 | #xl9]

  let toValue = fontSize =>
    switch fontSize {
    | #xs => #rem(0.75)
    | #sm => #rem(0.875)
    | #base => #rem(1.)
    | #lg => #rem(1.125)
    | #xl => #rem(1.25)
    | #xl2 => #rem(1.5)
    | #xl3 => #rem(1.875)
    | #xl4 => #rem(2.25)
    | #xl5 => #rem(3.)
    | #xl6 => #rem(3.75)
    | #xl7 => #rem(4.5)
    | #xl8 => #rem(6.)
    | #xl9 => #rem(8.)
    }
}

module LetterSpacing = {
  type t = [#tighter | #tight | #normal | #wide | #wider | #widest]

  let toValue = spacing =>
    switch spacing {
    | #tighter => #em(-0.05)
    | #tight => #em(-0.025)
    | #normal => #em(0.)
    | #wide => #em(0.025)
    | #wider => #em(0.05)
    | #widest => #em(0.1)
    }
}

module LineHeight = {
  type t = [
    | #3
    | #4
    | #5
    | #6
    | #7
    | #8
    | #9
    | #10
    | #11
    | #12
    | #13
    | #14
    | #none
    | #tight
    | #snug
    | #normal
    | #relaxed
    | #loose
  ]

  let toValue = lineHeight =>
    switch lineHeight {
    | #3 => #rem(0.75)
    | #4 => #rem(1.)
    | #5 => #rem(1.25)
    | #6 => #rem(1.5)
    | #7 => #rem(1.75)
    | #8 => #rem(2.)
    | #9 => #rem(2.25)
    | #10 => #rem(2.5)
    | #11 => #rem(2.75)
    | #12 => #rem(3.)
    | #13 => #rem(3.25)
    | #14 => #rem(3.5)
    | #none => #abs(1.)
    | #tight => #abs(1.25)
    | #snug => #abs(1.375)
    | #normal => #abs(1.5)
    | #relaxed => #abs(1.625)
    | #loose => #abs(2.)
    }
}

module FontWeight = {
  type t = [#100 | #200 | #300 | #400 | #500 | #600 | #700 | #800 | #900]

  let toValue = fontWeight =>
    switch fontWeight {
    | #100 => #num(100)
    | #200 => #num(200)
    | #300 => #num(300)
    | #400 => #num(400)
    | #500 => #num(500)
    | #600 => #num(600)
    | #700 => #num(700)
    | #800 => #num(800)
    | #900 => #num(900)
    }
}

module GridCols = {
  type t = [#1 | #2 | #3 | #4 | #5 | #6 | #7 | #8 | #9 | #10 | #11 | #12 | #none]

  let repeatCols = columns => [#repeat(#num(columns), #minmax(#zero, #fr(1.)))]
  let gridTemplateColumns = num => `repeat(${Belt.Int.toString(num)}, minmax(0, 1fr))`

  let toValue = cols =>
    switch cols {
    | #1 => gridTemplateColumns(1)
    | #2 => gridTemplateColumns(2)
    | #3 => gridTemplateColumns(3)
    | #4 => gridTemplateColumns(4)
    | #5 => gridTemplateColumns(5)
    | #6 => gridTemplateColumns(6)
    | #7 => gridTemplateColumns(7)
    | #8 => gridTemplateColumns(8)
    | #9 => gridTemplateColumns(9)
    | #10 => gridTemplateColumns(10)
    | #11 => gridTemplateColumns(11)
    | #12 => gridTemplateColumns(12)
    | #none => "none"
    }
}

module Col = {
  type num = [#1 | #2 | #3 | #4 | #5 | #6 | #7 | #8 | #9 | #10 | #11 | #12 | #13]
  type spanNum = [num | #full]
  type numAuto = [num | #auto]
  let toNumString = (num: numAuto) =>
    switch num {
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
    | #13 => "13"
    | #auto => "auto"
    }
  let toSpanString = (num: spanNum) =>
    switch num {
    | #1 => `span 1 / span 1`
    | #2 => `span 2 / span 2`
    | #3 => `span 3 / span 3`
    | #4 => `span 4 / span 4`
    | #5 => `span 5 / span 5`
    | #6 => `span 6 / span 6`
    | #7 => `span 7 / span 7`
    | #8 => `span 8 / span 8`
    | #9 => `span 9 / span 9`
    | #10 => `span 10 / span 10`
    | #11 => `span 11 / span 11`
    | #12 => `span 12 / span 12`
    | #13 => `span 13 / span 13`
    | #full => "1 / -1"
    }
  type t = [#auto | #span(spanNum) | #start(numAuto) | #end(numAuto)]
  let toValue = t =>
    switch t {
    | #auto => [CssJs.unsafe("gridColumn", "auto")]
    | #span(num) => [CssJs.unsafe("gridColumn", toSpanString(num))]
    | #start(num) => [CssJs.unsafe("gridColumnStart", toNumString(num))]
    | #end(num) => [CssJs.unsafe("gridColumnEnd", toNumString(num))]
    }
}

module TemplateRows = {
  type t = [#1 | #2 | #3 | #4 | #5 | #6 | #none]
  let toRepeat = num => `repeat(${Belt.Int.toString(num)}, minmax(0, 1fr))`
  let toString = span =>
    switch span {
    | #1 => toRepeat(1)
    | #2 => toRepeat(2)
    | #3 => toRepeat(3)
    | #4 => toRepeat(4)
    | #5 => toRepeat(5)
    | #6 => toRepeat(6)
    | #none => "none"
    }
}

module Row = {
  type num = [#1 | #2 | #3 | #4 | #5 | #6]
  type spanNum = [num | #full]
  type numAuto = [num | #auto]
  let toNumString = (num: numAuto) =>
    switch num {
    | #1 => "1"
    | #2 => "2"
    | #3 => "3"
    | #4 => "4"
    | #5 => "5"
    | #6 => "6"
    | #auto => "auto"
    }
  let toSpanString = (num: spanNum) =>
    switch num {
    | #1 => `span 1 / span 1`
    | #2 => `span 2 / span 2`
    | #3 => `span 3 / span 3`
    | #4 => `span 4 / span 4`
    | #5 => `span 5 / span 5`
    | #6 => `span 6 / span 6`
    | #full => "1 / -1"
    }
  type t = [#auto | #span(spanNum) | #start(numAuto) | #end(numAuto)]
  let toValue = t =>
    switch t {
    | #auto => [CssJs.unsafe("gridRow", "auto")]
    | #span(num) => [CssJs.unsafe("gridRow", toSpanString(num))]
    | #start(num) => [CssJs.unsafe("gridRowStart", toNumString(num))]
    | #end(num) => [CssJs.unsafe("gridRowEnd", toNumString(num))]
    }
}

module ColorPalettes = {
  module Tailwind3 = {
    type t = [
      | #transparent
      | #currentColor
      | #inherit
      | #white
      | #black
      | #slate50
      | #slate100
      | #slate200
      | #slate300
      | #slate400
      | #slate500
      | #slate600
      | #slate700
      | #slate800
      | #slate900
      | #zinc50
      | #zinc100
      | #zinc200
      | #zinc300
      | #zinc400
      | #zinc500
      | #zinc600
      | #zinc700
      | #zinc800
      | #zinc900
      | #gray50
      | #gray100
      | #gray200
      | #gray300
      | #gray400
      | #gray500
      | #gray600
      | #gray700
      | #gray800
      | #gray900
      | #neutral50
      | #neutral100
      | #neutral200
      | #neutral300
      | #neutral400
      | #neutral500
      | #neutral600
      | #neutral700
      | #neutral800
      | #neutral900
      | #stone50
      | #stone100
      | #stone200
      | #stone300
      | #stone400
      | #stone500
      | #stone600
      | #stone700
      | #stone800
      | #stone900
      | #red50
      | #red100
      | #red200
      | #red300
      | #red400
      | #red500
      | #red600
      | #red700
      | #red800
      | #red900
      | #orange50
      | #orange100
      | #orange200
      | #orange300
      | #orange400
      | #orange500
      | #orange600
      | #orange700
      | #orange800
      | #orange900
      | #amber50
      | #amber100
      | #amber200
      | #amber300
      | #amber400
      | #amber500
      | #amber600
      | #amber700
      | #amber800
      | #amber900
      | #yellow50
      | #yellow100
      | #yellow200
      | #yellow300
      | #yellow400
      | #yellow500
      | #yellow600
      | #yellow700
      | #yellow800
      | #yellow900
      | #lime50
      | #lime100
      | #lime200
      | #lime300
      | #lime400
      | #lime500
      | #lime600
      | #lime700
      | #lime800
      | #lime900
      | #green50
      | #green100
      | #green200
      | #green300
      | #green400
      | #green500
      | #green600
      | #green700
      | #green800
      | #green900
      | #emerald50
      | #emerald100
      | #emerald200
      | #emerald300
      | #emerald400
      | #emerald500
      | #emerald600
      | #emerald700
      | #emerald800
      | #emerald900
      | #teal50
      | #teal100
      | #teal200
      | #teal300
      | #teal400
      | #teal500
      | #teal600
      | #teal700
      | #teal800
      | #teal900
      | #cyan50
      | #cyan100
      | #cyan200
      | #cyan300
      | #cyan400
      | #cyan500
      | #cyan600
      | #cyan700
      | #cyan800
      | #cyan900
      | #sky50
      | #sky100
      | #sky200
      | #sky300
      | #sky400
      | #sky500
      | #sky600
      | #sky700
      | #sky800
      | #sky900
      | #blue50
      | #blue100
      | #blue200
      | #blue300
      | #blue400
      | #blue500
      | #blue600
      | #blue700
      | #blue800
      | #blue900
      | #indigo50
      | #indigo100
      | #indigo200
      | #indigo300
      | #indigo400
      | #indigo500
      | #indigo600
      | #indigo700
      | #indigo800
      | #indigo900
      | #violet50
      | #violet100
      | #violet200
      | #violet300
      | #violet400
      | #violet500
      | #violet600
      | #violet700
      | #violet800
      | #violet900
      | #purple50
      | #purple100
      | #purple200
      | #purple300
      | #purple400
      | #purple500
      | #purple600
      | #purple700
      | #purple800
      | #purple900
      | #fuchsia50
      | #fuchsia100
      | #fuchsia200
      | #fuchsia300
      | #fuchsia400
      | #fuchsia500
      | #fuchsia600
      | #fuchsia700
      | #fuchsia800
      | #fuchsia900
      | #pink50
      | #pink100
      | #pink200
      | #pink300
      | #pink400
      | #pink500
      | #pink600
      | #pink700
      | #pink800
      | #pink900
      | #rose50
      | #rose100
      | #rose200
      | #rose300
      | #rose400
      | #rose500
      | #rose600
      | #rose700
      | #rose800
      | #rose900
    ]

    let toValue = (~opacity=1., color: t) =>
      switch color {
      | #transparent => #transparent
      | #currentColor => #currentColor
      | #inherit => #inherit
      | #white => #rgba(255, 255, 255, #num(opacity))
      | #black => #rgba(0, 0, 0, #num(opacity))

      // NOTE: Blue Gray
      | #slate50 => #rgba(248, 250, 252, #num(opacity))
      | #slate100 => #rgba(241, 245, 249, #num(opacity))
      | #slate200 => #rgba(226, 232, 240, #num(opacity))
      | #slate300 => #rgba(203, 213, 225, #num(opacity))
      | #slate400 => #rgba(148, 163, 184, #num(opacity))
      | #slate500 => #rgba(100, 116, 139, #num(opacity))
      | #slate600 => #rgba(71, 85, 105, #num(opacity))
      | #slate700 => #rgba(51, 65, 85, #num(opacity))
      | #slate800 => #rgba(30, 41, 59, #num(opacity))
      | #slate900 => #rgba(15, 23, 42, #num(opacity))

      // Zinc
      | #zinc50 => #rgba(250, 250, 250, #num(opacity))
      | #zinc100 => #rgba(244, 244, 245, #num(opacity))
      | #zinc200 => #rgba(228, 228, 231, #num(opacity))
      | #zinc300 => #rgba(212, 212, 216, #num(opacity))
      | #zinc400 => #rgba(161, 161, 170, #num(opacity))
      | #zinc500 => #rgba(113, 113, 122, #num(opacity))
      | #zinc600 => #rgba(82, 82, 91, #num(opacity))
      | #zinc700 => #rgba(63, 63, 70, #num(opacity))
      | #zinc800 => #rgba(39, 39, 42, #num(opacity))
      | #zinc900 => #rgba(24, 24, 27, #num(opacity))

      // Gray
      | #gray50 => #rgba(249, 250, 251, #num(opacity))
      | #gray100 => #rgba(243, 244, 246, #num(opacity))
      | #gray200 => #rgba(229, 231, 235, #num(opacity))
      | #gray300 => #rgba(209, 213, 219, #num(opacity))
      | #gray400 => #rgba(156, 163, 175, #num(opacity))
      | #gray500 => #rgba(107, 114, 128, #num(opacity))
      | #gray600 => #rgba(75, 85, 99, #num(opacity))
      | #gray700 => #rgba(55, 65, 81, #num(opacity))
      | #gray800 => #rgba(31, 41, 55, #num(opacity))
      | #gray900 => #rgba(17, 24, 39, #num(opacity))

      // Neutral
      | #neutral50 => #rgba(250, 250, 250, #num(opacity))
      | #neutral100 => #rgba(245, 245, 245, #num(opacity))
      | #neutral200 => #rgba(229, 229, 229, #num(opacity))
      | #neutral300 => #rgba(212, 212, 212, #num(opacity))
      | #neutral400 => #rgba(163, 163, 163, #num(opacity))
      | #neutral500 => #rgba(115, 115, 115, #num(opacity))
      | #neutral600 => #rgba(82, 82, 82, #num(opacity))
      | #neutral700 => #rgba(64, 64, 64, #num(opacity))
      | #neutral800 => #rgba(38, 38, 38, #num(opacity))
      | #neutral900 => #rgba(23, 23, 23, #num(opacity))

      // Stone
      | #stone50 => #rgba(250, 250, 249, #num(opacity))
      | #stone100 => #rgba(245, 245, 244, #num(opacity))
      | #stone200 => #rgba(231, 229, 228, #num(opacity))
      | #stone300 => #rgba(214, 211, 209, #num(opacity))
      | #stone400 => #rgba(168, 162, 158, #num(opacity))
      | #stone500 => #rgba(120, 113, 108, #num(opacity))
      | #stone600 => #rgba(87, 83, 78, #num(opacity))
      | #stone700 => #rgba(68, 64, 60, #num(opacity))
      | #stone800 => #rgba(41, 37, 36, #num(opacity))
      | #stone900 => #rgba(28, 25, 23, #num(opacity))

      // Red
      | #red50 => #rgba(254, 242, 242, #num(opacity))
      | #red100 => #rgba(254, 226, 226, #num(opacity))
      | #red200 => #rgba(254, 202, 202, #num(opacity))
      | #red300 => #rgba(252, 165, 165, #num(opacity))
      | #red400 => #rgba(248, 113, 113, #num(opacity))
      | #red500 => #rgba(239, 68, 68, #num(opacity))
      | #red600 => #rgba(220, 38, 38, #num(opacity))
      | #red700 => #rgba(185, 28, 28, #num(opacity))
      | #red800 => #rgba(153, 27, 27, #num(opacity))
      | #red900 => #rgba(127, 29, 29, #num(opacity))

      // Orange
      | #orange50 => #rgba(255, 247, 237, #num(opacity))
      | #orange100 => #rgba(255, 237, 213, #num(opacity))
      | #orange200 => #rgba(254, 215, 170, #num(opacity))
      | #orange300 => #rgba(253, 186, 116, #num(opacity))
      | #orange400 => #rgba(251, 146, 60, #num(opacity))
      | #orange500 => #rgba(249, 115, 22, #num(opacity))
      | #orange600 => #rgba(234, 88, 12, #num(opacity))
      | #orange700 => #rgba(194, 65, 12, #num(opacity))
      | #orange800 => #rgba(154, 52, 18, #num(opacity))
      | #orange900 => #rgba(124, 45, 18, #num(opacity))

      // Amber
      | #amber50 => #rgba(255, 251, 235, #num(opacity))
      | #amber100 => #rgba(254, 243, 199, #num(opacity))
      | #amber200 => #rgba(253, 230, 138, #num(opacity))
      | #amber300 => #rgba(252, 211, 77, #num(opacity))
      | #amber400 => #rgba(251, 191, 36, #num(opacity))
      | #amber500 => #rgba(245, 158, 11, #num(opacity))
      | #amber600 => #rgba(217, 119, 6, #num(opacity))
      | #amber700 => #rgba(180, 83, 9, #num(opacity))
      | #amber800 => #rgba(146, 64, 14, #num(opacity))
      | #amber900 => #rgba(120, 53, 15, #num(opacity))

      // Yellow
      | #yellow50 => #rgba(254, 252, 232, #num(opacity))
      | #yellow100 => #rgba(254, 249, 195, #num(opacity))
      | #yellow200 => #rgba(254, 240, 138, #num(opacity))
      | #yellow300 => #rgba(253, 224, 71, #num(opacity))
      | #yellow400 => #rgba(250, 204, 21, #num(opacity))
      | #yellow500 => #rgba(234, 179, 8, #num(opacity))
      | #yellow600 => #rgba(202, 138, 4, #num(opacity))
      | #yellow700 => #rgba(161, 98, 7, #num(opacity))
      | #yellow800 => #rgba(133, 77, 14, #num(opacity))
      | #yellow900 => #rgba(113, 63, 18, #num(opacity))

      // Lime
      | #lime50 => #rgba(247, 254, 231, #num(opacity))
      | #lime100 => #rgba(236, 252, 203, #num(opacity))
      | #lime200 => #rgba(217, 249, 157, #num(opacity))
      | #lime300 => #rgba(190, 242, 100, #num(opacity))
      | #lime400 => #rgba(163, 230, 53, #num(opacity))
      | #lime500 => #rgba(132, 204, 22, #num(opacity))
      | #lime600 => #rgba(101, 163, 13, #num(opacity))
      | #lime700 => #rgba(77, 124, 15, #num(opacity))
      | #lime800 => #rgba(63, 98, 18, #num(opacity))
      | #lime900 => #rgba(54, 83, 20, #num(opacity))

      // Green
      | #green50 => #rgba(240, 253, 244, #num(opacity))
      | #green100 => #rgba(220, 252, 231, #num(opacity))
      | #green200 => #rgba(187, 247, 208, #num(opacity))
      | #green300 => #rgba(134, 239, 172, #num(opacity))
      | #green400 => #rgba(74, 222, 128, #num(opacity))
      | #green500 => #rgba(34, 197, 94, #num(opacity))
      | #green600 => #rgba(22, 163, 74, #num(opacity))
      | #green700 => #rgba(21, 128, 61, #num(opacity))
      | #green800 => #rgba(22, 101, 52, #num(opacity))
      | #green900 => #rgba(20, 83, 45, #num(opacity))

      // Emerald
      | #emerald50 => #rgba(236, 253, 245, #num(opacity))
      | #emerald100 => #rgba(209, 250, 229, #num(opacity))
      | #emerald200 => #rgba(167, 243, 208, #num(opacity))
      | #emerald300 => #rgba(110, 231, 183, #num(opacity))
      | #emerald400 => #rgba(52, 211, 153, #num(opacity))
      | #emerald500 => #rgba(16, 185, 129, #num(opacity))
      | #emerald600 => #rgba(5, 150, 105, #num(opacity))
      | #emerald700 => #rgba(4, 120, 87, #num(opacity))
      | #emerald800 => #rgba(6, 95, 70, #num(opacity))
      | #emerald900 => #rgba(6, 78, 59, #num(opacity))

      // Teal
      | #teal50 => #rgba(240, 253, 250, #num(opacity))
      | #teal100 => #rgba(204, 251, 241, #num(opacity))
      | #teal200 => #rgba(153, 246, 228, #num(opacity))
      | #teal300 => #rgba(94, 234, 212, #num(opacity))
      | #teal400 => #rgba(45, 212, 191, #num(opacity))
      | #teal500 => #rgba(20, 184, 166, #num(opacity))
      | #teal600 => #rgba(13, 148, 136, #num(opacity))
      | #teal700 => #rgba(15, 118, 110, #num(opacity))
      | #teal800 => #rgba(17, 94, 89, #num(opacity))
      | #teal900 => #rgba(19, 78, 74, #num(opacity))

      // Cyan
      | #cyan50 => #rgba(236, 254, 255, #num(opacity))
      | #cyan100 => #rgba(207, 250, 254, #num(opacity))
      | #cyan200 => #rgba(165, 243, 252, #num(opacity))
      | #cyan300 => #rgba(103, 232, 249, #num(opacity))
      | #cyan400 => #rgba(34, 211, 238, #num(opacity))
      | #cyan500 => #rgba(6, 182, 212, #num(opacity))
      | #cyan600 => #rgba(8, 145, 178, #num(opacity))
      | #cyan700 => #rgba(14, 116, 144, #num(opacity))
      | #cyan800 => #rgba(21, 94, 117, #num(opacity))
      | #cyan900 => #rgba(22, 78, 99, #num(opacity))

      // Sky
      | #sky50 => #rgba(240, 249, 255, #num(opacity))
      | #sky100 => #rgba(224, 242, 254, #num(opacity))
      | #sky200 => #rgba(186, 230, 253, #num(opacity))
      | #sky300 => #rgba(125, 211, 252, #num(opacity))
      | #sky400 => #rgba(56, 189, 248, #num(opacity))
      | #sky500 => #rgba(14, 165, 233, #num(opacity))
      | #sky600 => #rgba(2, 132, 199, #num(opacity))
      | #sky700 => #rgba(3, 105, 161, #num(opacity))
      | #sky800 => #rgba(7, 89, 133, #num(opacity))
      | #sky900 => #rgba(12, 74, 110, #num(opacity))

      // Blue
      | #blue50 => #rgba(239, 246, 255, #num(opacity))
      | #blue100 => #rgba(219, 234, 254, #num(opacity))
      | #blue200 => #rgba(191, 219, 254, #num(opacity))
      | #blue300 => #rgba(147, 197, 253, #num(opacity))
      | #blue400 => #rgba(96, 165, 250, #num(opacity))
      | #blue500 => #rgba(59, 130, 246, #num(opacity))
      | #blue600 => #rgba(37, 99, 235, #num(opacity))
      | #blue700 => #rgba(29, 78, 216, #num(opacity))
      | #blue800 => #rgba(30, 64, 175, #num(opacity))
      | #blue900 => #rgba(30, 58, 138, #num(opacity))

      // Indigo
      | #indigo50 => #rgba(238, 242, 255, #num(opacity))
      | #indigo100 => #rgba(224, 231, 255, #num(opacity))
      | #indigo200 => #rgba(199, 210, 254, #num(opacity))
      | #indigo300 => #rgba(165, 180, 252, #num(opacity))
      | #indigo400 => #rgba(129, 140, 248, #num(opacity))
      | #indigo500 => #rgba(99, 102, 241, #num(opacity))
      | #indigo600 => #rgba(79, 70, 229, #num(opacity))
      | #indigo700 => #rgba(67, 56, 202, #num(opacity))
      | #indigo800 => #rgba(55, 48, 163, #num(opacity))
      | #indigo900 => #rgba(49, 46, 129, #num(opacity))

      // Violet
      | #violet50 => #rgba(245, 243, 255, #num(opacity))
      | #violet100 => #rgba(237, 233, 254, #num(opacity))
      | #violet200 => #rgba(221, 214, 254, #num(opacity))
      | #violet300 => #rgba(196, 181, 253, #num(opacity))
      | #violet400 => #rgba(167, 139, 250, #num(opacity))
      | #violet500 => #rgba(139, 92, 246, #num(opacity))
      | #violet600 => #rgba(124, 58, 237, #num(opacity))
      | #violet700 => #rgba(109, 40, 217, #num(opacity))
      | #violet800 => #rgba(91, 33, 182, #num(opacity))
      | #violet900 => #rgba(76, 29, 149, #num(opacity))

      // Purple
      | #purple50 => #rgba(250, 245, 255, #num(opacity))
      | #purple100 => #rgba(243, 232, 255, #num(opacity))
      | #purple200 => #rgba(233, 213, 255, #num(opacity))
      | #purple300 => #rgba(216, 180, 254, #num(opacity))
      | #purple400 => #rgba(192, 132, 252, #num(opacity))
      | #purple500 => #rgba(168, 85, 247, #num(opacity))
      | #purple600 => #rgba(147, 51, 234, #num(opacity))
      | #purple700 => #rgba(126, 34, 206, #num(opacity))
      | #purple800 => #rgba(107, 33, 168, #num(opacity))
      | #purple900 => #rgba(88, 28, 135, #num(opacity))

      // Fuchsia
      | #fuchsia50 => #rgba(253, 244, 255, #num(opacity))
      | #fuchsia100 => #rgba(250, 232, 255, #num(opacity))
      | #fuchsia200 => #rgba(245, 208, 254, #num(opacity))
      | #fuchsia300 => #rgba(240, 171, 252, #num(opacity))
      | #fuchsia400 => #rgba(232, 121, 249, #num(opacity))
      | #fuchsia500 => #rgba(217, 70, 239, #num(opacity))
      | #fuchsia600 => #rgba(192, 38, 211, #num(opacity))
      | #fuchsia700 => #rgba(162, 28, 175, #num(opacity))
      | #fuchsia800 => #rgba(134, 25, 143, #num(opacity))
      | #fuchsia900 => #rgba(112, 26, 117, #num(opacity))

      // Pink
      | #pink50 => #rgba(253, 242, 248, #num(opacity))
      | #pink100 => #rgba(252, 231, 243, #num(opacity))
      | #pink200 => #rgba(251, 207, 232, #num(opacity))
      | #pink300 => #rgba(249, 168, 212, #num(opacity))
      | #pink400 => #rgba(244, 114, 182, #num(opacity))
      | #pink500 => #rgba(236, 72, 153, #num(opacity))
      | #pink600 => #rgba(219, 39, 119, #num(opacity))
      | #pink700 => #rgba(190, 24, 93, #num(opacity))
      | #pink800 => #rgba(157, 23, 77, #num(opacity))
      | #pink900 => #rgba(131, 24, 67, #num(opacity))

      // Rose
      | #rose50 => #rgba(255, 241, 242, #num(opacity))
      | #rose100 => #rgba(255, 228, 230, #num(opacity))
      | #rose200 => #rgba(254, 205, 211, #num(opacity))
      | #rose300 => #rgba(253, 164, 175, #num(opacity))
      | #rose400 => #rgba(251, 113, 133, #num(opacity))
      | #rose500 => #rgba(244, 63, 94, #num(opacity))
      | #rose600 => #rgba(225, 29, 72, #num(opacity))
      | #rose700 => #rgba(190, 18, 60, #num(opacity))
      | #rose800 => #rgba(159, 18, 57, #num(opacity))
      | #rose900 => #rgba(136, 19, 55, #num(opacity))
      }
  }

  module Tailwind2 = {
    type t = [
      | #transparent
      | #currentColor
      | #white
      | #black
      | #blueGray50
      | #blueGray100
      | #blueGray200
      | #blueGray300
      | #blueGray400
      | #blueGray500
      | #blueGray600
      | #blueGray700
      | #blueGray800
      | #blueGray900
      | #coolGray50
      | #coolGray100
      | #coolGray200
      | #coolGray300
      | #coolGray400
      | #coolGray500
      | #coolGray600
      | #coolGray700
      | #coolGray800
      | #coolGray900
      | #gray50
      | #gray100
      | #gray200
      | #gray300
      | #gray400
      | #gray500
      | #gray600
      | #gray700
      | #gray800
      | #gray900
      | #trueGray50
      | #trueGray100
      | #trueGray200
      | #trueGray300
      | #trueGray400
      | #trueGray500
      | #trueGray600
      | #trueGray700
      | #trueGray800
      | #trueGray900
      | #warmGray50
      | #warmGray100
      | #warmGray200
      | #warmGray300
      | #warmGray400
      | #warmGray500
      | #warmGray600
      | #warmGray700
      | #warmGray800
      | #warmGray900
      | #red50
      | #red100
      | #red200
      | #red300
      | #red400
      | #red500
      | #red600
      | #red700
      | #red800
      | #red900
      | #orange50
      | #orange100
      | #orange200
      | #orange300
      | #orange400
      | #orange500
      | #orange600
      | #orange700
      | #orange800
      | #orange900
      | #amber50
      | #amber100
      | #amber200
      | #amber300
      | #amber400
      | #amber500
      | #amber600
      | #amber700
      | #amber800
      | #amber900
      | #yellow50
      | #yellow100
      | #yellow200
      | #yellow300
      | #yellow400
      | #yellow500
      | #yellow600
      | #yellow700
      | #yellow800
      | #yellow900
      | #lime50
      | #lime100
      | #lime200
      | #lime300
      | #lime400
      | #lime500
      | #lime600
      | #lime700
      | #lime800
      | #lime900
      | #green50
      | #green100
      | #green200
      | #green300
      | #green400
      | #green500
      | #green600
      | #green700
      | #green800
      | #green900
      | #emerald50
      | #emerald100
      | #emerald200
      | #emerald300
      | #emerald400
      | #emerald500
      | #emerald600
      | #emerald700
      | #emerald800
      | #emerald900
      | #teal50
      | #teal100
      | #teal200
      | #teal300
      | #teal400
      | #teal500
      | #teal600
      | #teal700
      | #teal800
      | #teal900
      | #cyan50
      | #cyan100
      | #cyan200
      | #cyan300
      | #cyan400
      | #cyan500
      | #cyan600
      | #cyan700
      | #cyan800
      | #cyan900
      | #lightBlue50
      | #lightBlue100
      | #lightBlue200
      | #lightBlue300
      | #lightBlue400
      | #lightBlue500
      | #lightBlue600
      | #lightBlue700
      | #lightBlue800
      | #lightBlue900
      | #blue50
      | #blue100
      | #blue200
      | #blue300
      | #blue400
      | #blue500
      | #blue600
      | #blue700
      | #blue800
      | #blue900
      | #indigo50
      | #indigo100
      | #indigo200
      | #indigo300
      | #indigo400
      | #indigo500
      | #indigo600
      | #indigo700
      | #indigo800
      | #indigo900
      | #violet50
      | #violet100
      | #violet200
      | #violet300
      | #violet400
      | #violet500
      | #violet600
      | #violet700
      | #violet800
      | #violet900
      | #purple50
      | #purple100
      | #purple200
      | #purple300
      | #purple400
      | #purple500
      | #purple600
      | #purple700
      | #purple800
      | #purple900
      | #fuchsia50
      | #fuchsia100
      | #fuchsia200
      | #fuchsia300
      | #fuchsia400
      | #fuchsia500
      | #fuchsia600
      | #fuchsia700
      | #fuchsia800
      | #fuchsia900
      | #pink50
      | #pink100
      | #pink200
      | #pink300
      | #pink400
      | #pink500
      | #pink600
      | #pink700
      | #pink800
      | #pink900
      | #rose50
      | #rose100
      | #rose200
      | #rose300
      | #rose400
      | #rose500
      | #rose600
      | #rose700
      | #rose800
      | #rose900
    ]

    let toValue = (~opacity=1., color: t) =>
      switch color {
      | #transparent => #transparent
      | #currentColor => #currentColor
      | #white => #rgba(255, 255, 255, #num(opacity))
      | #black => #rgba(0, 0, 0, #num(opacity))

      // NOTE: Blue Gray
      | #blueGray50 => #rgba(248, 250, 252, #num(opacity))
      | #blueGray100 => #rgba(241, 245, 249, #num(opacity))
      | #blueGray200 => #rgba(226, 232, 240, #num(opacity))
      | #blueGray300 => #rgba(203, 213, 225, #num(opacity))
      | #blueGray400 => #rgba(148, 163, 184, #num(opacity))
      | #blueGray500 => #rgba(100, 116, 139, #num(opacity))
      | #blueGray600 => #rgba(71, 85, 105, #num(opacity))
      | #blueGray700 => #rgba(51, 65, 85, #num(opacity))
      | #blueGray800 => #rgba(30, 41, 59, #num(opacity))
      | #blueGray900 => #rgba(15, 23, 42, #num(opacity))

      // NOTE: Cool Gray
      | #coolGray50 => #rgba(249, 250, 251, #num(opacity))
      | #coolGray100 => #rgba(243, 244, 246, #num(opacity))
      | #coolGray200 => #rgba(229, 231, 235, #num(opacity))
      | #coolGray300 => #rgba(209, 213, 219, #num(opacity))
      | #coolGray400 => #rgba(156, 163, 175, #num(opacity))
      | #coolGray500 => #rgba(107, 114, 128, #num(opacity))
      | #coolGray600 => #rgba(75, 85, 99, #num(opacity))
      | #coolGray700 => #rgba(55, 65, 81, #num(opacity))
      | #coolGray800 => #rgba(31, 41, 55, #num(opacity))
      | #coolGray900 => #rgba(17, 24, 39, #num(opacity))

      // NOTE: Gray
      | #gray50 => #rgba(249, 250, 251, #num(opacity))
      | #gray100 => #rgba(243, 244, 246, #num(opacity))
      | #gray200 => #rgba(229, 231, 235, #num(opacity))
      | #gray300 => #rgba(209, 213, 219, #num(opacity))
      | #gray400 => #rgba(156, 163, 175, #num(opacity))
      | #gray500 => #rgba(107, 114, 128, #num(opacity))
      | #gray600 => #rgba(75, 85, 99, #num(opacity))
      | #gray700 => #rgba(55, 65, 81, #num(opacity))
      | #gray800 => #rgba(31, 41, 55, #num(opacity))
      | #gray900 => #rgba(17, 24, 39, #num(opacity))

      // NOTE: True Gray
      | #trueGray50 => #rgba(250, 250, 250, #num(opacity))
      | #trueGray100 => #rgba(245, 245, 245, #num(opacity))
      | #trueGray200 => #rgba(229, 229, 229, #num(opacity))
      | #trueGray300 => #rgba(212, 212, 212, #num(opacity))
      | #trueGray400 => #rgba(163, 163, 163, #num(opacity))
      | #trueGray500 => #rgba(115, 115, 115, #num(opacity))
      | #trueGray600 => #rgba(82, 82, 82, #num(opacity))
      | #trueGray700 => #rgba(64, 64, 64, #num(opacity))
      | #trueGray800 => #rgba(38, 38, 38, #num(opacity))
      | #trueGray900 => #rgba(23, 23, 23, #num(opacity))

      // NOTE: Warm Gray
      | #warmGray50 => #rgba(250, 250, 249, #num(opacity))
      | #warmGray100 => #rgba(245, 245, 244, #num(opacity))
      | #warmGray200 => #rgba(231, 229, 228, #num(opacity))
      | #warmGray300 => #rgba(214, 211, 209, #num(opacity))
      | #warmGray400 => #rgba(168, 162, 158, #num(opacity))
      | #warmGray500 => #rgba(120, 113, 108, #num(opacity))
      | #warmGray600 => #rgba(87, 83, 78, #num(opacity))
      | #warmGray700 => #rgba(68, 64, 60, #num(opacity))
      | #warmGray800 => #rgba(41, 37, 36, #num(opacity))
      | #warmGray900 => #rgba(28, 25, 23, #num(opacity))

      // NOTE: Red
      | #red50 => #rgba(254, 242, 242, #num(opacity))
      | #red100 => #rgba(254, 226, 226, #num(opacity))
      | #red200 => #rgba(254, 202, 202, #num(opacity))
      | #red300 => #rgba(252, 165, 165, #num(opacity))
      | #red400 => #rgba(248, 113, 113, #num(opacity))
      | #red500 => #rgba(239, 68, 68, #num(opacity))
      | #red600 => #rgba(220, 38, 38, #num(opacity))
      | #red700 => #rgba(185, 28, 28, #num(opacity))
      | #red800 => #rgba(153, 27, 27, #num(opacity))
      | #red900 => #rgba(127, 29, 29, #num(opacity))

      // NOTE: Orange
      | #orange50 => #rgba(255, 247, 237, #num(opacity))
      | #orange100 => #rgba(255, 237, 213, #num(opacity))
      | #orange200 => #rgba(254, 215, 170, #num(opacity))
      | #orange300 => #rgba(253, 186, 116, #num(opacity))
      | #orange400 => #rgba(251, 146, 60, #num(opacity))
      | #orange500 => #rgba(249, 115, 22, #num(opacity))
      | #orange600 => #rgba(234, 88, 12, #num(opacity))
      | #orange700 => #rgba(194, 65, 12, #num(opacity))
      | #orange800 => #rgba(154, 52, 18, #num(opacity))
      | #orange900 => #rgba(124, 45, 18, #num(opacity))

      // NOTE: Amber
      | #amber50 => #rgba(255, 251, 235, #num(opacity))
      | #amber100 => #rgba(254, 243, 199, #num(opacity))
      | #amber200 => #rgba(253, 230, 138, #num(opacity))
      | #amber300 => #rgba(252, 211, 77, #num(opacity))
      | #amber400 => #rgba(251, 191, 36, #num(opacity))
      | #amber500 => #rgba(245, 158, 11, #num(opacity))
      | #amber600 => #rgba(217, 119, 6, #num(opacity))
      | #amber700 => #rgba(180, 83, 9, #num(opacity))
      | #amber800 => #rgba(146, 64, 14, #num(opacity))
      | #amber900 => #rgba(120, 53, 15, #num(opacity))

      // NOTE: Yellow
      | #yellow50 => #rgba(255, 251, 235, #num(opacity))
      | #yellow100 => #rgba(254, 243, 199, #num(opacity))
      | #yellow200 => #rgba(253, 230, 138, #num(opacity))
      | #yellow300 => #rgba(252, 211, 77, #num(opacity))
      | #yellow400 => #rgba(251, 191, 36, #num(opacity))
      | #yellow500 => #rgba(245, 158, 11, #num(opacity))
      | #yellow600 => #rgba(217, 119, 6, #num(opacity))
      | #yellow700 => #rgba(180, 83, 9, #num(opacity))
      | #yellow800 => #rgba(146, 64, 14, #num(opacity))
      | #yellow900 => #rgba(120, 53, 15, #num(opacity))

      // NOTE: Lime
      | #lime50 => #rgba(247, 254, 231, #num(opacity))
      | #lime100 => #rgba(236, 252, 203, #num(opacity))
      | #lime200 => #rgba(217, 249, 157, #num(opacity))
      | #lime300 => #rgba(190, 242, 100, #num(opacity))
      | #lime400 => #rgba(163, 230, 53, #num(opacity))
      | #lime500 => #rgba(132, 204, 22, #num(opacity))
      | #lime600 => #rgba(101, 163, 13, #num(opacity))
      | #lime700 => #rgba(77, 124, 15, #num(opacity))
      | #lime800 => #rgba(63, 98, 18, #num(opacity))
      | #lime900 => #rgba(54, 83, 20, #num(opacity))

      // NOTE: Green
      | #green50 => #rgba(236, 253, 245, #num(opacity))
      | #green100 => #rgba(209, 250, 229, #num(opacity))
      | #green200 => #rgba(167, 243, 208, #num(opacity))
      | #green300 => #rgba(110, 231, 183, #num(opacity))
      | #green400 => #rgba(52, 211, 153, #num(opacity))
      | #green500 => #rgba(16, 185, 129, #num(opacity))
      | #green600 => #rgba(5, 150, 105, #num(opacity))
      | #green700 => #rgba(4, 120, 87, #num(opacity))
      | #green800 => #rgba(6, 95, 70, #num(opacity))
      | #green900 => #rgba(6, 78, 59, #num(opacity))

      // NOTE: Emerald
      | #emerald50 => #rgba(236, 253, 245, #num(opacity))
      | #emerald100 => #rgba(209, 250, 229, #num(opacity))
      | #emerald200 => #rgba(167, 243, 208, #num(opacity))
      | #emerald300 => #rgba(110, 231, 183, #num(opacity))
      | #emerald400 => #rgba(52, 211, 153, #num(opacity))
      | #emerald500 => #rgba(16, 185, 129, #num(opacity))
      | #emerald600 => #rgba(5, 150, 105, #num(opacity))
      | #emerald700 => #rgba(4, 120, 87, #num(opacity))
      | #emerald800 => #rgba(6, 95, 70, #num(opacity))
      | #emerald900 => #rgba(6, 78, 59, #num(opacity))

      // NOTE: Teal
      | #teal50 => #rgba(240, 253, 250, #num(opacity))
      | #teal100 => #rgba(204, 251, 241, #num(opacity))
      | #teal200 => #rgba(153, 246, 228, #num(opacity))
      | #teal300 => #rgba(94, 234, 212, #num(opacity))
      | #teal400 => #rgba(45, 212, 191, #num(opacity))
      | #teal500 => #rgba(20, 184, 166, #num(opacity))
      | #teal600 => #rgba(13, 148, 136, #num(opacity))
      | #teal700 => #rgba(15, 118, 110, #num(opacity))
      | #teal800 => #rgba(17, 94, 89, #num(opacity))
      | #teal900 => #rgba(19, 78, 74, #num(opacity))

      // NOTE: Cyan
      | #cyan50 => #rgba(236, 254, 255, #num(opacity))
      | #cyan100 => #rgba(207, 250, 254, #num(opacity))
      | #cyan200 => #rgba(165, 243, 252, #num(opacity))
      | #cyan300 => #rgba(103, 232, 249, #num(opacity))
      | #cyan400 => #rgba(34, 211, 238, #num(opacity))
      | #cyan500 => #rgba(6, 182, 212, #num(opacity))
      | #cyan600 => #rgba(8, 145, 178, #num(opacity))
      | #cyan700 => #rgba(14, 116, 144, #num(opacity))
      | #cyan800 => #rgba(21, 94, 117, #num(opacity))
      | #cyan900 => #rgba(22, 78, 99, #num(opacity))

      // NOTE: Light Blue
      | #lightBlue50 => #rgba(240, 249, 255, #num(opacity))
      | #lightBlue100 => #rgba(224, 242, 254, #num(opacity))
      | #lightBlue200 => #rgba(186, 230, 253, #num(opacity))
      | #lightBlue300 => #rgba(125, 211, 252, #num(opacity))
      | #lightBlue400 => #rgba(56, 189, 248, #num(opacity))
      | #lightBlue500 => #rgba(14, 165, 233, #num(opacity))
      | #lightBlue600 => #rgba(2, 132, 199, #num(opacity))
      | #lightBlue700 => #rgba(3, 105, 161, #num(opacity))
      | #lightBlue800 => #rgba(7, 89, 133, #num(opacity))
      | #lightBlue900 => #rgba(12, 74, 110, #num(opacity))

      // NOTE: Blue
      | #blue50 => #rgba(239, 246, 255, #num(opacity))
      | #blue100 => #rgba(219, 234, 254, #num(opacity))
      | #blue200 => #rgba(191, 219, 254, #num(opacity))
      | #blue300 => #rgba(147, 197, 253, #num(opacity))
      | #blue400 => #rgba(96, 165, 250, #num(opacity))
      | #blue500 => #rgba(59, 130, 246, #num(opacity))
      | #blue600 => #rgba(37, 99, 235, #num(opacity))
      | #blue700 => #rgba(29, 78, 216, #num(opacity))
      | #blue800 => #rgba(30, 64, 175, #num(opacity))
      | #blue900 => #rgba(30, 58, 138, #num(opacity))

      // NOTE: Indigo
      | #indigo50 => #rgba(238, 242, 255, #num(opacity))
      | #indigo100 => #rgba(224, 231, 255, #num(opacity))
      | #indigo200 => #rgba(199, 210, 254, #num(opacity))
      | #indigo300 => #rgba(165, 180, 252, #num(opacity))
      | #indigo400 => #rgba(129, 140, 248, #num(opacity))
      | #indigo500 => #rgba(99, 102, 241, #num(opacity))
      | #indigo600 => #rgba(79, 70, 229, #num(opacity))
      | #indigo700 => #rgba(67, 56, 202, #num(opacity))
      | #indigo800 => #rgba(55, 48, 163, #num(opacity))
      | #indigo900 => #rgba(49, 46, 129, #num(opacity))

      // NOTE: Violet
      | #violet50 => #rgba(245, 243, 255, #num(opacity))
      | #violet100 => #rgba(237, 233, 254, #num(opacity))
      | #violet200 => #rgba(221, 214, 254, #num(opacity))
      | #violet300 => #rgba(196, 181, 253, #num(opacity))
      | #violet400 => #rgba(167, 139, 250, #num(opacity))
      | #violet500 => #rgba(139, 92, 246, #num(opacity))
      | #violet600 => #rgba(124, 58, 237, #num(opacity))
      | #violet700 => #rgba(109, 40, 217, #num(opacity))
      | #violet800 => #rgba(91, 33, 182, #num(opacity))
      | #violet900 => #rgba(76, 29, 149, #num(opacity))

      // NOTE: Purple
      | #purple50 => #rgba(245, 243, 255, #num(opacity))
      | #purple100 => #rgba(237, 233, 254, #num(opacity))
      | #purple200 => #rgba(221, 214, 254, #num(opacity))
      | #purple300 => #rgba(196, 181, 253, #num(opacity))
      | #purple400 => #rgba(167, 139, 250, #num(opacity))
      | #purple500 => #rgba(139, 92, 246, #num(opacity))
      | #purple600 => #rgba(124, 58, 237, #num(opacity))
      | #purple700 => #rgba(109, 40, 217, #num(opacity))
      | #purple800 => #rgba(91, 33, 182, #num(opacity))
      | #purple900 => #rgba(76, 29, 149, #num(opacity))

      // NOTE: Fuchsia
      | #fuchsia50 => #rgba(253, 244, 255, #num(opacity))
      | #fuchsia100 => #rgba(250, 232, 255, #num(opacity))
      | #fuchsia200 => #rgba(245, 208, 254, #num(opacity))
      | #fuchsia300 => #rgba(240, 171, 252, #num(opacity))
      | #fuchsia400 => #rgba(232, 121, 249, #num(opacity))
      | #fuchsia500 => #rgba(217, 70, 239, #num(opacity))
      | #fuchsia600 => #rgba(192, 38, 211, #num(opacity))
      | #fuchsia700 => #rgba(162, 28, 175, #num(opacity))
      | #fuchsia800 => #rgba(134, 25, 143, #num(opacity))
      | #fuchsia900 => #rgba(112, 26, 117, #num(opacity))

      // NOTE: Pink
      | #pink50 => #rgba(253, 242, 248, #num(opacity))
      | #pink100 => #rgba(252, 231, 243, #num(opacity))
      | #pink200 => #rgba(251, 207, 232, #num(opacity))
      | #pink300 => #rgba(249, 168, 212, #num(opacity))
      | #pink400 => #rgba(244, 114, 182, #num(opacity))
      | #pink500 => #rgba(236, 72, 153, #num(opacity))
      | #pink600 => #rgba(219, 39, 119, #num(opacity))
      | #pink700 => #rgba(190, 24, 93, #num(opacity))
      | #pink800 => #rgba(157, 23, 77, #num(opacity))
      | #pink900 => #rgba(131, 24, 67, #num(opacity))

      // NOTE: Rose
      | #rose50 => #rgba(255, 241, 242, #num(opacity))
      | #rose100 => #rgba(255, 228, 230, #num(opacity))
      | #rose200 => #rgba(254, 205, 211, #num(opacity))
      | #rose300 => #rgba(253, 164, 175, #num(opacity))
      | #rose400 => #rgba(251, 113, 133, #num(opacity))
      | #rose500 => #rgba(244, 63, 94, #num(opacity))
      | #rose600 => #rgba(225, 29, 72, #num(opacity))
      | #rose700 => #rgba(190, 18, 60, #num(opacity))
      | #rose800 => #rgba(159, 18, 57, #num(opacity))
      | #rose900 => #rgba(136, 19, 55, #num(opacity))
      }
  }

  module Nord = {
    type t = [
      | #nord0
      | #nord1
      | #nord2
      | #nord3
      | #nord4
      | #nord5
      | #nord6
      | #nord7
      | #nord8
      | #nord9
      | #nord10
      | #nord11
      | #nord12
      | #nord13
      | #nord14
      | #nord15
    ]

    let toValue = (~opacity=1., color: t) =>
      switch color {
      | #nord0 => #rgba(46, 52, 64, #num(opacity))
      | #nord1 => #rgba(69, 66, 82, #num(opacity))
      | #nord2 => #rgba(67, 76, 94, #num(opacity))
      | #nord3 => #rgba(76, 86, 106, #num(opacity))
      | #nord4 => #rgba(216, 222, 233, #num(opacity))
      | #nord5 => #rgba(229, 233, 240, #num(opacity))
      | #nord6 => #rgba(236, 239, 244, #num(opacity))
      | #nord7 => #rgba(143, 188, 187, #num(opacity))
      | #nord8 => #rgba(136, 192, 208, #num(opacity))
      | #nord9 => #rgba(129, 161, 193, #num(opacity))
      | #nord10 => #rgba(94, 129, 172, #num(opacity))
      | #nord11 => #rgba(191, 97, 106, #num(opacity))
      | #nord12 => #rgba(208, 135, 112, #num(opacity))
      | #nord13 => #rgba(235, 203, 139, #num(opacity))
      | #nord14 => #rgba(163, 190, 140, #num(opacity))
      | #nord15 => #rgba(180, 142, 173, #num(opacity))
      }
  }
}

module Elevation = {
  type t = [
    | #0
    | #1
    | #2
    | #3
    | #4
    | #5
    | #6
    | #7
    | #8
    | #9
    | #10
    | #11
    | #12
    | #13
    | #14
    | #15
    | #16
    | #17
    | #18
    | #19
    | #20
    | #21
    | #22
    | #23
    | #24
  ]

  let toValue = t =>
    switch t {
    | #0 => "0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)"
    | #1 => "0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)"
    | #2 => "0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)"
    | #3 => "0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)"
    | #4 => "0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)"
    | #5 => "0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)"
    | #6 => "0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)"
    | #7 => "0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)"
    | #8 => "0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)"
    | #9 => "0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)"
    | #10 => "0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)"
    | #11 => "0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)"
    | #12 => "0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)"
    | #13 => "0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)"
    | #14 => "0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)"
    | #15 => "0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)"
    | #16 => "0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)"
    | #17 => "0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)"
    | #18 => "0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)"
    | #19 => "0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)"
    | #20 => "0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)"
    | #21 => "0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)"
    | #22 => "0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)"
    | #23 => "0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)"
    | #24 => "0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)"
    }
}

module Colors = ColorPalettes.Tailwind3
