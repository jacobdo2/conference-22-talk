### Outline

1. Intro
- Introduce ourselves and what we do at DFDS
- Read out the title
- Describe the goal of our talk - to explore how frontend development in DFDS could look by applying some of the advantages offered by the frontend technology landscape (Keep it vague so we can surprise)

2. Show our landing page
- This is the new DFDS b2b UI
- Mention that this was built using astro

2. Astro https://astro.build/
- What is Astro?
- Island Architecture
- How mature is Astro right now
- Explain the benefits of Astro

3. Show React component
- Showcase how Astro is done in React
- Point out to any differences in writing Astro e.g. the dashed line

4. Solid component
- Start out by not mentioning solid and just show jsx so it seems to be in a regular React component.
- Then point out at some differences that you see on the screen e.g. `useSignal` and dependency-less `useEffect`.
- Talk about the philosophy behind Solid
- Showcase a feature in live code

5. Web components directly in Astro
- What is a web component?
- Rendering a web component in Astro
- Talk about limitations of doing web components directly in Astro

6. Lit
- Lit is a better way of doing web components
- Showcase main lit features
- Talk about how lit improves dev experience when doing web components
- Talk about the fact that web components can be used not only in Astro but through other frameworks as well
- Showcase our small lit component library

7. Use web component directly in Solid or React
- Proof of concept for an interoperable component library
- Limitatioins

8. Conclusions
- Benefits
  - Does not lock us into a single ecosystem
  - Good for hiring
  - Developers can be more explorative when selecting technologies
  - TBC
