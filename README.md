# webed
Basic web editor based on ACE and nodejs

## Security Warning
I suggest only to run this nodejs web application on servers with restricted access.
There is currently *absolutely no restriction* implemented in webed as to which files can be accessed and who can access them.
That means if you run webed on a publically reachable machine that ANYONE can edit all the files the user with whose account webed
is executing has access to - including the webed javascript files executing!!!
