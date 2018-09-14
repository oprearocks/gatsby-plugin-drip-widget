import React from 'react'
import { defaultOptions } from './internals'
import DripCode from './drip-code'

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  let { account } = { ...defaultOptions, ...pluginOptions }

  if (!account) return

  setPostBodyComponents([
    <DripCode
      account={account}
    />
  ])
}
