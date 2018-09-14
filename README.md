# gatsby-plugin-drip-widget

Allows you to embed the [Drip](https://getdrip.com) form JavaScript code into every page of a Gatsby.js website.

## Install

`npm install --save gatsby-plugin-drip-widget`

Or with yarn

`yarn add gatsby-plugin-drip-widget`

## How to use

In your `gatsby-config.js`

```js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-drip-widget`,
      options: {
        account: '<your-drip-account-id>' // Get it by going to "Account => Site setup" and look for `_dcs.account`
      },
    },
  ],
}
```

## Notes
Currently there is only support for the Drip widget (through JavaScript), but a companion Drip form component should be available soon for the people who want to embed the form.
