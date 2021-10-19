namespace nvan.FFA320McduExtractor
{
    partial class MainForm
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(MainForm));
            this.showMcdu1Button = new System.Windows.Forms.Button();
            this.showMcdu2Button = new System.Windows.Forms.Button();
            this.mcdu1Check = new System.Windows.Forms.CheckBox();
            this.mcdu2Check = new System.Windows.Forms.CheckBox();
            this.labelSize = new System.Windows.Forms.Label();
            this.labelX = new System.Windows.Forms.Label();
            this.widthText = new System.Windows.Forms.TextBox();
            this.heightText = new System.Windows.Forms.TextBox();
            this.xplaneIp = new System.Windows.Forms.TextBox();
            this.xplaneIpLabel = new System.Windows.Forms.Label();
            this.nvanLinkLabel = new System.Windows.Forms.LinkLabel();
            this.SuspendLayout();
            // 
            // showMcdu1Button
            // 
            this.showMcdu1Button.Location = new System.Drawing.Point(12, 12);
            this.showMcdu1Button.Name = "showMcdu1Button";
            this.showMcdu1Button.Size = new System.Drawing.Size(116, 23);
            this.showMcdu1Button.TabIndex = 0;
            this.showMcdu1Button.Text = "Show MCDU1";
            this.showMcdu1Button.UseVisualStyleBackColor = true;
            this.showMcdu1Button.Click += new System.EventHandler(this.showMcdu1Button_Click);
            // 
            // showMcdu2Button
            // 
            this.showMcdu2Button.Location = new System.Drawing.Point(136, 12);
            this.showMcdu2Button.Name = "showMcdu2Button";
            this.showMcdu2Button.Size = new System.Drawing.Size(116, 23);
            this.showMcdu2Button.TabIndex = 1;
            this.showMcdu2Button.Text = "Show MCDU2";
            this.showMcdu2Button.UseVisualStyleBackColor = true;
            this.showMcdu2Button.Click += new System.EventHandler(this.showMcdu2Button_Click);
            // 
            // mcdu1Check
            // 
            this.mcdu1Check.AutoSize = true;
            this.mcdu1Check.Location = new System.Drawing.Point(12, 41);
            this.mcdu1Check.Name = "mcdu1Check";
            this.mcdu1Check.Size = new System.Drawing.Size(105, 17);
            this.mcdu1Check.TabIndex = 2;
            this.mcdu1Check.Text = "Show on Startup";
            this.mcdu1Check.UseVisualStyleBackColor = true;
            // 
            // mcdu2Check
            // 
            this.mcdu2Check.AutoSize = true;
            this.mcdu2Check.Location = new System.Drawing.Point(136, 41);
            this.mcdu2Check.Name = "mcdu2Check";
            this.mcdu2Check.Size = new System.Drawing.Size(105, 17);
            this.mcdu2Check.TabIndex = 3;
            this.mcdu2Check.Text = "Show on Startup";
            this.mcdu2Check.UseVisualStyleBackColor = true;
            // 
            // labelSize
            // 
            this.labelSize.AutoSize = true;
            this.labelSize.Location = new System.Drawing.Point(24, 71);
            this.labelSize.Name = "labelSize";
            this.labelSize.Size = new System.Drawing.Size(72, 13);
            this.labelSize.TabIndex = 4;
            this.labelSize.Text = "Window Size:";
            // 
            // labelX
            // 
            this.labelX.AutoSize = true;
            this.labelX.Location = new System.Drawing.Point(166, 71);
            this.labelX.Name = "labelX";
            this.labelX.Size = new System.Drawing.Size(12, 13);
            this.labelX.TabIndex = 5;
            this.labelX.Text = "x";
            // 
            // widthText
            // 
            this.widthText.Location = new System.Drawing.Point(102, 68);
            this.widthText.Name = "widthText";
            this.widthText.Size = new System.Drawing.Size(57, 20);
            this.widthText.TabIndex = 6;
            // 
            // heightText
            // 
            this.heightText.Location = new System.Drawing.Point(183, 68);
            this.heightText.Name = "heightText";
            this.heightText.Size = new System.Drawing.Size(57, 20);
            this.heightText.TabIndex = 7;
            // 
            // xplaneIp
            // 
            this.xplaneIp.Location = new System.Drawing.Point(84, 94);
            this.xplaneIp.Name = "xplaneIp";
            this.xplaneIp.Size = new System.Drawing.Size(168, 20);
            this.xplaneIp.TabIndex = 8;
            // 
            // xplaneIpLabel
            // 
            this.xplaneIpLabel.AutoSize = true;
            this.xplaneIpLabel.Location = new System.Drawing.Point(12, 97);
            this.xplaneIpLabel.Name = "xplaneIpLabel";
            this.xplaneIpLabel.Size = new System.Drawing.Size(66, 13);
            this.xplaneIpLabel.TabIndex = 9;
            this.xplaneIpLabel.Text = "Simulator IP:";
            // 
            // nvanLinkLabel
            // 
            this.nvanLinkLabel.AutoSize = true;
            this.nvanLinkLabel.Location = new System.Drawing.Point(94, 121);
            this.nvanLinkLabel.Name = "nvanLinkLabel";
            this.nvanLinkLabel.Size = new System.Drawing.Size(72, 13);
            this.nvanLinkLabel.TabIndex = 10;
            this.nvanLinkLabel.TabStop = true;
            this.nvanLinkLabel.Text = "www.nvan.es";
            this.nvanLinkLabel.LinkClicked += new System.Windows.Forms.LinkLabelLinkClickedEventHandler(this.nvanLinkLabel_LinkClicked);
            // 
            // MainForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(264, 142);
            this.Controls.Add(this.nvanLinkLabel);
            this.Controls.Add(this.xplaneIpLabel);
            this.Controls.Add(this.xplaneIp);
            this.Controls.Add(this.heightText);
            this.Controls.Add(this.widthText);
            this.Controls.Add(this.labelX);
            this.Controls.Add(this.labelSize);
            this.Controls.Add(this.mcdu2Check);
            this.Controls.Add(this.mcdu1Check);
            this.Controls.Add(this.showMcdu2Button);
            this.Controls.Add(this.showMcdu1Button);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedToolWindow;
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Name = "MainForm";
            this.Text = "NVAN Flight Factor A320 MCDU Extractor";
            this.Load += new System.EventHandler(this.MainForm_Load);
            this.Shown += new System.EventHandler(this.MainForm_Shown);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        private System.Windows.Forms.Button showMcdu1Button;
        private System.Windows.Forms.Button showMcdu2Button;
        private System.Windows.Forms.CheckBox mcdu1Check;
        private System.Windows.Forms.CheckBox mcdu2Check;
        private System.Windows.Forms.Label labelSize;
        private System.Windows.Forms.Label labelX;
        private System.Windows.Forms.TextBox widthText;
        private System.Windows.Forms.TextBox heightText;
        private System.Windows.Forms.TextBox xplaneIp;
        private System.Windows.Forms.Label xplaneIpLabel;
        private System.Windows.Forms.LinkLabel nvanLinkLabel;
    }
}

