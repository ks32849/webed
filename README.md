# webed
Basic web editor based on ACE and nodejs

## Security Warning
I suggest only to run this nodejs web application on servers with restricted network access.
At least restrict by specifying the ip-address: sudo docker run -d -p 192.168.33.10:8080:9778  ks32849/ubuntu-node-webed:0.1

There is currently *absolutely no restriction* implemented in webed as to which files can be accessed and who can access them.
That means if you run webed on a publically reachable machine that ANYONE can edit ALL the files the user with whose account webed
is executing has access to - including the webed javascript files executing!!!
