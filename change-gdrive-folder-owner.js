function changeFolderOwner()
{
  var today = new Date();
  var MS_PER_MINUTE = 60000;
  var myStartDate = new Date(today - 5 * MS_PER_MINUTE);
  
  var folders = DriveApp.getFoldersByName('Test').next();
  var fileSearchQuery = 'modifiedDate > "'+myStartDate.toISOString()+'"';
  var files = folders.searchFiles(fileSearchQuery);
  while (files.hasNext())
  {
     file = files.next();
     file.setOwner('user@domain.com');     
   }
}
