const globalScopeVariable = 'I\'m a global scoped variable';

$('a#click-one').click(function() {
  const localScopeVariable = 'I\'m a local scoped variable!';
  $('.well').after('<p><code>const localScopeVariable = \'' + localScopeVariable +'\'; &amp; const globalScopeVariable = \'' + globalScopeVariable +'\';</code><p>');
  alert(globalScopeVariable);
  alert(localScopeVariable);
});

$('a#click-two').click(function(){
  $('.well').after('<p><code>const localScopeVariable = \'' + typeof localScopeVariable +'\'; &amp; const globalScopeVariable = \'' + globalScopeVariable +'\';</code><p>');
  alert(globalScopeVariable);
  alert(localScopeVariable);
});
