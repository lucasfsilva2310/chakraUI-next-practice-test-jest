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

React-Icon library
this library is simple , it works simply as a icon library, using it with chakra UI we can include it by the same method with "as" inside a component, but instead of adapting to a new html element, we adapt to receive the icon, importing the Icon component from chakra

ApexCharts - charts library
to import this library just run 'yarn add apexcharts react-apexcharts'
this library is an easy way to represent data as charts, you just have to use like a normal react component
theres two importante properties that needs to bem filled:
options -
series - type of data that will be represented, and the data itself, like : { name: 'series', data: [1,4,6]}
OBS: when we´re using next.js, we need to find a way to just use this library inside the browser, as we know next run a sort of back end node server when its rendering the basic html, so if the browser window does not exist yet, this library will return an error similar to "window not defined". for that, we can use dinamyc, from next/dinamyc, and we import Chart using this import, for example "const Chart = dynamic(() => import('react-apexcharts'), {ssr: false})"
So from now on, this library will only be imported later on (the ssr(server-side-rendering) value ensure that this lib will not be used on the server side)
