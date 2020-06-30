module Fastlane
  module Actions
    class GetTargetAction < Action

      # Given an environment
      # this script returns the target associated to it.

      ENV_KEY = "TARGET".freeze

      def self.run(params)
        if params[:environment]
          environment_info = Actions::GetEnvironmentInfoAction.run(environment: params[:environment])
        else
          environment_info = Actions::GetEnvironmentInfoAction.run({})
        end
        environment_info[ENV_KEY] || Actions::ProjectNameAction.run({})
      end

      def self.get_all_targets()
        {
          dev: Actions::GetTargetAction.run(environment: :dev),
          qa: Actions::GetTargetAction.run(environment: :qa),
          stage: Actions::GetTargetAction.run(environment: :stage),
          production: Actions::GetTargetAction.run(environment: :production)
        }
      end

      # Fastlane Action class required functions.

      def self.is_supported?(platform)
        true
      end

      def self.available_options
        [
          FastlaneCore::ConfigItem.new(key: :environment, optional: true, type: Symbol)
        ]
      end

    end
  end
end
