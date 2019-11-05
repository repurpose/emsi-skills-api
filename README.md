# Emsi Skills Classification API
> The unofficial Node.js package for the Emsi Skills Classification API

This package covers all available endpoints for the Emsi Skills Classification API. Official API docs are available [here](https://api.emsidata.com/apis/skills-classification)

## Installing / Getting started

```shell
npm install --save emsi-skills-api
```

or 

```shell
yarn add emsi-skills-api
```

To require the full set of endpoints use:

```javascript
const SkillsAPI = require("emsi-skills-api");
```

To target a particular group of endpoints, object destructuring can be used:

```javascript
const { skillTypes } = require("emsi-skills-api");
```

### Initial Configuration

This package requires two environment variables to be set: `EMSI_CLIENT_ID` and `EMSI_SECRET`. These are the values provided by Emsi when you sign up for API access on [their site](https://skills.emsidata.com/). The environment variable `EMSI_SCOPE` can be set, but it defaults to the only valid value (`emsi_open`);

## Example

Get all skills:


```javascript
const SkillsAPI = require("emsi-skills-api");

SkillsAPI
  .skills
  .listAllSkills()
  .then((skills) => {
      console.log(skills);
  });
```

## API

All functions return a Promise. They can be chained with `.then()` or used with `async/await`;

```javascript
const SkillsAPI = require("emsi-skills-api");

/*
 * Status
 */

SkillsAPI.status.getStatus(); // Boolean

/*
 * Docs
 */

// Get docs
SkillsAPI.docs.getDocs(); // Markdown-formatted text

// Get changelog
SkillsAPI.docs.getChangelog(); // Markdown-formatted text

/*
 * Versions
 */

SkillsAPI.versions.getVersions(); // [String]

/*
 * Skills
 */

// List all skills
SkillsAPI.skills.listAllSkills(version?); // [{ type, id, name }]

// Search for skills
SkillsAPI.skills.searchSkills(term, version?); // [{ type, id, name }]

// Get skills by type
SkillsAPI.skills.skillsByType(typeId, version?); // [{ type, id, name }]

// Get a skill by ID
SkillsAPI.skills.skillById(skillId, version?); // { type, id, name }

/*
 * Skill Types
 */

SkillsAPI.skillTypes.listSkillTypes(version?); // [{ description, id, name }]

/*
 * Extract
 */

// Extract skills from document
SkillsAPI.extract.extractFromDocument(documentText, version?); // { "skills": [{ type, id, name }] }

// Extract skills with source
SkillsAPI.extract.extractFromDocumentWithSource(documentText, version?); // { "trace": [Object] }
```

## Contributing

If you'd like to contribute, please fork the repository and use a feature
branch. Pull requests are welcome.

This project uses ESLint defaults and Prettier for linting/formatting. Mocha/Chai are used for testing.

## Links

- Project homepage: https://github.com/repurpose/emsi-skills-api
- Repository: https://github.com/repurpose/emsi-skills-api
- Issue tracker: https://github.com/repurpose/emsi-skills-api/issues
- Emsi Skills Classification API Docs: https://api.emsidata.com/apis/skills-classification

## Licensing

The code in this project is licensed under MIT license.