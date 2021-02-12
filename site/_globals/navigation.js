// Base navigation configuration to which filters are applied below.
const navitems = {
  "main": [
    {
      "label": "Home",
      "url": "/"
    },
    {
      "label": "Patterns",
      "url": "/patterns/",
      "draft": true
    },
    {
      "label": "Topics",
      "url": "/topics/",
      "draft": true
    },
    {
      "label": "Report",
      "url": "/report/"
    },
    {
      "label": "Contribute",
      "url": "/contribute/"
    },
    {
      "label": "About",
      "url": "/about/"
    },
    {
      "label": "Roadmap",
      "url": "/roadmap/"
    }
  ]
}

/**
 * True when executed in a Netfliy production build context
 */
const isNetlifyProduction = process.env.CONTEXT === "production";

/**
 * Filter draft items when in production context
 *
 * @param {Object} input navigation configuration
 */
const draftFilter = ({ main, ...rest }) => ({
  main: main.filter(item => !item.draft || !isNetlifyProduction),
  ...rest
})

const filtered_navitems = draftFilter(navitems);
module.exports = filtered_navitems;