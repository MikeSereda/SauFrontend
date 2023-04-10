var encode = function (plainText) {
    let encodedText = btoa(plainText)
    alert(encodedText)
    return encodedText;
}

var decode = function (encodedText) {
    let plainText = atob(encodedText)
    alert(plainText)
    return plainText;
}

var test = function (){
    let cdmJson = JSON.parse(cdm);
    let map = new Map(Object.entries(cdmJson));
    let devId = 'cdm111';
    let valueName1 = 'eb_no';
    let valueName2 = 'eb_no_remote';
    let millis = performance.now();
    for (let i=0;i<map.get(devId).length;i++){
        console.log(valueName1+' '+(new Map(Object.entries(map.get(devId)[i].values))).get(valueName1));
        console.log(valueName2+' '+(new Map(Object.entries(map.get(devId)[i].values))).get(valueName2));
    }
    console.log(performance.now()-millis);
    console.log(map.get(devId).length);
}
const cdm = "{\n" +
    "    \"cdm111\": [\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:00:01\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:00:03\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:00:05\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:00:08\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:00:10\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:00:12\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:00:14\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:00:17\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:00:19\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:00:21\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:00:23\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:00:25\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:00:27\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:00:30\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:00:32\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:00:34\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:00:36\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:00:38\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:00:41\",\n" +
    "                \"eb_no_remote\": 6.4,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:00:43\",\n" +
    "                \"eb_no_remote\": 6.2,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:00:45\",\n" +
    "                \"eb_no_remote\": 6.8,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:00:47\",\n" +
    "                \"eb_no_remote\": 6.6,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:00:49\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:00:52\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:00:54\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:00:56\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:00:58\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:01:00\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:01:02\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:01:05\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:01:07\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:01:09\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:01:11\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:01:13\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:01:16\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:01:18\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:01:20\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:01:22\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:01:24\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:01:27\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:01:29\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:01:31\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:01:33\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:01:35\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.6\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:01:38\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.6\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:01:40\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.6\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:01:42\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.6\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:01:44\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.6\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:01:46\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.6\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:01:49\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.6\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:01:51\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.6\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:01:53\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.6\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:01:55\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.6\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:01:57\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.6\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:02:00\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.6\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:02:02\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.6\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:02:04\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:02:06\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:02:08\",\n" +
    "                \"eb_no_remote\": 6.6,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:02:10\",\n" +
    "                \"eb_no_remote\": 8.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:02:12\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:02:15\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:02:17\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:02:19\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:02:21\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:02:23\",\n" +
    "                \"eb_no_remote\": 6.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:02:25\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:02:27\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:02:29\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:02:32\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:02:34\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:02:36\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:02:38\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:02:40\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:02:43\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:02:45\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:02:47\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:02:49\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:02:51\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:02:53\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:02:55\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:02:58\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:03:00\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:03:02\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:03:04\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:03:06\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:03:08\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:03:10\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:03:13\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:03:15\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:03:17\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:03:19\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:03:21\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:03:23\",\n" +
    "                \"eb_no_remote\": 6.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:03:25\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:03:28\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:03:30\",\n" +
    "                \"eb_no_remote\": 8.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:03:32\",\n" +
    "                \"eb_no_remote\": 8.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:03:34\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:03:36\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:03:38\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:03:41\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:03:43\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:03:45\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:03:47\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:03:49\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:03:52\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:03:54\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:03:56\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:03:58\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:04:00\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:04:02\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:04:05\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:04:07\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:04:09\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:04:11\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:04:13\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:04:16\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:04:18\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:04:20\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:04:22\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:04:24\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:04:26\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:04:28\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:04:31\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:04:33\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:04:35\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:04:37\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:04:40\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:04:42\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:04:44\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:04:46\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:04:48\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:04:50\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:04:53\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:04:55\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:04:57\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:04:59\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:05:01\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:05:04\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:05:06\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:05:08\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:05:10\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:05:12\",\n" +
    "                \"eb_no_remote\": 6.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:05:14\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:05:17\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:05:19\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:05:21\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:05:23\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:05:25\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:05:27\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:05:30\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:05:32\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:05:34\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:05:36\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:05:38\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:05:40\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:05:43\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:05:45\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:05:47\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:05:49\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:05:51\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:05:53\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:05:56\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:05:58\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:06:00\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:06:02\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:06:05\",\n" +
    "                \"eb_no_remote\": 6.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:06:07\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:06:09\",\n" +
    "                \"eb_no_remote\": 8.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:06:11\",\n" +
    "                \"eb_no_remote\": 8.2,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:06:13\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:06:15\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:06:18\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:06:20\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:06:22\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:06:24\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:06:26\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:06:28\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:06:31\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:06:33\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:06:35\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:06:37\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:06:39\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:06:41\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:06:44\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:06:46\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:06:48\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:06:50\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:06:52\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:06:54\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:06:57\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:06:59\",\n" +
    "                \"eb_no_remote\": 6.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:07:01\",\n" +
    "                \"eb_no_remote\": 8.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:07:03\",\n" +
    "                \"eb_no_remote\": 6.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:07:05\",\n" +
    "                \"eb_no_remote\": 8.4,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:07:07\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:07:10\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:07:12\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:07:14\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:07:16\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:07:18\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:07:20\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:07:23\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:07:25\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:07:27\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:07:29\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:07:31\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:07:34\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:07:36\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:07:38\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:07:40\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:07:42\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:07:45\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:07:47\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:07:49\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:07:51\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:07:53\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:07:55\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:07:57\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:08:00\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:08:02\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:08:04\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:08:06\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:08:08\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:08:10\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:08:13\",\n" +
    "                \"eb_no_remote\": 6.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:08:15\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:08:17\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:08:19\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:08:21\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:08:23\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:08:26\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:08:28\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:08:30\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:08:32\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:08:35\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:08:37\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:08:39\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:08:41\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:08:43\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:08:46\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:08:48\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:08:50\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:08:52\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:08:54\",\n" +
    "                \"eb_no_remote\": 8.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:08:56\",\n" +
    "                \"eb_no_remote\": 8.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:08:59\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:09:01\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:09:03\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:09:05\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:09:07\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:09:09\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:09:12\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:09:14\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:09:16\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:09:18\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:09:20\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:09:22\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:09:25\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:09:27\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:09:29\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:09:31\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:09:33\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:09:35\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:09:38\",\n" +
    "                \"eb_no_remote\": 6.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:09:40\",\n" +
    "                \"eb_no_remote\": 8.2,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:09:42\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:09:44\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:09:46\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:09:48\",\n" +
    "                \"eb_no_remote\": 8.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:09:51\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:09:53\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:09:55\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:09:57\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:09:59\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:10:02\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:10:04\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:10:06\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:10:08\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:10:10\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:10:13\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:10:15\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:10:17\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:10:19\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:10:21\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:10:23\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:10:25\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:10:28\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:10:30\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:10:32\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:10:34\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:10:36\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:10:39\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:10:41\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:10:43\",\n" +
    "                \"eb_no_remote\": 6.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:10:45\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:10:47\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:10:49\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:10:52\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:10:54\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:10:56\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:10:58\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:11:00\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:11:02\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:11:05\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:11:07\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:11:09\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:11:11\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:11:13\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:11:16\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:11:18\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:11:20\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:11:22\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:11:25\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:11:27\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:11:29\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:11:31\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:11:33\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:11:35\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:11:38\",\n" +
    "                \"eb_no_remote\": 6.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:11:40\",\n" +
    "                \"eb_no_remote\": 8.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:11:42\",\n" +
    "                \"eb_no_remote\": 8.4,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:11:44\",\n" +
    "                \"eb_no_remote\": 8.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:11:46\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:11:48\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:11:50\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:11:53\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:11:55\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:11:57\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:11:59\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:12:01\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:12:03\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:12:06\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:12:08\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:12:10\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:12:12\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:12:14\",\n" +
    "                \"eb_no_remote\": 6.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:12:17\",\n" +
    "                \"eb_no_remote\": 6.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:12:19\",\n" +
    "                \"eb_no_remote\": 8.2,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:12:21\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:12:23\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:12:25\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:12:27\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:12:30\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:12:32\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:12:34\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:12:36\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:12:38\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:12:40\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:12:43\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:12:45\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:12:47\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:12:49\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:12:51\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:12:53\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:12:56\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:12:58\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:13:00\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:13:02\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:13:04\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:13:06\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:13:09\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:13:11\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:13:13\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:13:15\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:13:18\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:13:20\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:13:22\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:13:24\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:13:26\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:13:28\",\n" +
    "                \"eb_no_remote\": 6.0,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:13:30\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:13:33\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:13:35\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:13:37\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:13:39\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:13:41\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:13:43\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:13:46\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:13:48\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:13:50\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:13:52\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:13:54\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:13:56\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:13:58\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:14:01\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:14:03\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:14:05\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:14:07\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:14:10\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:14:12\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:14:14\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:14:16\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:14:18\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:14:20\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:14:23\",\n" +
    "                \"eb_no_remote\": 6.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:14:25\",\n" +
    "                \"eb_no_remote\": 8.2,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:14:27\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:14:29\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:14:31\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:14:34\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:14:36\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:14:38\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:14:40\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:14:42\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:14:45\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:14:47\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:14:49\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:14:51\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:14:53\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:14:55\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:14:58\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:15:00\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:15:02\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:15:04\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:15:06\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:15:09\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:15:11\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:15:13\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:15:15\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:15:17\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:15:19\",\n" +
    "                \"eb_no_remote\": 8.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:15:21\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:15:24\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:15:26\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:15:28\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:15:30\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:15:33\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:15:35\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:15:37\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:15:39\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:15:41\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:15:43\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:15:45\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:15:48\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:15:50\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:15:52\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:15:54\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:15:56\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:15:58\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:16:01\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:16:03\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:16:05\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:16:07\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:16:10\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:16:12\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:16:14\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:16:16\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:16:18\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:16:20\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:16:23\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:16:25\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:16:27\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:16:29\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:16:31\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:16:34\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:16:36\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:16:38\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:16:40\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:16:42\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:16:45\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:16:47\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:16:49\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:16:51\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:16:53\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:16:55\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:16:57\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:17:00\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:17:02\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:17:04\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:17:06\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:17:08\",\n" +
    "                \"eb_no_remote\": 6.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:17:10\",\n" +
    "                \"eb_no_remote\": 8.2,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:17:13\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:17:15\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:17:17\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:17:19\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:17:21\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:17:23\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:17:26\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:17:28\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:17:30\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:17:32\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:17:34\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:17:37\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:17:39\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:17:41\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:17:43\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:17:45\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:17:47\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:17:49\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:17:52\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:17:54\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:17:56\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:17:58\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:18:00\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:18:03\",\n" +
    "                \"eb_no_remote\": 6.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:18:05\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:18:07\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:18:09\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:18:11\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:18:14\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:18:16\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:18:18\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:18:20\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:18:22\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:18:24\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:18:27\",\n" +
    "                \"eb_no_remote\": 6.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:18:29\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:18:31\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:18:33\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:18:35\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:18:38\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:18:40\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:18:42\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:18:44\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:18:46\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:18:48\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:18:51\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:18:53\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:18:55\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:18:57\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:18:59\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:19:02\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:19:04\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:19:06\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:19:08\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:19:10\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:19:13\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:19:15\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:19:17\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:19:19\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:19:21\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:19:23\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:19:26\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:19:28\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:19:30\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:19:32\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:19:34\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:19:37\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:19:39\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:19:41\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:19:43\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:19:45\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:19:48\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:19:50\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:19:52\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:19:54\",\n" +
    "                \"eb_no_remote\": 8.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:19:56\",\n" +
    "                \"eb_no_remote\": 8.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:19:58\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:20:01\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:20:03\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:20:05\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:20:07\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:20:09\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:20:11\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:20:14\",\n" +
    "                \"eb_no_remote\": 6.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:20:16\",\n" +
    "                \"eb_no_remote\": 8.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:20:18\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:20:20\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:20:22\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:20:24\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:20:26\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:20:29\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:20:31\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:20:33\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:20:35\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:20:37\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:20:40\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:20:42\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:20:44\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:20:46\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:20:48\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:20:51\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:20:53\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:20:55\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:20:57\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:21:00\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:21:02\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:21:04\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:21:06\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:21:08\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:21:11\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:21:13\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:21:15\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:21:17\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:21:19\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:21:21\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:21:23\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:21:26\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:21:28\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:21:30\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:21:32\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:21:34\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:21:37\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:21:39\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:21:41\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:21:43\",\n" +
    "                \"eb_no_remote\": 6.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:21:45\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:21:47\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:21:50\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:21:52\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:21:54\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:21:56\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:21:58\",\n" +
    "                \"eb_no_remote\": 6.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:22:00\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:22:02\",\n" +
    "                \"eb_no_remote\": 8.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:22:05\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:22:07\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:22:09\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:22:11\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:22:13\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:22:15\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:22:18\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:22:20\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:22:22\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:22:24\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:22:26\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:22:29\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:22:31\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:22:33\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:22:35\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:22:37\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:22:39\",\n" +
    "                \"eb_no_remote\": 8.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:22:42\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:22:44\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:22:46\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:22:48\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:22:50\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:22:52\",\n" +
    "                \"eb_no_remote\": 6.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:22:55\",\n" +
    "                \"eb_no_remote\": 8.2,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:22:57\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:22:59\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:23:01\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.6\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:23:03\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.6\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:23:05\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:23:08\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:23:10\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:23:12\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:23:14\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:23:16\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:23:19\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:23:21\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:23:23\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:23:25\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:23:27\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:23:29\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:23:32\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:23:34\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:23:36\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:23:38\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:23:40\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:23:43\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:23:45\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:23:47\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:23:49\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:23:51\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:23:54\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:23:56\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:23:58\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:24:00\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:24:02\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:24:04\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:24:06\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:24:09\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:24:11\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:24:13\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:24:15\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:24:17\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:24:19\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:24:22\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:24:24\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:24:26\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:24:28\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:24:31\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:24:33\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:24:35\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:24:37\",\n" +
    "                \"eb_no_remote\": 6.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:24:39\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:24:41\",\n" +
    "                \"eb_no_remote\": 8.2,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:24:44\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:24:46\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:24:48\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:24:50\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:24:52\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:24:54\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:24:56\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:24:59\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:25:01\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:25:03\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:25:05\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:25:07\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:25:10\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:25:12\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:25:14\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:25:16\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:25:18\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:25:20\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:25:22\",\n" +
    "                \"eb_no_remote\": 6.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:25:25\",\n" +
    "                \"eb_no_remote\": 8.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:25:27\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:25:29\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:25:31\",\n" +
    "                \"eb_no_remote\": 6.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:25:33\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:25:35\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:25:38\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:25:40\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:25:42\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:25:44\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:25:46\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:25:48\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:25:51\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:25:53\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:25:55\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:25:57\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:25:59\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:26:01\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:26:04\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:26:06\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:26:08\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:26:10\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:26:12\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:26:14\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:26:17\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:26:19\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:26:21\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:26:23\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:26:25\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:26:28\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:26:30\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:26:32\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:26:34\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:26:36\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:26:38\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:26:41\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:26:43\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:26:45\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:26:47\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:26:49\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:26:52\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:26:54\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:26:56\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:26:58\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:27:00\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:27:02\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:27:04\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:27:07\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:27:09\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:27:11\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:27:13\",\n" +
    "                \"eb_no_remote\": 6.4,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:27:15\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:27:17\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:27:20\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:27:22\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:27:24\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:27:26\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:27:28\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:27:30\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:27:33\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:27:35\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:27:37\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:27:39\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:27:41\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:27:44\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:27:46\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:27:48\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:27:50\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:27:52\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:27:54\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:27:56\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:27:59\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:28:01\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:28:03\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:28:05\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:28:07\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:28:10\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:28:12\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:28:14\",\n" +
    "                \"eb_no_remote\": 8.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:28:16\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:28:18\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:28:20\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:28:22\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:28:25\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:28:27\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:28:29\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:28:31\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:28:33\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:28:35\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:28:38\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:28:40\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:28:42\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:28:44\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:28:46\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:28:48\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:28:50\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:28:52\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:28:55\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:28:57\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:28:59\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:29:01\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:29:03\",\n" +
    "                \"eb_no_remote\": 6.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:29:05\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:29:08\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:29:10\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:29:12\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:29:14\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:29:16\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:29:18\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:29:21\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:29:23\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:29:25\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:29:27\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:29:29\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:29:31\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:29:34\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:29:36\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:29:38\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:29:40\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:29:42\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:29:44\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:29:47\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:29:49\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:29:51\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:29:53\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:29:55\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:29:57\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:29:59\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:30:01\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:30:04\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:30:06\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:30:08\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:30:10\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:30:12\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:30:15\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:30:17\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:30:19\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:30:21\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:30:23\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:30:25\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:30:27\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:30:30\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:30:32\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:30:34\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:30:36\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:30:38\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:30:41\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:30:43\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:30:45\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:30:47\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:30:49\",\n" +
    "                \"eb_no_remote\": 6.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:30:52\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:30:54\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:30:56\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:30:58\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:31:00\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:31:02\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:31:05\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:31:07\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:31:09\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:31:11\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:31:13\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:31:15\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:31:18\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:31:20\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:31:22\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:31:24\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:31:27\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:31:29\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:31:31\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:31:33\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:31:35\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:31:37\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:31:40\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:31:42\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:31:44\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:31:46\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:31:48\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:31:51\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:31:53\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:31:55\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:31:57\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:31:59\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:32:01\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:32:03\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:32:06\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:32:08\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:32:10\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:32:12\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:32:14\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:32:16\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:32:19\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:32:21\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:32:23\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:32:25\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:32:28\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:32:30\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:32:32\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:32:34\",\n" +
    "                \"eb_no_remote\": 6.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:32:36\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:32:39\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:32:41\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:32:43\",\n" +
    "                \"eb_no_remote\": 6.8,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:32:45\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:32:47\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:32:49\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:32:52\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:32:54\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:32:56\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:32:58\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:33:01\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:33:03\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:33:05\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:33:07\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:33:09\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:33:11\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:33:14\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:33:16\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:33:18\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:33:20\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:33:22\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:33:24\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:33:27\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:33:29\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:33:31\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:33:33\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:33:35\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:33:37\",\n" +
    "                \"eb_no_remote\": 8.2,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:33:40\",\n" +
    "                \"eb_no_remote\": 8.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:33:42\",\n" +
    "                \"eb_no_remote\": 8.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:33:44\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:33:46\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:33:48\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:33:50\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:33:53\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:33:55\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:33:57\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:33:59\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:34:01\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:34:04\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:34:06\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:34:08\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:34:10\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:34:12\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:34:15\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:34:17\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:34:19\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:34:21\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:34:23\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:34:25\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:34:28\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:34:30\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:34:32\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:34:34\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:34:36\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:34:39\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:34:41\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:34:43\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:34:45\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:34:47\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:34:50\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:34:52\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:34:54\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:34:56\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:34:58\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:35:00\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:35:03\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:35:05\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:35:07\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:35:09\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:35:11\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:35:13\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:35:16\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:35:18\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:35:20\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:35:22\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:35:24\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:35:27\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:35:29\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:35:31\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:35:33\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:35:35\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:35:38\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:35:40\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:35:42\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:35:44\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:35:46\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:35:49\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:35:51\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:35:53\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:35:55\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:35:57\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:35:59\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:36:02\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:36:04\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:36:06\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:36:08\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:36:10\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:36:13\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:36:15\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:36:17\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:36:19\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:36:21\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:36:23\",\n" +
    "                \"eb_no_remote\": 8.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:36:26\",\n" +
    "                \"eb_no_remote\": 8.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:36:28\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:36:30\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:36:32\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:36:34\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:36:37\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:36:39\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:36:41\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:36:43\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:36:45\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:36:47\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:36:50\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:36:52\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:36:54\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:36:56\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:36:58\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:37:01\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:37:03\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:37:05\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:37:07\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:37:09\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:37:12\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:37:14\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:37:16\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:37:18\",\n" +
    "                \"eb_no_remote\": 6.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:37:20\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:37:23\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:37:25\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:37:27\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:37:29\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:37:31\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:37:34\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:37:36\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:37:38\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:37:40\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:37:43\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:37:45\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:37:47\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:37:49\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:37:51\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:37:53\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:37:56\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:37:58\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:38:00\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:38:02\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:38:04\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:38:06\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:38:09\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:38:11\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:38:13\",\n" +
    "                \"eb_no_remote\": 6.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:38:15\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:38:17\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:38:19\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:38:22\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:38:24\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:38:26\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:38:28\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:38:30\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:38:32\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:38:35\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:38:37\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:38:39\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:38:41\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:38:43\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:38:46\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:38:48\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:38:50\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:38:52\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:38:54\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:38:57\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:38:59\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:39:01\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:39:03\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:39:05\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:39:07\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:39:09\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:39:11\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:39:14\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:39:16\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:39:18\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:39:20\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:39:22\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:39:24\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:39:27\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:39:29\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:39:31\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:39:33\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:39:35\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:39:38\",\n" +
    "                \"eb_no_remote\": 6.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:39:40\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:39:42\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:39:44\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:39:46\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:39:48\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:39:51\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:39:53\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:39:55\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:39:57\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:39:59\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:40:01\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:40:04\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:40:06\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:40:08\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:40:10\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:40:12\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:40:14\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:40:17\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:40:19\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:40:21\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:40:24\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:40:26\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:40:28\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:40:30\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:40:32\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:40:34\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:40:37\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:40:39\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:40:41\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:40:43\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:40:45\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:40:48\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:40:50\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:40:52\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:40:54\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:40:56\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:40:58\",\n" +
    "                \"eb_no_remote\": 6.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:41:01\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:41:03\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:41:05\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:41:07\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:41:09\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:41:11\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:41:14\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:41:16\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:41:18\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:41:20\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:41:22\",\n" +
    "                \"eb_no_remote\": 8.2,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:41:24\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:41:26\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:41:29\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:41:31\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:41:33\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:41:35\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:41:37\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:41:39\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:41:42\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:41:44\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:41:46\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:41:48\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:41:50\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:41:52\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:41:54\",\n" +
    "                \"eb_no_remote\": 8.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:41:57\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:41:59\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:42:01\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:42:03\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:42:05\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:42:07\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:42:10\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:42:12\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:42:14\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:42:16\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:42:18\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:42:21\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:42:23\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:42:25\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:42:27\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:42:29\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:42:31\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:42:34\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:42:36\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:42:38\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:42:40\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:42:43\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:42:45\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:42:47\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:42:49\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:42:51\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:42:53\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:42:56\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:42:58\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:43:00\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:43:02\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:43:04\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:43:06\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:43:08\",\n" +
    "                \"eb_no_remote\": 6.8,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:43:11\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:43:13\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:43:15\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:43:17\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:43:20\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:43:22\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:43:24\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:43:26\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:43:28\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:43:31\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:43:33\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:43:35\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:43:37\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:43:39\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:43:41\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:43:44\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:43:46\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:43:48\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:43:50\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:43:52\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:43:55\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:43:57\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:43:59\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:44:01\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:44:03\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:44:05\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:44:07\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:44:10\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:44:12\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:44:14\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:44:16\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:44:19\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:44:21\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:44:23\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:44:25\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:44:27\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:44:29\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:44:32\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:44:34\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:44:36\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:44:38\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:44:40\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:44:42\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:44:45\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:44:47\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:44:49\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:44:51\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:44:53\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:44:55\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:44:58\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:45:00\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:45:02\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:45:04\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:45:06\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:45:09\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:45:11\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:45:13\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:45:15\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:45:17\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:45:19\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:45:22\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:45:24\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:45:26\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:45:28\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:45:30\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:45:33\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:45:35\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:45:37\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:45:39\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:45:41\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:45:44\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:45:46\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:45:48\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:45:50\",\n" +
    "                \"eb_no_remote\": 6.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:45:52\",\n" +
    "                \"eb_no_remote\": 8.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:45:54\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:45:56\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:45:59\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:46:01\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:46:03\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:46:05\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:46:07\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:46:09\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:46:12\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:46:14\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:46:16\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:46:18\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:46:20\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:46:22\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:46:25\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:46:27\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:46:29\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:46:31\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:46:33\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:46:35\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:46:38\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:46:40\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:46:42\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:46:44\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:46:46\",\n" +
    "                \"eb_no_remote\": 8.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:46:48\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:46:51\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:46:53\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:46:55\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:46:57\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:46:59\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:47:02\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:47:04\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:47:06\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:47:08\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:47:10\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:47:12\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:47:14\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:47:17\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:47:19\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:47:21\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:47:23\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:47:25\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:47:28\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:47:30\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:47:32\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:47:34\",\n" +
    "                \"eb_no_remote\": 6.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:47:36\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:47:39\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:47:41\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:47:43\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:47:45\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:47:47\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:47:49\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:47:51\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:47:54\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:47:56\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:47:58\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:48:00\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:48:02\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:48:05\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:48:07\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:48:09\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:48:11\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:48:13\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:48:15\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:48:18\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:48:20\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:48:22\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:48:24\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:48:26\",\n" +
    "                \"eb_no_remote\": 6.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:48:29\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:48:31\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:48:33\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:48:35\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:48:37\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:48:40\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:48:42\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:48:44\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:48:46\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:48:48\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:48:50\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:48:52\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:48:55\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:48:57\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:48:59\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:49:01\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:49:03\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:49:06\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:49:08\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:49:10\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:49:12\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:49:14\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:49:16\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:49:18\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:49:21\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:49:23\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:49:25\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:49:27\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:49:29\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:49:31\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:49:34\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:49:36\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:49:38\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:49:40\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:49:42\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:49:44\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:49:47\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:49:49\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:49:51\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:49:53\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:49:55\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:49:58\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:50:00\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:50:02\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:50:04\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:50:07\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:50:09\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:50:11\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:50:13\",\n" +
    "                \"eb_no_remote\": 6.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:50:15\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:50:17\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:50:20\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:50:22\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:50:24\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:50:26\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:50:28\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:50:30\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:50:32\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:50:35\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:50:37\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:50:39\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:50:41\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:50:43\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:50:45\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:50:48\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:50:50\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:50:52\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:50:54\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:50:57\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:50:59\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:51:01\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:51:03\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:51:05\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:51:08\",\n" +
    "                \"eb_no_remote\": 6.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:51:10\",\n" +
    "                \"eb_no_remote\": 8.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:51:12\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:51:14\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:51:16\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:51:18\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:51:21\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:51:23\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:51:25\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:51:27\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:51:30\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:51:32\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:51:34\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:51:36\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:51:38\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:51:40\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:51:43\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:51:45\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:51:47\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:51:49\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:51:51\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:51:53\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:51:55\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:51:58\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:52:00\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:52:02\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:52:04\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:52:06\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:52:08\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:52:11\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:52:13\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:52:15\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:52:17\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:52:19\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:52:22\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:52:24\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:52:26\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:52:28\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:52:30\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:52:32\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:52:35\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:52:37\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:52:39\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:52:41\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:52:43\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:52:46\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:52:48\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:52:50\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:52:52\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:52:54\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:52:57\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:52:59\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:53:01\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:53:03\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:53:05\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:53:07\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:53:09\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:53:12\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:53:14\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:53:16\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:53:18\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:53:20\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:53:22\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:53:24\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:53:27\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:53:29\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:53:31\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:53:33\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:53:35\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:53:37\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:53:39\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:53:42\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:53:44\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:53:46\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:53:48\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:53:50\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:53:53\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:53:55\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:53:57\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:53:59\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:54:01\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:54:03\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:54:06\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:54:08\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:54:10\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:54:12\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:54:14\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:54:17\",\n" +
    "                \"eb_no_remote\": 6.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:54:19\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:54:21\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:54:23\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:54:25\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:54:27\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:54:30\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:54:32\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:54:34\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:54:36\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:54:38\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:54:40\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:54:43\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:54:45\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:54:47\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:54:49\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:54:51\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:54:53\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:54:56\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:54:58\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:55:00\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:55:02\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:55:04\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:55:06\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:55:09\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:55:11\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:55:13\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:55:15\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:55:18\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:55:20\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:55:22\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:55:24\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:55:26\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:55:29\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:55:31\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:55:33\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:55:35\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:55:37\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:55:39\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:55:42\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:55:44\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:55:46\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:55:48\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:55:50\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:55:52\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:55:55\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:55:57\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:55:59\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:56:01\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:56:03\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:56:05\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:56:07\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:56:10\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:56:12\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:56:14\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:56:16\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:56:18\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:56:20\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:56:23\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:56:25\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:56:27\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:56:29\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:56:31\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:56:34\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:56:36\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:56:38\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:56:40\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:56:42\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:56:45\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:56:47\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:56:49\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:56:51\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:56:53\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:56:55\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:56:58\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:57:00\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:57:02\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:57:04\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:57:06\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:57:08\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:57:11\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:57:13\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:57:15\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:57:17\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:57:19\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:57:21\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:57:24\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:57:26\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:57:28\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:57:30\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:57:32\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:57:35\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:57:37\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:57:39\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:57:41\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:57:43\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:57:46\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:57:48\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:57:50\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:57:52\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:57:54\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:57:56\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:57:59\",\n" +
    "                \"eb_no_remote\": 7.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:58:01\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:58:03\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:58:05\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:58:07\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:58:09\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:58:12\",\n" +
    "                \"eb_no_remote\": 8.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:58:14\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:58:16\",\n" +
    "                \"eb_no_remote\": 8.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:58:18\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:58:20\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:58:22\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:58:25\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:58:27\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:58:29\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:58:31\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:58:33\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:58:36\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:58:38\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:58:40\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:58:42\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:58:44\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:58:46\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:58:49\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:58:51\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:58:53\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:58:55\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:58:57\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:58:59\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:59:01\",\n" +
    "                \"eb_no_remote\": 7.8,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:59:04\",\n" +
    "                \"eb_no_remote\": 6.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:59:06\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:59:08\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:59:10\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:59:12\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:59:14\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:59:17\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:59:19\",\n" +
    "                \"eb_no_remote\": 7.6,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:59:21\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:59:23\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:59:25\",\n" +
    "                \"eb_no_remote\": 7.4,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:59:28\",\n" +
    "                \"eb_no_remote\": 7.2,\n" +
    "                \"eb_no\": 15.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:59:30\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:59:32\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": 15.9\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:59:34\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": 16.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:59:36\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": 14.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:59:38\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": 14.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:59:40\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": 14.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:59:43\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": 14.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:59:45\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": 14.8\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:59:47\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:59:49\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": 15.7\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:59:51\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:59:54\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:59:56\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T01:59:58\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:00:00\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:00:02\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:00:05\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:00:07\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:00:09\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:00:11\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:00:13\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:00:15\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:00:18\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:00:20\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:00:22\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:00:24\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:00:26\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:00:28\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:00:31\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:00:33\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:00:35\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:00:37\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:00:39\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:00:42\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:00:44\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:00:46\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:00:48\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:00:51\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:00:53\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:00:55\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:00:57\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:00:59\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:01:01\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:01:03\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:01:05\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:01:08\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:01:10\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:01:12\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:01:14\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:01:16\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:01:19\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:01:21\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:01:23\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:01:25\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:01:27\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:01:29\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:01:32\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:01:34\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:01:36\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:01:38\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:01:40\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:01:43\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:01:45\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:01:47\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:01:49\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:01:51\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:01:53\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:01:56\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:01:58\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:02:00\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:02:02\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:02:05\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:02:07\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:02:09\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:02:11\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:02:13\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:02:15\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:02:17\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:02:20\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:02:22\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:02:24\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:02:26\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:02:29\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:02:31\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:02:33\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:02:35\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:02:37\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:02:39\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:02:42\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:02:44\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:02:46\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:02:48\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:02:50\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:02:52\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:02:55\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:02:57\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:02:59\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:03:01\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:03:03\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:03:05\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:03:07\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:03:10\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:03:12\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:03:14\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:03:16\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:03:18\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:03:21\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:03:23\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:03:25\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:03:27\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:03:29\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:03:32\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:03:34\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:03:36\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:03:38\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:03:40\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:03:43\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:03:45\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:03:47\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:03:49\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:03:51\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:03:54\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:03:56\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:03:58\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:04:00\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:04:02\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:04:05\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:04:07\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:04:09\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:04:11\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:04:13\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:04:15\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:04:17\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:04:20\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:04:22\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:04:24\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:04:26\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:04:28\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:04:31\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:04:33\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:04:35\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:04:37\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:04:39\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:04:41\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:04:44\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:04:46\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:04:48\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:04:50\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:04:52\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:04:55\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:04:57\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:04:59\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:05:01\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:05:03\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:05:05\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:05:08\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:05:10\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:05:12\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:05:14\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:05:16\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:05:18\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:05:20\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:05:23\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:05:25\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:05:27\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:05:29\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:05:31\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:05:33\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:05:36\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:05:38\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:05:40\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:05:42\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:05:44\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:05:46\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:05:49\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:05:51\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:05:53\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:05:55\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:05:57\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:06:00\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:06:02\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:06:04\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:06:06\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:06:08\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:06:11\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:06:13\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:06:15\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:06:17\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:06:19\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:06:21\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:06:24\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:06:26\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:06:28\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:06:30\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:06:33\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:06:35\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:06:37\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:06:39\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:06:41\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:06:44\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:06:46\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:06:48\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:06:50\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:06:52\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:06:54\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:06:56\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:06:59\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:07:01\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:07:03\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:07:05\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:07:07\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:07:09\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:07:11\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:07:14\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:07:16\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:07:18\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:07:20\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:07:22\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:07:25\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:07:27\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:07:29\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:07:31\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:07:33\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:07:35\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:07:38\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:07:40\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:07:42\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:07:44\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:07:47\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:07:49\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:07:51\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:07:53\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:07:55\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:07:57\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:08:00\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:08:02\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:08:04\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:08:06\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:08:08\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:08:11\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:08:13\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:08:15\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:08:17\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:08:19\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:08:22\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:08:24\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:08:26\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:08:28\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:08:30\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:08:32\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:08:35\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:08:37\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:08:39\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:08:41\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:08:43\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:08:46\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:08:48\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:08:50\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:08:52\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:08:54\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:08:56\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:08:59\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:09:01\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:09:03\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:09:05\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:09:07\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:09:09\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:09:12\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:09:14\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:09:16\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:09:18\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:09:20\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:09:22\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:09:25\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:09:27\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:09:29\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:09:31\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:09:33\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:09:35\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:09:38\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:09:40\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:09:42\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:09:44\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:09:46\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:09:49\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:09:51\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:09:53\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:09:55\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:09:57\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        },\n" +
    "        {\n" +
    "            \"values\": {\n" +
    "                \"timestamp_wotz\": \"2023-04-06T02:09:59\",\n" +
    "                \"eb_no_remote\": -1.0,\n" +
    "                \"eb_no\": -1.0\n" +
    "            }\n" +
    "        }\n" +
    "    ]\n" +
    "}";