using nvan.FFA320McduExtractor.Config;
using System;
using System.Windows.Forms;

namespace nvan.FFA320McduExtractor
{
    static class Program
    {
        private const string file = "config.json";

        [STAThread]
        static void Main()
        {
            var configManager = new ConfigManager(
                new JsonReader<Config.Config>(file),
                new JsonWriter<Config.Config>(file)
            );

            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            Application.Run(new MainForm(ref configManager));
        }
    }
}
