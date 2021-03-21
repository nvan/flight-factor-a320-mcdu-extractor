using nvan.FFA320McduExtractor.Config;
using System;
using System.Windows.Forms;
using System.Drawing;
using System.Diagnostics;
using Microsoft.Win32;

namespace nvan.FFA320McduExtractor
{
    public partial class MainForm : Form
    {
        private ConfigManager configManager;

        private McduForm mcdu1Form, mcdu2Form;

        public MainForm(ref ConfigManager configManager)
        {
            this.configManager = configManager;

            mcdu1Form = new McduForm(ref this.configManager, 1);
            mcdu2Form = new McduForm(ref this.configManager, 2);

            InitializeComponent();

            mcdu1Check.Checked = this.configManager.GetConfig().autoStartMcdu1;
            mcdu2Check.Checked = this.configManager.GetConfig().autoStartMcdu2;
            widthText.Text = this.configManager.GetConfig().width.ToString();
            heightText.Text = this.configManager.GetConfig().height.ToString();

            mcdu1Check.CheckedChanged += new EventHandler(this.settingsChanged);
            mcdu2Check.CheckedChanged += new EventHandler(this.settingsChanged);
            widthText.TextChanged += new EventHandler(this.settingsChanged);
            heightText.TextChanged += new EventHandler(this.settingsChanged);
        }

        private void settingsChanged(object sender, EventArgs e)
        {
            try // Ignore bad inputs in size text boxes. A temporary way to do it.
            {
                var config = configManager.GetConfig();

                config.autoStartMcdu1 = mcdu1Check.Checked;
                config.autoStartMcdu2 = mcdu2Check.Checked;
                config.width = int.Parse(widthText.Text);
                config.height = int.Parse(heightText.Text);
                configManager.UpdateConfig(config);

                adjustMcduFormsSize();
            }
            catch { }
        }

        private void adjustMcduFormsSize()
        {
            Size formSize = new Size(
                configManager.GetConfig().width,
                configManager.GetConfig().height
            );

            mcdu1Form.Size = formSize;
            mcdu2Form.Size = formSize;
        }

        private void showMcdu1Button_Click(object sender, EventArgs e)
        {
            if(showMcdu1Button.Text == "Hide MCDU1")
            {
                mcdu1Form.Hide();
                showMcdu1Button.Text = "Show MCDU1";
                return;
            }

            mcdu1Form.Show();
            showMcdu1Button.Text = "Hide MCDU1";
        }

        private void showMcdu2Button_Click(object sender, EventArgs e)
        {
            if (showMcdu2Button.Text == "Hide MCDU2")
            {
                mcdu2Form.Hide();
                showMcdu2Button.Text = "Show MCDU2";
                return;
            }

            mcdu2Form.Show();
            showMcdu2Button.Text = "Hide MCDU2";
        }

        private void MainForm_Load(object sender, EventArgs e)
        {
            var appName = Process.GetCurrentProcess().ProcessName + ".exe";
            SetIE8KeyforWebBrowserControl(appName);


            if (configManager.GetConfig().autoStartMcdu1)
                showMcdu1Button_Click(null, null);

            if (configManager.GetConfig().autoStartMcdu2)
                showMcdu2Button_Click(null, null);
        }

        private void SetIE8KeyforWebBrowserControl(string appName)
        {
            RegistryKey Regkey = null;
            try
            {
                if (Environment.Is64BitOperatingSystem)
                    Regkey = Registry.LocalMachine.OpenSubKey(@"SOFTWARE\\Wow6432Node\\Microsoft\\Internet Explorer\\Main\\FeatureControl\\FEATURE_BROWSER_EMULATION", true);
                else
                    Regkey = Registry.LocalMachine.OpenSubKey(@"SOFTWARE\\Microsoft\\Internet Explorer\\Main\\FeatureControl\\FEATURE_BROWSER_EMULATION", true);

                if (Regkey == null)
                {
                    return;
                }

                string FindAppkey = Convert.ToString(Regkey.GetValue(appName));

                if (FindAppkey == "8000")
                {
                    return;
                }

                if (string.IsNullOrEmpty(FindAppkey))
                    Regkey.SetValue(appName, unchecked((int)0x2AF9), RegistryValueKind.DWord);

                FindAppkey = Convert.ToString(Regkey.GetValue(appName));
            }
            catch (Exception ex)
            {
                MessageBox.Show("Please run as administrator");
                Close();
            }
            finally
            {
                if (Regkey != null)
                    Regkey.Close();
            }
        }
    }
}
