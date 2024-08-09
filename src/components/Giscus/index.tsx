import React from "react";
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";

// pnpm run swizzle @docusaurus/theme-classic BlogPostItem -- --wrap
// pnpm run swizzle @docusaurus/theme-classic DocItem/Footer -- --wrap

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus
      repo="can-dy-jack/can-dy-jack.github.io"
      repoId="MDEwOlJlcG9zaXRvcnkzMDc5NjExMjc="
      category="General"
      categoryId="DIC_kwDOElsdJ84B_swc"
      mapping="title"
      term="Welcome to @giscus/react component!"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme={colorMode}
      lang="zh-CN"
      loading="lazy"
    />
  );
}
