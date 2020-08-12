const express = require('express')
const Student = require('./students')
const fs = require('fs')

const router = express.Router()

router.get('/', (req, res) => {
    Student.find((err, students) => {
        if(err)
            return res.status(500).send('Server error...')
        /*console.log(students)*/
        res.render('index.html', {
            students
        })
    })
})

router.get('/students/new', (req, res) => {
    res.render('new.html')
})

router.post('/students/new', (req, res) => {
    new Student(req.body).save((err) => {
        if(err)
            return res.send('add error...')
        res.redirect('/')
    })
})

router.get('/students/edit', (req, res) => {
    const id = req.query.id.replace(/"/g, '')
    Student.findById(id, (err, targetStu) => {
        res.render('edit.html', {
            targetStu
        })
    })
})

router.post('/students/edit', (req, res) => {
    const id = req.body.id.replace(/"/g, '')
    console.log(id)
    Student.findByIdAndUpdate(id, req.body, (err) => {
        if(err)
            return res.send('add error...')
        res.redirect('/')
    })
})

router.get('/students/delete', (req, res) => {
    const id = req.query.id.replace(/"/g, '')
    Student.findByIdAndDelete(id, (err) => {
        if(err)
            res.status(500).send('delete error...')
        res.redirect('/')
    })
})

module.exports = router