# Functional CSS Framework

This project is an alternative built from scratch implementation of TaiwlindCSS Functional CSS Framework in Rescript. It enables style composition  and encourages creation of composable components. Project was aimed to solve this problem:  [CSS class override utility for component composition](https://github.com/tailwindlabs/tailwindcss/discussions/1446)

Creator of Tailwind said he's not going to implement this feature any time soon, but encouraged users to hack on alternative implementation (which I did!):
[Adam Wathan Response](https://github.com/tailwindlabs/tailwindcss/discussions/1446#discussioncomment-56769).

Projects consist of several packages:
- `css/*` - statically typed DSL that enables writing CSS in Rescript. This part is a hard fork of this package [bs-css](https://github.com/giraud/bs-css). It is still actively maintained and I mostly copied it for learning purposes (It's amazing project. I learned so much by readings its codebase :heart:)
- `tailwind/*` - Implementation of fully-typed TailwindCSS API in Rescript. It allows you to style your app in a tailwind-like fashion, while giving you all of the benefits of Rescript type system.
- `theme/*` - Theme configuration for the framework. It's fully customizable and easily extendable. It allows you to implement **any constain-based design system.**
- `reset/*` - base styles reset for consistency across all browsers
- `selectors/*` - declarative css selectors
- `ui/*` - component library built on top of this framework (WIP)

## Credits
This project was created mainly to learn from this amazing people. You should check them out!

- [Tailwind Team](https://github.com/tailwindlabs)
- [Herve Giraud](https://github.com/giraud/bs-css) - creator of *bs-css*
- [Patrick Ecker](https://github.com/ryyppy) - creator of *Rescript documentation*
- [Rescript Team](https://github.com/rescript-lang)
