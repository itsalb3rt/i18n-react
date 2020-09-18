# i18n implementation

Everything documented is made to be as generic as possible and applicable to any React project, The rules that you will see below are suggested and not mandatory.

---

# Content

- [Implementation](#implementation)
    - [i18n instace](#i18n-instace)

- [How to use in components](#how-to-use-in-components)
  
- [i18n Rules](#i18n-rules)
  
- [Extra](#extra)

---

## Implementation

First install dependencies:

```bash
$ npm install i18next
# and
$ npm install react-i18next
```

#### i18n instace

```javascript
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18n/i18n'; // Simple import

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

```


```javascript
// src/i18n/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from './locales/en.json';

// the translations
const resources = {
  en: {
    translation: en
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: '.', //for use dot notation. Example: {t(actions.save)}

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
```

```json
// src/i18n/locales/en.json
{
    "title": {
        "home":"Home"
    }
}
```

## How to use in components

To use it in components you just have to import `useTranslation` and destructuring the `t` function from `useTranslation`.

```javascript
import React from 'react';
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
    render() {
        const {t} = useTranslation();
        return <h1>{t('title.home')}</h1>
    }
}

export default MyComponent;
```

## i18n Rules

- The maximum depth is 3 levels (*root -> category -> item || subcategory -> value*)
- Not item in root (*Only categories || objects*)
- All tranlations store in `src/i18n/locales` in JSON file with only the short name language (*en, es, fr*)
- All `key` use camleCase

JSON file exmaple

```json
// src/i18n/locales/en.json
{
    "configurations":{
        "general":"General"
    },
    "extensions":{
        "name":"Name",
        "number":"Number"
    },
    "ConferenceRooms":{
        "maxUsersAllowed":"Max Users Allowed",
        "form"{
            "information":{
                "maxUsers":"Max Users"
            },
            "settings":{
                "AnnounceUsersCount":"Announce users count",
                "AnnounceUserJoinLeave":"Announce user Join Leave"
            }
        }
    }
}
```

## Extra

Documentation
[https://react.i18next.com/guides/quick-start](https://react.i18next.com/guides/quick-start)

---