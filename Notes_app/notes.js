"use strict";

const fs = require('fs');
const chalk = require('chalk')


const getNotes = function () {
    return 'Your notes...'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNote = notes.find(it => it.title === title);

    debugger

    if (!duplicateNote) {
        notes.push({ title, body });
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }

    debugger

}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const removeNote = async function (title) {
    const notes = await loadNotes();
    const filteredNotes = notes.filter(it => it.title === title);
    if (filteredNotes.length === notes.length) {
        console.log('no find to remove note');
    } else {
        saveNotes(filteredNotes);
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse('Your notes'));
    notes.forEach(it => console.log(it))
}

const readNote = (title) => {
    const notes = loadNotes();
    const selectedNote = notes.find(it => it.title === title);

    if (selectedNote) {
        console.log(selectedNote.body);
    } else {
        console.log('no such notes')
    }
}

module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNote,
}