// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const movieApiKey = '260545a0';
export const environment = {
  production: false,
  movieApiKey: movieApiKey,
  movieApiUrl: `http://www.omdbapi.com/?type=movie&apikey=${movieApiKey}&`,
  posterApiUrl: `http://img.omdbapi.com/?type=movie&apikey=${movieApiKey}&`,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
