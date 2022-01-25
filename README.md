App creation summary
To create a new app with next.js:

- use yarn create next-app <app_name>
- remove useless initial contents (style, index content)
- import AppProps and use it as a type inside App.tsx to include ts type to the app
- install typescript with yarn add typescript @types/react @types/node -D
- To start with a more legible arquiteture, create a src folder and move pages folder inside

Installing Chakra UI
dependencies

- @chakra-ui/react @chakra-ui/core (If you have any questions, just read docs)
- chakra UI needs to use behing the scenes two more libs, emotion and framer-motion
- to install both: @emotion/react @emotion/styled framer-motion

Styles folder - chakra UI config
Chakra already have various themes inside, so we can either use the ones that already exist, or we can extend them and add our own customizations,that is why we create a theme.ts file, we will centralize all custom themes on this file
to include this themes inside our app, we need to include it inside a ChakraProvider, the same as if we were to create a context, so our app can access all default chakra ui config, to do that we will import ChakraProvider from @chakra/react and insert it around our app, on app.ts, after that we will insert our custom theme as a props.

\_document file
this file works like index.js inside a react app, everything we put inside of it will be a "core" file, it will pass it to our whole app

Using Chakra UI components
We can use as an example the input component inside Form folder. If we want to use a div, and add a property of display:flex, with chakra we already have a declarative interface for it, we just need to import the Flex component from @chakra-ui/react. After that, we just have to style that div
Another cool thing is: if we want to still use a Flex component, but we need that div to be a form element instead, we can provide a type to the prop "as", for examploe -> <Flex as="form"/> and there it is! we have a form with a display flex property

Typescript Types
To create a new component, we need to declare a interface, a contract, to what possible props that component could use, we can take for example the input component as well. By creating a InputProps, we declared all new types that we want to use, but we still need to declare alll default props that the input element needs to use, a possible solution for that is extending our interface, for it to have all of input props as well as our new ones
