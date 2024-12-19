# Expo DocumentPicker Android Hang with Large Directories

This repository demonstrates a bug in the Expo DocumentPicker API on Android where selecting a file from a directory containing a large number of files results in an indefinite hang. The application becomes unresponsive, requiring force closure.

## Bug Description

When using `DocumentPicker.getDocumentAsync()` on Android to select a file from a directory containing a large number of files (tested with thousands of files), the picker hangs indefinitely.  This issue does not consistently reproduce in all cases, likely depending on factors including file system organization and device specifications.

## Reproduction

1. Clone this repository.
2. Run the app on an Android emulator or device (tested on various emulators and physical devices).
3. Navigate to the file selection screen.
4. Attempt to select a file from a directory with a large number of files.

You should observe the app hanging and becoming unresponsive.

## Proposed Solution

The proposed solution involves using a more efficient way to retrieve files rather than relying on the native DocumentPicker implementation. Consider the use of a third party library to traverse large directories more efficiently. The alternative is to implement a custom file picker, however this increases the development complexity.