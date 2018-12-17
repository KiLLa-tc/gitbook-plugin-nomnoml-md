const nomnoml = require('nomnoml');
const regex = /^```nomnoml((.*[\r\n]+)+?)?```$/im;

module.exports = {
    hooks: {
      'page:before': function (page) {
        let match;
        while ((match = regex.exec(page.content))) {
          page.content = page.content.replace(
            match[0],
            nomnoml.renderSvg(match[1])
          );
        }
        return page;
      }
    }
};
