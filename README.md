
# Diarly.app  website

This repository contains [Gatsby](https://www.gatsbyjs.org/) code to generate the diarly.app website

## Installing

Install dependencies by running following command:

```cli
npm install
```

## Running

To run locally use following command:

```cli
gatsby develop
```

Then, go to `localhost:8000` to view the site. Updates automatically.

To clean the local cache (useful to refresh images), run:

```cli
gatsby clean
```

## Releasing

When you are ready just push to the `master` branch. Automation will do the rest.

When starting to work create separate branch.  Once all the changes are done code you can merged that branch into `master`

## Adding help article

When adding new article, file name will be used as url, so make sure it's got no space and is lower cased.  File name should end with `.md`, or `.mdx` if icons or other components are needed.

### Adding icons

1. Import icon after metadata: `import { Icon } from '../components/icons/icon.js'`
2. Get the icon names from icondata.js (should be the same as previously)
3. Add: `<Icon icon="picture" size="20" />`

### Adding images

```md
![Image title when can not load](./path-to-file.gif)
```

## Help Style guidelines

Use gifs when something is  complicated to explain.
Sentences should be relatively short and easy to comprehend.

[Read more about Diarly's persona.](https://www.notion.so/Brand-Identity-Diarly-as-a-person-26dd36ebb60c4c738d1cafaf336b6394)

## Resources

Gif creator: getkap.co

Feel free to improve this documentation 👍
