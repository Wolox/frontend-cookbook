module Fastlane
  module Actions
    class GetPlayConsoleInfoAction < Action

      # Given an environment
      # this script returns the package name (:package_name)
      # the Play Console json key file path (:key_path),
      # the track of the application to use (:track),
      # and the relesea status (:release_status) associated to it.

      PACKAGE_NAME = "PACKAGE_NAME".freeze
      PLAY_CONSOLE_KEY_FILE_PATH = "PLAY_CONSOLE_KEY_FILE_PATH".freeze
      TRACK = "TRACK".freeze
      RELEASE_STATUS = "RELEASE_STATUS".freeze


      def self.run(params)
        track = Actions::GetEnvironmentInfoAction.run(environment: params[:environment])[TRACK] || "internal"
        release_status = Actions::GetEnvironmentInfoAction.run(environment: params[:environment])[RELEASE_STATUS] || "draft"
        {
          package_name: Actions::GetEnvironmentInfoAction.run(environment: params[:environment])[PACKAGE_NAME],
          key_path: Actions::GetEnvironmentInfoAction.run(environment: params[:environment])[PLAY_CONSOLE_KEY_FILE_PATH],
          track: track,
          release_status: release_status
        }
      end

      # Fastlane Action class required functions.

      def self.is_supported?(platform)
        true
      end

      def self.available_options
        [
          FastlaneCore::ConfigItem.new(key: :environment, optional: false, type: Symbol)
        ]
      end

    end
  end
end
