   M S B A M L   `   `   `  ����I  EAppointmentApp, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null/clr-namespace:AppointmentAppAppointmentApp  5   	       AppointmentApp.MainWindow   5   	   W SPresentationCore, Version=7.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=7.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=7.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=7.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=7.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   .localclr-namespace:AppointmentApp     5   	     � Title$  Appointment App��5   	   $	��500��6!   $	��500��6.   .��5
      �  � RowDefinitions 5   
   �� 5      $
��Auto �6   �� 5      $��* �6   .+�5   
   �� $��New Appointment��6   $��10q�6*   �� 5   
   $��1��6   $��10q�6$   .��5      ��  �� Orientation$ Vertical=�6   .+�5      �� $ 
Horizontal=�6   .+�5      �� $��Name:��6   $��80��6,   �� 5      -   5         ��Name$ nameTextBox��5      $	��200��63   5      �� 5      $ 
Horizontal=�6   .+�5      �� $��Date:��6   $��80��6,   (  "System.Windows.Controls.DatePicker  5      -   5          Name$ 
datePicker��5   !   $	��200��65   5      �� 5      $ 
Horizontal=�6   .+�5      �� $
��Time��6   $��80��6+   �� 5      -   5        $ dateD��5      $	��200��6-   5      �� 5      $ 
Horizontal=�6   .+�5       �� $��
Er Number:��6   $��80��61   �� 5!      -   5        $ employerNumberTextBox��5!      $	��200��6=   5"      �� 5#      $ 
Horizontal=�6   .+�5$      �� -   5         ��Name$ 
SaveButton��5$      $
��Save��61   $	��100��6@   $��0 10 0 0q�6L   6^   �� 5%      -   5        $ DeleteButton��5%      $��	Supprimer��63   $	��100��6G   $��
10 10 10 0q�6S   6g   �� 5&      -   5        $ CancelButton��5&      $��Cancel��63   $	��100��6D   $��	10 10 0 0q�6P   6c   �� 5'      -   5        $ SearchButton��5'      $��
Rechercher��63   $	��100��6H   $��	10 10 0 0q�6T   6g   5(      &   System.Windows.Controls.DataGrid  5)      -	   5          Name$ AppointmentDataGrid��5)         AutoGenerateColumns$ False��68      Columns 5*      0  *System.Windows.Controls.DataGridTextColumn  5+      ,  &System.Windows.Controls.DataGridColumn	   Header$	 ID��6-   1  +System.Windows.Controls.DataGridBoundColumn
   Binding
 6;   �� *ID+  5,      $
	 Name��6-   
 6=   �� *Name+  5-      $	 EmployerNumber ��6-   
 6G   �� *Num_employer+  5.      $
	 Date��6-   
 6;   �� *Date+ �� StringFormat$ 
dd/MM/yyyy��  5/      $
	 Time��6-   
 6=   �� *Time+51      52      53      54      55      