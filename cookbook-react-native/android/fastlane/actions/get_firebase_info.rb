module Fastlane
  module Actions
    class GetFirebaseInfoAction < Action

      # Given an environment
      # this script returns the Firebase App Id (:app),
      # and the tester groups (:groups) associated to it.

      FIREBASE_APP_ID = "FIREBASE_APP".freeze
      FIREBASE_GROUPS = "FIREBASE_GROUPS".freeze

      def self.run(params)
        {
          app: Actions::GetEnvironmentInfoAction.run(environment: params[:environment])[FIREBASE_APP_ID],
          groups: Actions::GetEnvironmentInfoAction.run(environment: params[:environment])[FIREBASE_GROUPS],
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
