# Cookbook React Native Bootstrap: Recipe to Upload Files to an AWS S3 Bucket

## Installation

If you want to add this recipe to your project, first you need to add [rn-fetch-blob](https://www.npmjs.com/package/rn-fetch-blob?activeTab=readme).

## Usage

You just need to call the function and pass the correct props to it.

``` ts
uploadFileToBucket({
      fileUri: 'example',
      fileType: FileType.IMAGE,
      fileUrl: 'example',
      dispatch
    });
```