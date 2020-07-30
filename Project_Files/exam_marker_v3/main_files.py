from questions.q1 import set_q1
from questions.q2 import set_q2
from questions.q3 import set_q3
from questions.q4 import set_q4
from questions.q5 import set_q5
from questions.q6 import set_q6
from questions.q7 import set_q7
from submit import submit
from docx import Document
from importlib import *


def get_marks(marks):
    result = f'\n({marks} mark'
    if marks > 1:
        result += 's'
    result += ')\n\n'
    return result


def python_first():
    exam = set_q1(Python.language, get_marks(1))
    exam += set_q2(Python.language, Python.whole, Python.part, Python.add_part, Python.part_data, get_marks(2))
    exam += set_q3(Python.language, Python.whole, Python.part, Python.get_part, Python.part_output,
                   get_marks(3))
    exam += set_q4(JavaScript.language, JavaScript.part, JavaScript.sub_part, JavaScript.add_sub_part, get_marks(4))
    exam += set_q5(JavaScript.language, JavaScript.whole, JavaScript.sub_part, JavaScript.add_sub_part, JavaScript.find_part,
                   JavaScript.sub_part_data, get_marks(5))
    exam += set_q6(JavaScript.language, JavaScript.part, JavaScript.boolean_method, JavaScript.boolean_condition,
                   get_marks(2))
    exam += set_q7(Python.language, Python.whole, Python.part, Python.sub_part, Python.get_sub_parts,
                   Python.boolean_condition3,
                   Python.sub_part_output, get_marks(8))
    return exam


def javascript_first():
    exam = set_q1(JavaScript.language, get_marks(1))
    exam += set_q2(JavaScript.language, JavaScript.whole, JavaScript.part, JavaScript.add_part, JavaScript.part_data, get_marks(2))
    exam += set_q3(JavaScript.language, JavaScript.whole, JavaScript.part, JavaScript.get_part, JavaScript.part_output,
                   get_marks(3))
    exam += set_q4(Python.language, Python.part, Python.sub_part, Python.add_sub_part, get_marks(4))
    exam += set_q5(Python.language, Python.whole, Python.sub_part, Python.add_sub_part, Python.find_part,
                   Python.sub_part_data, get_marks(5))
    exam += set_q6(Python.language, Python.part, Python.boolean_method, Python.boolean_condition, get_marks(2))
    exam += set_q7(JavaScript.language, JavaScript.whole, JavaScript.part, JavaScript.sub_part, JavaScript.get_sub_parts,
                   JavaScript.boolean_condition3,
                   JavaScript.sub_part_output, get_marks(8))
    exam += submit
    return exam


def python_only():
    exam = set_q1(Python.language, get_marks(1))
    exam += set_q2(Python.language, Python.whole, Python.part, Python.add_part, Python.part_data, get_marks(2))
    exam += set_q3(Python.language, Python.whole, Python.part, Python.get_part, Python.part_output,
                   get_marks(3))
    exam += set_q4(Python.language, Python.part, Python.sub_part, Python.add_sub_part, get_marks(4))
    exam += set_q5(Python.language, Python.whole, Python.sub_part, Python.add_sub_part, Python.find_part,
                   Python.sub_part_data, get_marks(5))
    exam += set_q6(Python.language, Python.part, Python.boolean_method, Python.boolean_condition,
                   get_marks(2))
    exam += set_q7(Python.language, Python.whole, Python.part, Python.sub_part, Python.get_sub_parts,
                   Python.boolean_condition3,
                   Python.sub_part_output, get_marks(8))
    exam += submit
    return exam


def javascript_only():
    exam = set_q1(JavaScript.language, get_marks(1))
    exam += set_q2(JavaScript.language, JavaScript.whole, JavaScript.part, JavaScript.add_part, JavaScript.part_data, get_marks(2))
    exam += set_q3(JavaScript.language, JavaScript.whole, JavaScript.part, JavaScript.get_part, JavaScript.part_output,
                   get_marks(3))
    exam += set_q4(JavaScript.language, JavaScript.part, JavaScript.sub_part, JavaScript.add_sub_part, get_marks(4))
    exam += set_q5(JavaScript.language, JavaScript.whole, JavaScript.sub_part, JavaScript.add_sub_part, JavaScript.find_part,
                   JavaScript.sub_part_data, get_marks(5))
    exam += set_q6(JavaScript.language, JavaScript.part, JavaScript.boolean_method, JavaScript.boolean_condition,
                   get_marks(2))
    exam += set_q7(JavaScript.language, JavaScript.whole, JavaScript.part, JavaScript.sub_part, JavaScript.get_sub_parts,
                   JavaScript.boolean_condition3,
                   JavaScript.sub_part_output, get_marks(8))
    exam += submit
    return exam


# def import_module(name):
#     imp_1 = import_module(input("Enter name of file to import e.g. exams.JSDog: "))

def create_docs(name):
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
        style = document.styles['Normal']
        font = style.font
        font.name = 'Arial'
        document.add_paragraph(output)
        document.save(input("Enter .docx file name: "))


if __name__ == '__main__':
    from exams import JSDog as JavaScript, PYSocialclub as Python
    # print(javascript_first())
    # print(python_first())
    # print(javascript_only())
    # print(python_only())
    create_docs('')


