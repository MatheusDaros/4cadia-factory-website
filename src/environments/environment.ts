// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

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

  mediumFeedUrl: "https://medium.com/feed/4cadia"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
