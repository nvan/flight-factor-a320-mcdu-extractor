using System.IO;

namespace nvan.FFA320McduExtractor.Config
{
    public class ConfigManager
    {
        private Config config = null;

        private JsonReader<Config> jsonReader;
        private JsonWriter<Config> jsonWriter;

        public ConfigManager(JsonReader<Config> jsonReader, JsonWriter<Config> jsonWriter)
        {
            this.jsonReader = jsonReader;
            this.jsonWriter = jsonWriter;
        }

        private void LoadConfig()
        {
            if(!File.Exists(jsonReader.GetFile()))
            {
                config = new Config
                {
                    autoStartMcdu1 = false,
                    autoStartMcdu2 = false,
                    width = 391,
                    height = 333,
                    mcdu1PosX = 0,
                    mcdu2PosX = 0,
                    mcdu1PosY = 0,
                    mcdu2PosY = 0,
                    xplaneIp = "127.0.0.1:6025"
                };

                SaveConfig();
                return;
            }

            config = jsonReader.ReadFile();
        }

        private void SaveConfig()
        {
            jsonWriter.WriteFile(config);
        }

        public ref Config GetConfig()
        {
            if(config == null)
            {
                LoadConfig();
            }

            return ref config;
        }

        public void UpdateConfig(Config config)
        {
            this.config = config;
            SaveConfig();
        }
    }
}
