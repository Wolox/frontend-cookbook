fastlane documentation
================
# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

Install _fastlane_ using
```
[sudo] gem install fastlane -NV
```
or alternatively using `brew cask install fastlane`

# Available Actions
## Android
### android distribute_qa
```
fastlane android distribute_qa
```
Submit a new QA Release Build to Firebase App Distribution.
### android distribute_stage
```
fastlane android distribute_stage
```
Submit a new Stage Release Build to Firebase App Distribution.
### android distribute_production
```
fastlane android distribute_production
```
Submit a new Production Release Build to Firebase App Distribution.
### android release_production
```
fastlane android release_production
```
Submit a new Production Release Build to Google Play Console.

----

This README.md is auto-generated and will be re-generated every time [fastlane](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
