   M S B A M L   `   `   `  ����  AppointmentApp!    AppointmentApp.searchWindow   5   	   W SPresentationCore, Version=7.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=7.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=7.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=7.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=7.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	     � Title$  Search Appointments��5   	   $	��300��6%   $	��500��62   .��5      �  � RowDefinitions 5   
   �� 5      $
��Auto �6   �� 5      $��* �6   .+�5
   
   �� $��Search Appointments��6   $��10q�6.   �� 5   
   $��1��6   $��10q�6"   .+�5      ��  �� Orientation$ 
Horizontal=�6   .+�5      �� $��Employer Number:��6   $	��100��63   �� 5      -   5         ��Name$ EmployerNumberTextBox��5      $	��200��69   5      �� 5      $ 
Horizontal=�6   .+�5      �� -   5         ��Name$ SearchButton��5      $��Search��6/   $	��100��6@   $��0 10 0 0q�6L   6^   �� 5      -   5        $ CancelButton��5      $��Cancel��6/   $	��100��6@   $��	10 10 0 0q�6L   6_   5      &   System.Windows.Controls.DataGrid  5      -   5          Name$ AppointmentDataGrid��5         AutoGenerateColumns$ False��64      Columns 5      0  *System.Windows.Controls.DataGridTextColumn  5      ,  &System.Windows.Controls.DataGridColumn   Header$ ID��6)   1  +System.Windows.Controls.DataGridBoundColumn	   Binding	 65   �� *ID+  5      $
 Name��6)   	 67   �� *Name+  5      $
 Date��6)   	 67   �� *Date+
 �� StringFormat$
 
dd/MM/yyyy��  5      $
 Time��6)   	 67   �� *Time+5      5      5      5      