import { useEffect, useState } from "react";
import { ContextProvider } from ".";
import Languages from "../languages/Languages"

// Function to provide context to other files or components
function ContextWrapper({ children }) {
  const [languageString, setLanguageString] = useState(Languages['en'])

  useEffect(() => {
    // getLanguage()
  }, [])


  // Read customer data
  const getLanguage = async () => {
    setLanguageString(Languages['en'])
  }
  // Read customer data

  // change app language
  const changeAppLang = (lang) => {
    setLanguageString(lang);
  };
  // change app language

  // Set values object that provide values to the provider's all comsumers
  const object = {
    languageString,
    setLanguageString: changeAppLang,
  }
  // Set values object that provide values to the provider's all comsumers
  return (
    <ContextProvider value={object}>{children}</ContextProvider>
  )
}
export default ContextWrapper;
