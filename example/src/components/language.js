import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-react-intl"

const languageName = {
  en: "English",
  ko: "한국어",
  de: "Deutsch",
}

const Language = () => {
  return (
    <div>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <div
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                display: "inline-block",
                color: currentLocale === language ? `yellow` : `white`,
                margin: 10,
                textDecoration: `underline`,
                cursor: `pointer`,
              }}
            >
              {languageName[language]}
            </div>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Language
