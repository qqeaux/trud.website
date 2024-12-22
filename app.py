from flask import Flask, render_template, request, redirect, url_for
from docx import Document
import os

app = Flask(__name__)

# Путь к файлу .docx
DOCX_FILE_PATH = os.path.join('static', 'trud.docx')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/codex')
def codex():
    return render_template('codex.html')

@app.route('/read_codex')
def read_codex():
    document = Document(DOCX_FILE_PATH)
    paragraphs = []
    for paragraph in document.paragraphs:
        paragraphs.append(paragraph.text)
    return render_template('read_codex.html', paragraphs=paragraphs)

@app.route('/save_notes', methods=['POST'])
def save_notes():
    notes = request.form.to_dict()
    with open('notes.txt', 'w') as file:
        for key, value in notes.items():
            file.write(f'{key}: {value}\n')
    return redirect(url_for('read_codex'))

if __name__ == '__main__':
    app.run(debug=True)
ы