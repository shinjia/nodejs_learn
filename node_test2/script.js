function change()
{
  document.bgColor = '#AAAA00';
  document.bgColor = '#' + ((1<<24)*Math.random()|0).toString(16);
}