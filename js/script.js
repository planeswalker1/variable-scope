const globalScopeVariable = 'I\'m a global scoped variable';

$('a#click-one').click(function() {
  const localScopeVariable = 'I\'m a local scoped variable!';
  alert(globalScopeVariable);
  alert(localScopeVariable);
});

$('a#click-two').click(function(){
  alert(globalScopeVariable);
  alert(localScopeVariable);
});
