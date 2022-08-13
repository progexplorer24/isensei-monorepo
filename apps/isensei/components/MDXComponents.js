/* eslint-disable react/display-name */
import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import Image from "./Image";
import CenterElement from "./CenterElement";
import CustomLink from "./Link";
import TOCInline from "./TOCInline";
import Pre from "./Pre";
import { BlogNewsletterForm } from "./NewsletterForm";
import SandpackIsensei from "./SandpackIsensei";

export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  CustomLink,
  pre: Pre,
  BlogNewsletterForm: BlogNewsletterForm,
  CenterElement,
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`../layouts/${layout}`).default;
    return <Layout {...rest} />;
  },
  SandpackIsensei: SandpackIsensei,
};

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />;
};
