var self = require("sdk/self");
var buttons = require('sdk/ui/button/action');
var panels = require("sdk/panel");
var sp= require("sdk/simple-prefs");

var panel = panels.Panel({
  contentURL: self.data.url("panel.html"),
  contentScriptFile: [self.data.url("jquery-2.1.0.min.js"),self.data.url("data.js")],
  contentStyleFile: self.data.url("estilo.css")
});

var button = buttons.ActionButton({
  id: "my-button",
  label: "Test",
  icon: {
    "16": "./feedec.png",
  },
  onClick: handleChange,
});

function handleChange() {
    panel.show({
      position: button
    });
	console.log(sp.prefs.texto);
	console.log(sp.prefs.entero);
}


