module Fastlane
  module Actions
    class GetBuildTaskAction < Action

      # Given an environment this script
      # returns the build task associated to it.

      def self.run(params)
        environment = params[:environment].capitalize
        create_aab = params[:aab]

        {
          task: create_aab ? "bundle" : "assemble", 
          flavor: "#{environment}",
        }
      end

      # Fastlane Action class required functions.

      def self.is_supported?(platform)
        true
      end

      def self.available_options
        [
          FastlaneCore::ConfigItem.new(key: :environment, optional: false, type: Symbol),
          FastlaneCore::ConfigItem.new(key: :aab, optional: true, type: Boolean)
        ]
      end

    end
  end
end
