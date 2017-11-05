require 'write_xlsx'

file_name = "sampletext"

content = File.read("#{file_name}.rb")
array = content.scan(/"([^"]+)"/).flatten.compact

# Create a new Excel workbook
workbook = WriteXLSX.new('excel_files/testing.xlsx')

# Add a worksheet
worksheet = workbook.add_worksheet

#  Add and define a format
format = workbook.add_format
format.set_bold
format.set_color('red')
format.set_align('center')

worksheet.write(0, 0, "#{file_name}", format)

array.each_with_index { |val, index|
	worksheet.write(index, 1, "#{val}")
}

### sample code ###

# Write a formatted and unformatted string, row and column notation.
# col = row = 0
# worksheet.write(row, col, 'Hi Excel!', format)
# worksheet.write(1, col, 'Hi Excel!')

# # Write a number and a formula using A1 notation
# worksheet.write('A3', 1.2345 )
# worksheet.write('A4', '=SIN(PI()/4)')

### sample code ###

workbook.close
