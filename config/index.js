export const ROUTES = [
  { name: `Home`, path: `/` },
  { name: `About`, path: `/about` },
  { name: `Blog`, path: `/blog` },
  { name: `Contact`, path: `/contact` },
]
/**
 * mobile portrait: less than 640px
 * mobile landscape: > 640px
 * tablet portrait: > 768px
 * tablet landscape: > 1024px
 * laptop: > 1280px
 */
export const BREAKPOINTS = {
  mobile: {
    raw: `(min-width: 640px)`,
    up: `@media (min-width: 640px)`,
    rawDown: `(max-width: 640px)`,
    down: `@media (max-width: 640px)`,
  },
  tablet_portrait: {
    raw: `(min-width: 775px)`,
    up: `@media (min-width: 775px)`,
    rawDown: `(max-width: 775px)`,
    down: `@media (max-width: 775px)`,
  },
  tablet: {
    raw: `(min-width: 875px)`,
    up: `@media (min-width: 875px)`,
    rawDown: `(max-width: 875px)`,
    down: `@media (max-width: 875px)`,
  },
  tablet_landscape: {
    raw: `(min-width: 1120px)`,
    up: `@media (min-width: 1120px)`,
    rawDown: `(max-width: 1120px)`,
    down: `@media (max-width: 1120px)`,
  },
  laptop: {
    rawUp: `(min-width: 1430px)`,
    up: `@media (min-width: 1430px)`,
    rawDown: `(max-width: 1430px)`,
    down: `@media (max-width: 1430px)`,
  },
}
