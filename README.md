### Chrome Bug 1246717 Demo

https://bugs.chromium.org/p/chromium/issues/detail?id=1246717

#### Tested version
Version 103.0.5060.114 (Official Build) (arm64)

#### How to reproduce
1. Clone this repo
2. Open Chrome and load unpacked extension from the cloned folder
3. Make sure "Settings > Downloads > Ask where to save each file before downloading" is ON
4. Click extension icon, then click the Download button

#### Expected behavior
It is unclear to me which is the expected behavior, but either one these two should be reasonable
1. Chrome will show saveAs dialog for the download or
2. Chrome will download the file without showing saveAs dialog

#### Observed behavior
The download is cancelled with state "interrupted" and reason "USER_CANCELED"
