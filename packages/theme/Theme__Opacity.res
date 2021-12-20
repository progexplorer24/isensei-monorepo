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
