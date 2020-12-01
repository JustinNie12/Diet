namespace BetterLifeDatabases
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            System.Windows.Forms.Label userIdLabel;
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            System.Windows.Forms.Label userNameLabel;
            System.Windows.Forms.Label weightLabel;
            System.Windows.Forms.Label heightLabel;
            System.Windows.Forms.Label dateOfBirthLabel;
            this.menuStrip1 = new System.Windows.Forms.MenuStrip();
            this.contextMenuStrip1 = new System.Windows.Forms.ContextMenuStrip(this.components);
            this.userIdTextBox = new System.Windows.Forms.TextBox();
            this.userInfoBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.database1DataSet = new BetterLifeDatabases.Database1DataSet();
            this.userNameTextBox = new System.Windows.Forms.TextBox();
            this.weightTextBox = new System.Windows.Forms.TextBox();
            this.heightTextBox = new System.Windows.Forms.TextBox();
            this.dateOfBirthDateTimePicker = new System.Windows.Forms.DateTimePicker();
            this.dataGridView1 = new System.Windows.Forms.DataGridView();
            this.database1DataSetBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.userInfoTableAdapter = new BetterLifeDatabases.Database1DataSetTableAdapters.UserInfoTableAdapter();
            this.tableAdapterManager = new BetterLifeDatabases.Database1DataSetTableAdapters.TableAdapterManager();
            userIdLabel = new System.Windows.Forms.Label();
            userNameLabel = new System.Windows.Forms.Label();
            weightLabel = new System.Windows.Forms.Label();
            heightLabel = new System.Windows.Forms.Label();
            dateOfBirthLabel = new System.Windows.Forms.Label();
            ((System.ComponentModel.ISupportInitialize)(this.userInfoBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.database1DataSet)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.database1DataSetBindingSource)).BeginInit();
            this.SuspendLayout();
            // 
            // userIdLabel
            // 
            resources.ApplyResources(userIdLabel, "userIdLabel");
            userIdLabel.Name = "userIdLabel";
            userIdLabel.UseWaitCursor = true;
            // 
            // userNameLabel
            // 
            resources.ApplyResources(userNameLabel, "userNameLabel");
            userNameLabel.Name = "userNameLabel";
            userNameLabel.UseWaitCursor = true;
            // 
            // weightLabel
            // 
            resources.ApplyResources(weightLabel, "weightLabel");
            weightLabel.Name = "weightLabel";
            weightLabel.UseWaitCursor = true;
            // 
            // heightLabel
            // 
            resources.ApplyResources(heightLabel, "heightLabel");
            heightLabel.Name = "heightLabel";
            heightLabel.UseWaitCursor = true;
            // 
            // dateOfBirthLabel
            // 
            resources.ApplyResources(dateOfBirthLabel, "dateOfBirthLabel");
            dateOfBirthLabel.Name = "dateOfBirthLabel";
            dateOfBirthLabel.UseWaitCursor = true;
            // 
            // menuStrip1
            // 
            resources.ApplyResources(this.menuStrip1, "menuStrip1");
            this.menuStrip1.Name = "menuStrip1";
            this.menuStrip1.UseWaitCursor = true;
            // 
            // contextMenuStrip1
            // 
            resources.ApplyResources(this.contextMenuStrip1, "contextMenuStrip1");
            this.contextMenuStrip1.Name = "contextMenuStrip1";
            // 
            // userIdTextBox
            // 
            resources.ApplyResources(this.userIdTextBox, "userIdTextBox");
            this.userIdTextBox.DataBindings.Add(new System.Windows.Forms.Binding("Text", this.userInfoBindingSource, "UserId", true));
            this.userIdTextBox.Name = "userIdTextBox";
            this.userIdTextBox.UseWaitCursor = true;
            this.userIdTextBox.TextChanged += new System.EventHandler(this.userIdTextBox_TextChanged);
            // 
            // userInfoBindingSource
            // 
            this.userInfoBindingSource.DataMember = "UserInfo";
            this.userInfoBindingSource.DataSource = this.database1DataSet;
            // 
            // database1DataSet
            // 
            this.database1DataSet.DataSetName = "Database1DataSet";
            this.database1DataSet.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // userNameTextBox
            // 
            resources.ApplyResources(this.userNameTextBox, "userNameTextBox");
            this.userNameTextBox.DataBindings.Add(new System.Windows.Forms.Binding("Text", this.userInfoBindingSource, "UserName", true));
            this.userNameTextBox.Name = "userNameTextBox";
            this.userNameTextBox.UseWaitCursor = true;
            // 
            // weightTextBox
            // 
            resources.ApplyResources(this.weightTextBox, "weightTextBox");
            this.weightTextBox.DataBindings.Add(new System.Windows.Forms.Binding("Text", this.userInfoBindingSource, "Weight", true));
            this.weightTextBox.Name = "weightTextBox";
            this.weightTextBox.UseWaitCursor = true;
            // 
            // heightTextBox
            // 
            resources.ApplyResources(this.heightTextBox, "heightTextBox");
            this.heightTextBox.DataBindings.Add(new System.Windows.Forms.Binding("Text", this.userInfoBindingSource, "Height", true));
            this.heightTextBox.Name = "heightTextBox";
            this.heightTextBox.UseWaitCursor = true;
            // 
            // dateOfBirthDateTimePicker
            // 
            resources.ApplyResources(this.dateOfBirthDateTimePicker, "dateOfBirthDateTimePicker");
            this.dateOfBirthDateTimePicker.DataBindings.Add(new System.Windows.Forms.Binding("Value", this.userInfoBindingSource, "DateOfBirth", true));
            this.dateOfBirthDateTimePicker.Name = "dateOfBirthDateTimePicker";
            this.dateOfBirthDateTimePicker.UseWaitCursor = true;
            // 
            // dataGridView1
            // 
            resources.ApplyResources(this.dataGridView1, "dataGridView1");
            this.dataGridView1.AutoGenerateColumns = false;
            this.dataGridView1.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataGridView1.DataSource = this.database1DataSet;
            this.dataGridView1.Name = "dataGridView1";
            this.dataGridView1.UseWaitCursor = true;
            this.dataGridView1.CellContentClick += new System.Windows.Forms.DataGridViewCellEventHandler(this.dataGridView1_CellContentClick);
            // 
            // database1DataSetBindingSource
            // 
            this.database1DataSetBindingSource.DataSource = this.database1DataSet;
            this.database1DataSetBindingSource.Position = 0;
            // 
            // userInfoTableAdapter
            // 
            this.userInfoTableAdapter.ClearBeforeFill = true;
            // 
            // tableAdapterManager
            // 
            this.tableAdapterManager.BackupDataSetBeforeUpdate = false;
            this.tableAdapterManager.CardioTableAdapter = null;
            this.tableAdapterManager.StrengthTableAdapter = null;
            this.tableAdapterManager.TypeOfWorkTableAdapter = null;
            this.tableAdapterManager.UpdateOrder = BetterLifeDatabases.Database1DataSetTableAdapters.TableAdapterManager.UpdateOrderOption.InsertUpdateDelete;
            this.tableAdapterManager.UserInfoTableAdapter = this.userInfoTableAdapter;
            // 
            // Form1
            // 
            resources.ApplyResources(this, "$this");
            this.AllowDrop = true;
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.ControlDarkDark;
            this.Controls.Add(dateOfBirthLabel);
            this.Controls.Add(this.dateOfBirthDateTimePicker);
            this.Controls.Add(heightLabel);
            this.Controls.Add(this.heightTextBox);
            this.Controls.Add(weightLabel);
            this.Controls.Add(this.weightTextBox);
            this.Controls.Add(userNameLabel);
            this.Controls.Add(this.userNameTextBox);
            this.Controls.Add(userIdLabel);
            this.Controls.Add(this.userIdTextBox);
            this.Controls.Add(this.dataGridView1);
            this.Controls.Add(this.menuStrip1);
            this.Cursor = System.Windows.Forms.Cursors.WaitCursor;
            this.IsMdiContainer = true;
            this.KeyPreview = true;
            this.MainMenuStrip = this.menuStrip1;
            this.Name = "Form1";
            this.UseWaitCursor = true;
            this.Load += new System.EventHandler(this.Form1_Load);
            ((System.ComponentModel.ISupportInitialize)(this.userInfoBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.database1DataSet)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.database1DataSetBindingSource)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.MenuStrip menuStrip1;
        private System.Windows.Forms.ContextMenuStrip contextMenuStrip1;
        private System.Windows.Forms.DataGridView dataGridView1;
        private System.Windows.Forms.BindingSource database1DataSetBindingSource;
        private Database1DataSet database1DataSet;
        private System.Windows.Forms.BindingSource userInfoBindingSource;
        private Database1DataSetTableAdapters.UserInfoTableAdapter userInfoTableAdapter;
        private Database1DataSetTableAdapters.TableAdapterManager tableAdapterManager;
        private System.Windows.Forms.TextBox userIdTextBox;
        private System.Windows.Forms.TextBox userNameTextBox;
        private System.Windows.Forms.TextBox weightTextBox;
        private System.Windows.Forms.TextBox heightTextBox;
        private System.Windows.Forms.DateTimePicker dateOfBirthDateTimePicker;
    }
}

