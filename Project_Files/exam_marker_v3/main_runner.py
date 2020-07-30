from cmd import Cmd
from docx import Document
import importlib


class Cli(Cmd):

    def do_create(self, arg):
        """
        Create a Word file
        Syntax: create
                Enter a number from chosen_input: [eg:1 to 12]
                Enter .docx file name: [eg:please.docx]
        """
        from main_files import python_first, python_only, javascript_first, javascript_only

        chosen_input = {
            1: javascript_only(),
            2: javascript_first(),
            3: python_only(),
            4: python_first()
        }

        selected = int(input("Enter a number from chosen_input: "))
        if selected <= 4:
            output = chosen_input[selected]
            document = Document()
            document.add_paragraph(output)
            document.save(input("Enter .docx file name: "))

    def do_exit(self, line):
        """
        Stop the program
        syntax: exit
        """
        print('Thank you for visiting.')
        return True


if __name__ == '__main__':
    Cli().cmdloop()
