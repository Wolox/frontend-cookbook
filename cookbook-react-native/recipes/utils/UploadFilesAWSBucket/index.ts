import { Platform } from 'react-native';
import { Dispatch } from 'redux';
import RNFetchBlob from 'rn-fetch-blob';
  
export enum ContentTypeByFileType {
  IMAGE = 'image/jpg',
  VIDEO = 'video/mp4'
}
export enum FileType {
  IMAGE = 'image',
  VIDEO = 'video'
}
interface UploadFileToBucketProps {
  fileUri: string;
  fileType: FileType;
  fileUrl: string;
  dispatch: Dispatch;
};

const handleErrorUploading = (_: Dispatch) => {
  //TODO: Add your error handler here.
};

const getFileType = (type: FileType) => 
  type === FileType.IMAGE ? ContentTypeByFileType.IMAGE : ContentTypeByFileType.VIDEO;

const getRealPath = (file: string) => (Platform.OS === 'ios' ? file.replace('file://', '') : file);

export const uploadFileToBucket =  async ({ fileUri, fileType, fileUrl, dispatch }: UploadFileToBucketProps) => {
  let readyToPublish = false;
  try {
    const fileUploaded = await RNFetchBlob.fetch(
      'PUT',
      fileUrl,
      {
        'Content-Type': getFileType(fileType)
      },
      RNFetchBlob.wrap(getRealPath(fileUri))
    );
    readyToPublish = fileUploaded.respInfo?.status === 200;
  } catch {
    handleErrorUploading(dispatch);
  }
  if (readyToPublish) {
    // TODO: Add success action.
  } else {
    handleErrorUploading(dispatch);
  }
};
