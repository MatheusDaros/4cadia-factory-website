export const environment = {
  production: true,

  mediumStyle: {
    feedContainer: {
      "text-align": "center",
    },
    feedTitle: {
      "font-size": "0rem",
      padding: "2em"
    },
    allItemsContainer: {
      display: "flex",
      "flex-wrap": "wrap",
      "justify-content": "space-evenly"
    },
    itemContainer: {
      width: "60%",
      "max-height": "30em",
      display: "flex",
      "flex-direction": "column",
      margin: "1em 0",
      "border-radius": "1em",
      overflow: "hidden"
    },
    itemThumbnailContainer: {
      "flex-grow": "1",
      display: "flex",
      "flex-direction": "column",
      "justify-content": "space-evenly"
    },
    itemThumbnail: {
      "max-width": "100%",
      "max-height": "100%"
    },
    itemTitle: {
      padding: "1em 0"
    }
  },

  mediumFeedUrl: "https://medium.com/feed/@4cadia"
};
