// import the library
import { library } from '@fortawesome/fontawesome-svg-core';

// Import/use free icons, so that others can build without needing the npmrc private hash (license) required when downloading the pro versions
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Import/use pro icons, deploying to production later.
// import { far } from '@fortawesome/pro-regular-svg-icons';
// import { fas } from '@fortawesome/pro-solid-svg-icons';
// import { fal } from '@fortawesome/pro-light-svg-icons'; // Don't forget to add "fal" to the library below
// import { fad } from '@fortawesome/pro-duotone-svg-icons'; // Don't forget to add "fad" to the library below

// Package names to include for pro versions (replace/add in package.json)
// "@fortawesome/pro-light-svg-icons": "^5.11.2",
// "@fortawesome/pro-regular-svg-icons": "^5.11.2",
// "@fortawesome/pro-solid-svg-icons": "^5.11.2",
// "@fortawesome/pro-duotone-svg-icons": "^5.11.2",

library.add(
	far,
	fas
);