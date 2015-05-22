// Load native UI library
var gui = require('nw.gui');

// Create an empty menu
var menu = new gui.Menu();

// Add some items with label
menu.append(new gui.MenuItem({ label: 'Item A' }));
menu.append(new gui.MenuItem({ label: 'Item B' }));
menu.append(new gui.MenuItem({ type: 'separator' }));
menu.append(new gui.MenuItem({ label: 'Item C' }));

// Remove one item
menu.removeAt(1);

// Iterate menu's items
for (var i = 0; i < menu.items.length; ++i)
{
  console.log(menu.items[i]);
}

// Add a item and bind a callback to item
menu.append(new gui.MenuItem(
{
  label: 'Click Me',
  click: function()
  {
    // Create element in html body
    var element = document.createElement('div');
    element.appendChild(document.createTextNode('Clicked OK'));
    document.body.appendChild(element);
  }
}));

// Popup as context menu
document.body.addEventListener('contextmenu', function(ev)
{
  ev.preventDefault();
  // Popup at place you click
  menu.popup(ev.x, ev.y);
  return false;
}, false);
