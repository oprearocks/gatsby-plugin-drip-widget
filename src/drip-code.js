import React from 'react'

function createScriptMarkup(account) {
  return {
    __html: `
      var _dcq = _dcq || [];
      var _dcs = _dcs || {};
      _dcs.account = ${account};

      (function() {
        var dc = document.createElement('script');
        dc.type = 'text/javascript'; dc.async = true;
        dc.src = "//tag.getdrip.com/${account}.js";
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(dc, s);
      })();
    `
  }
}
const DripCode = ({ account }) => (
  <script
    key={`gatsby-plugin-drip-widget`}
    type="text/javascript"
    dangerouslySetInnerHTML={createScriptMarkup(account)}
  />
);

  export default DripCode
