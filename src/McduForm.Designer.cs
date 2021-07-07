using System.Drawing;
using System.Windows.Forms;

namespace nvan.FFA320McduExtractor
{
    public class TransparentPanel : Panel
    {
        protected override CreateParams CreateParams
        {
            get
            {
                var cp = base.CreateParams;
                cp.ExStyle |= 0x00000020; // WS_EX_TRANSPARENT

                return cp;
            }
        }

        protected override void OnPaint(PaintEventArgs e) =>
            e.Graphics.FillRectangle(new SolidBrush(this.BackColor), this.ClientRectangle);
    }

    partial class McduForm
    {
        private System.ComponentModel.IContainer components = null;

        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(McduForm));
            this.browser = new System.Windows.Forms.WebBrowser();
            this.coverPanel = new nvan.FFA320McduExtractor.TransparentPanel();
            this.SuspendLayout();
            // 
            // browser
            // 
            this.browser.Dock = System.Windows.Forms.DockStyle.Fill;
            this.browser.Location = new System.Drawing.Point(0, 0);
            this.browser.MinimumSize = new System.Drawing.Size(20, 20);
            this.browser.Name = "browser";
            this.browser.ScrollBarsEnabled = false;
            this.browser.Size = new System.Drawing.Size(340, 320);
            this.browser.TabIndex = 0;
            this.browser.ScriptErrorsSuppressed = true;
            this.browser.DocumentCompleted += new System.Windows.Forms.WebBrowserDocumentCompletedEventHandler(this.browser_DocumentCompleted);
            // 
            // coverPanel
            // 
            this.coverPanel.BackColor = System.Drawing.Color.Transparent;
            this.coverPanel.Dock = System.Windows.Forms.DockStyle.Fill;
            this.coverPanel.ForeColor = System.Drawing.Color.Transparent;
            this.coverPanel.Location = new System.Drawing.Point(0, 0);
            this.coverPanel.Name = "coverPanel";
            this.coverPanel.Size = new System.Drawing.Size(340, 320);
            this.coverPanel.TabIndex = 1;
            this.coverPanel.MouseDown += new System.Windows.Forms.MouseEventHandler(this.coverPanel_MouseDown);
            // 
            // McduForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.Black;
            this.ClientSize = new System.Drawing.Size(340, 320);
            this.Controls.Add(this.coverPanel);
            this.Controls.Add(this.browser);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Name = "McduForm";
            this.Load += new System.EventHandler(this.McduForm_Load);
            this.ResumeLayout(false);

        }

        private System.Windows.Forms.WebBrowser browser;
        private TransparentPanel coverPanel;
    }
}