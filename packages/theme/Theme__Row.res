type t = [#1 | #2 | #3 | #4 | #5 | #6 | #7]

let toValue = span =>
  switch span {
  | #1 => 1
  | #2 => 2
  | #3 => 3
  | #4 => 4
  | #5 => 5
  | #6 => 6
  | #7 => 7
  }
