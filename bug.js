This bug occurs when using the Expo DocumentPicker API on Android.  When selecting a file from a directory that contains a large number of files (e.g., thousands), the selection process hangs indefinitely. The app becomes unresponsive and requires force closure.