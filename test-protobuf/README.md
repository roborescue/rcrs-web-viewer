# How to run

Open this folder in a webserver as you prefere 
for example open localhost:8080 in your browser

open localhost:8080/log-viewer-protobuf.html and then click on load

You can see the detailed information in console.



# How to convert protobuf to javascript:
.\protoc.exe --proto_path=. --js_out=import_style=commonjs:C:\D\Projects\RoboCup\rescue\rcrs-web\rcrs-js\ RCRSLogProto.proto RCRSProto.proto

browserify rcrs-js/RCRSLogProto_pb.js -o rcrs-js/RCRSLogProto_pb.out.js



# ToDo

There are several remaining tasks in Javascript:
- Currently, it reads all the content and decompresses the log. However, we receive the file content byte by byte. LZMA supports streaming, so we can start decompressing it while receiving any bytes. I start to work on that but I don't have time anymore.
- Find the issue in the deserializing message (deserializing json protobuf works well but I prefer the standard format) maybe using  protobuf.js is better than using the google version.
- merge it with HTML viewer
