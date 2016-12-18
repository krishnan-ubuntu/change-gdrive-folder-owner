function changeFolderOwner()
{
  var folder = DriveApp.getFoldersByName('Some Folder');
  folder.setOwner("user@domain.com");
}