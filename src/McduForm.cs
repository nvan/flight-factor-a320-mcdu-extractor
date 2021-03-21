using nvan.FFA320McduExtractor.Config;
using System;
using System.IO;
using System.Windows.Forms;

namespace nvan.FFA320McduExtractor
{
    public partial class McduForm : Form
    {
        public const int WM_NCLBUTTONDOWN = 0xA1;
        public const int HT_CAPTION = 0x2;

        [System.Runtime.InteropServices.DllImport("user32.dll")]
        public static extern int SendMessage(IntPtr hWnd, int Msg, int wParam, int lParam);
        [System.Runtime.InteropServices.DllImport("user32.dll")]
        public static extern bool ReleaseCapture();

        private ConfigManager configManager;
        private int mcduNumber;

        public McduForm(ref ConfigManager configManager, int mcduNumber)
        {
            this.configManager = configManager;
            this.mcduNumber = mcduNumber;

            Text = "MCDU " + mcduNumber;

            InitializeComponent();
        }

        private void browser_DocumentCompleted(object sender, WebBrowserDocumentCompletedEventArgs e)
        {
            browser.Document.GetElementsByTagName("body")[0].Style = "background: #000;";
            browser.Document.GetElementById("MCDU_SCREEN").SetAttribute("data-mcdu-number", mcduNumber.ToString());
        }

        private void coverPanel_MouseDown(object sender, MouseEventArgs e)
        {
            if (e.Button == MouseButtons.Left)
            {
                ReleaseCapture();
                SendMessage(Handle, WM_NCLBUTTONDOWN, HT_CAPTION, 0);


                Config.Config config = configManager.GetConfig();
                if (mcduNumber == 1)
                {
                    config.mcdu1PosX = Location.X;
                    config.mcdu1PosY = Location.Y;
                }
                else
                {
                    config.mcdu2PosX = Location.X;
                    config.mcdu2PosY = Location.Y;
                }
                configManager.UpdateConfig(config);
            }
        }

        private void McduForm_Load(object sender, EventArgs e)
        {
            Location = new System.Drawing.Point(
                mcduNumber == 1
                    ? configManager.GetConfig().mcdu1PosX
                    : configManager.GetConfig().mcdu2PosX,
                mcduNumber == 1
                    ? configManager.GetConfig().mcdu1PosY
                    : configManager.GetConfig().mcdu2PosY
            );

            browser.Url = new Uri(String.Format("file:///{0}/screen/screen.html", Directory.GetCurrentDirectory()));
        }
    }
}
